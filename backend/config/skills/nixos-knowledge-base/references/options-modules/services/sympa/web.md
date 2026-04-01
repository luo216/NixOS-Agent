---
module: services.sympa.web
option_count: 4
source: options.html
---

# services.sympa.web

## services.sympa.web.enable

Whether to enable Sympa web interface. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/mail/sympa.nix>

## services.sympa.web.fcgiProcs

Number of FastCGI processes to fork. Type: positive integer, meaning >0 Default: 2 Declared by: <nixpkgs/nixos/modules/services/mail/sympa.nix>

## services.sympa.web.https

Whether to use HTTPS. When nginx integration is enabled, this option forces SSL and enables ACME. Please note that Sympa web interface always uses https links even when this option is disabled. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/mail/sympa.nix>

## services.sympa.web.server

The webserver used for the Sympa web interface. Set it to none if you want to configure it yourself. Further nginx configuration can be done by adapting services.nginx.virtualHosts.«name». Type: one of “nginx”, “none” Default: "nginx" Declared by: <nixpkgs/nixos/modules/services/mail/sympa.nix>
