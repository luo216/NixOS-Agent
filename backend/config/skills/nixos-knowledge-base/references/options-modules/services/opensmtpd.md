---
module: services.opensmtpd
option_count: 6
source: options.html
---

# services.opensmtpd

## services.opensmtpd.enable

Whether to enable the OpenSMTPD server. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/mail/opensmtpd.nix>

## services.opensmtpd.package

The opensmtpd package to use. Type: package Default: pkgs.opensmtpd Declared by: <nixpkgs/nixos/modules/services/mail/opensmtpd.nix>

## services.opensmtpd.extraServerArgs

Extra command line arguments provided when the smtpd process is started. Type: list of string Default: [ ] Example: [ "-v" "-P mta" ] Declared by: <nixpkgs/nixos/modules/services/mail/opensmtpd.nix>

## services.opensmtpd.procPackages

Packages to search for filters, tables, queues, and schedulers. Add packages here if you want to use them as as such, for example from the opensmtpd-table-* packages. Type: list of package Default: [ ] Declared by: <nixpkgs/nixos/modules/services/mail/opensmtpd.nix>

## services.opensmtpd.serverConfiguration

The contents of the smtpd.conf configuration file. See the OpenSMTPD documentation for syntax information. Type: strings concatenated with “\n” Example: '' listen on lo accept for any deliver to lmtp localhost:24 '' Declared by: <nixpkgs/nixos/modules/services/mail/opensmtpd.nix>

## services.opensmtpd.setSendmail

Whether to set the system sendmail to OpenSMTPD’s. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/mail/opensmtpd.nix>
