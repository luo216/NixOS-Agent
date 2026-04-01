---
module: services.coturn
option_count: 30
source: options.html
---

# services.coturn

## services.coturn.enable

Whether to enable coturn TURN server. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/coturn.nix>

## services.coturn.alt-listening-port

Alternative listening port for UDP and TCP listeners; default (or zero) value means “listening port plus one”. This is needed for RFC 5780 support (STUN extension specs, NAT behavior discovery). The TURN Server supports RFC 5780 only if it is started with more than one listening IP address of the same family (IPv4 or IPv6). RFC 5780 is supported only by UDP protocol, other protocols are listening to that endpoint only for “symmetry”. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: listening-port + 1 Declared by: <nixpkgs/nixos/modules/services/networking/coturn.nix>

## services.coturn.alt-tls-listening-port

Alternative listening port for TLS and DTLS protocols. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: tls-listening-port + 1 Declared by: <nixpkgs/nixos/modules/services/networking/coturn.nix>

## services.coturn.cert

Certificate file in PEM format. Type: null or string Default: null Example: "/var/lib/acme/example.com/fullchain.pem" Declared by: <nixpkgs/nixos/modules/services/networking/coturn.nix>

## services.coturn.cli-ip

Local system IP address to be used for CLI server endpoint. Type: string Default: "127.0.0.1" Declared by: <nixpkgs/nixos/modules/services/networking/coturn.nix>

## services.coturn.cli-password

CLI access password. For the security reasons, it is recommended to use the encrypted for of the password (see the -P command in the turnadmin utility). Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/networking/coturn.nix>

## services.coturn.cli-port

CLI server port. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 5766 Declared by: <nixpkgs/nixos/modules/services/networking/coturn.nix>

## services.coturn.dh-file

Use custom DH TLS key, stored in PEM format in the file. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/networking/coturn.nix>

## services.coturn.extraConfig

Additional configuration options Type: strings concatenated with “\n” Default: "" Declared by: <nixpkgs/nixos/modules/services/networking/coturn.nix>

## services.coturn.listening-ips

Listener IP addresses of relay server. If no IP(s) specified in the config file or in the command line options, then all IPv4 and IPv6 system IPs will be used for listening. Type: list of string Default: [ ] Example: [ "203.0.113.42" "2001:DB8::42" ] Declared by: <nixpkgs/nixos/modules/services/networking/coturn.nix>

## services.coturn.listening-port

TURN listener port for UDP and TCP. Note: actually, TLS and DTLS sessions can connect to the “plain” TCP and UDP port(s), too - if allowed by configuration. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 3478 Declared by: <nixpkgs/nixos/modules/services/networking/coturn.nix>

## services.coturn.lt-cred-mech

Use long-term credential mechanism. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/coturn.nix>

## services.coturn.max-port

Upper bound of UDP relay endpoints Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 65535 Declared by: <nixpkgs/nixos/modules/services/networking/coturn.nix>

## services.coturn.min-port

Lower bound of UDP relay endpoints Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 49152 Declared by: <nixpkgs/nixos/modules/services/networking/coturn.nix>

## services.coturn.no-auth

This option is opposite to lt-cred-mech. (TURN Server with no-auth option allows anonymous access). If neither option is defined, and no users are defined, then no-auth is default. If at least one user is defined, in this file or in command line or in usersdb file, then lt-cred-mech is default. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/coturn.nix>

## services.coturn.no-cli

Turn OFF the CLI support. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/coturn.nix>

## services.coturn.no-dtls

Disable DTLS client listener Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/coturn.nix>

## services.coturn.no-tcp

Disable TCP client listener Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/coturn.nix>

## services.coturn.no-tcp-relay

Disable TCP relay endpoints Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/coturn.nix>

## services.coturn.no-tls

Disable TLS client listener Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/coturn.nix>

## services.coturn.no-udp

Disable UDP client listener Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/coturn.nix>

## services.coturn.no-udp-relay

Disable UDP relay endpoints Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/coturn.nix>

## services.coturn.pkey

Private key file in PEM format. Type: null or string Default: null Example: "/var/lib/acme/example.com/key.pem" Declared by: <nixpkgs/nixos/modules/services/networking/coturn.nix>

## services.coturn.realm

The default realm to be used for the users when no explicit origin/realm relationship was found in the database, or if the TURN server is not using any database (just the commands-line settings and the userdb file). Must be used with long-term credentials mechanism or with TURN REST API. Type: string Default: config.networking.hostName Example: "example.com" Declared by: <nixpkgs/nixos/modules/services/networking/coturn.nix>

## services.coturn.relay-ips

Relay address (the local IP address that will be used to relay the packets to the peer). Multiple relay addresses may be used. The same IP(s) can be used as both listening IP(s) and relay IP(s). If no relay IP(s) specified, then the turnserver will apply the default policy: it will decide itself which relay addresses to be used, and it will always be using the client socket IP address as the relay IP address of the TURN session (if the requested relay address family is the same as the family of the client socket). Type: list of string Default: [ ] Example: [ "203.0.113.42" "2001:DB8::42" ] Declared by: <nixpkgs/nixos/modules/services/networking/coturn.nix>

## services.coturn.secure-stun

Require authentication of the STUN Binding request. By default, the clients are allowed anonymous access to the STUN Binding functionality. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/coturn.nix>

## services.coturn.static-auth-secret

‘Static’ authentication secret value (a string) for TURN REST API only. If not set, then the turn server will try to use the ‘dynamic’ value in turn_secret table in user database (if present). The database-stored value can be changed on-the-fly by a separate program, so this is why that other mode is ‘dynamic’. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/networking/coturn.nix>

## services.coturn.static-auth-secret-file

Path to the file containing the static authentication secret. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/networking/coturn.nix>

## services.coturn.tls-listening-port

TURN listener port for TLS. Note: actually, “plain” TCP and UDP sessions can connect to the TLS and DTLS port(s), too - if allowed by configuration. The TURN server “automatically” recognizes the type of traffic. Actually, two listening endpoints (the “plain” one and the “tls” one) are equivalent in terms of functionality; but we keep both endpoints to satisfy the RFC 5766 specs. For secure TCP connections, we currently support SSL version 3 and TLS version 1.0, 1.1 and 1.2. For secure UDP connections, we support DTLS version 1. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 5349 Declared by: <nixpkgs/nixos/modules/services/networking/coturn.nix>

## services.coturn.use-auth-secret

TURN REST API flag. Flag that sets a special authorization option that is based upon authentication secret. This feature can be used with the long-term authentication mechanism, only. This feature purpose is to support “TURN Server REST API”, see “TURN REST API” link in the project’s page https://github.com/coturn/coturn/ This option is used with timestamp: usercombo -> “timestamp:userid” turn user -> usercombo turn password -> base64(hmac(secret key, usercombo)) This allows TURN credentials to be accounted for a specific user id. If you don’t have a suitable id, the timestamp alone can be used. This option is just turning on secret-based authentication. The actual value of the secret is defined either by option static-auth-secret, or can be found in the turn_secret table in the database. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/coturn.nix>
