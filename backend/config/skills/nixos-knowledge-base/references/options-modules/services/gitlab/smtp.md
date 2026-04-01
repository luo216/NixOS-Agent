---
module: services.gitlab.smtp
option_count: 10
source: options.html
---

# services.gitlab.smtp

## services.gitlab.smtp.enable

Enable gitlab mail delivery over SMTP. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/misc/gitlab.nix>

## services.gitlab.smtp.enableStartTLSAuto

Whether to try to use StartTLS. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/misc/gitlab.nix>

## services.gitlab.smtp.address

Address of the SMTP server for GitLab. Type: string Default: "localhost" Declared by: <nixpkgs/nixos/modules/services/misc/gitlab.nix>

## services.gitlab.smtp.authentication

Authentication type to use, see http://api.rubyonrails.org/classes/ActionMailer/Base.html Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/misc/gitlab.nix>

## services.gitlab.smtp.domain

HELO domain to use for outgoing mail. Type: string Default: "localhost" Declared by: <nixpkgs/nixos/modules/services/misc/gitlab.nix>

## services.gitlab.smtp.opensslVerifyMode

How OpenSSL checks the certificate, see http://api.rubyonrails.org/classes/ActionMailer/Base.html Type: string Default: "peer" Declared by: <nixpkgs/nixos/modules/services/misc/gitlab.nix>

## services.gitlab.smtp.passwordFile

File containing the password of the SMTP server for GitLab. This should be a string, not a nix path, since nix paths are copied into the world-readable nix store. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/misc/gitlab.nix>

## services.gitlab.smtp.port

Port of the SMTP server for GitLab. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 25 Declared by: <nixpkgs/nixos/modules/services/misc/gitlab.nix>

## services.gitlab.smtp.tls

Whether to use TLS wrapper-mode. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/misc/gitlab.nix>

## services.gitlab.smtp.username

Username of the SMTP server for GitLab. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/misc/gitlab.nix>
