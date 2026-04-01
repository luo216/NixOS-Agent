---
module: services.yubikey-agent
option_count: 2
source: options.html
---

# services.yubikey-agent

## services.yubikey-agent.enable

Whether to start yubikey-agent when you log in. Also sets SSH_AUTH_SOCK to point at yubikey-agent. Note that yubikey-agent will use whatever pinentry is specified in programs.gnupg.agent.pinentryPackage. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/security/yubikey-agent.nix>

## services.yubikey-agent.package

The yubikey-agent package to use. Type: package Default: pkgs.yubikey-agent Declared by: <nixpkgs/nixos/modules/services/security/yubikey-agent.nix>
