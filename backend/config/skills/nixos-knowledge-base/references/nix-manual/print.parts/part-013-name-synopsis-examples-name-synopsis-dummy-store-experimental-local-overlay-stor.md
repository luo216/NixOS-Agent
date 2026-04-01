---
title: "Nix 2.28.6 Reference Manual"
source: print.html
---
## Name

nix help - show help about nix or a particular subcommand

## Synopsis

nix help [option...] subcommand...

## Examples

Show help about nix in general: # nix help Show help about a particular subcommand: # nix help flake info

### Logging-related options

--debug Set the logging verbosity level to 'debug'. --log-format format Set the format of log output; one of raw, internal-json, bar or bar-with-logs. --print-build-logs / -L Print full build logs on standard error. --quiet Decrease the logging verbosity level. --verbose / -v Increase the logging verbosity level.

### Miscellaneous global options

--help Show usage information. --offline Disable substituters and consider all previously downloaded files up-to-date. --option name value Set the Nix configuration setting name to value (overriding nix.conf). --refresh Consider all previously downloaded files out-of-date. --version Show version information. Note See man nix.conf for overriding configuration settings with command line flags. Warning This program is experimental and its interface is subject to change.

## Name

nix help-stores - show help about store types and their settings

## Synopsis

nix help-stores [option...] Nix supports different types of stores: Dummy Store Experimental Local Overlay Store Experimental SSH Store Experimental SSH Store with filesystem mounted HTTP Binary Cache Store Local Binary Cache Store Local Daemon Store Local Store S3 Binary Cache Store SSH Store

### Store URL format

Stores are specified using a URL-like syntax. For example, the command # nix path-info --store https://cache.nixos.org/ --json \ /nix/store/a7gvj343m05j2s32xcnwr35v31ynlypr-coreutils-9.1 fetches information about a store path in the HTTP binary cache located at https://cache.nixos.org/, which is a type of store. Store URLs can specify store settings using URL query strings, i.e. by appending ?name1=value1&name2=value2&... to the URL. For instance, --store ssh://machine.example.org?ssh-key=/path/to/my/key tells Nix to access the store on a remote machine via the SSH protocol, using /path/to/my/key as the SSH private key. The supported settings for each store type are documented below. The special store URL auto causes Nix to automatically select a store as follows: Use the local store /nix/store if /nix/var/nix is writable by the current user. Otherwise, if /nix/var/nix/daemon-socket/socket exists, connect to the Nix daemon listening on that socket. Otherwise, on Linux only, use the local chroot store ~/.local/share/nix/root, which will be created automatically if it does not exist. Otherwise, use the local store /nix/store.

## Dummy Store

Store URL format: dummy:// This store type represents a store that contains no store paths and cannot be written to. It's useful when you want to use the Nix evaluator when no actual Nix store exists, e.g. # nix eval --store dummy:// --expr '1 + 2'

### Settings

path-info-cache-size Size of the in-memory store path metadata cache. Default: 65536 priority Priority of this store when used as a substituter. A lower value means a higher priority. Default: 0 store Logical location of the Nix store, usually /nix/store. Note that you can only copy store paths between stores if they have the same store setting. Default: /nix/store system-features Optional system features available on the system this store uses to build derivations. Example: "kvm" Default: machine-specific trusted Whether paths from this store can be used as substitutes even if they are not signed by a key listed in the trusted-public-keys setting. Default: false want-mass-query Whether this store can be queried efficiently for path validity when used as a substituter. Default: false

## Experimental Local Overlay Store

Warning This store is part of an experimental feature. To use this store, make sure the local-overlay-store experimental feature is enabled. For example, include the following in nix.conf: extra-experimental-features = local-overlay-store Store URL format: local-overlay This store type is a variation of the [local store] designed to leverage Linux's Overlay Filesystem (OverlayFS for short). Just as OverlayFS combines a lower and upper filesystem by treating the upper one as a patch against the lower, the local overlay store combines a lower store with an upper almost-[local store]. ("almost" because while the upper filesystems for OverlayFS is valid on its own, the upper almost-store is not a valid local store on its own because some references will dangle.) To use this store, you will first need to configure an OverlayFS mountpoint appropriately as Nix will not do this for you (though it will verify the mountpoint is configured correctly).

#### Conceptual parts of a local overlay store

This is a more abstract/conceptual description of the parts of a layered store, an authoritative reference. For more "practical" instructions, see the worked-out example in the next subsection. The parts of a local overlay store are as follows: Lower store: Specified with the lower-store setting. This is any store implementation that includes a store directory as part of the native operating system filesystem. For example, this could be a [local store], [local daemon store], or even another local overlay store. The local overlay store never tries to modify the lower store in any way. Something else could modify the lower store, but there are restrictions on this Nix itself requires that this store only grow, and not change in other ways. For example, new store objects can be added, but deleting or modifying store objects is not allowed in general, because that will confuse and corrupt any local overlay store using those objects. (In addition, the underlying filesystem overlay mechanism may impose additional restrictions, see below.) The lower store must not change while it is mounted as part of an overlay store. To ensure it does not, you might want to mount the store directory read-only (which then requires the [read-only] parameter to be set to true). Lower store directory: Specified with lower-store.real setting. This is the directory used/exposed by the lower store. As specified above, Nix requires the local store can only grow not change in other ways. Linux's OverlayFS in addition imposes the further requirement that this directory cannot change at all. That means that, while any local overlay store exists that is using this store as a lower store, this directory must not change. Lower metadata source: Not directly specified. A consequence of the lower-store setting, depending on the type of lower store chosen. This is abstract, just some way to read the metadata of lower store store objects. For example it could be a SQLite database (for the [local store]), or a socket connection (for the [local daemon store]). This need not be writable. As stated above a local overlay store never tries to modify its lower store. The lower store's metadata is considered part of the lower store, just as the store's file system objects that appear in the store directory are. Upper almost-store: Not directly specified. Instead the constituent parts are independently specified as described below. This is almost but not quite just a [local store]. That is because taken in isolation, not as part of a local overlay store, by itself, it would appear corrupted. But combined with everything else as part of an overlay local store, it is valid. Upper layer directory: Specified with upper-layer setting. This contains additional store objects (or, strictly speaking, their file system objects that the local overlay store will extend the lower store with). Upper store directory: Specified with the real setting. This the same as the base local store setting, and can also be indirectly specified with the root setting. This contains all the store objects from each of the two directories. The lower store directory and upper layer directory are combined via OverlayFS to create this directory. Nix doesn't do this itself, because it typically wouldn't have the permissions to do so, so it is the responsibility of the user to set this up first. Nix can, however, optionally check that the OverlayFS mount settings appear as expected, matching Nix's own settings. Upper SQLite database: Not directly specified. The location of the database instead depends on the state setting. It is always ${state}/db. This contains the metadata of all of the upper layer store objects (everything beyond their file system objects), and also duplicate copies of some lower layer store object's metadata. The duplication is so the metadata for the closure of upper layer store objects can be found entirely within the upper layer. (This allows us to use the same SQL Schema as the [local store]'s SQLite database, as foreign keys in that schema enforce closure metadata to be self-contained in this way.)

#### Example filesystem layout

Here is a worked out example of usage, following the concepts in the previous section. Say we have the following paths: /mnt/example/merged-store/nix/store /mnt/example/store-a/nix/store /mnt/example/store-b Then the following store URI can be used to access a local-overlay store at /mnt/example/merged-store: local-overlay://?root=/mnt/example/merged-store&lower-store=/mnt/example/store-a&upper-layer=/mnt/example/store-b The lower store directory is located at /mnt/example/store-a/nix/store, while the upper layer is at /mnt/example/store-b. Before accessing the overlay store you will need to ensure the OverlayFS mount is set up correctly: mount -t overlay overlay \ -o lowerdir="/mnt/example/store-a/nix/store" \ -o upperdir="/mnt/example/store-b" \ -o workdir="/mnt/example/workdir" \ "/mnt/example/merged-store/nix/store" Note that OverlayFS requires /mnt/example/workdir to be on the same volume as the upperdir. By default, Nix will check that the mountpoint as been set up correctly and fail with an error if it has not. You can override this behaviour by passing check-mount=false if you need to.

### Settings

check-mount Check that the overlay filesystem is correctly mounted. Nix does not manage the overlayfs mount point itself, but the correct functioning of the overlay store does depend on this mount point being set up correctly. Rather than just assume this is the case, check that the lowerdir and upperdir options are what we expect them to be. This check is on by default, but can be disabled if needed. Default: true log directory where Nix will store log files. Default: /nix/var/log/nix lower-store Store URL for the lower store. The default is auto (i.e. use the Nix daemon or /nix/store directly). Must be a store with a store dir on the file system. Must be used as OverlayFS lower layer for this store's store dir. Default: empty path-info-cache-size Size of the in-memory store path metadata cache. Default: 65536 priority Priority of this store when used as a substituter. A lower value means a higher priority. Default: 0 read-only Allow this store to be opened when its database is on a read-only filesystem. Normally Nix will attempt to open the store database in read-write mode, even for querying (when write access is not needed), causing it to fail if the database is on a read-only filesystem. Enable read-only mode to disable locking and open the SQLite database with the immutable parameter set. Warning Do not use this unless the filesystem is read-only. Using it when the filesystem is writable can cause incorrect query results or corruption errors if the database is changed by another process. While the filesystem the database resides on might appear to be read-only, consider whether another user or system might have write access to it. Default: false real Physical path of the Nix store. Default: /nix/store remount-hook Script or other executable to run when overlay filesystem needs remounting. This is occasionally necessary when deleting a store path that exists in both upper and lower layers. In such a situation, bypassing OverlayFS and deleting the path in the upper layer directly is the only way to perform the deletion without creating a "whiteout". However this causes the OverlayFS kernel data structures to get out-of-sync, and can lead to 'stale file handle' errors; remounting solves the problem. The store directory is passed as an argument to the invoked executable. Default: empty require-sigs Whether store paths copied into this store should have a trusted signature. Default: true root Directory prefixed to all other paths. Default: `` state Directory where Nix will store state. Default: /dummy store Logical location of the Nix store, usually /nix/store. Note that you can only copy store paths between stores if they have the same store setting. Default: /nix/store system-features Optional system features available on the system this store uses to build derivations. Example: "kvm" Default: machine-specific trusted Whether paths from this store can be used as substitutes even if they are not signed by a key listed in the trusted-public-keys setting. Default: false upper-layer Directory containing the OverlayFS upper layer for this store's store dir. Default: empty want-mass-query Whether this store can be queried efficiently for path validity when used as a substituter. Default: false

## Experimental SSH Store with filesystem mounted

Warning This store is part of an experimental feature. To use this store, make sure the mounted-ssh-store experimental feature is enabled. For example, include the following in nix.conf: extra-experimental-features = mounted-ssh-store Store URL format: mounted-ssh-ng://[username@]hostname Experimental store type that allows full access to a Nix store on a remote machine, and additionally requires that store be mounted in the local file system. The mounting of that store is not managed by Nix, and must by managed manually. It could be accomplished with SSHFS or NFS, for example. The local file system is used to optimize certain operations. For example, rather than serializing Nix archives and sending over the Nix channel, we can directly access the file system data via the mount-point. The local file system is also used to make certain operations possible that wouldn't otherwise be. For example, persistent GC roots can be created if they reside on the same file system as the remote store: the remote side will create the symlinks necessary to avoid race conditions.

### Settings

base64-ssh-public-host-key The public host key of the remote machine. Default: empty compress Whether to enable SSH compression. Default: false log directory where Nix will store log files. Default: /nix/var/log/nix max-connection-age Maximum age of a connection before it is closed. Default: 4294967295 max-connections Maximum number of concurrent connections to the Nix daemon. Default: 1 path-info-cache-size Size of the in-memory store path metadata cache. Default: 65536 priority Priority of this store when used as a substituter. A lower value means a higher priority. Default: 0 real Physical path of the Nix store. Default: /nix/store remote-program Path to the nix-daemon executable on the remote machine. Default: nix-daemon remote-store Store URL to be used on the remote machine. The default is auto (i.e. use the Nix daemon or /nix/store directly). Default: empty root Directory prefixed to all other paths. Default: `` ssh-key Path to the SSH private key used to authenticate to the remote machine. Default: empty state Directory where Nix will store state. Default: /dummy store Logical location of the Nix store, usually /nix/store. Note that you can only copy store paths between stores if they have the same store setting. Default: /nix/store system-features Optional system features available on the system this store uses to build derivations. Example: "kvm" Default: machine-specific trusted Whether paths from this store can be used as substitutes even if they are not signed by a key listed in the trusted-public-keys setting. Default: false want-mass-query Whether this store can be queried efficiently for path validity when used as a substituter. Default: false

## Experimental SSH Store

Store URL format: ssh-ng://[username@]hostname Experimental store type that allows full access to a Nix store on a remote machine.

### Settings

base64-ssh-public-host-key The public host key of the remote machine. Default: empty compress Whether to enable SSH compression. Default: false max-connection-age Maximum age of a connection before it is closed. Default: 4294967295 max-connections Maximum number of concurrent connections to the Nix daemon. Default: 1 path-info-cache-size Size of the in-memory store path metadata cache. Default: 65536 priority Priority of this store when used as a substituter. A lower value means a higher priority. Default: 0 remote-program Path to the nix-daemon executable on the remote machine. Default: nix-daemon remote-store Store URL to be used on the remote machine. The default is auto (i.e. use the Nix daemon or /nix/store directly). Default: empty ssh-key Path to the SSH private key used to authenticate to the remote machine. Default: empty store Logical location of the Nix store, usually /nix/store. Note that you can only copy store paths between stores if they have the same store setting. Default: /nix/store system-features Optional system features available on the system this store uses to build derivations. Example: "kvm" Default: machine-specific trusted Whether paths from this store can be used as substitutes even if they are not signed by a key listed in the trusted-public-keys setting. Default: false want-mass-query Whether this store can be queried efficiently for path validity when used as a substituter. Default: false

## HTTP Binary Cache Store

Store URL format: http://..., https://... This store allows a binary cache to be accessed via the HTTP protocol.

### Settings

compression NAR compression method (xz, bzip2, gzip, zstd, or none). Default: xz compression-level The preset level to be used when compressing NARs. The meaning and accepted values depend on the compression method selected. -1 specifies that the default compression level should be used. Default: -1 index-debug-info Whether to index DWARF debug info files by build ID. This allows dwarffs to fetch debug info on demand Default: false local-nar-cache Path to a local cache of NARs fetched from this binary cache, used by commands such as nix store cat. Default: empty parallel-compression Enable multi-threaded compression of NARs. This is currently only available for xz and zstd. Default: false path-info-cache-size Size of the in-memory store path metadata cache. Default: 65536 priority Priority of this store when used as a substituter. A lower value means a higher priority. Default: 0 secret-key Path to the secret key used to sign the binary cache. Default: empty store Logical location of the Nix store, usually /nix/store. Note that you can only copy store paths between stores if they have the same store setting. Default: /nix/store system-features Optional system features available on the system this store uses to build derivations. Example: "kvm" Default: machine-specific trusted Whether paths from this store can be used as substitutes even if they are not signed by a key listed in the trusted-public-keys setting. Default: false want-mass-query Whether this store can be queried efficiently for path validity when used as a substituter. Default: false write-nar-listing Whether to write a JSON file that lists the files in each NAR. Default: false

## Local Binary Cache Store

Store URL format: file://path This store allows reading and writing a binary cache stored in path in the local filesystem. If path does not exist, it will be created. For example, the following builds or downloads nixpkgs#hello into the local store and then copies it to the binary cache in /tmp/binary-cache: # nix copy --to file:///tmp/binary-cache nixpkgs#hello

### Settings

compression NAR compression method (xz, bzip2, gzip, zstd, or none). Default: xz compression-level The preset level to be used when compressing NARs. The meaning and accepted values depend on the compression method selected. -1 specifies that the default compression level should be used. Default: -1 index-debug-info Whether to index DWARF debug info files by build ID. This allows dwarffs to fetch debug info on demand Default: false local-nar-cache Path to a local cache of NARs fetched from this binary cache, used by commands such as nix store cat. Default: empty parallel-compression Enable multi-threaded compression of NARs. This is currently only available for xz and zstd. Default: false path-info-cache-size Size of the in-memory store path metadata cache. Default: 65536 priority Priority of this store when used as a substituter. A lower value means a higher priority. Default: 0 secret-key Path to the secret key used to sign the binary cache. Default: empty store Logical location of the Nix store, usually /nix/store. Note that you can only copy store paths between stores if they have the same store setting. Default: /nix/store system-features Optional system features available on the system this store uses to build derivations. Example: "kvm" Default: machine-specific trusted Whether paths from this store can be used as substitutes even if they are not signed by a key listed in the trusted-public-keys setting. Default: false want-mass-query Whether this store can be queried efficiently for path validity when used as a substituter. Default: false write-nar-listing Whether to write a JSON file that lists the files in each NAR. Default: false

## Local Daemon Store

Store URL format: daemon, unix://path This store type accesses a Nix store by talking to a Nix daemon listening on the Unix domain socket path. The store pseudo-URL daemon is equivalent to unix:///nix/var/nix/daemon-socket/socket.

### Settings

log directory where Nix will store log files. Default: /nix/var/log/nix max-connection-age Maximum age of a connection before it is closed. Default: 4294967295 max-connections Maximum number of concurrent connections to the Nix daemon. Default: 1 path-info-cache-size Size of the in-memory store path metadata cache. Default: 65536 priority Priority of this store when used as a substituter. A lower value means a higher priority. Default: 0 real Physical path of the Nix store. Default: /nix/store root Directory prefixed to all other paths. Default: `` state Directory where Nix will store state. Default: /dummy store Logical location of the Nix store, usually /nix/store. Note that you can only copy store paths between stores if they have the same store setting. Default: /nix/store system-features Optional system features available on the system this store uses to build derivations. Example: "kvm" Default: machine-specific trusted Whether paths from this store can be used as substitutes even if they are not signed by a key listed in the trusted-public-keys setting. Default: false want-mass-query Whether this store can be queried efficiently for path validity when used as a substituter. Default: false

## Local Store

Store URL format: local, root This store type accesses a Nix store in the local filesystem directly (i.e. not via the Nix daemon). root is an absolute path that is prefixed to other directories such as the Nix store directory. The store pseudo-URL local denotes a store that uses / as its root directory. A store that uses a root other than / is called a chroot store. With such stores, the store directory is "logically" still /nix/store, so programs stored in them can only be built and executed by chroot-ing into root. Chroot stores only support building and running on Linux when mount namespaces and user namespaces are enabled. For example, the following uses /tmp/root as the chroot environment to build or download nixpkgs#hello and then execute it: # nix run --store /tmp/root nixpkgs#hello Hello, world! Here, the "physical" store location is /tmp/root/nix/store, and Nix's store metadata is in /tmp/root/nix/var/nix/db. It is also possible, but not recommended, to change the "logical" location of the Nix store from its default of /nix/store. This makes it impossible to use default substituters such as https://cache.nixos.org/, and thus you may have to build everything locally. Here is an example: # nix build --store 'local?store=/tmp/my-nix/store&state=/tmp/my-nix/state&log=/tmp/my-nix/log' nixpkgs#hello

### Settings

log directory where Nix will store log files. Default: /nix/var/log/nix path-info-cache-size Size of the in-memory store path metadata cache. Default: 65536 priority Priority of this store when used as a substituter. A lower value means a higher priority. Default: 0 read-only Allow this store to be opened when its database is on a read-only filesystem. Normally Nix will attempt to open the store database in read-write mode, even for querying (when write access is not needed), causing it to fail if the database is on a read-only filesystem. Enable read-only mode to disable locking and open the SQLite database with the immutable parameter set. Warning Do not use this unless the filesystem is read-only. Using it when the filesystem is writable can cause incorrect query results or corruption errors if the database is changed by another process. While the filesystem the database resides on might appear to be read-only, consider whether another user or system might have write access to it. Default: false real Physical path of the Nix store. Default: /nix/store require-sigs Whether store paths copied into this store should have a trusted signature. Default: true root Directory prefixed to all other paths. Default: `` state Directory where Nix will store state. Default: /dummy store Logical location of the Nix store, usually /nix/store. Note that you can only copy store paths between stores if they have the same store setting. Default: /nix/store system-features Optional system features available on the system this store uses to build derivations. Example: "kvm" Default: machine-specific trusted Whether paths from this store can be used as substitutes even if they are not signed by a key listed in the trusted-public-keys setting. Default: false want-mass-query Whether this store can be queried efficiently for path validity when used as a substituter. Default: false

## S3 Binary Cache Store

Store URL format: s3://bucket-name This store allows reading and writing a binary cache stored in an AWS S3 (or S3-compatible service) bucket. This store shares many idioms with the HTTP Binary Cache Store. For AWS S3, the binary cache URL for a bucket named example-nix-cache will be exactly s3://example-nix-cache. For S3 compatible binary caches, consult that cache's documentation.

#### Anonymous reads to your S3-compatible binary cache

If your binary cache is publicly accessible and does not require authentication, it is simplest to use the [HTTP Binary Cache Store] rather than S3 Binary Cache Store with https://example-nix-cache.s3.amazonaws.com instead of s3://example-nix-cache. Your bucket will need a bucket policy like the following to be accessible: { "Id": "DirectReads", "Version": "2012-10-17", "Statement": [ { "Sid": "AllowDirectReads", "Action": [ "s3:GetObject", "s3:GetBucketLocation" ], "Effect": "Allow", "Resource": [ "arn:aws:s3:::example-nix-cache", "arn:aws:s3:::example-nix-cache/*" ], "Principal": "*" } ] }

#### Authentication

Nix will use the default credential provider chain for authenticating requests to Amazon S3. Note that this means Nix will read environment variables and files with different idioms than with Nix's own settings, as implemented by the AWS SDK. Consult the documentation linked above for further details.

#### Authenticated reads to your S3 binary cache

Your bucket will need a bucket policy allowing the desired users to perform the s3:GetObject and s3:GetBucketLocation action on all objects in the bucket. The anonymous policy given above can be updated to have a restricted Principal to support this.

#### Authenticated writes to your S3-compatible binary cache

Your account will need an IAM policy to support uploading to the bucket: { "Version": "2012-10-17", "Statement": [ { "Sid": "UploadToCache", "Effect": "Allow", "Action": [ "s3:AbortMultipartUpload", "s3:GetBucketLocation", "s3:GetObject", "s3:ListBucket", "s3:ListBucketMultipartUploads", "s3:ListMultipartUploadParts", "s3:PutObject" ], "Resource": [ "arn:aws:s3:::example-nix-cache", "arn:aws:s3:::example-nix-cache/*" ] } ] }

#### Examples

With bucket policies and authentication set up as described above, uploading works via nix copy (experimental). To upload with a specific credential profile for Amazon S3: $ nix copy nixpkgs.hello \ --to 's3://example-nix-cache?profile=cache-upload®ion=eu-west-2' To upload to an S3-compatible binary cache: $ nix copy nixpkgs.hello --to \ 's3://example-nix-cache?profile=cache-upload&scheme=https&endpoint=minio.example.com'

### Settings

buffer-size Size (in bytes) of each part in multi-part uploads. Default: 5242880 compression NAR compression method (xz, bzip2, gzip, zstd, or none). Default: xz compression-level The preset level to be used when compressing NARs. The meaning and accepted values depend on the compression method selected. -1 specifies that the default compression level should be used. Default: -1 endpoint The URL of the endpoint of an S3-compatible service such as MinIO. Do not specify this setting if you're using Amazon S3. Note This endpoint must support HTTPS and will use path-based addressing instead of virtual host based addressing. Default: empty index-debug-info Whether to index DWARF debug info files by build ID. This allows dwarffs to fetch debug info on demand Default: false local-nar-cache Path to a local cache of NARs fetched from this binary cache, used by commands such as nix store cat. Default: empty log-compression Compression method for log/* files. It is recommended to use a compression method supported by most web browsers (e.g. brotli). Default: empty ls-compression Compression method for .ls files. Default: empty multipart-upload Whether to use multi-part uploads. Default: false narinfo-compression Compression method for .narinfo files. Default: empty parallel-compression Enable multi-threaded compression of NARs. This is currently only available for xz and zstd. Default: false path-info-cache-size Size of the in-memory store path metadata cache. Default: 65536 priority Priority of this store when used as a substituter. A lower value means a higher priority. Default: 0 profile The name of the AWS configuration profile to use. By default Nix will use the default profile. Default: empty region The region of the S3 bucket. If your bucket is not in us–east-1, you should always explicitly specify the region parameter. Default: us-east-1 scheme The scheme used for S3 requests, https (default) or http. This option allows you to disable HTTPS for binary caches which don't support it. Note HTTPS should be used if the cache might contain sensitive information. Default: empty secret-key Path to the secret key used to sign the binary cache. Default: empty store Logical location of the Nix store, usually /nix/store. Note that you can only copy store paths between stores if they have the same store setting. Default: /nix/store system-features Optional system features available on the system this store uses to build derivations. Example: "kvm" Default: machine-specific trusted Whether paths from this store can be used as substitutes even if they are not signed by a key listed in the trusted-public-keys setting. Default: false want-mass-query Whether this store can be queried efficiently for path validity when used as a substituter. Default: false write-nar-listing Whether to write a JSON file that lists the files in each NAR. Default: false

## SSH Store

Store URL format: ssh://[username@]hostname This store type allows limited access to a remote store on another machine via SSH.

### Settings

base64-ssh-public-host-key The public host key of the remote machine. Default: empty compress Whether to enable SSH compression. Default: false max-connections Maximum number of concurrent SSH connections. Default: 1 path-info-cache-size Size of the in-memory store path metadata cache. Default: 65536 priority Priority of this store when used as a substituter. A lower value means a higher priority. Default: 0 remote-program Path to the nix-store executable on the remote machine. Default: nix-store remote-store Store URL to be used on the remote machine. The default is auto (i.e. use the Nix daemon or /nix/store directly). Default: empty ssh-key Path to the SSH private key used to authenticate to the remote machine. Default: empty store Logical location of the Nix store, usually /nix/store. Note that you can only copy store paths between stores if they have the same store setting. Default: /nix/store system-features Optional system features available on the system this store uses to build derivations. Example: "kvm" Default: machine-specific trusted Whether paths from this store can be used as substitutes even if they are not signed by a key listed in the trusted-public-keys setting. Default: false want-mass-query Whether this store can be queried efficiently for path validity when used as a substituter. Default: false

### Logging-related options

--debug Set the logging verbosity level to 'debug'. --log-format format Set the format of log output; one of raw, internal-json, bar or bar-with-logs. --print-build-logs / -L Print full build logs on standard error. --quiet Decrease the logging verbosity level. --verbose / -v Increase the logging verbosity level.

### Miscellaneous global options

--help Show usage information. --offline Disable substituters and consider all previously downloaded files up-to-date. --option name value Set the Nix configuration setting name to value (overriding nix.conf). --refresh Consider all previously downloaded files out-of-date. --version Show version information. Note See man nix.conf for overriding configuration settings with command line flags. Warning This program is experimental and its interface is subject to change.

## Name

nix key - generate and convert Nix signing keys

## Synopsis

nix key [option...] subcommand where subcommand is one of the following: nix key convert-secret-to-public - generate a public key for verifying store paths from a secret key read from standard input nix key generate-secret - generate a secret key for signing store paths

### Logging-related options

--debug Set the logging verbosity level to 'debug'. --log-format format Set the format of log output; one of raw, internal-json, bar or bar-with-logs. --print-build-logs / -L Print full build logs on standard error. --quiet Decrease the logging verbosity level. --verbose / -v Increase the logging verbosity level.

### Miscellaneous global options

--help Show usage information. --offline Disable substituters and consider all previously downloaded files up-to-date. --option name value Set the Nix configuration setting name to value (overriding nix.conf). --refresh Consider all previously downloaded files out-of-date. --version Show version information. Note See man nix.conf for overriding configuration settings with command line flags. Warning This program is experimental and its interface is subject to change.

## Name

nix key convert-secret-to-public - generate a public key for verifying store paths from a secret key read from standard input

## Synopsis

nix key convert-secret-to-public [option...]

## Examples

Convert a secret key to a public key: # echo cache.example.org-0:E7lAO+MsPwTFfPXsdPtW8GKui/5ho4KQHVcAGnX+Tti1V4dUxoVoqLyWJ4YESuZJwQ67GVIksDt47og+tPVUZw== \ | nix key convert-secret-to-public cache.example.org-0:tVeHVMaFaKi8lieGBErmScEOuxlSJLA7eO6IPrT1VGc=

## Description

This command reads a Ed25519 secret key from standard input, and writes the corresponding public key to standard output. For more details, see nix key generate-secret.

### Logging-related options

--debug Set the logging verbosity level to 'debug'. --log-format format Set the format of log output; one of raw, internal-json, bar or bar-with-logs. --print-build-logs / -L Print full build logs on standard error. --quiet Decrease the logging verbosity level. --verbose / -v Increase the logging verbosity level.

### Miscellaneous global options

--help Show usage information. --offline Disable substituters and consider all previously downloaded files up-to-date. --option name value Set the Nix configuration setting name to value (overriding nix.conf). --refresh Consider all previously downloaded files out-of-date. --version Show version information. Note See man nix.conf for overriding configuration settings with command line flags. Warning This program is experimental and its interface is subject to change.

## Name

nix key generate-secret - generate a secret key for signing store paths

## Synopsis

nix key generate-secret [option...]

## Examples

Generate a new secret key: # nix key generate-secret --key-name cache.example.org-1 > ./secret-key We can then use this key to sign the closure of the Hello package: # nix build nixpkgs#hello # nix store sign --key-file ./secret-key --recursive ./result Finally, we can verify the store paths using the corresponding public key: # nix store verify --trusted-public-keys $(nix key convert-secret-to-public < ./secret-key) ./result

## Description

This command generates a new Ed25519 secret key for signing store paths and prints it on standard output. Use nix key convert-secret-to-public to get the corresponding public key for verifying signed store paths. The mandatory argument --key-name specifies a key name (such as cache.example.org-1). It is used to look up keys on the client when it verifies signatures. It can be anything, but it’s suggested to use the host name of your cache (e.g. cache.example.org) with a suffix denoting the number of the key (to be incremented every time you need to revoke a key).

## Format

Both secret and public keys are represented as the key name followed by a base-64 encoding of the Ed25519 key data, e.g. cache.example.org-0:E7lAO+MsPwTFfPXsdPtW8GKui/5ho4KQHVcAGnX+Tti1V4dUxoVoqLyWJ4YESuZJwQ67GVIksDt47og+tPVUZw==

## Options

--key-name name Identifier of the key (e.g. cache.example.org-1).

### Logging-related options

--debug Set the logging verbosity level to 'debug'. --log-format format Set the format of log output; one of raw, internal-json, bar or bar-with-logs. --print-build-logs / -L Print full build logs on standard error. --quiet Decrease the logging verbosity level. --verbose / -v Increase the logging verbosity level.

### Miscellaneous global options

--help Show usage information. --offline Disable substituters and consider all previously downloaded files up-to-date. --option name value Set the Nix configuration setting name to value (overriding nix.conf). --refresh Consider all previously downloaded files out-of-date. --version Show version information. Note See man nix.conf for overriding configuration settings with command line flags. Warning This program is experimental and its interface is subject to change.

## Name

nix log - show the build log of the specified packages or paths, if available

## Synopsis

nix log [option...] installable

## Examples

Get the build log of GNU Hello: # nix log nixpkgs#hello Get the build log of a specific store path: # nix log /nix/store/lmngj4wcm9rkv3w4dfhzhcyij3195hiq-thunderbird-52.2.1 Get a build log from a specific binary cache: # nix log --store https://cache.nixos.org nixpkgs#hello

## Description

This command prints the log of a previous build of the installable on standard output. Nix looks for build logs in two places: In the directory /nix/var/log/nix/drvs, which contains logs for locally built derivations. In the binary caches listed in the substituters setting. Logs should be named <cache>/log/<base-name-of-store-path>, where store-path is a derivation, e.g. https://cache.nixos.org/log/dvmig8jgrdapvbyxb1rprckdmdqx08kv-hello-2.10.drv. For non-derivation store paths, Nix will first try to determine the deriver by fetching the .narinfo file for this store path.

### Common evaluation options

--arg name expr Pass the value expr as the argument name to Nix functions. --arg-from-file name path Pass the contents of file path as the argument name to Nix functions. --arg-from-stdin name Pass the contents of stdin as the argument name to Nix functions. --argstr name string Pass the string string as the argument name to Nix functions. --debugger Start an interactive environment if evaluation fails. --eval-store store-url The URL of the Nix store to use for evaluation, i.e. to store derivations (.drv files) and inputs referenced by them. --impure Allow access to mutable paths and repositories. --include / -I path Add path to search path entries used to resolve lookup paths This option may be given multiple times. Paths added through -I take precedence over the nix-path configuration setting and the NIX_PATH environment variable. --override-flake original-ref resolved-ref Override the flake registries, redirecting original-ref to resolved-ref.

### Common flake-related options

--commit-lock-file Commit changes to the flake's lock file. --inputs-from flake-url Use the inputs of the specified flake as registry entries. --no-registries Don't allow lookups in the flake registries. DEPRECATED Use --no-use-registries instead. --no-update-lock-file Do not allow any updates to the flake's lock file. --no-write-lock-file Do not write the flake's newly generated lock file. --output-lock-file flake-lock-path Write the given lock file instead of flake.lock within the top-level flake. --override-input input-path flake-url Override a specific flake input (e.g. dwarffs/nixpkgs). This implies --no-write-lock-file. --recreate-lock-file Recreate the flake's lock file from scratch. DEPRECATED Use nix flake update instead. --reference-lock-file flake-lock-path Read the given lock file instead of flake.lock within the top-level flake. --update-input input-path Update a specific flake input (ignoring its previous entry in the lock file). DEPRECATED Use nix flake update instead.

### Logging-related options

--debug Set the logging verbosity level to 'debug'. --log-format format Set the format of log output; one of raw, internal-json, bar or bar-with-logs. --print-build-logs / -L Print full build logs on standard error. --quiet Decrease the logging verbosity level. --verbose / -v Increase the logging verbosity level.

### Miscellaneous global options

--help Show usage information. --offline Disable substituters and consider all previously downloaded files up-to-date. --option name value Set the Nix configuration setting name to value (overriding nix.conf). --refresh Consider all previously downloaded files out-of-date. --repair During evaluation, rewrite missing or corrupted files in the Nix store. During building, rebuild missing or corrupted store paths. --version Show version information.

### Options that change the interpretation of installables

--expr expr Interpret installables as attribute paths relative to the Nix expression expr. --file / -f file Interpret installables as attribute paths relative to the Nix expression stored in file. If file is the character -, then a Nix expression will be read from standard input. Implies --impure. Note See man nix.conf for overriding configuration settings with command line flags. Warning This program is experimental and its interface is subject to change.

## Name

nix nar - create or inspect NAR files

## Synopsis

nix nar [option...] subcommand where subcommand is one of the following: nix nar cat - print the contents of a file inside a NAR file on stdout nix nar dump-path - serialise a path to stdout in NAR format nix nar ls - show information about a path inside a NAR file nix nar pack - serialise a path to stdout in NAR format

## Description

nix nar provides several subcommands for creating and inspecting Nix Archives (NARs).

## File format

For the definition of the Nix Archive file format, see within the protocols chapter of the manual.

### Logging-related options

--debug Set the logging verbosity level to 'debug'. --log-format format Set the format of log output; one of raw, internal-json, bar or bar-with-logs. --print-build-logs / -L Print full build logs on standard error. --quiet Decrease the logging verbosity level. --verbose / -v Increase the logging verbosity level.

### Miscellaneous global options

--help Show usage information. --offline Disable substituters and consider all previously downloaded files up-to-date. --option name value Set the Nix configuration setting name to value (overriding nix.conf). --refresh Consider all previously downloaded files out-of-date. --version Show version information. Note See man nix.conf for overriding configuration settings with command line flags. Warning This program is experimental and its interface is subject to change.

## Name

nix nar cat - print the contents of a file inside a NAR file on stdout

## Synopsis

nix nar cat [option...] nar path

## Examples

List a file in a Nix Archive (NAR) and pipe it through gunzip: # nix nar cat ./hello.nar /share/man/man1/hello.1.gz | gunzip .\" DO NOT MODIFY THIS FILE! It was generated by help2man 1.46.4. .TH HELLO "1" "November 2014" "hello 2.10" "User Commands" …
