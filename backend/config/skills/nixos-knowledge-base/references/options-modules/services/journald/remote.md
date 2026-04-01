---
module: services.journald.remote
option_count: 5
source: options.html
---

# services.journald.remote

## services.journald.remote.enable

Whether to enable receiving systemd journals from the network. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/system/boot/systemd/journald-remote.nix>

## services.journald.remote.listen

Which protocol to listen to. Type: one of “https”, “http” Default: "https" Declared by: <nixpkgs/nixos/modules/system/boot/systemd/journald-remote.nix>

## services.journald.remote.output

The location of the output journal. In case the output file is not specified, journal files will be created underneath the selected directory. Files will be called remote-hostname.journal, where the hostname part is the escaped hostname of the source endpoint of the connection, or the numerical address if the hostname cannot be determined. Type: string Default: "/var/log/journal/remote/" Declared by: <nixpkgs/nixos/modules/system/boot/systemd/journald-remote.nix>

## services.journald.remote.port

The port to listen to. Note that this option is used only if services.journald.upload.listen is configured to be either “https” or “http”. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 19532 Declared by: <nixpkgs/nixos/modules/system/boot/systemd/journald-remote.nix>

## services.journald.remote.settings

Configuration in the journal-remote configuration file. See journal-remote.conf(5) for available options. Type: open submodule of attribute set of section of an INI file (attrs of INI atom (null, bool, int, float or string) or a list of them for duplicate keys) Default: { } Declared by: <nixpkgs/nixos/modules/system/boot/systemd/journald-remote.nix>
