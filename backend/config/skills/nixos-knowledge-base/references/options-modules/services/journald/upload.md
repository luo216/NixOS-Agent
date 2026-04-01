---
module: services.journald.upload
option_count: 2
source: options.html
---

# services.journald.upload

## services.journald.upload.enable

Whether to enable uploading the systemd journal to a remote server. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/system/boot/systemd/journald-upload.nix>

## services.journald.upload.settings

Configuration for journal-upload. See journal-upload.conf(5) for available options. Type: open submodule of attribute set of section of an INI file (attrs of INI atom (null, bool, int, float or string) or a list of them for duplicate keys) Default: { } Declared by: <nixpkgs/nixos/modules/system/boot/systemd/journald-upload.nix>
