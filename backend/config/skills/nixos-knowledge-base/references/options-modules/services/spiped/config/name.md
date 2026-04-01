---
module: services.spiped.config.<name>
option_count: 12
source: options.html
---

# services.spiped.config.<name>

## services.spiped.config.<name>.decrypt

Take encrypted connections from the source socket and send unencrypted connections to the target socket. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/spiped.nix>

## services.spiped.config.<name>.disableKeepalives

Disable transport layer keep-alives. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/spiped.nix>

## services.spiped.config.<name>.disableReresolution

Disable target address re-resolution. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/spiped.nix>

## services.spiped.config.<name>.encrypt

Take unencrypted connections from the source socket and send encrypted connections to the target socket. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/spiped.nix>

## services.spiped.config.<name>.keyfile

Name of a file containing the spiped key. As the daemon runs as the spiped user, the key file must be readable by that user. To securely manage the file within your configuration consider a tool such as agenix or sops-nix. Type: absolute path Declared by: <nixpkgs/nixos/modules/services/networking/spiped.nix>

## services.spiped.config.<name>.maxConns

Limit on the number of simultaneous connections allowed. Type: signed integer Default: 100 Declared by: <nixpkgs/nixos/modules/services/networking/spiped.nix>

## services.spiped.config.<name>.resolveRefresh

Resolution refresh time for the target socket, in seconds. Type: signed integer Default: 60 Declared by: <nixpkgs/nixos/modules/services/networking/spiped.nix>

## services.spiped.config.<name>.source

Address on which spiped should listen for incoming connections. Must be in one of the following formats: /absolute/path/to/unix/socket, host.name:port, [ip.v4.ad.dr]:port or [ipv6::addr]:port - note that hostnames are resolved when spiped is launched and are not re-resolved later; thus if DNS entries change spiped will continue to connect to the expired address. Type: string Declared by: <nixpkgs/nixos/modules/services/networking/spiped.nix>

## services.spiped.config.<name>.target

Address to which spiped should connect. Type: string Declared by: <nixpkgs/nixos/modules/services/networking/spiped.nix>

## services.spiped.config.<name>.timeout

Timeout, in seconds, after which an attempt to connect to the target or a protocol handshake will be aborted (and the connection dropped) if not completed Type: signed integer Default: 5 Declared by: <nixpkgs/nixos/modules/services/networking/spiped.nix>

## services.spiped.config.<name>.waitForDNS

Wait for DNS. Normally when spiped is launched it resolves addresses and binds to its source socket before the parent process returns; with this option it will daemonize first and retry failed DNS lookups until they succeed. This allows spiped to launch even if DNS isn’t set up yet, but at the expense of losing the guarantee that once spiped has finished launching it will be ready to create pipes. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/spiped.nix>

## services.spiped.config.<name>.weakHandshake

Use fast/weak handshaking: This reduces the CPU time spent in the initial connection setup, at the expense of losing perfect forward secrecy. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/spiped.nix>
