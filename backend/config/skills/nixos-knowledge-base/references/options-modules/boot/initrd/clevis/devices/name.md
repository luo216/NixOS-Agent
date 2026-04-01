---
module: boot.initrd.clevis.devices.<name>
option_count: 1
source: options.html
---

# boot.initrd.clevis.devices.<name>

## boot.initrd.clevis.devices.<name>.secretFile

Clevis JWE file used to decrypt the device at boot, in concert with the chosen pin (one of TPM2, Tang server, or SSS). Type: absolute path Declared by: <nixpkgs/nixos/modules/system/boot/clevis.nix>
