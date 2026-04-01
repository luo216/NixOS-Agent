---
module: services.xmrig
option_count: 3
source: options.html
---

# services.xmrig

## services.xmrig.enable

Whether to enable XMRig Mining Software. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/misc/xmrig.nix>

## services.xmrig.package

The xmrig package to use. Type: package Default: pkgs.xmrig Example: xmrig-mo Declared by: <nixpkgs/nixos/modules/services/misc/xmrig.nix>

## services.xmrig.settings

XMRig configuration. Refer to https://xmrig.com/docs/miner/config for details on supported values. Type: JSON value Default: { } Example: { autosave = true; cpu = true; opencl = false; cuda = false; pools = [ { url = "pool.supportxmr.com:443"; user = "your-wallet"; keepalive = true; tls = true; } ] } Declared by: <nixpkgs/nixos/modules/services/misc/xmrig.nix>
