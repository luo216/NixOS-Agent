---
module: services.postfix.settings.main
option_count: 12
source: options.html
---

# services.postfix.settings.main

## services.postfix.settings.main.message_size_limit

Maximum size of an email message in bytes. https://www.postfix.org/postconf.5.html#message_size_limit Type: null or signed integer Default: 10240000 Example: 52428800 Declared by: <nixpkgs/nixos/modules/services/mail/postfix.nix>

## services.postfix.settings.main.mydestination

List of domain names intended for local delivery using /etc/passwd and /etc/aliases. Warning Do not include virtual domains in this list. https://www.postfix.org/postconf.5.html#mydestination Type: null or string or list of string Default: [ "$myhostname" "localhost.$mydomain" "localhost" ] Declared by: <nixpkgs/nixos/modules/services/mail/postfix.nix>

## services.postfix.settings.main.myhostname

The internet hostname of this mail system. Leave unset to default to the system hostname with the mydomain suffix. https://www.postfix.org/postconf.5.html#myhostname Type: null or string Default: null Example: "mail.example.com" Declared by: <nixpkgs/nixos/modules/services/mail/postfix.nix>

## services.postfix.settings.main.mynetworks

List of trusted remote SMTP clients, that are allowed to relay mail. Leave unset to let Postfix populate this list based on the mynetworks_style setting. https://www.postfix.org/postconf.5.html#mynetworks Type: null or (list of string) Default: null Example: [ "127.0.0.0/8" "::1" ] Declared by: <nixpkgs/nixos/modules/services/mail/postfix.nix>

## services.postfix.settings.main.mynetworks_style

The method used for generating the default value for mynetworks, if that option is unset. https://www.postfix.org/postconf.5.html#mynetworks_style Type: null or one of “host”, “subnet”, “class” Default: "host" Declared by: <nixpkgs/nixos/modules/services/mail/postfix.nix>

## services.postfix.settings.main.recipient_delimiter

Set of characters used as the delimiters for address extensions. This allows creating different forwarding rules per extension. https://www.postfix.org/postconf.5.html#recipient_delimiter Type: null or string Default: "" Example: "+" Declared by: <nixpkgs/nixos/modules/services/mail/postfix.nix>

## services.postfix.settings.main.relay_domains

List of domains delivered via the relay transport. https://www.postfix.org/postconf.5.html#relay_domains Type: null or (list of string) Default: [ ] Example: [ "lists.example.com" ] Declared by: <nixpkgs/nixos/modules/services/mail/postfix.nix>

## services.postfix.settings.main.relayhost

List of hosts to use for relaying outbound mail. Note Putting the hostname in angled brackets, e.g. [relay.example.com], turns off MX and SRV lookups for the hostname. https://www.postfix.org/postconf.5.html#relayhost Type: null or (list of string) Default: [ ] Example: [ "[relay.example.com]:587" ] Declared by: <nixpkgs/nixos/modules/services/mail/postfix.nix>

## services.postfix.settings.main.smtp_tls_CAfile

File containing CA certificates of root CAs trusted to sign either remote SMTP server certificates or intermediate CA certificates. Defaults to the system CA bundle that is managed through the security.pki options. https://www.postfix.org/postconf.5.html#smtp_tls_CAfile Type: absolute path Default: config.security.pki.caBundle Example: ${pkgs.cacert}/etc/ssl/certs/ca-bundle.crt Declared by: <nixpkgs/nixos/modules/services/mail/postfix.nix>

## services.postfix.settings.main.smtp_tls_security_level

The client TLS security level. Tip Use dane with a local DNSSEC validating DNS resolver enabled. https://www.postfix.org/postconf.5.html#smtp_tls_security_level Type: one of “none”, “may”, “encrypt”, “dane”, “dane-only”, “fingerprint”, “verify”, “secure” Default: "may" Declared by: <nixpkgs/nixos/modules/services/mail/postfix.nix>

## services.postfix.settings.main.smtpd_tls_chain_files

List of paths to the server private keys and certificates. Caution The order of items matters and a private key must always be followed by the corresponding certificate. https://www.postfix.org/postconf.5.html#smtpd_tls_chain_files Type: list of absolute path Default: [ ] Example: [ "/var/lib/acme/mail.example.com/privkey.pem" "/var/lib/acme/mail.example.com/fullchain.pem" ] Declared by: <nixpkgs/nixos/modules/services/mail/postfix.nix>

## services.postfix.settings.main.smtpd_tls_security_level

The server TLS security level. Enable TLS by configuring at least may. https://www.postfix.org/postconf.5.html#smtpd_tls_security_level Type: one of “none”, “may”, “encrypt” Default: if config.services.postfix.settings.main.smtpd_tls_chain_files != [ ] then "may" else "none" Example: "may" Declared by: <nixpkgs/nixos/modules/services/mail/postfix.nix>
