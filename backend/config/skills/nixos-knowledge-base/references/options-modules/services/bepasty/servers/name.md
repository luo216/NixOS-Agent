---
module: services.bepasty.servers.<name>
option_count: 7
source: options.html
---

# services.bepasty.servers.<name>

## services.bepasty.servers.<name>.bind

Bind address to be used for this server. Type: string Default: "127.0.0.1:8000" Example: "0.0.0.0:8000" Declared by: <nixpkgs/nixos/modules/services/misc/bepasty.nix>

## services.bepasty.servers.<name>.dataDir

Path to the directory where the pastes will be saved to Type: string Default: "/var/lib/bepasty/data" Declared by: <nixpkgs/nixos/modules/services/misc/bepasty.nix>

## services.bepasty.servers.<name>.defaultPermissions

default permissions for all unauthenticated accesses. Type: string Default: "read" Example: "read,create,delete" Declared by: <nixpkgs/nixos/modules/services/misc/bepasty.nix>

## services.bepasty.servers.<name>.extraConfig

Extra configuration for bepasty server to be appended on the configuration. see https://bepasty-server.readthedocs.org/en/latest/quickstart.html#configuring-bepasty for all options. Type: strings concatenated with “\n” Default: "" Example: '' PERMISSIONS = { 'myadminsecret': 'admin,list,create,read,delete', } MAX_ALLOWED_FILE_SIZE = 5 * 1000 * 1000 '' Declared by: <nixpkgs/nixos/modules/services/misc/bepasty.nix>

## services.bepasty.servers.<name>.secretKey

server secret for safe session cookies, must be set. Warning: this secret is stored in the WORLD-READABLE Nix store! It’s recommended to use secretKeyFile which takes precedence over secretKey. Type: string Default: "" Declared by: <nixpkgs/nixos/modules/services/misc/bepasty.nix>

## services.bepasty.servers.<name>.secretKeyFile

A file that contains the server secret for safe session cookies, must be set. secretKeyFile takes precedence over secretKey. Warning: when secretKey is non-empty secretKeyFile defaults to a file in the WORLD-READABLE Nix store containing that secret. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/misc/bepasty.nix>

## services.bepasty.servers.<name>.workDir

Path to the working directory (used for config and pidfile). Defaults to the users home directory. Type: string Default: "/var/lib/bepasty" Declared by: <nixpkgs/nixos/modules/services/misc/bepasty.nix>
