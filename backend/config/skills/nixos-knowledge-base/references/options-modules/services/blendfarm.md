---
module: services.blendfarm
option_count: 8
source: options.html
---

# services.blendfarm

## services.blendfarm.enable

Whether to enable Blendfarm, a render farm management software for Blender. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/misc/blenderfarm.nix>

## services.blendfarm.package

The blendfarm package to use. Type: package Default: pkgs.blendfarm Declared by: <nixpkgs/nixos/modules/services/misc/blenderfarm.nix>

## services.blendfarm.basicSecurityPasswordFile

Path to the password file the client needs to connect to the server. The password must not contain a forward slash. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/misc/blenderfarm.nix>

## services.blendfarm.blenderPackage

The blender package to use. Type: package Default: pkgs.blender Declared by: <nixpkgs/nixos/modules/services/misc/blenderfarm.nix>

## services.blendfarm.group

Group under which blendfarm runs. Type: string Default: "blendfarm" Declared by: <nixpkgs/nixos/modules/services/misc/blenderfarm.nix>

## services.blendfarm.openFirewall

Whether to enable allowing blendfarm network access through the firewall. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/misc/blenderfarm.nix>

## services.blendfarm.serverConfig

Server configuration Type: open submodule of attribute set of anything Default: { BasicSecurityPassword = null; BroadcastPort = 16342; BypassScriptUpdate = false; Port = 15000; } Declared by: <nixpkgs/nixos/modules/services/misc/blenderfarm.nix>

## services.blendfarm.user

User under which blendfarm runs. Type: string Default: "blendfarm" Declared by: <nixpkgs/nixos/modules/services/misc/blenderfarm.nix>
