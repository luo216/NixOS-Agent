---
module: security.acme.defaults
option_count: 21
source: options.html
---

# security.acme.defaults

## security.acme.defaults.enableDebugLogs

Whether to enable debug logging for this certificate. Type: boolean Default: true Example: true Declared by: <nixpkgs/nixos/modules/security/acme>

## security.acme.defaults.credentialFiles

Environment variables suffixed by “_FILE” to set for the cert’s service for your selected dnsProvider. To find out what values you need to set, consult the documentation at https://go-acme.github.io/lego/dns/ for the corresponding dnsProvider. This allows to securely pass credential files to lego by leveraging systemd credentials. Type: attribute set of absolute path Default: { } Example: { "RFC2136_TSIG_SECRET_FILE" = "/run/secrets/tsig-secret-example.org"; } Declared by: <nixpkgs/nixos/modules/security/acme>

## security.acme.defaults.dnsPropagationCheck

Toggles lego DNS propagation check, which is used alongside DNS-01 challenge to ensure the DNS entries required are available. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/security/acme>

## security.acme.defaults.dnsProvider

DNS Challenge provider. For a list of supported providers, see the “code” field of the DNS providers listed at https://go-acme.github.io/lego/dns/. Type: null or string Default: null Example: "route53" Declared by: <nixpkgs/nixos/modules/security/acme>

## security.acme.defaults.dnsResolver

Set the resolver to use for performing recursive DNS queries. Supported: host:port. The default is to use the system resolvers, or Google’s DNS resolvers if the system’s cannot be determined. Type: null or string Default: null Example: "1.1.1.1:53" Declared by: <nixpkgs/nixos/modules/security/acme>

## security.acme.defaults.email

Email address for account creation and correspondence from the CA. It is recommended to use the same email for all certs to avoid account creation limits. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/security/acme>

## security.acme.defaults.environmentFile

Path to an EnvironmentFile for the cert’s service containing any required and optional environment variables for your selected dnsProvider. To find out what values you need to set, consult the documentation at https://go-acme.github.io/lego/dns/ for the corresponding dnsProvider. Type: null or absolute path Default: null Example: "/var/src/secrets/example.org-route53-api-token" Declared by: <nixpkgs/nixos/modules/security/acme>

## security.acme.defaults.extraLegoFlags

Additional global flags to pass to all lego commands. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/security/acme>

## security.acme.defaults.extraLegoRenewFlags

Additional flags to pass to lego renew. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/security/acme>

## security.acme.defaults.extraLegoRunFlags

Additional flags to pass to lego run. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/security/acme>

## security.acme.defaults.group

Group running the ACME client. Type: string Default: "acme" Declared by: <nixpkgs/nixos/modules/security/acme>

## security.acme.defaults.keyType

Key type to use for private keys. For an up to date list of supported values check the --key-type option at https://go-acme.github.io/lego/usage/cli/options/. Type: string Default: "ec256" Declared by: <nixpkgs/nixos/modules/security/acme>

## security.acme.defaults.listenHTTP

Interface and port to listen on to solve HTTP challenges in the form [INTERFACE]:PORT. If you use a port other than 80, you must proxy port 80 to this port. Type: null or string Default: null Example: ":1360" Declared by: <nixpkgs/nixos/modules/security/acme>

## security.acme.defaults.ocspMustStaple

Turns on the OCSP Must-Staple TLS extension. Make sure you know what you’re doing! See: https://blog.apnic.net/2019/01/15/is-the-web-ready-for-ocsp-must-staple/ https://blog.hboeck.de/archives/886-The-Problem-with-OCSP-Stapling-and-Must-Staple-and-why-Certificate-Revocation-is-still-broken.html Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/security/acme>

## security.acme.defaults.postRun

Commands to run after new certificates go live. Note that these commands run as the root user. Executed in the same directory with the new certificate. Type: strings concatenated with “\n” Default: "" Example: "cp full.pem backup.pem" Declared by: <nixpkgs/nixos/modules/security/acme>

## security.acme.defaults.profile

The certificate profile to choose if the CA offers multiple profiles. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/security/acme>

## security.acme.defaults.reloadServices

The list of systemd services to call systemctl try-reload-or-restart on. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/security/acme>

## security.acme.defaults.renewInterval

Systemd calendar expression when to check for renewal. See systemd.time(7). Type: string Default: "daily" Declared by: <nixpkgs/nixos/modules/security/acme>

## security.acme.defaults.server

ACME Directory Resource URI. Defaults to Let’s Encrypt’s production endpoint. For testing Let’s Encrypt’s staging endpoint should be used to avoid the rather tight rate limit on the production endpoint. Type: null or string Default: "https://acme-v02.api.letsencrypt.org/directory" Example: "https://acme-staging-v02.api.letsencrypt.org/directory" Declared by: <nixpkgs/nixos/modules/security/acme>

## security.acme.defaults.validMinDays

Minimum remaining validity before renewal in days. Type: signed integer Default: 30 Declared by: <nixpkgs/nixos/modules/security/acme>

## security.acme.defaults.webroot

Where the webroot of the HTTP vhost is located. .well-known/acme-challenge/ directory will be created below the webroot if it doesn’t exist. http://example.org/.well-known/acme-challenge/ must also be available (notice unencrypted HTTP). Type: null or string Default: null Example: "/var/lib/acme/acme-challenge" Declared by: <nixpkgs/nixos/modules/security/acme>
