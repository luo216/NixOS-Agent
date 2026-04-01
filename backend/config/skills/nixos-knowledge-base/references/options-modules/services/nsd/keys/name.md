---
module: services.nsd.keys.<name>
option_count: 2
source: options.html
---

# services.nsd.keys.<name>

## services.nsd.keys.<name>.algorithm

Authentication algorithm for this key. Type: string Default: "hmac-sha256" Declared by: <nixpkgs/nixos/modules/services/networking/nsd.nix>

## services.nsd.keys.<name>.keyFile

Path to the file which contains the actual base64 encoded key. The key will be copied into “/var/lib/nsd/private” before NSD starts. The copied file is only accessibly by the NSD user. Type: absolute path Declared by: <nixpkgs/nixos/modules/services/networking/nsd.nix>
