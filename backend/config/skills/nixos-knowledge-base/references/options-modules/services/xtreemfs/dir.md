---
module: services.xtreemfs.dir
option_count: 7
source: options.html
---

# services.xtreemfs.dir

## services.xtreemfs.dir.enable

Whether to enable XtreemFS DIR service. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/network-filesystems/xtreemfs.nix>

## services.xtreemfs.dir.address

If specified, it defines the interface to listen on. If not specified, the service will listen on all interfaces (any). Type: string Default: "" Example: "127.0.0.1" Declared by: <nixpkgs/nixos/modules/services/network-filesystems/xtreemfs.nix>

## services.xtreemfs.dir.extraConfig

Configuration of XtreemFS DIR service. WARNING: configuration is saved as plaintext inside nix store. For more options: https://www.xtreemfs.org/xtfs-guide-1.5.1/index.html Type: strings concatenated with “\n” Default: "" Example: '' # specify whether SSL is required ssl.enabled = true ssl.service_creds.pw = passphrase ssl.service_creds.container = pkcs12 ssl.service_creds = /etc/xos/xtreemfs/truststore/certs/dir.p12 ssl.trusted_certs = /etc/xos/xtreemfs/truststore/certs/trusted.jks ssl.trusted_certs.pw = jks_passphrase ssl.trusted_certs.container = jks '' Declared by: <nixpkgs/nixos/modules/services/network-filesystems/xtreemfs.nix>

## services.xtreemfs.dir.httpPort

Specifies the listen port for the HTTP service that returns the status page. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 30638 Declared by: <nixpkgs/nixos/modules/services/network-filesystems/xtreemfs.nix>

## services.xtreemfs.dir.port

The port to listen on for incoming connections (TCP). Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 32638 Declared by: <nixpkgs/nixos/modules/services/network-filesystems/xtreemfs.nix>

## services.xtreemfs.dir.syncMode

The sync mode influences how operations are committed to the disk log before the operation is acknowledged to the caller. -ASYNC mode the writes to the disk log are buffered in memory by the operating system. This is the fastest mode but will lead to data loss in case of a crash, kernel panic or power failure. -SYNC_WRITE_METADATA opens the file with O_SYNC, the system will not buffer any writes. The operation will be acknowledged when data has been safely written to disk. This mode is slow but offers maximum data safety. However, BabuDB cannot influence the disk drive caches, this depends on the OS and hard disk model. -SYNC_WRITE similar to SYNC_WRITE_METADATA but opens file with O_DSYNC which means that only the data is commit to disk. This can lead to some data loss depending on the implementation of the underlying file system. Linux does not implement this mode. -FDATASYNC is similar to SYNC_WRITE but opens the file in asynchronous mode and calls fdatasync() after writing the data to disk. -FSYNC is similar to SYNC_WRITE_METADATA but opens the file in asynchronous mode and calls fsync() after writing the data to disk. For best throughput use ASYNC, for maximum data safety use FSYNC. (If xtreemfs.dir.replication.enable is true then FDATASYNC is forced) Type: one of “ASYNC”, “SYNC_WRITE_METADATA”, “SYNC_WRITE”, “FDATASYNC”, “FSYNC” Default: "FSYNC" Example: "FDATASYNC" Declared by: <nixpkgs/nixos/modules/services/network-filesystems/xtreemfs.nix>

## services.xtreemfs.dir.uuid

Must be set to a unique identifier, preferably a UUID according to RFC 4122. UUIDs can be generated with uuidgen command, found in the util-linux package. Type: string Example: "eacb6bab-f444-4ebf-a06a-3f72d7465e40" Declared by: <nixpkgs/nixos/modules/services/network-filesystems/xtreemfs.nix>
