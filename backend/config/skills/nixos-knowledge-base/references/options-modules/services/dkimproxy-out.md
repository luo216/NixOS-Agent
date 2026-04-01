---
module: services.dkimproxy-out
option_count: 6
source: options.html
---

# services.dkimproxy-out

## services.dkimproxy-out.enable

Whether to enable dkimproxy_out. Note that a key will be auto-generated, and can be found in /var/lib/dkimproxy-out. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/mail/dkimproxy-out.nix>

## services.dkimproxy-out.domains

List of domains DKIMproxy can sign for. Type: list of string Example: [ "example.org" "example.com" ] Declared by: <nixpkgs/nixos/modules/services/mail/dkimproxy-out.nix>

## services.dkimproxy-out.keySize

Size of the RSA key to use to sign outgoing emails. Note that the maximum mandatorily verified as per RFC6376 is 2048. Type: signed integer Default: 2048 Declared by: <nixpkgs/nixos/modules/services/mail/dkimproxy-out.nix>

## services.dkimproxy-out.listen

Address:port DKIMproxy should listen on. Type: string Example: "127.0.0.1:10027" Declared by: <nixpkgs/nixos/modules/services/mail/dkimproxy-out.nix>

## services.dkimproxy-out.relay

Address:port DKIMproxy should forward mail to. Type: string Example: "127.0.0.1:10028" Declared by: <nixpkgs/nixos/modules/services/mail/dkimproxy-out.nix>

## services.dkimproxy-out.selector

The selector to use for DKIM key identification. For example, if ‘selector1’ is used here, then for each domain ‘example.org’ given in domain, ‘selector1._domainkey.example.org’ should contain the TXT record indicating the public key is the one in /var/lib/dkimproxy-out/public.key: “v=DKIM1; t=s; p=[THE PUBLIC KEY]”. Type: string Example: "selector1" Declared by: <nixpkgs/nixos/modules/services/mail/dkimproxy-out.nix>
