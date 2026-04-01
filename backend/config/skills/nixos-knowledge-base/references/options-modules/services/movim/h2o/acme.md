---
module: services.movim.h2o.acme
option_count: 3
source: options.html
---

# services.movim.h2o.acme

## services.movim.h2o.acme.enable

Whether to ask Let’s Encrypt to sign a certificate for this virtual host. Alternatively, an existing host can be used thru acme.useHost. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/web-apps/movim.nix>

## services.movim.h2o.acme.root

Directory for the ACME challenge, which is public. Don’t put certs or keys in here. Set to null to inherit from config.security.acme. Type: null or absolute path Default: "/var/lib/acme/acme-challenge" Declared by: <nixpkgs/nixos/modules/services/web-apps/movim.nix>

## services.movim.h2o.acme.useHost

An existing Let’s Encrypt certificate to use for this virtual host. This is useful if you have many subdomains and want to avoid hitting the rate limit. Alternately, you can generate a certificate through acme.enable. Note that this option neither creates any certificates nor does it add subdomains to existing ones — you will need to create them manually using security.acme.certs. Type: null or non-empty string Default: null Declared by: <nixpkgs/nixos/modules/services/web-apps/movim.nix>
