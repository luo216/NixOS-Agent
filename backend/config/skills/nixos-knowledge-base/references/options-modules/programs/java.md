---
module: programs.java
option_count: 3
source: options.html
---

# programs.java

## programs.java.enable

Install and setup the Java development kit. Note This adds JAVA_HOME to the global environment, by sourcing the jdk’s setup-hook on shell init. It is equivalent to starting a shell through ‘nix-shell -p jdk’, or roughly the following system-wide configuration: environment.variables.JAVA_HOME = ${pkgs.jdk.home}/lib/openjdk; environment.systemPackages = [ pkgs.jdk ]; Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/programs/java.nix>

## programs.java.package

The jdk package to use. Type: package Default: pkgs.jdk Example: jre Declared by: <nixpkgs/nixos/modules/programs/java.nix>

## programs.java.binfmt

Whether to enable binfmt to execute java jar’s and classes. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/programs/java.nix>
