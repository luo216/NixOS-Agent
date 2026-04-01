---
module: services.cntlm
option_count: 10
source: options.html
---

# services.cntlm

## services.cntlm.enable

Whether to enable cntlm, which starts a local proxy. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/cntlm.nix>

## services.cntlm.configText

Verbatim contents of cntlm.conf. Type: strings concatenated with “\n” Default: "" Declared by: <nixpkgs/nixos/modules/services/networking/cntlm.nix>

## services.cntlm.domain

Proxy account domain/workgroup name. Type: string Declared by: <nixpkgs/nixos/modules/services/networking/cntlm.nix>

## services.cntlm.extraConfig

Additional config appended to the end of the generated cntlm.conf. Type: strings concatenated with “\n” Default: "" Declared by: <nixpkgs/nixos/modules/services/networking/cntlm.nix>

## services.cntlm.netbios_hostname

The hostname of your machine. Type: string Default: "" Declared by: <nixpkgs/nixos/modules/services/networking/cntlm.nix>

## services.cntlm.noproxy

A list of domains where the proxy is skipped. Type: list of string Default: [ ] Example: [ "*.example.com" "example.com" ] Declared by: <nixpkgs/nixos/modules/services/networking/cntlm.nix>

## services.cntlm.password

Proxy account password. Note: use chmod 0600 on /etc/cntlm.password for security. Type: string Default: "/etc/cntlm.password" Declared by: <nixpkgs/nixos/modules/services/networking/cntlm.nix>

## services.cntlm.port

Specifies on which ports the cntlm daemon listens. Type: list of 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: [ 3128 ] Declared by: <nixpkgs/nixos/modules/services/networking/cntlm.nix>

## services.cntlm.proxy

A list of NTLM/NTLMv2 authenticating HTTP proxies. Parent proxy, which requires authentication. The same as proxy on the command-line, can be used more than once to specify unlimited number of proxies. Should one proxy fail, cntlm automatically moves on to the next one. The connect request fails only if the whole list of proxies is scanned and (for each request) and found to be invalid. Command-line takes precedence over the configuration file. Type: list of string Example: [ "proxy.example.com:81" ] Declared by: <nixpkgs/nixos/modules/services/networking/cntlm.nix>

## services.cntlm.username

Proxy account name, without the possibility to include domain name (‘at’ sign is interpreted literally). Type: string Declared by: <nixpkgs/nixos/modules/services/networking/cntlm.nix>
