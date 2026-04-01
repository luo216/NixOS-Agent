---
title: "Store Derivation and Deriving Path - Nix 2.28.6 Reference Manual"
source: store/derivation/index.html
---

# Store Derivation and Deriving Path - Nix 2.28.6 Reference Manual

Auto Light Rust Coal Navy Ayu

## Store Derivation and Deriving Path

Besides functioning as a content-addressed store, the Nix store layer works as a build system. Other systems (like Git or IPFS) also store and transfer immutable data, but they don't concern themselves with how that data was created. This is where Nix distinguishes itself. Derivations represent individual build steps, and deriving paths are needed to refer to the outputs of those build steps before they are built.

### Store Derivation

A derivation is a specification for running an executable on precisely defined input to produce on more store objects. These store objects are known as the derivation's outputs. Derivations are built, in which case the process is spawned according to the spec, and when it exits, required to leave behind files which will (after post-processing) become the outputs of the derivation. This process is described in detail in Building. A derivation consists of: A name An inputs specification, a set of deriving paths An outputs specification, specifying which outputs should be produced, and various metadata about them. The "system" type (e.g. x86_64-linux) where the executable is to run. The process creation fields: to spawn the arbitrary process which will perform the build step.

#### Referencing derivations

Derivations are always referred to by the store path of the store object they are encoded to. See the encoding section for more details on how this encoding works, and thus what exactly what store path we would end up with for a given derivation. The store path of the store object which encodes a derivation is often called a derivation path for brevity.

### Deriving path

Deriving paths are a way to refer to store objects that may or may not yet be realised. There are two forms: constant: just a store path. It can be made valid by copying it into the store: from the evaluator, command line interface or another store. output: a pair of a store path to a store derivation and an output name. In pseudo code: type OutputName = String; type ConstantPath = { path: StorePath; }; type OutputPath = { drvPath: StorePath; output: OutputName; }; type DerivingPath = ConstantPath | OutputPath; Deriving paths are necessary because, in general and particularly for content-addressing derivations, the store path of an output is not known in advance. We can use an output deriving path to refer to such an output, instead of the store path which we do not yet know.

### Parts of a derivation

A derivation is constructed from the parts documented in the following subsections.

#### Inputs

The inputs are a set of deriving paths, referring to all store objects needed in order to perform this build step. The process creation fields will presumably include many store paths: The path to the executable normally starts with a store path The arguments and environment variables likely contain many other store paths. But rather than somehow scanning all the other fields for inputs, Nix requires that all inputs be explicitly collected in the inputs field. It is instead the responsibility of the creator of a derivation (e.g. the evaluator) to ensure that every store object referenced in another field (e.g. referenced by store path) is included in this inputs field.

#### System

The system type on which the builder executable is meant to be run. A necessary condition for Nix to schedule a given derivation on some Nix instance is for the "system" of that derivation to match that instance's system configuration option or extra-platforms configuration option. By putting the system in each derivation, Nix allows heterogenous build plans, where not all steps can be run on the same machine or same sort of machine. Nix can schedule builds such that it automatically builds on other platforms by forwarding build requests to other Nix instances.

#### Process creation fields

These are the three fields which describe how to spawn the process which (along with any of its own child processes) will perform the build. You may note that this has everything needed for an execve system call.

##### Builder

This is the path to an executable that will perform the build and produce the outputs.

##### Arguments

Command-line arguments to be passed to the builder executable. Note that these are the arguments after the first argument. The first argument passed to the builder will be the value of builder, as per the usual convention on Unix. See Wikipedia for details.

##### Environment Variables

Environment variables which will be passed to the builder executable.

#### Placeholders

Placeholders are opaque values used within the process creation fields to [store objects] for which we don't yet know store paths. They are strings in the form /<hash> that are embedded anywhere within the strings of those fields, and we are considering to add store-path-like placeholders. Note Output Deriving Path exist to solve the same problem as placeholders --- that is, referring to store objects for which we don't yet know a store path. They also have a string syntax with ^, described in the encoding section. We could use that syntax instead of /<hash> for placeholders, but its human-legibility would cause problems. There are two types of placeholder, corresponding to the two cases where this problem arises: Output placeholder: This is a placeholder for a derivation's own output. Input placeholder: This is a placeholder to a derivation's non-constant input, i.e. an input that is an [output derived path]. Explanation In general, we need to realise a store object in order to be sure to have a store object for it. But for these two cases this is either impossible or impractical: In the output case this is impossible: We cannot build the output until we have a correct derivation, and we cannot have a correct derivation (without using placeholders) until we have the output path. In the input case this is impractical: If we always build a dependency first, and then refer to its output by store path, we would lose the ability for a derivation graph to describe an entire build plan consisting of multiple build steps.

#### Derivation

There are two formats, documented separately: The legacy "ATerm" format The experimental, currently under development and changing JSON format Every derivation has a canonical choice of encoding used to serialize it to a store object. This ensures that there is a canonical store path used to refer to the derivation, as described in Referencing derivations. Note Currently, the canonical encoding for every derivation is the "ATerm" format, but this is subject to change for the types of derivations which are not yet stable. Regardless of the format used, when serializing a derivation to a store object, that store object will be content-addressed. In the common case, the inputs to store objects are either: constant deriving paths for content-addressed source objects, which are "initial inputs" rather than the outputs of some other derivation the outputs of other derivations If those other derivations also abide by this common case (and likewise for transitive inputs), then the entire closure of the serialized derivation will be content-addressed.

#### Deriving Path

constant Constant deriving paths are encoded simply as the underlying store path is. Thus, we see that every encoded store path is also a valid encoded (constant) deriving path. output Output deriving paths are encoded by encoding of a store path referring to a derivation a ^ separator (or ! in some legacy contexts) the name of an output of the previously referred derivation Example /nix/store/lxrn8v5aamkikg6agxwdqd1jz7746wz4-firefox-98.0.2.drv^out This parses like so: /nix/store/lxrn8v5aamkikg6agxwdqd1jz7746wz4-firefox-98.0.2.drv^out |------------------------------------------------------------| |-| store path (usual encoding) output name |--| note the ".drv"

### Extending the model to be higher-order

Experimental feature: dynamic-derivations So far, we have used store paths to refer to derivations. That works because we've implicitly assumed that all derivations are created statically --- created by some mechanism out of band, and then manually inserted into the store. But what if derivations could also be created dynamically within Nix? In other words, what if derivations could be the outputs of other derivations? Note In the parlance of "Build Systems à la carte", we are generalizing the Nix store layer to be a "Monadic" instead of "Applicative" build system. How should we refer to such derivations? A deriving path works, the same as how we refer to other derivation outputs. But what about a dynamic derivations output? (i.e. how do we refer to the output of a derivation, which is itself an output of a derivation?) For that we need to generalize the definition of deriving path, replacing the store path used to refer to the derivation with a nested deriving path: type OutputPath = { - drvPath: StorePath; + drvPath: DerivingPath; output: OutputName; }; Now, the drvPath field of OutputPath is itself a DerivingPath instead of a StorePath. With that change, here is updated definition: type OutputName = String; type ConstantPath = { path: StorePath; }; type OutputPath = { drvPath: DerivingPath; output: OutputName; }; type DerivingPath = ConstantPath | OutputPath; Under this extended model, DerivingPaths are thus inductively built up from a root ConstantPath, wrapped with zero or more outer OutputPaths.

#### Encoding

The encoding is adjusted in the natural way, encoding the drv field recursively using the same deriving path encoding. The result of this is that it is possible to have a chain of ^<output-name> at the end of the final string, as opposed to just a single one. Example /nix/store/lxrn8v5aamkikg6agxwdqd1jz7746wz4-firefox-98.0.2.drv^foo.drv^bar.drv^out |----------------------------------------------------------------------------| |-| inner deriving path (usual encoding) output name |--------------------------------------------------------------------| |-----| even more inner deriving path (usual encoding) output name |------------------------------------------------------------| |-----| innermost constant store path (usual encoding) output name
