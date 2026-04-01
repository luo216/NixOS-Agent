---
module: services.tee-supplicant
option_count: 5
source: options.html
---

# services.tee-supplicant

## services.tee-supplicant.enable

Whether to enable OP-TEE userspace supplicant. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/misc/tee-supplicant>

## services.tee-supplicant.package

The optee-client package to use. Type: package Default: pkgs.optee-client Declared by: <nixpkgs/nixos/modules/services/misc/tee-supplicant>

## services.tee-supplicant.pluginPath

The directory where plugins will be loaded from on startup. Type: absolute path Default: "/run/current-system/sw/lib/tee-supplicant/plugins" Declared by: <nixpkgs/nixos/modules/services/misc/tee-supplicant>

## services.tee-supplicant.reeFsParentPath

The directory where the secure filesystem will be stored in the rich execution environment (REE FS). Type: absolute path Default: "/var/lib/tee" Declared by: <nixpkgs/nixos/modules/services/misc/tee-supplicant>

## services.tee-supplicant.trustedApplications

A list of full paths to trusted applications that will be loaded at runtime by tee-supplicant. Type: list of absolute path Default: [ ] Declared by: <nixpkgs/nixos/modules/services/misc/tee-supplicant>
