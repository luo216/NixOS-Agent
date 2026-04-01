---
module: services.hostapd.radios.<name>.networks.<name>.authentication.saePasswords.*
option_count: 6
source: options.html
---

# services.hostapd.radios.<name>.networks.<name>.authentication.saePasswords.*

## services.hostapd.radios.<name>.networks.<name>.authentication.saePasswords.*.id

If this attribute is given with non-zero length, it will set the password identifier for this entry. It can then only be used with that identifier. Type: null or string Default: null Example: "" Declared by: <nixpkgs/nixos/modules/services/networking/hostapd.nix>

## services.hostapd.radios.<name>.networks.<name>.authentication.saePasswords.*.mac

If this attribute is not included, or if is set to the wildcard address (ff:ff:ff:ff:ff:ff), the entry is available for any station (client) to use. If a specific peer MAC address is included, only a station with that MAC address is allowed to use the entry. Type: null or string Default: null Example: "11:22:33:44:55:66" Declared by: <nixpkgs/nixos/modules/services/networking/hostapd.nix>

## services.hostapd.radios.<name>.networks.<name>.authentication.saePasswords.*.password

The password for this entry. SAE technically imposes no restrictions on password length or character set. But due to limitations of hostapd’s config file format, a true newline character cannot be parsed. Warning: This password will get put into a world-readable file in the Nix store! Prefer using the sibling option passwordFile or directly set saePasswordsFile. Type: null or string Default: null Example: "a flakey password" Declared by: <nixpkgs/nixos/modules/services/networking/hostapd.nix>

## services.hostapd.radios.<name>.networks.<name>.authentication.saePasswords.*.passwordFile

The password for this entry, read from the given file when starting hostapd. SAE technically imposes no restrictions on password length or character set. But due to limitations of hostapd’s config file format, a true newline character cannot be parsed. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/networking/hostapd.nix>

## services.hostapd.radios.<name>.networks.<name>.authentication.saePasswords.*.pk

If this attribute is given, SAE-PK will be enabled for this connection. This prevents evil-twin attacks, but a public key is required additionally to connect. (Essentially adds pubkey authentication such that the client can verify identity of the AP) Type: null or string Default: null Example: "" Declared by: <nixpkgs/nixos/modules/services/networking/hostapd.nix>

## services.hostapd.radios.<name>.networks.<name>.authentication.saePasswords.*.vlanid

If this attribute is given, all clients using this entry will get tagged with the given VLAN ID. Type: null or (unsigned integer, meaning >=0) Default: null Example: 1 Declared by: <nixpkgs/nixos/modules/services/networking/hostapd.nix>
