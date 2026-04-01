---
module: services.xtreemfs.osd
option_count: 6
source: options.html
---

# services.xtreemfs.osd

## services.xtreemfs.osd.enable

Whether to enable XtreemFS OSD service. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/network-filesystems/xtreemfs.nix>

## services.xtreemfs.osd.address

If specified, it defines the interface to listen on. If not specified, the service will listen on all interfaces (any). Type: string Default: "" Example: "127.0.0.1" Declared by: <nixpkgs/nixos/modules/services/network-filesystems/xtreemfs.nix>

## services.xtreemfs.osd.extraConfig

Configuration of XtreemFS OSD service. WARNING: configuration is saved as plaintext inside nix store. For more options: https://www.xtreemfs.org/xtfs-guide-1.5.1/index.html Type: strings concatenated with “\n” Example: '' local_clock_renewal = 0 remote_time_sync = 30000 report_free_space = true capability_secret = iNG8UuQJrJ6XVDTe dir_service.host = 192.168.0.10 dir_service.port = 32638 # if replication is used dir_service.1.host = 192.168.0.11 dir_service.1.port = 32638 dir_service.2.host = 192.168.0.12 dir_service.2.port = 32638 # specify whether SSL is required ssl.enabled = true ssl.service_creds.pw = passphrase ssl.service_creds.container = pkcs12 ssl.service_creds = /etc/xos/xtreemfs/truststore/certs/osd.p12 ssl.trusted_certs = /etc/xos/xtreemfs/truststore/certs/trusted.jks ssl.trusted_certs.pw = jks_passphrase ssl.trusted_certs.container = jks '' Declared by: <nixpkgs/nixos/modules/services/network-filesystems/xtreemfs.nix>

## services.xtreemfs.osd.httpPort

Specifies the listen port for the HTTP service that returns the status page. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 30640 Declared by: <nixpkgs/nixos/modules/services/network-filesystems/xtreemfs.nix>

## services.xtreemfs.osd.port

The port to listen on for incoming connections (TCP and UDP). Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 32640 Declared by: <nixpkgs/nixos/modules/services/network-filesystems/xtreemfs.nix>

## services.xtreemfs.osd.uuid

Must be set to a unique identifier, preferably a UUID according to RFC 4122. UUIDs can be generated with uuidgen command, found in the util-linux package. Type: string Example: "eacb6bab-f444-4ebf-a06a-3f72d7465e42" Declared by: <nixpkgs/nixos/modules/services/network-filesystems/xtreemfs.nix>
