---
module: programs.firejail
option_count: 2
source: options.html
---

# programs.firejail

## programs.firejail.enable

Whether to enable firejail, a sandboxing tool for Linux. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/programs/firejail.nix>

## programs.firejail.wrappedBinaries

Wrap the binaries in firejail and place them in the global path. Type: attribute set of (absolute path or (submodule)) Default: { } Example: { firefox = { executable = "${lib.getBin pkgs.firefox}/bin/firefox"; profile = "${pkgs.firejail}/etc/firejail/firefox.profile"; }; mpv = { executable = "${lib.getBin pkgs.mpv}/bin/mpv"; profile = "${pkgs.firejail}/etc/firejail/mpv.profile"; }; } Declared by: <nixpkgs/nixos/modules/programs/firejail.nix>
