---
module: services.greetd
option_count: 5
source: options.html
---

# services.greetd

## services.greetd.enable

Whether to enable greetd, a minimal and flexible login manager daemon. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/display-managers/greetd.nix>

## services.greetd.package

The greetd package to use. Type: package Default: pkgs.greetd Declared by: <nixpkgs/nixos/modules/services/display-managers/greetd.nix>

## services.greetd.restart

Whether to restart greetd when it terminates (e.g. on failure). This is usually desirable so a user can always log in, but should be disabled when using ‘settings.initial_session’ (autologin), because every greetd restart will trigger the autologin again. Type: boolean Default: !(config.services.greetd.settings ? initial_session) Declared by: <nixpkgs/nixos/modules/services/display-managers/greetd.nix>

## services.greetd.settings

greetd configuration (documentation) as a Nix attribute set. Type: TOML value Example: { default_session = { command = "${pkgs.greetd}/bin/agreety --cmd sway"; }; } Declared by: <nixpkgs/nixos/modules/services/display-managers/greetd.nix>

## services.greetd.useTextGreeter

Whether the greeter uses text-based user interfaces (For example, tuigreet). When set to true, some systemd service configuration will be adjusted to avoid systemd boot messages interrupt TUI. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/display-managers/greetd.nix>
