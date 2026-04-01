---
module: security.agnos.settings.accounts.*
option_count: 3
source: options.html
---

# security.agnos.settings.accounts.*

## security.agnos.settings.accounts.*.certificates

Certificates for agnos to issue or renew. Type: list of (open submodule of attribute set of (TOML value)) Declared by: <nixpkgs/nixos/modules/security/agnos.nix>

## security.agnos.settings.accounts.*.email

Email associated with this account. Type: string Declared by: <nixpkgs/nixos/modules/security/agnos.nix>

## security.agnos.settings.accounts.*.private_key_path

Path of the PEM-encoded private key for this account. Currently, only RSA keys are supported. If this path does not exist, then the behavior depends on generateKeys.enable. When this option is true, the key will be automatically generated and saved to this path. When it is false, agnos will fail. If a relative path is specified, the key will be looked up (or generated and saved to) under /var/lib/agnos. Type: string Declared by: <nixpkgs/nixos/modules/security/agnos.nix>
