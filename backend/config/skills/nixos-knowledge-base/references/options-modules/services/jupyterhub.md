---
module: services.jupyterhub
option_count: 10
source: options.html
---

# services.jupyterhub

## services.jupyterhub.enable

Whether to enable Jupyterhub development server. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/development/jupyterhub/default.nix>

## services.jupyterhub.authentication

Jupyterhub authentication to use There are many authenticators available including: oauth, pam, ldap, kerberos, etc. Type: string Default: "jupyterhub.auth.PAMAuthenticator" Declared by: <nixpkgs/nixos/modules/services/development/jupyterhub/default.nix>

## services.jupyterhub.extraConfig

Extra contents appended to the jupyterhub configuration Jupyterhub configuration is a normal python file using Traitlets. https://jupyterhub.readthedocs.io/en/stable/getting-started/config-basics.html. The base configuration of this module was designed to have sane defaults for configuration but you can override anything since this is a python file. Type: strings concatenated with “\n” Default: "" Example: '' c.SystemdSpawner.mem_limit = '8G' c.SystemdSpawner.cpu_limit = 2.0 '' Declared by: <nixpkgs/nixos/modules/services/development/jupyterhub/default.nix>

## services.jupyterhub.host

Bind IP JupyterHub will be listening on Type: string Default: "0.0.0.0" Declared by: <nixpkgs/nixos/modules/services/development/jupyterhub/default.nix>

## services.jupyterhub.jupyterhubEnv

Python environment to run jupyterhub Customizing will affect the packages available in the hub and proxy. This will allow packages to be available for the extraConfig that you may need. This will not normally need to be changed. Type: package Default: pkgs.python3.withPackages (p: with p; [ jupyterhub jupyterhub-systemdspawner ]) Declared by: <nixpkgs/nixos/modules/services/development/jupyterhub/default.nix>

## services.jupyterhub.jupyterlabEnv

Python environment to run jupyterlab Customizing will affect the packages available in the jupyterlab server and the default kernel provided. This is the way to customize the jupyterlab extensions and jupyter notebook extensions. This will not normally need to be changed. Type: package Default: pkgs.python3.withPackages (p: with p; [ jupyterhub jupyterlab ]) Declared by: <nixpkgs/nixos/modules/services/development/jupyterhub/default.nix>

## services.jupyterhub.kernels

Declarative kernel config Kernels can be declared in any language that supports and has the required dependencies to communicate with a jupyter server. In python’s case, it means that ipykernel package must always be included in the list of packages of the targeted environment. Type: null or (attribute set of (open submodule of (JSON value))) Default: null Example: { python3 = let env = (pkgs.python3.withPackages (pythonPackages: with pythonPackages; [ ipykernel pandas scikit-learn ])); in { displayName = "Python 3 for machine learning"; argv = [ "${env.interpreter}" "-m" "ipykernel_launcher" "-f" "{connection_file}" ]; language = "python"; logo32 = "${env}/${env.sitePackages}/ipykernel/resources/logo-32x32.png"; logo64 = "${env}/${env.sitePackages}/ipykernel/resources/logo-64x64.png"; }; } Declared by: <nixpkgs/nixos/modules/services/development/jupyterhub/default.nix>

## services.jupyterhub.port

Port number Jupyterhub will be listening on Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 8000 Declared by: <nixpkgs/nixos/modules/services/development/jupyterhub/default.nix>

## services.jupyterhub.spawner

Jupyterhub spawner to use There are many spawners available including: local process, systemd, docker, kubernetes, yarn, batch, etc. Type: string Default: "systemdspawner.SystemdSpawner" Declared by: <nixpkgs/nixos/modules/services/development/jupyterhub/default.nix>

## services.jupyterhub.stateDirectory

Directory for jupyterhub state (token + database) Type: string Default: "jupyterhub" Declared by: <nixpkgs/nixos/modules/services/development/jupyterhub/default.nix>
