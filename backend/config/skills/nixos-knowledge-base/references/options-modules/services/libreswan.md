---
module: services.libreswan
option_count: 5
source: options.html
---

# services.libreswan

## services.libreswan.enable

Whether to enable Libreswan IPsec service. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/libreswan.nix>

## services.libreswan.configSetup

Options to go in the ‘config setup’ section of the Libreswan IPsec configuration Type: strings concatenated with “\n” Default: '' protostack=netkey virtual_private=%v4:10.0.0.0/8,%v4:192.168.0.0/16,%v4:172.16.0.0/12,%v4:25.0.0.0/8,%v4:100.64.0.0/10,%v6:fd00::/8,%v6:fe80::/10 '' Example: '' secretsfile=/root/ipsec.secrets protostack=netkey virtual_private=%v4:10.0.0.0/8,%v4:192.168.0.0/16,%v4:172.16.0.0/12,%v4:25.0.0.0/8,%v4:100.64.0.0/10,%v6:fd00::/8,%v6:fe80::/10 '' Declared by: <nixpkgs/nixos/modules/services/networking/libreswan.nix>

## services.libreswan.connections

A set of connections to define for the Libreswan IPsec service Type: attribute set of strings concatenated with “\n” Default: { } Example: { myconnection = '' auto=add left=%defaultroute leftid=@user right=my.vpn.com ikev2=no ikelifetime=8h ''; } Declared by: <nixpkgs/nixos/modules/services/networking/libreswan.nix>

## services.libreswan.disableRedirects

Whether to disable send and accept redirects for all network interfaces. See the Libreswan FAQ page for why this is recommended. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/networking/libreswan.nix>

## services.libreswan.policies

A set of policies to apply to the IPsec connections. Note The policy name must match the one of connection it needs to apply to. Type: attribute set of strings concatenated with “\n” Default: { } Example: { private-or-clear = '' # Attempt opportunistic IPsec for the entire Internet 0.0.0.0/0 ::/0 ''; } Declared by: <nixpkgs/nixos/modules/services/networking/libreswan.nix>
