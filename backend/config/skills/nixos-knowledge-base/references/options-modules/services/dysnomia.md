---
module: services.dysnomia
option_count: 10
source: options.html
---

# services.dysnomia

## services.dysnomia.enable

Whether to enable Dysnomia Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/misc/dysnomia.nix>

## services.dysnomia.enableAuthentication

Whether to publish privacy-sensitive authentication credentials Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/misc/dysnomia.nix>

## services.dysnomia.enableLegacyModules

Whether to enable Dysnomia legacy process and wrapper modules Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/misc/dysnomia.nix>

## services.dysnomia.package

The Dysnomia package Type: absolute path Declared by: <nixpkgs/nixos/modules/services/misc/dysnomia.nix>

## services.dysnomia.components

An attribute set in which each key represents a container and each value an attribute set in which each key represents a component and each value a derivation constructing its initial state Type: attribute set of (attribute set) Default: { } Declared by: <nixpkgs/nixos/modules/services/misc/dysnomia.nix>

## services.dysnomia.containers

An attribute set in which each key represents a container and each value an attribute set providing its configuration properties Type: attribute set of (attribute set) Default: { } Declared by: <nixpkgs/nixos/modules/services/misc/dysnomia.nix>

## services.dysnomia.extraContainerPaths

A list of paths containing additional container configurations that are added to the search folders Type: list of absolute path Default: [ ] Declared by: <nixpkgs/nixos/modules/services/misc/dysnomia.nix>

## services.dysnomia.extraContainerProperties

An attribute set providing additional container settings in addition to the default properties Type: attribute set Default: { } Declared by: <nixpkgs/nixos/modules/services/misc/dysnomia.nix>

## services.dysnomia.extraModulePaths

A list of paths containing additional modules that are added to the search folders Type: list of absolute path Default: [ ] Declared by: <nixpkgs/nixos/modules/services/misc/dysnomia.nix>

## services.dysnomia.properties

An attribute set in which each attribute represents a machine property. Optionally, these values can be shell substitutions. Type: attribute set Default: { } Declared by: <nixpkgs/nixos/modules/services/misc/dysnomia.nix>
