---
module: services.wstunnel.clients.<name>
option_count: 7
source: options.html
---

# services.wstunnel.clients.<name>

## services.wstunnel.clients.<name>.enable

Whether to enable this wstunnel instance. Type: boolean Default: true Example: true Declared by: <nixpkgs/nixos/modules/services/networking/wstunnel.nix>

## services.wstunnel.clients.<name>.package

The wstunnel package to use. Type: package Default: pkgs.wstunnel Declared by: <nixpkgs/nixos/modules/services/networking/wstunnel.nix>

## services.wstunnel.clients.<name>.addNetBind

Whether to enable Whether add CAP_NET_BIND_SERVICE to the tunnel service, this should be enabled if you want to bind port < 1024. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/wstunnel.nix>

## services.wstunnel.clients.<name>.autoStart

Whether to enable starting this wstunnel instance automatically. Type: boolean Default: true Example: true Declared by: <nixpkgs/nixos/modules/services/networking/wstunnel.nix>

## services.wstunnel.clients.<name>.connectTo

Server address and port to connect to. Type: string Example: "https://wstunnel.server.com:8443" Declared by: <nixpkgs/nixos/modules/services/networking/wstunnel.nix>

## services.wstunnel.clients.<name>.environmentFile

Environment file to be passed to the systemd service. Useful for passing secrets to the service to prevent them from being world-readable in the Nix store. Note however that the secrets are passed to wstunnel through the command line, which makes them locally readable for all users of the system at runtime. Type: null or absolute path Default: null Example: "/var/lib/secrets/wstunnelSecrets" Declared by: <nixpkgs/nixos/modules/services/networking/wstunnel.nix>

## services.wstunnel.clients.<name>.settings

Command line arguments to pass to wstunnel. Attributes of the form argName = true; will be translated to --argName, and argName = \"value\" to --argName value. Type: open submodule of attribute set of (boolean or signed integer or string or list of string) Default: { } Example: { someNewOption = true; someNewOptionWithValue = "someValue"; } Declared by: <nixpkgs/nixos/modules/services/networking/wstunnel.nix>
