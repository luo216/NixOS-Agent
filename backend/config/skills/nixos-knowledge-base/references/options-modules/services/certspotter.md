---
module: services.certspotter
option_count: 8
source: options.html
---

# services.certspotter

## services.certspotter.enable

Whether to enable Cert Spotter, a Certificate Transparency log monitor. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/monitoring/certspotter.nix>

## services.certspotter.package

The certspotter package to use. Type: package Default: pkgs.certspotter Declared by: <nixpkgs/nixos/modules/services/monitoring/certspotter.nix>

## services.certspotter.emailRecipients

A list of email addresses to send certificate updates to. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/monitoring/certspotter.nix>

## services.certspotter.extraFlags

Extra command-line arguments to pass to Cert Spotter Type: list of string Default: [ ] Example: [ "-no_save" ] Declared by: <nixpkgs/nixos/modules/services/monitoring/certspotter.nix>

## services.certspotter.hooks

Scripts to run upon the detection of a new certificate. See man 8 certspotter-script or the GitHub page for more info. Type: list of absolute path Default: [ ] Example: [ (pkgs.writeShellScript "certspotter-hook" '' echo "Event summary: $SUMMARY." '') ] Declared by: <nixpkgs/nixos/modules/services/monitoring/certspotter.nix>

## services.certspotter.sendmailPath

Path to the sendmail binary. By default, the local sendmail wrapper is used (see services.mail.sendmailSetuidWrapper}). Type: null or absolute path Example: "${pkgs.system-sendmail}/bin/sendmail" Declared by: <nixpkgs/nixos/modules/services/monitoring/certspotter.nix>

## services.certspotter.startAtEnd

Whether to skip certificates issued before the first launch of Cert Spotter. Setting this to false will cause Cert Spotter to download tens of terabytes of data. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/monitoring/certspotter.nix>

## services.certspotter.watchlist

Domain names to watch. To monitor a domain with all subdomains, prefix its name with . (e.g. .example.org). Type: list of string Default: [ ] Example: [ ".example.org" "another.example.com" ] Declared by: <nixpkgs/nixos/modules/services/monitoring/certspotter.nix>
