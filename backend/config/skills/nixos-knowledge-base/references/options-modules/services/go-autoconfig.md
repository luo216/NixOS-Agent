---
module: services.go-autoconfig
option_count: 2
source: options.html
---

# services.go-autoconfig

## services.go-autoconfig.enable

Whether to enable IMAP/SMTP autodiscover feature for mail clients. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/go-autoconfig.nix>

## services.go-autoconfig.settings

Configuration for go-autoconfig. See https://github.com/L11R/go-autoconfig/blob/master/config.yml for more information. Type: open submodule of (YAML 1.1 value) Default: { } Example: { service_addr = ":1323"; domain = "autoconfig.example.org"; imap = { server = "example.org"; port = 993; }; smtp = { server = "example.org"; port = 465; }; } Declared by: <nixpkgs/nixos/modules/services/networking/go-autoconfig.nix>
