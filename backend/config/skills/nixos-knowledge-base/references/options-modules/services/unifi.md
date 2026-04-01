---
module: services.unifi
option_count: 8
source: options.html
---

# services.unifi

## services.unifi.enable

Whether or not to enable the unifi controller service. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/unifi.nix>

## services.unifi.extraJvmOptions

Set extra options to pass to the JVM. Type: list of string Default: [ ] Example: ["-Xlog:gc"] Declared by: <nixpkgs/nixos/modules/services/networking/unifi.nix>

## services.unifi.initialJavaHeapSize

Set the initial heap size for the JVM in MB. If this option isn’t set, the JVM will decide this value at runtime. Type: null or signed integer Default: null Example: 1024 Declared by: <nixpkgs/nixos/modules/services/networking/unifi.nix>

## services.unifi.jrePackage

The jdk package to use. Check the UniFi controller release notes to ensure it is supported. Type: package Default: pkgs.jdk17_headless Declared by: <nixpkgs/nixos/modules/services/networking/unifi.nix>

## services.unifi.maximumJavaHeapSize

Set the maximum heap size for the JVM in MB. If this option isn’t set, the JVM will decide this value at runtime. Type: null or signed integer Default: null Example: 4096 Declared by: <nixpkgs/nixos/modules/services/networking/unifi.nix>

## services.unifi.mongodbPackage

The mongodb package to use. Type: package Default: pkgs.mongodb-7_0 Declared by: <nixpkgs/nixos/modules/services/networking/unifi.nix>

## services.unifi.openFirewall

Whether or not to open the minimum required ports on the firewall. This is necessary to allow firmware upgrades and device discovery to work. For remote login, you should additionally open (or forward) port 8443. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/unifi.nix>

## services.unifi.unifiPackage

The unifi package to use. Type: package Default: pkgs.unifi Declared by: <nixpkgs/nixos/modules/services/networking/unifi.nix>
