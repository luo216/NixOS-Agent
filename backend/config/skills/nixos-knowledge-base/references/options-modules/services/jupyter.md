---
module: services.jupyter
option_count: 13
source: options.html
---

# services.jupyter

## services.jupyter.enable

Whether to enable Jupyter development server. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/development/jupyter/default.nix>

## services.jupyter.package

The jupyter package to use. Type: package Default: pkgs.python3.pkgs.jupyter Declared by: <nixpkgs/nixos/modules/services/development/jupyter/default.nix>

## services.jupyter.command

Which command the service runs. Note that not all jupyter packages have all commands, e.g. jupyter lab isn’t present in the notebook package. Type: string Default: "jupyter notebook" Example: "jupyter lab" Declared by: <nixpkgs/nixos/modules/services/development/jupyter/default.nix>

## services.jupyter.extraEnvironmentVariables

Extra environment variables to be set in the runtime context of jupyter notebook Type: attribute set of (null or (list of (signed integer or string or absolute path)) or signed integer or string or absolute path) Default: { } Example: { PLAYWRIGHT_BROWSERS_PATH = "${pkgs.playwright-driver.browsers}"; PLAYWRIGHT_SKIP_VALIDATE_HOST_REQUIREMENTS = "true"; } Declared by: <nixpkgs/nixos/modules/services/development/jupyter/default.nix>

## services.jupyter.extraPackages

Extra packages to be available in the jupyter runtime environment Type: list of package Default: [ ] Example: [ pkgs.python3.pkgs.nbconvert pkgs.python3.pkgs.playwright ] Declared by: <nixpkgs/nixos/modules/services/development/jupyter/default.nix>

## services.jupyter.group

Name of the group used to run the jupyter service. Use this if you want to create a group of users that are able to view the notebook directory’s content. Type: string Default: "jupyter" Example: "users" Declared by: <nixpkgs/nixos/modules/services/development/jupyter/default.nix>

## services.jupyter.ip

IP address Jupyter will be listening on. Type: string Default: "localhost" Declared by: <nixpkgs/nixos/modules/services/development/jupyter/default.nix>

## services.jupyter.kernels

Declarative kernel config. Kernels can be declared in any language that supports and has the required dependencies to communicate with a jupyter server. In python’s case, it means that ipykernel package must always be included in the list of packages of the targeted environment. Type: null or (attribute set of (open submodule of (JSON value))) Default: null Example: { python3 = let env = (pkgs.python3.withPackages (pythonPackages: with pythonPackages; [ ipykernel pandas scikit-learn ])); in { displayName = "Python 3 for machine learning"; argv = [ "${env.interpreter}" "-m" "ipykernel_launcher" "-f" "{connection_file}" ]; language = "python"; logo32 = "${env.sitePackages}/ipykernel/resources/logo-32x32.png"; logo64 = "${env.sitePackages}/ipykernel/resources/logo-64x64.png"; extraPaths = { "cool.txt" = pkgs.writeText "cool" "cool content"; }; }; } Declared by: <nixpkgs/nixos/modules/services/development/jupyter/default.nix>

## services.jupyter.notebookConfig

Raw jupyter config. Please use the password configuration option to set a password instead of passing it in here. Type: strings concatenated with “\n” Default: "" Declared by: <nixpkgs/nixos/modules/services/development/jupyter/default.nix>

## services.jupyter.notebookDir

Root directory for notebooks. Type: string Default: "~/" Declared by: <nixpkgs/nixos/modules/services/development/jupyter/default.nix>

## services.jupyter.password

Password to use with notebook. Can be generated following: https://jupyter-server.readthedocs.io/en/stable/operators/public-server.html#preparing-a-hashed-password Type: string Example: "argon2:$argon2id$v=19$m=10240,t=10,p=8$48hF+vTUuy1LB83/GzNhUg$J1nx4jPWD7PwOJHs5OtDW8pjYK2s0c1R3rYGbSIKB54" Declared by: <nixpkgs/nixos/modules/services/development/jupyter/default.nix>

## services.jupyter.port

Port number Jupyter will be listening on. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 8888 Declared by: <nixpkgs/nixos/modules/services/development/jupyter/default.nix>

## services.jupyter.user

Name of the user used to run the jupyter service. For security reason, jupyter should really not be run as root. If not set (jupyter), the service will create a jupyter user with appropriate settings. Type: string Default: "jupyter" Example: "aborsu" Declared by: <nixpkgs/nixos/modules/services/development/jupyter/default.nix>
