---
module: networking.networkmanager.ensureProfiles.secrets
option_count: 2
source: options.html
---

# networking.networkmanager.ensureProfiles.secrets

## networking.networkmanager.ensureProfiles.secrets.package

The nm-file-secret-agent package to use. Type: package Default: pkgs.nm-file-secret-agent Declared by: <nixpkgs/nixos/modules/services/networking/nm-file-secret-agent.nix>

## networking.networkmanager.ensureProfiles.secrets.entries

A list of secrets to provide to NetworkManager by reading their values from configured files. Note that NetworkManager should be configured to read secrets from a secret agent. This can be done for example through the networking.networkmanager.ensureProfiles.profiles options. Type: list of (submodule) Default: [ ] Example: [ { file = "/root/wireguard_key"; key = "private-key"; matchId = "My WireGuard VPN"; matchSetting = "wireguard"; matchType = "wireguard"; } ] Declared by: <nixpkgs/nixos/modules/services/networking/nm-file-secret-agent.nix>
