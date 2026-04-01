---
module: services.privoxy
option_count: 7
source: options.html
---

# services.privoxy

## services.privoxy.enable

Whether to enable Privoxy, non-caching filtering proxy. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/privoxy.nix>

## services.privoxy.enableTor

Whether to configure Privoxy to use Tor’s faster SOCKS port, suitable for HTTP. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/privoxy.nix>

## services.privoxy.certsLifetime

If inspectHttps is enabled, the time generated HTTPS certificates will be stored in a temporary directory for reuse. Once the lifetime has expired the directory will cleared and the certificate will have to be generated again, on-demand. Depending on the traffic, you may want to reduce the lifetime to limit the disk usage, since Privoxy itself never deletes the certificates. Note The format is that of the tmpfiles.d(5) Age parameter. Type: tmpfiles.d(5) age format Default: "10d" Example: "12h" Declared by: <nixpkgs/nixos/modules/services/networking/privoxy.nix>

## services.privoxy.inspectHttps

Whether to configure Privoxy to inspect HTTPS requests, meaning all encrypted traffic will be filtered as well. This works by decrypting and re-encrypting the requests using a per-domain generated certificate. To issue per-domain certificates, Privoxy must be provided with a CA certificate, using the ca-cert-file, ca-key-file settings. Warning The CA certificate must also be added to the system trust roots, otherwise browsers will reject all Privoxy certificates as invalid. You can do so by using the option security.pki.certificateFiles. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/privoxy.nix>

## services.privoxy.settings

This option is mapped to the main Privoxy configuration file. Check out the Privoxy user manual at https://www.privoxy.org/user-manual/config.html for available settings and documentation. Note Repeated settings can be represented by using a list. Type: open submodule of privoxy configuration type. The format consists of an attribute set of settings. Each setting can be either a value (integer, string, boolean or path) or a list of such values. Default: { } Example: { # Listen on IPv6 only listen-address = "[::]:8118"; # Forward .onion requests to Tor forward-socks5 = ".onion localhost:9050 ."; # Log redirects and filters debug = [ 128 64 ]; # This is equivalent to writing these lines # in the Privoxy configuration file: # debug 128 # debug 64 } Declared by: <nixpkgs/nixos/modules/services/networking/privoxy.nix>

## services.privoxy.userActions

Actions to be included in a user.action file. This will have a higher priority and can be used to override all other actions. Type: strings concatenated with “\n” Default: "" Declared by: <nixpkgs/nixos/modules/services/networking/privoxy.nix>

## services.privoxy.userFilters

Filters to be included in a user.filter file. This will have a higher priority and can be used to override all other filters definitions. Type: strings concatenated with “\n” Default: "" Declared by: <nixpkgs/nixos/modules/services/networking/privoxy.nix>
