---
module: services.diod
option_count: 13
source: options.html
---

# services.diod

## services.diod.enable

Whether to enable the diod 9P file server. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/network-filesystems/diod.nix>

## services.diod.allsquash

Remap all users to “nobody”. The attaching user need not be present in the password file. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/network-filesystems/diod.nix>

## services.diod.authRequired

Allow clients to connect without authentication, i.e. without a valid MUNGE credential. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/network-filesystems/diod.nix>

## services.diod.exportall

Export all file systems listed in /proc/mounts. If new file systems are mounted after diod has started, they will become immediately mountable. If there is a duplicate entry for a file system in the exports list, any options listed in the exports entry will apply. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/network-filesystems/diod.nix>

## services.diod.exportopts

Establish a default set of export options. These are overridden, not appended to, by opts attributes in an “exports” entry. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/network-filesystems/diod.nix>

## services.diod.exports

List the file systems that clients will be allowed to mount. All paths should be fully qualified. The exports table can include two types of element: a string element (as above), or an alternate table element form { path=“/path”, opts=“ro” }. In the alternate form, the (optional) opts attribute is a comma-separated list of export options. The two table element forms can be mixed in the exports table. Note that although diod will not traverse file system boundaries for a given mount due to inode uniqueness constraints, subdirectories of a file system can be separately exported. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/network-filesystems/diod.nix>

## services.diod.extraConfig

Extra configuration options for diod.conf. Type: strings concatenated with “\n” Default: "" Declared by: <nixpkgs/nixos/modules/services/network-filesystems/diod.nix>

## services.diod.listen

[ “IP:PORT” [,“IP:PORT”,…] ] List the interfaces and ports that diod should listen on. Type: list of string Default: [ "0.0.0.0:564" ] Declared by: <nixpkgs/nixos/modules/services/network-filesystems/diod.nix>

## services.diod.logdest

Set the destination for logging. The value has the form of “syslog:facility:level” or “filename”. Type: string Default: "syslog:daemon:err" Declared by: <nixpkgs/nixos/modules/services/network-filesystems/diod.nix>

## services.diod.nwthreads

Sets the (fixed) number of worker threads created to handle 9P requests for a unique aname. Type: signed integer Default: 16 Declared by: <nixpkgs/nixos/modules/services/network-filesystems/diod.nix>

## services.diod.squashuser

Change the squash user. The squash user must be present in the password file. Type: string Default: "nobody" Declared by: <nixpkgs/nixos/modules/services/network-filesystems/diod.nix>

## services.diod.statfsPassthru

This option configures statfs to return the host file system’s type rather than V9FS_MAGIC. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/network-filesystems/diod.nix>

## services.diod.userdb

This option disables password/group lookups. It allows any uid to attach and assumes gid=uid, and supplementary groups contain only the primary gid. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/network-filesystems/diod.nix>
