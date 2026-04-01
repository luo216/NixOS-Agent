---
module: services.dependency-track
option_count: 6
source: options.html
---

# services.dependency-track

## services.dependency-track.enable

Whether to enable dependency-track. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/dependency-track.nix>

## services.dependency-track.package

The dependency-track package to use. Type: package Default: pkgs.dependency-track Declared by: <nixpkgs/nixos/modules/services/web-apps/dependency-track.nix>

## services.dependency-track.javaArgs

Java options passed to JVM. Configuring this is usually not necessary, but for small systems it can be useful to tweak the JVM heap size. Type: list of string Default: [ ] Example: [ "-Xmx16G" ] Declared by: <nixpkgs/nixos/modules/services/web-apps/dependency-track.nix>

## services.dependency-track.logLevel

Log level for dependency-track Type: one of “INFO”, “WARN”, “ERROR”, “DEBUG”, “TRACE” Default: "INFO" Declared by: <nixpkgs/nixos/modules/services/web-apps/dependency-track.nix>

## services.dependency-track.port

On which port dependency-track should listen for new HTTP connections. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 8080 Declared by: <nixpkgs/nixos/modules/services/web-apps/dependency-track.nix>

## services.dependency-track.settings

See https://docs.dependencytrack.org/getting-started/configuration/#default-configuration for possible options Type: open submodule of attribute set of (string, package, bool, int or float) Default: { } Declared by: <nixpkgs/nixos/modules/services/web-apps/dependency-track.nix>
