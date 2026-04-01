---
module: services.firewalld.services.<name>
option_count: 9
source: options.html
---

# services.firewalld.services.<name>

## services.firewalld.services.<name>.description

Description for the service. Type: null or non-empty string Default: null Declared by: <nixpkgs/nixos/modules/services/networking/firewalld/service.nix>

## services.firewalld.services.<name>.destination

Destinations for the service. Type: submodule Default: { } Declared by: <nixpkgs/nixos/modules/services/networking/firewalld/service.nix>

## services.firewalld.services.<name>.helpers

Helpers for the service. Type: list of non-empty string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/networking/firewalld/service.nix>

## services.firewalld.services.<name>.includes

Services to include for the service. Type: list of non-empty string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/networking/firewalld/service.nix>

## services.firewalld.services.<name>.ports

Ports of the service. Type: list of (submodule) Default: [ ] Declared by: <nixpkgs/nixos/modules/services/networking/firewalld/service.nix>

## services.firewalld.services.<name>.protocols

Protocols for the service. Type: list of non-empty string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/networking/firewalld/service.nix>

## services.firewalld.services.<name>.short

Short description for the service. Type: null or non-empty string Default: null Declared by: <nixpkgs/nixos/modules/services/networking/firewalld/service.nix>

## services.firewalld.services.<name>.sourcePorts

Source ports for the service. Type: list of (submodule) Default: [ ] Declared by: <nixpkgs/nixos/modules/services/networking/firewalld/service.nix>

## services.firewalld.services.<name>.version

Version of the service. Type: null or non-empty string Default: null Declared by: <nixpkgs/nixos/modules/services/networking/firewalld/service.nix>
