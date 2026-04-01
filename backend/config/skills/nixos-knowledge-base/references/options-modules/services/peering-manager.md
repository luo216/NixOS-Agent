---
module: services.peering-manager
option_count: 12
source: options.html
---

# services.peering-manager

## services.peering-manager.enable

Enable Peering Manager. This module requires a reverse proxy that serves /static separately. See this example on how to configure this. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/web-apps/peering-manager.nix>

## services.peering-manager.enableLdap

Enable LDAP-Authentication for Peering Manager. This requires a configuration file being pass through ldapConfigPath. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/web-apps/peering-manager.nix>

## services.peering-manager.enableScheduledTasks

Set up scheduled tasks Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/web-apps/peering-manager.nix>

## services.peering-manager.environmentFile

Environment file as defined in systemd.exec(5). Secrets may be passed to the service without adding them to the world-readable Nix store, by specifying placeholder variables as the option value in Nix and setting these variables accordingly in the environment file. # snippet of peering-manager-related config services.peering-manager.settings.SOCIAL_AUTH_OIDC_SECRET = "$PM_OIDC_SECRET"; # content of the environment file PM_OIDC_SECRET=topsecret Note that this file needs to be available on the host on which peering-manager is running. Type: null or absolute path Default: null Example: "/run/secrets/peering-manager.env" Declared by: <nixpkgs/nixos/modules/services/web-apps/peering-manager.nix>

## services.peering-manager.extraConfig

Additional lines of configuration appended to the configuration.py. See the documentation for more possible options. Type: strings concatenated with “\n” Default: "" Declared by: <nixpkgs/nixos/modules/services/web-apps/peering-manager.nix>

## services.peering-manager.ldapConfigPath

Path to the Configuration-File for LDAP-Authentication, will be loaded as ldap_config.py. See the documentation for possible options. Type: absolute path Declared by: <nixpkgs/nixos/modules/services/web-apps/peering-manager.nix>

## services.peering-manager.listenAddress

Address the server will listen on. Type: string Default: "[::1]" Declared by: <nixpkgs/nixos/modules/services/web-apps/peering-manager.nix>

## services.peering-manager.peeringdbApiKeyFile

Path to a file containing the PeeringDB API key. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/web-apps/peering-manager.nix>

## services.peering-manager.plugins

List of plugin packages to install. Type: function that evaluates to a(n) list of package Default: python3Packages: with python3Packages; []; Declared by: <nixpkgs/nixos/modules/services/web-apps/peering-manager.nix>

## services.peering-manager.port

Port the server will listen on. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 8001 Declared by: <nixpkgs/nixos/modules/services/web-apps/peering-manager.nix>

## services.peering-manager.secretKeyFile

Path to a file containing the secret key. Type: absolute path Declared by: <nixpkgs/nixos/modules/services/web-apps/peering-manager.nix>

## services.peering-manager.settings

Configuration options to set in configuration.py. See the documentation for more possible options. Type: open submodule of attribute set of (Python value) Default: { } Declared by: <nixpkgs/nixos/modules/services/web-apps/peering-manager.nix>
