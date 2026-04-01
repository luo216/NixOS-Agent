---
module: services.postsrsd.settings
option_count: 7
source: options.html
---

# services.postsrsd.settings

## services.postsrsd.settings.chroot-dir

Path to chroot into at runtime as an additional layer of protection. Note We confine the runtime environment through systemd hardening instead, so this option is read-only. Type: string (read only) Default: "" Declared by: <nixpkgs/nixos/modules/services/mail/postsrsd.nix>

## services.postsrsd.settings.domains

List of local domains, that do not require rewriting. Type: list of string Default: [ ] Example: [ "example.com" ] Declared by: <nixpkgs/nixos/modules/services/mail/postsrsd.nix>

## services.postsrsd.settings.secrets-file

Path to the file containing the secret keys. Note Secrets are passed using LoadCredential= on the systemd unit, so this options is read-only. Configure services.postsrsd.secretsFile instead. Type: string (read only) Default: "\${CREDENTIALS_DIRECTORY}/secrets-file" Declared by: <nixpkgs/nixos/modules/services/mail/postsrsd.nix>

## services.postsrsd.settings.separator

SRS tag separator used in generated sender addresses. Unless you have a very good reason, you should leave this setting at its default. Type: one of “-”, “=”, “+” Default: "=" Declared by: <nixpkgs/nixos/modules/services/mail/postsrsd.nix>

## services.postsrsd.settings.socketmap

Listener configuration in socket map format native to Postfix configuration. Type: string matching the pattern ^(unix|inet):.+ Default: "unix:/run/postsrsd/socket" Example: "inet:localhost:10003" Declared by: <nixpkgs/nixos/modules/services/mail/postsrsd.nix>

## services.postsrsd.settings.srs-domain

Dedicated mail domain used for ephemeral SRS envelope addresses. Recommended to configure, when hosting multiple unrelated mail domains (e.g. for different customers), to prevent privacy issues. Set to null to not configure any srs-domain. Type: null or string Default: null Example: "srs.example.com" Declared by: <nixpkgs/nixos/modules/services/mail/postsrsd.nix>

## services.postsrsd.settings.unprivileged-user

Unprivileged user to drop privileges to. Note Our systemd unit never runs postsrsd as a privileged process, so this option is read-only. Type: string (read only) Default: "" Declared by: <nixpkgs/nixos/modules/services/mail/postsrsd.nix>
