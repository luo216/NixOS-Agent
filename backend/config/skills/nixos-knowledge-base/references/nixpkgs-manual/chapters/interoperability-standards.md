---
title: "Interoperability Standards"
source: index.html
---

# Interoperability Standards

Table of Contents CycloneDX

### CycloneDX

Table of Contents nix Namespace Property Taxonomy OWASP CycloneDX is a Software Bill of Materials (SBOM) standard. The standards described here are for including Nix specific information within SBOMs in a way that is interoperable with external SBOM tooling.

### nix Namespace Property Taxonomy

nix:narinfo nix:fod The following tables describe namespaces for properties that can be attached to components within SBOMs. Component properties are lists of name-value-pairs where the values must be strings. Properties with the same name may appear more than once. Names and values are case-sensitive. PropertyDescription nix:store_pathA Nix store path for the given component. This property should be contextualized by additional properties that describe the production of the store path, such as those from the nix:narinfo: and nix:fod namespaces. NamespaceDescription nix:narinfoNamespace for properties that are specific to how a component is stored as a Nix archive (NAR) in a binary cache. nix:fodNamespace for properties that describe a fixed-output derivation.

#### nix:narinfo

Narinfo properties describe component archives that may be available from binary caches. The nix:narinfo properties should be accompanied by a nix:store_path property within the same property list. PropertyDescription nix:narinfo:store_pathStore path for the given store component. nix:narinfo:urlURL path component. nix:narinfo:nar_hashHash of the file system object part of the component when serialized as a Nix Archive. nix:narinfo:nar_sizeSize of the component when serialized as a Nix Archive. nix:narinfo:compressionThe compression format that component archive is in. nix:narinfo:file_hashA digest for the compressed component archive itself, as opposed to the data contained within. nix:narinfo:file_sizeThe size of the compressed component archive itself. nix:narinfo:deriverThe path to the derivation from which this component is produced. nix:narinfo:systemThe hardware and software platform on which this component is produced. nix:narinfo:sigSignatures claiming that this component is what it claims to be. nix:narinfo:caContent address of this store object’s file system object, used to compute its store path. nix:narinfo:referencesA whitespace separated array of store paths that this component references.

#### nix:fod

FOD properties describe a fixed-output derivation. The nix:fod:method property is required and must be accompanied by a nix:store_path property within the same property list. All other properties in this namespace are method-specific. To reproduce the build of a component the nix:fod:method value is resolved to an appropriate function within Nixpkgs whose arguments intersect with the given properties. When generating nix:fod properties the method selected should be a stable function with a minimal number of arguments. For example, the fetchFromGitHub is commonly used within Nixpkgs but should be reduced to a call to the function by which it is implemented, fetchzip. PropertyDescription nix:fod:methodNixpkgs function that produces this FOD. Required. Examples: "fetchzip", "fetchgit" nix:fod:nameDerivation name, present when method is "fetchzip" nix:fod:refGit ref, present when method is "fetchgit" nix:fod:revGit rev, present when method is "fetchgit" nix:fod:sha256FOD hash nix:fod:urlURL to fetch nix:fod properties may be extracted and evaluated to a derivation using code similar to the following, assuming a fictitious function filterPropertiesToAttrs: { pkgs, filterPropertiesToAttrs, properties, }: let fodProps = filterPropertiesToAttrs "nix:fod:" properties; methods = { fetchzip = { name, url, sha256, ... }: pkgs.fetchzip { inherit name url sha256; }; }; in methods.${fodProps.method} fodProps Next Appendix A. Release Notes
