---
module: services.riemann
option_count: 6
source: options.html
---

# services.riemann

## services.riemann.enable

Whether to enable Riemann network monitoring daemon. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/monitoring/riemann.nix>

## services.riemann.config

Contents of the Riemann configuration file. For more complicated config you should use configFile. Type: strings concatenated with “\n” Declared by: <nixpkgs/nixos/modules/services/monitoring/riemann.nix>

## services.riemann.configFile

A Riemann config file. Any files in the same directory as this file will be added to the classpath by Riemann. Type: string Declared by: <nixpkgs/nixos/modules/services/monitoring/riemann.nix>

## services.riemann.configFiles

Extra files containing Riemann configuration. These files will be loaded at runtime by Riemann (with Clojure’s load-file function) at the end of the configuration if you use the config option, this is ignored if you use configFile. Type: list of absolute path Default: [ ] Declared by: <nixpkgs/nixos/modules/services/monitoring/riemann.nix>

## services.riemann.extraClasspathEntries

Extra entries added to the Java classpath when running Riemann. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/monitoring/riemann.nix>

## services.riemann.extraJavaOpts

Extra Java options used when launching Riemann. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/monitoring/riemann.nix>
