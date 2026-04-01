---
module: services.grafana-to-ntfy.settings
option_count: 5
source: options.html
---

# services.grafana-to-ntfy.settings

## services.grafana-to-ntfy.settings.bauthPass

The path to the password you will use in the Grafana webhook settings. Type: absolute path Declared by: <nixpkgs/nixos/modules/services/monitoring/grafana-to-ntfy.nix>

## services.grafana-to-ntfy.settings.bauthUser

The user that you will authenticate with in the Grafana webhook settings. You can set this to whatever you like, as this is not the same as the ntfy-sh user. Type: string Default: "admin" Declared by: <nixpkgs/nixos/modules/services/monitoring/grafana-to-ntfy.nix>

## services.grafana-to-ntfy.settings.ntfyBAuthPass

The path to the password for the specified ntfy-sh user. Setting this option is required when using a ntfy-sh instance with access control enabled. Type: absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/grafana-to-ntfy.nix>

## services.grafana-to-ntfy.settings.ntfyBAuthUser

The ntfy-sh user to use for authenticating with the ntfy-sh instance. Setting this option is required when using a ntfy-sh instance with access control enabled. Type: null or string Default: null Example: "grafana" Declared by: <nixpkgs/nixos/modules/services/monitoring/grafana-to-ntfy.nix>

## services.grafana-to-ntfy.settings.ntfyUrl

The URL to the ntfy-sh topic. Type: string Example: "https://push.example.com/grafana" Declared by: <nixpkgs/nixos/modules/services/monitoring/grafana-to-ntfy.nix>
