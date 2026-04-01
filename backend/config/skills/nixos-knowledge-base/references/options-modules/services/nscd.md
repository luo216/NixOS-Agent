---
module: services.nscd
option_count: 6
source: options.html
---

# services.nscd

## services.nscd.enable

Whether to enable the Name Service Cache Daemon. Disabling this is strongly discouraged, as this effectively disables NSS Lookups from all non-glibc NSS modules, including the ones provided by systemd. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/system/nscd.nix>

## services.nscd.enableNsncd

Whether to use nsncd instead of nscd from glibc. This is a nscd-compatible daemon, that proxies lookups, without any caching. Using nscd from glibc is discouraged. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/system/nscd.nix>

## services.nscd.package

package containing the nscd binary to be used by the service. Ignored when enableNsncd is set to true. Type: package Default: if pkgs.stdenv.hostPlatform.libc == "glibc" then pkgs.stdenv.cc.libc.bin else pkgs.glibc.bin; Declared by: <nixpkgs/nixos/modules/services/system/nscd.nix>

## services.nscd.config

Configuration to use for Name Service Cache Daemon. Only used in case glibc-nscd is used. Type: strings concatenated with “\n” Default: '' # We basically use nscd as a proxy for forwarding nss requests to appropriate # nss modules, as we run nscd with LD_LIBRARY_PATH set to the directory # containing all such modules # Note that we can not use `enable-cache no` As this will actually cause nscd # to just reject the nss requests it receives, which then causes glibc to # fallback to trying to handle the request by itself. Which won't work as glibc # is not aware of the path in which the nss modules live. As a workaround, we # have `enable-cache yes` with an explicit ttl of 0 server-user nscd enable-cache passwd yes positive-time-to-live passwd 0 negative-time-to-live passwd 0 shared passwd yes enable-cache group yes positive-time-to-live group 0 negative-time-to-live group 0 shared group yes enable-cache netgroup yes positive-time-to-live netgroup 0 negative-time-to-live netgroup 0 shared netgroup yes enable-cache hosts yes positive-time-to-live hosts 0 negative-time-to-live hosts 0 shared hosts yes enable-cache services yes positive-time-to-live services 0 negative-time-to-live services 0 shared services yes '' Declared by: <nixpkgs/nixos/modules/services/system/nscd.nix>

## services.nscd.group

User group under which nscd runs. Type: string Default: "nscd" Declared by: <nixpkgs/nixos/modules/services/system/nscd.nix>

## services.nscd.user

User account under which nscd runs. Type: string Default: "nscd" Declared by: <nixpkgs/nixos/modules/services/system/nscd.nix>
