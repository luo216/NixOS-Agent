---
module: services.getty
option_count: 7
source: options.html
---

# services.getty

## services.getty.autologinOnce

If enabled the automatic login will only happen in the first tty once per boot. This can be useful to avoid retyping the account password on systems with full disk encrypted. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/ttys/getty.nix>

## services.getty.autologinUser

Username of the account that will be automatically logged in at the console. If unspecified, a login prompt is shown as usual. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/ttys/getty.nix>

## services.getty.extraArgs

Additional arguments passed to agetty. Type: list of string Default: [ ] Example: [ "--nohostname" ] Declared by: <nixpkgs/nixos/modules/services/ttys/getty.nix>

## services.getty.greetingLine

Welcome line printed by agetty. The default shows current NixOS version label, machine type and tty. Type: string Declared by: <nixpkgs/nixos/modules/services/ttys/getty.nix>

## services.getty.helpLine

Help line printed by agetty below the welcome line. Used by the installation CD to give some hints on how to proceed. Type: strings concatenated with “\n” Default: "" Declared by: <nixpkgs/nixos/modules/services/ttys/getty.nix>

## services.getty.loginOptions

Template for arguments to be passed to login(1). See agetty(1) for details, including security considerations. If unspecified, agetty will not be invoked with a --login-options option. Type: null or string Default: null Example: "-h darkstar -- \\u" Declared by: <nixpkgs/nixos/modules/services/ttys/getty.nix>

## services.getty.loginProgram

Path to the login binary executed by agetty. Type: absolute path Default: "${pkgs.shadow}/bin/login" Declared by: <nixpkgs/nixos/modules/services/ttys/getty.nix>
