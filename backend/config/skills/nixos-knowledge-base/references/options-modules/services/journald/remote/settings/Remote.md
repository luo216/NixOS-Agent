---
module: services.journald.remote.settings.Remote
option_count: 5
source: options.html
---

# services.journald.remote.settings.Remote

## services.journald.remote.settings.Remote.Seal

Periodically sign the data in the journal using Forward Secure Sealing. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/system/boot/systemd/journald-remote.nix>

## services.journald.remote.settings.Remote.ServerCertificateFile

A path to a SSL certificate file in PEM format. This option can be used with listen = "https". If the path refers to an AF_UNIX stream socket in the file system a connection is made to it and the certificate read from it. Type: string Default: "/etc/ssl/certs/journal-remote.pem" Declared by: <nixpkgs/nixos/modules/system/boot/systemd/journald-remote.nix>

## services.journald.remote.settings.Remote.ServerKeyFile

A path to a SSL secret key file in PEM format. Note that due to security reasons, systemd-journal-remote will refuse files from the world-readable /nix/store. This file should be readable by the “” user. This option can be used with listen = "https". If the path refers to an AF_UNIX stream socket in the file system a connection is made to it and the key read from it. Type: string Default: "/etc/ssl/private/journal-remote.pem" Declared by: <nixpkgs/nixos/modules/system/boot/systemd/journald-remote.nix>

## services.journald.remote.settings.Remote.SplitMode

With “host”, a separate output file is used, based on the hostname of the other endpoint of a connection. With “none”, only one output journal file is used. Type: one of “host”, “none” Default: "host" Example: "none" Declared by: <nixpkgs/nixos/modules/system/boot/systemd/journald-remote.nix>

## services.journald.remote.settings.Remote.TrustedCertificateFile

A path to a SSL CA certificate file in PEM format, or all. If all is set, then client certificate checking will be disabled. This option can be used with listen = "https". If the path refers to an AF_UNIX stream socket in the file system a connection is made to it and the certificate read from it. Type: string Default: "/etc/ssl/ca/trusted.pem" Declared by: <nixpkgs/nixos/modules/system/boot/systemd/journald-remote.nix>
