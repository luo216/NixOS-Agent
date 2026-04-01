---
module: programs.gnupg.agent
option_count: 6
source: options.html
---

# programs.gnupg.agent

## programs.gnupg.agent.enable

Enables GnuPG agent with socket-activation for every user session. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/programs/gnupg.nix>

## programs.gnupg.agent.enableBrowserSocket

Enable browser socket for GnuPG agent. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/programs/gnupg.nix>

## programs.gnupg.agent.enableExtraSocket

Enable extra socket for GnuPG agent. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/programs/gnupg.nix>

## programs.gnupg.agent.enableSSHSupport

Enable SSH agent support in GnuPG agent. Also sets SSH_AUTH_SOCK environment variable correctly. This will disable socket-activation and thus always start a GnuPG agent per user session. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/programs/gnupg.nix>

## programs.gnupg.agent.pinentryPackage

Which pinentry package to use. The path to the mainProgram as defined in the package’s meta attributes will be set in /etc/gnupg/gpg-agent.conf. If not set by the user, it’ll pick an appropriate flavor depending on the system configuration (qt flavor for lxqt and plasma, gtk2 for xfce, gnome3 on all other systems with X enabled, curses otherwise). Type: null or package Default: matching the configured desktop environment or pkgs.pinentry-curses Example: pkgs.pinentry-gnome3 Declared by: <nixpkgs/nixos/modules/programs/gnupg.nix>

## programs.gnupg.agent.settings

Configuration for /etc/gnupg/gpg-agent.conf. See gpg-agent(1) for supported options. Type: attribute set of (atom (null, bool, int, float or string)) Default: { } Example: { default-cache-ttl = 600; } Declared by: <nixpkgs/nixos/modules/programs/gnupg.nix>
