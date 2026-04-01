---
module: security.pam.rssh
option_count: 2
source: options.html
---

# security.pam.rssh

## security.pam.rssh.enable

Whether to enable authenticating using a signature performed by the ssh-agent. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/security/pam.nix>

## security.pam.rssh.settings

Options to pass to the pam_rssh module. Refer to https://github.com/z4yx/pam_rssh/blob/main/README.md#optional-arguments for supported values. Boolean values render just the key if true, and nothing if false. Null values are ignored. All other values are rendered as key-value pairs. Type: open submodule of attribute set of (null or boolean or string or signed integer or path in the Nix store) Default: { } Declared by: <nixpkgs/nixos/modules/security/pam.nix>
