---
module: services.open-webui
option_count: 8
source: options.html
---

# services.open-webui

## services.open-webui.enable

Whether to enable Open-WebUI server. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/misc/open-webui.nix>

## services.open-webui.package

The open-webui package to use. Type: package Default: pkgs.open-webui Declared by: <nixpkgs/nixos/modules/services/misc/open-webui.nix>

## services.open-webui.environment

Extra environment variables for Open-WebUI. For more details see https://docs.openwebui.com/getting-started/env-configuration Type: attribute set of string Default: { ANONYMIZED_TELEMETRY = "False"; DO_NOT_TRACK = "True"; SCARF_NO_ANALYTICS = "True"; } Example: '' { OLLAMA_API_BASE_URL = "http://127.0.0.1:11434"; # Disable authentication WEBUI_AUTH = "False"; } '' Declared by: <nixpkgs/nixos/modules/services/misc/open-webui.nix>

## services.open-webui.environmentFile

Environment file to be passed to the systemd service. Useful for passing secrets to the service to prevent them from being world-readable in the Nix store. Type: null or absolute path Default: null Example: "/var/lib/secrets/openWebuiSecrets" Declared by: <nixpkgs/nixos/modules/services/misc/open-webui.nix>

## services.open-webui.host

The host address which the Open-WebUI server HTTP interface listens to. Type: string Default: "127.0.0.1" Example: "0.0.0.0" Declared by: <nixpkgs/nixos/modules/services/misc/open-webui.nix>

## services.open-webui.openFirewall

Whether to open the firewall for Open-WebUI. This adds services.open-webui.port to networking.firewall.allowedTCPPorts. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/misc/open-webui.nix>

## services.open-webui.port

Which port the Open-WebUI server listens to. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 8080 Example: 11111 Declared by: <nixpkgs/nixos/modules/services/misc/open-webui.nix>

## services.open-webui.stateDir

State directory of Open-WebUI. Type: absolute path Default: "/var/lib/open-webui" Example: "/home/foo" Declared by: <nixpkgs/nixos/modules/services/misc/open-webui.nix>
