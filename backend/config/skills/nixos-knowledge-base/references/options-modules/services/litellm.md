---
module: services.litellm
option_count: 9
source: options.html
---

# services.litellm

## services.litellm.enable

Whether to enable LiteLLM server. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/misc/litellm.nix>

## services.litellm.package

The litellm package to use. Type: package Default: pkgs.litellm Declared by: <nixpkgs/nixos/modules/services/misc/litellm.nix>

## services.litellm.environment

Extra environment variables for LiteLLM. Type: attribute set of string Default: { ANONYMIZED_TELEMETRY = "False"; DO_NOT_TRACK = "True"; SCARF_NO_ANALYTICS = "True"; } Example: '' { NO_DOCS="True"; } '' Declared by: <nixpkgs/nixos/modules/services/misc/litellm.nix>

## services.litellm.environmentFile

Environment file to be passed to the systemd service. Useful for passing secrets to the service to prevent them from being world-readable in the Nix store. Type: null or absolute path Default: null Example: "/var/lib/secrets/liteLLMSecrets" Declared by: <nixpkgs/nixos/modules/services/misc/litellm.nix>

## services.litellm.host

The host address which the LiteLLM server HTTP interface listens to. Type: string Default: "127.0.0.1" Example: "0.0.0.0" Declared by: <nixpkgs/nixos/modules/services/misc/litellm.nix>

## services.litellm.openFirewall

Whether to open the firewall for LiteLLM. This adds services.litellm.port to networking.firewall.allowedTCPPorts. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/misc/litellm.nix>

## services.litellm.port

Which port the LiteLLM server listens to. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 8080 Example: 11111 Declared by: <nixpkgs/nixos/modules/services/misc/litellm.nix>

## services.litellm.settings

Configuration for LiteLLM. See https://docs.litellm.ai/docs/proxy/configs for more. Type: open submodule of (YAML 1.1 value) Default: { } Declared by: <nixpkgs/nixos/modules/services/misc/litellm.nix>

## services.litellm.stateDir

State directory of LiteLLM. Type: absolute path Default: "/var/lib/litellm" Example: "/home/foo" Declared by: <nixpkgs/nixos/modules/services/misc/litellm.nix>
