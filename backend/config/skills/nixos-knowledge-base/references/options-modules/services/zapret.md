---
module: services.zapret
option_count: 11
source: options.html
---

# services.zapret

## services.zapret.enable

Whether to enable the Zapret DPI bypass service… Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/zapret.nix>

## services.zapret.package

The zapret package to use. Type: package Default: pkgs.zapret Declared by: <nixpkgs/nixos/modules/services/networking/zapret.nix>

## services.zapret.blacklist

Specify a list of domains NOT to bypass. All other domains will be bypassed. You can specify either whitelist or blacklist, but not both. If neither are specified, then bypass all domains. Type: list of string Default: [ ] Example: [ "example.com" ] Declared by: <nixpkgs/nixos/modules/services/networking/zapret.nix>

## services.zapret.configureFirewall

Whether to setup firewall routing so that system http(s) traffic is forwarded via this service. Disable if you want to set it up manually. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/networking/zapret.nix>

## services.zapret.httpMode

By default this service only changes the first packet sent, which is enough in most cases. But there are DPIs that monitor the whole traffic within a session. That requires full processing of every packet, which increases the CPU usage. Set the mode to full if http doesn’t work. Type: one of “first”, “full” Default: "first" Example: "full" Declared by: <nixpkgs/nixos/modules/services/networking/zapret.nix>

## services.zapret.httpSupport

Whether to route http traffic on port 80. Http bypass rarely works and you might want to disable it if you don’t utilise http connections. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/networking/zapret.nix>

## services.zapret.params

Specify the bypass parameters for Zapret binary. There are no universal parameters as they vary between different networks, so you’ll have to find them yourself. This can be done by running the blockcheck binary from zapret package, i.e. nix-shell -p nftables zapret --command blockcheck (or iptables instead of nftables if that is what your firewall is using). It’ll try different params and then tell you which params are working for your network. Type: list of string Default: [ ] Example: [ "--dpi-desync=fake,disorder2" "--dpi-desync-ttl=1" "--dpi-desync-autottl=2" ] Declared by: <nixpkgs/nixos/modules/services/networking/zapret.nix>

## services.zapret.qnum

Routing queue number. Only change this if you already use the default queue number somewhere else. Type: signed integer Default: 200 Declared by: <nixpkgs/nixos/modules/services/networking/zapret.nix>

## services.zapret.udpPorts

List of UDP ports to route. Port ranges are delimited with a colon like this “50000:50099”. Type: list of string Default: [ ] Example: [ "50000:50099" "1234" ] Declared by: <nixpkgs/nixos/modules/services/networking/zapret.nix>

## services.zapret.udpSupport

Enable UDP routing. This requires you to specify udpPorts and --dpi-desync-any-protocol parameter. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/zapret.nix>

## services.zapret.whitelist

Specify a list of domains to bypass. All other domains will be ignored. You can specify either whitelist or blacklist, but not both. If neither are specified, then bypass all domains. It is recommended to specify the whitelist. This will make sure that other resources won’t be affected by this service. Type: list of string Default: [ ] Example: [ "youtube.com" "googlevideo.com" "ytimg.com" "youtu.be" ] Declared by: <nixpkgs/nixos/modules/services/networking/zapret.nix>
