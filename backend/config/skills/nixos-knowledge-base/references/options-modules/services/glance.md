---
module: services.glance
option_count: 5
source: options.html
---

# services.glance

## services.glance.enable

Whether to enable glance. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/glance.nix>

## services.glance.package

The glance package to use. Type: package Default: pkgs.glance Declared by: <nixpkgs/nixos/modules/services/web-apps/glance.nix>

## services.glance.environmentFile

Path to an environment file as defined in systemd.exec(5). See upstream documentation https://github.com/glanceapp/glance/blob/main/docs/configuration.md#environment-variables. Example content of the file: TIMEZONE=Europe/Paris Example services.glance.settings.pages configuration: [ { name = "Home"; columns = [ { size = "full"; widgets = [ { type = "clock"; timezone = "\${TIMEZONE}"; label = "Local Time"; } ]; } ]; } ]; Note that when using Glance’s ${ENV_VAR} syntax in Nix, you need to escape it as follows: use \${ENV_VAR} in " strings and ''${ENV_VAR} in '' strings. Alternatively, you can put each secret in it’s own file, see services.glance.settings. Type: null or absolute path Default: "/dev/null" Example: "/var/lib/secrets/glance" Declared by: <nixpkgs/nixos/modules/services/web-apps/glance.nix>

## services.glance.openFirewall

Whether to open the firewall for Glance. This adds services.glance.settings.server.port to networking.firewall.allowedTCPPorts. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/web-apps/glance.nix>

## services.glance.settings

Configuration written to a yaml file that is read by glance. See https://github.com/glanceapp/glance/blob/main/docs/configuration.md for more. Settings containing secret data should be set to an attribute set with this format: { _secret = "/path/to/secret"; }. See the example in services.glance.settings.pages at the weather widget with a location secret to get a better picture of this. Alternatively, you can use a single file with environment variables, see services.glance.environmentFile. Type: open submodule of (YAML 1.1 value) Default: { } Declared by: <nixpkgs/nixos/modules/services/web-apps/glance.nix>
