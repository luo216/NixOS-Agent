---
module: services.jupyter.kernels.<name>
option_count: 7
source: options.html
---

# services.jupyter.kernels.<name>

## services.jupyter.kernels.<name>.argv

Command and arguments to start the kernel. Type: list of string Example: [ "{customEnv.interpreter}" "-m" "ipykernel_launcher" "-f" "{connection_file}" ] Declared by: <nixpkgs/nixos/modules/services/development/jupyter/default.nix>

## services.jupyter.kernels.<name>.displayName

Name that will be shown to the user. Type: string Default: "" Example: "Python 3" "Python 3 for Data Science" Declared by: <nixpkgs/nixos/modules/services/development/jupyter/default.nix>

## services.jupyter.kernels.<name>.env

Environment variables to set for the kernel. Type: attribute set of string Default: { } Example: { OMP_NUM_THREADS = "1"; } Declared by: <nixpkgs/nixos/modules/services/development/jupyter/default.nix>

## services.jupyter.kernels.<name>.extraPaths

Extra paths to link in kernel directory Type: attribute set of absolute path Default: { } Example: "{ examples = ${env.sitePack}/IRkernel/kernelspec/kernel.js"; } Declared by: <nixpkgs/nixos/modules/services/development/jupyter/default.nix>

## services.jupyter.kernels.<name>.language

Language of the environment. Typically the name of the binary. Type: string Example: "python" Declared by: <nixpkgs/nixos/modules/services/development/jupyter/default.nix>

## services.jupyter.kernels.<name>.logo32

Path to 32x32 logo png. Type: null or absolute path Default: null Example: "${env.sitePackages}/ipykernel/resources/logo-32x32.png" Declared by: <nixpkgs/nixos/modules/services/development/jupyter/default.nix>

## services.jupyter.kernels.<name>.logo64

Path to 64x64 logo png. Type: null or absolute path Default: null Example: "${env.sitePackages}/ipykernel/resources/logo-64x64.png" Declared by: <nixpkgs/nixos/modules/services/development/jupyter/default.nix>
