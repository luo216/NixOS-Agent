---
module: security.agnos.settings.accounts.*.certificates.*
option_count: 3
source: options.html
---

# security.agnos.settings.accounts.*.certificates.*

## security.agnos.settings.accounts.*.certificates.*.domains

Domains the certificate represents Type: list of string Example: ["a.example.com", "b.example.com", "*b.example.com"] Declared by: <nixpkgs/nixos/modules/security/agnos.nix>

## security.agnos.settings.accounts.*.certificates.*.fullchain_output_file

Output path for the full chain including the acquired certificate. If a relative path is specified, the file will be created in /var/lib/agnos. Type: string Declared by: <nixpkgs/nixos/modules/security/agnos.nix>

## security.agnos.settings.accounts.*.certificates.*.key_output_file

Output path for the certificate private key. If a relative path is specified, the file will be created in /var/lib/agnos. Type: string Declared by: <nixpkgs/nixos/modules/security/agnos.nix>
