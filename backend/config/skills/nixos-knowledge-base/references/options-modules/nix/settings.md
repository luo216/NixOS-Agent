---
module: nix.settings
option_count: 12
source: options.html
---

# nix.settings

## nix.settings.allowed-users

A list of names of users (separated by whitespace) that are allowed to connect to the Nix daemon. As with nix.settings.trusted-users, you can specify groups by prefixing them with @. Also, you can allow all users by specifying *. The default is *. Note that trusted users are always allowed to connect. Type: list of string Default: [ "*" ] Example: [ "@wheel" "@builders" "alice" "bob" ] Declared by: <nixpkgs/nixos/modules/config/nix.nix>

## nix.settings.auto-optimise-store

If set to true, Nix automatically detects files in the store that have identical contents, and replaces them with hard links to a single copy. This saves disk space. If set to false (the default), you can still run nix-store --optimise to get rid of duplicate files. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/config/nix.nix>

## nix.settings.cores

This option defines the maximum number of concurrent tasks during one build. It affects, e.g., -j option for make. The special value 0 means that the builder should use all available CPU cores in the system. Some builds may become non-deterministic with this option; use with care! Packages will only be affected if enableParallelBuilding is set for them. Type: signed integer Default: 0 Example: 64 Declared by: <nixpkgs/nixos/modules/config/nix.nix>

## nix.settings.extra-sandbox-paths

Directories from the host filesystem to be included in the sandbox. Type: list of string Default: [ ] Example: [ "/dev" "/proc" ] Declared by: <nixpkgs/nixos/modules/config/nix.nix>

## nix.settings.max-jobs

This option defines the maximum number of jobs that Nix will try to build in parallel. The default is auto, which means it will use all available logical cores. It is recommend to set it to the total number of logical cores in your system (e.g., 16 for two CPUs with 4 cores each and hyper-threading). Type: signed integer or value “auto” (singular enum) Default: "auto" Example: 64 Declared by: <nixpkgs/nixos/modules/config/nix.nix>

## nix.settings.require-sigs

If enabled (the default), Nix will only download binaries from binary caches if they are cryptographically signed with any of the keys listed in nix.settings.trusted-public-keys. If disabled, signatures are neither required nor checked, so it’s strongly recommended that you use only trustworthy caches and https to prevent man-in-the-middle attacks. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/config/nix.nix>

## nix.settings.sandbox

If set, Nix will perform builds in a sandboxed environment that it will set up automatically for each build. This prevents impurities in builds by disallowing access to dependencies outside of the Nix store by using network and mount namespaces in a chroot environment. This is enabled by default even though it has a possible performance impact due to the initial setup time of a sandbox for each build. It doesn’t affect derivation hashes, so changing this option will not trigger a rebuild of packages. When set to “relaxed”, this option permits derivations that set __noChroot = true; to run outside of the sandboxed environment. Exercise caution when using this mode of operation! It is intended to be a quick hack when building with packages that are not easily setup to be built reproducibly. Type: boolean or value “relaxed” (singular enum) Default: true Declared by: <nixpkgs/nixos/modules/config/nix.nix>

## nix.settings.substituters

List of binary cache URLs used to obtain pre-built binaries of Nix packages. By default https://cache.nixos.org/ is added. Type: list of string Declared by: <nixpkgs/nixos/modules/config/nix.nix>

## nix.settings.system-features

The set of features supported by the machine. Derivations can express dependencies on system features through the requiredSystemFeatures attribute. Type: list of string Default: [ "nixos-test" "benchmark" "big-parallel" "kvm" "gccarch-<arch>" ] Declared by: <nixpkgs/nixos/modules/config/nix.nix>

## nix.settings.trusted-public-keys

List of public keys used to sign binary caches. If nix.settings.trusted-public-keys is enabled, then Nix will use a binary from a binary cache if and only if it is signed by any of the keys listed here. By default, only the key for cache.nixos.org is included. Type: list of string Example: [ "hydra.nixos.org-1:CNHJZBh9K4tP3EKF6FkkgeVYsS3ohTl+oS0Qa8bezVs=" ] Declared by: <nixpkgs/nixos/modules/config/nix.nix>

## nix.settings.trusted-substituters

List of binary cache URLs that non-root users can use (in addition to those specified using nix.settings.substituters) by passing --option binary-caches to Nix commands. Type: list of string Default: [ ] Example: [ "https://hydra.nixos.org/" ] Declared by: <nixpkgs/nixos/modules/config/nix.nix>

## nix.settings.trusted-users

A list of names of users that have additional rights when connecting to the Nix daemon, such as the ability to specify additional binary caches, or to import unsigned NARs. You can also specify groups by prefixing them with @; for instance, @wheel means all users in the wheel group. Type: list of string Example: [ "root" "alice" "@wheel" ] Declared by: <nixpkgs/nixos/modules/config/nix.nix>
