---
module: services.journald.upload.settings.Upload
option_count: 5
source: options.html
---

# services.journald.upload.settings.Upload

## services.journald.upload.settings.Upload.NetworkTimeoutSec

When network connectivity to the server is lost, this option configures the time to wait for the connectivity to get restored. If the server is not reachable over the network for the configured time, systemd-journal-upload exits. Takes a value in seconds (or in other time units if suffixed with “ms”, “min”, “h”, etc). For details, see systemd.time(5). Type: null or string Default: null Example: "1s" Declared by: <nixpkgs/nixos/modules/system/boot/systemd/journald-upload.nix>

## services.journald.upload.settings.Upload.ServerCertificateFile

SSL CA certificate in PEM format. In contrary to what the name suggests, this option configures the client certificate sent to the remote journal server. Type: null or string Default: null Example: ./server-ca.pem Declared by: <nixpkgs/nixos/modules/system/boot/systemd/journald-upload.nix>

## services.journald.upload.settings.Upload.ServerKeyFile

SSL key in PEM format. In contrary to what the name suggests, this option configures the client private key sent to the remote journal server. This key should not be world-readable, and must be readably by the systemd-journal group. Type: null or string Default: null Example: ./server-key.pem Declared by: <nixpkgs/nixos/modules/system/boot/systemd/journald-upload.nix>

## services.journald.upload.settings.Upload.TrustedCertificateFile

SSL CA certificate. This certificate will be used to check the remote journal HTTPS server certificate. Type: null or string Default: null Example: ./ca Declared by: <nixpkgs/nixos/modules/system/boot/systemd/journald-upload.nix>

## services.journald.upload.settings.Upload.URL

The URL to upload the journal entries to. See the description of --url= option in systemd-journal-upload(8) for the description of possible values. Type: string Example: "https://192.168.1.1" Declared by: <nixpkgs/nixos/modules/system/boot/systemd/journald-upload.nix>
