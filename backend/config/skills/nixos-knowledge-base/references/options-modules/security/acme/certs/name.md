---
module: security.acme.certs.<name>
option_count: 28
source: options.html
---

# security.acme.certs.<name>

## security.acme.certs.<name>.enableDebugLogs

Whether to enable debug logging for this certificate. Type: boolean Default: config.security.acme.defaults.enableDebugLogs Example: true Declared by: <nixpkgs/nixos/modules/security/acme>

## security.acme.certs.<name>.credentialFiles

Environment variables suffixed by “_FILE” to set for the cert’s service for your selected dnsProvider. To find out what values you need to set, consult the documentation at https://go-acme.github.io/lego/dns/ for the corresponding dnsProvider. This allows to securely pass credential files to lego by leveraging systemd credentials. Type: attribute set of absolute path Default: config.security.acme.defaults.credentialFiles Example: { "RFC2136_TSIG_SECRET_FILE" = "/run/secrets/tsig-secret-example.org"; } Declared by: <nixpkgs/nixos/modules/security/acme>

## security.acme.certs.<name>.csr

Path to a certificate signing request to apply when fetching the certificate. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/security/acme>

## security.acme.certs.<name>.csrKey

Path to the private key to the matching certificate signing request. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/security/acme>

## security.acme.certs.<name>.directory

Directory where certificate and other state is stored. Type: string (read only) Default: "/var/lib/acme/‹name›" Declared by: <nixpkgs/nixos/modules/security/acme>

## security.acme.certs.<name>.dnsPropagationCheck

Toggles lego DNS propagation check, which is used alongside DNS-01 challenge to ensure the DNS entries required are available. Type: boolean Default: config.security.acme.defaults.dnsPropagationCheck Declared by: <nixpkgs/nixos/modules/security/acme>

## security.acme.certs.<name>.dnsProvider

DNS Challenge provider. For a list of supported providers, see the “code” field of the DNS providers listed at https://go-acme.github.io/lego/dns/. Type: null or string Default: config.security.acme.defaults.dnsProvider Example: "route53" Declared by: <nixpkgs/nixos/modules/security/acme>

## security.acme.certs.<name>.dnsResolver

Set the resolver to use for performing recursive DNS queries. Supported: host:port. The default is to use the system resolvers, or Google’s DNS resolvers if the system’s cannot be determined. Type: null or string Default: config.security.acme.defaults.dnsResolver Example: "1.1.1.1:53" Declared by: <nixpkgs/nixos/modules/security/acme>

## security.acme.certs.<name>.domain

Domain to fetch certificate for (defaults to the entry name). Type: string Default: "‹name›" Declared by: <nixpkgs/nixos/modules/security/acme>

## security.acme.certs.<name>.email

Email address for account creation and correspondence from the CA. It is recommended to use the same email for all certs to avoid account creation limits. Type: null or string Default: config.security.acme.defaults.email Declared by: <nixpkgs/nixos/modules/security/acme>

## security.acme.certs.<name>.environmentFile

Path to an EnvironmentFile for the cert’s service containing any required and optional environment variables for your selected dnsProvider. To find out what values you need to set, consult the documentation at https://go-acme.github.io/lego/dns/ for the corresponding dnsProvider. Type: null or absolute path Default: config.security.acme.defaults.environmentFile Example: "/var/src/secrets/example.org-route53-api-token" Declared by: <nixpkgs/nixos/modules/security/acme>

## security.acme.certs.<name>.extraDomainNames

A list of extra domain names, which are included in the one certificate to be issued. Type: list of string Default: [ ] Example: [ "example.org" "mydomain.org" ] Declared by: <nixpkgs/nixos/modules/security/acme>

## security.acme.certs.<name>.extraLegoFlags

Additional global flags to pass to all lego commands. Type: list of string Default: config.security.acme.defaults.extraLegoFlags Declared by: <nixpkgs/nixos/modules/security/acme>

## security.acme.certs.<name>.extraLegoRenewFlags

Additional flags to pass to lego renew. Type: list of string Default: config.security.acme.defaults.extraLegoRenewFlags Declared by: <nixpkgs/nixos/modules/security/acme>

## security.acme.certs.<name>.extraLegoRunFlags

Additional flags to pass to lego run. Type: list of string Default: config.security.acme.defaults.extraLegoRunFlags Declared by: <nixpkgs/nixos/modules/security/acme>

## security.acme.certs.<name>.group

Group running the ACME client. Type: string Default: config.security.acme.defaults.group Declared by: <nixpkgs/nixos/modules/security/acme>

## security.acme.certs.<name>.inheritDefaults

Whether to inherit values set in security.acme.defaults or not. Type: boolean Default: true Example: true Declared by: <nixpkgs/nixos/modules/security/acme>

## security.acme.certs.<name>.keyType

Key type to use for private keys. For an up to date list of supported values check the --key-type option at https://go-acme.github.io/lego/usage/cli/options/. Type: string Default: config.security.acme.defaults.keyType Declared by: <nixpkgs/nixos/modules/security/acme>

## security.acme.certs.<name>.listenHTTP

Interface and port to listen on to solve HTTP challenges in the form [INTERFACE]:PORT. If you use a port other than 80, you must proxy port 80 to this port. Type: null or string Default: config.security.acme.defaults.listenHTTP Example: ":1360" Declared by: <nixpkgs/nixos/modules/security/acme>

## security.acme.certs.<name>.ocspMustStaple

Turns on the OCSP Must-Staple TLS extension. Make sure you know what you’re doing! See: https://blog.apnic.net/2019/01/15/is-the-web-ready-for-ocsp-must-staple/ https://blog.hboeck.de/archives/886-The-Problem-with-OCSP-Stapling-and-Must-Staple-and-why-Certificate-Revocation-is-still-broken.html Type: boolean Default: config.security.acme.defaults.ocspMustStaple Declared by: <nixpkgs/nixos/modules/security/acme>

## security.acme.certs.<name>.postRun

Commands to run after new certificates go live. Note that these commands run as the root user. Executed in the same directory with the new certificate. Type: strings concatenated with “\n” Default: config.security.acme.defaults.postRun Example: "cp full.pem backup.pem" Declared by: <nixpkgs/nixos/modules/security/acme>

## security.acme.certs.<name>.profile

The certificate profile to choose if the CA offers multiple profiles. Type: null or string Default: config.security.acme.defaults.profile Declared by: <nixpkgs/nixos/modules/security/acme>

## security.acme.certs.<name>.reloadServices

The list of systemd services to call systemctl try-reload-or-restart on. Type: list of string Default: config.security.acme.defaults.reloadServices Declared by: <nixpkgs/nixos/modules/security/acme>

## security.acme.certs.<name>.renewInterval

Systemd calendar expression when to check for renewal. See systemd.time(7). Type: string Default: config.security.acme.defaults.renewInterval Declared by: <nixpkgs/nixos/modules/security/acme>

## security.acme.certs.<name>.s3Bucket

S3 bucket name to use for HTTP-01 based challenges. Challenges will be written to the S3 bucket. Type: null or string Default: null Example: "acme" Declared by: <nixpkgs/nixos/modules/security/acme>

## security.acme.certs.<name>.server

ACME Directory Resource URI. Defaults to Let’s Encrypt’s production endpoint. For testing Let’s Encrypt’s staging endpoint should be used to avoid the rather tight rate limit on the production endpoint. Type: null or string Default: config.security.acme.defaults.server Example: "https://acme-staging-v02.api.letsencrypt.org/directory" Declared by: <nixpkgs/nixos/modules/security/acme>

## security.acme.certs.<name>.validMinDays

Minimum remaining validity before renewal in days. Type: signed integer Default: config.security.acme.defaults.validMinDays Declared by: <nixpkgs/nixos/modules/security/acme>

## security.acme.certs.<name>.webroot

Where the webroot of the HTTP vhost is located. .well-known/acme-challenge/ directory will be created below the webroot if it doesn’t exist. http://example.org/.well-known/acme-challenge/ must also be available (notice unencrypted HTTP). Type: null or string Default: config.security.acme.defaults.webroot Example: "/var/lib/acme/acme-challenge" Declared by: <nixpkgs/nixos/modules/security/acme>
