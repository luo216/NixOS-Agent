---
module: services.veilid.settings.core.protected_store
option_count: 3
source: options.html
---

# services.veilid.settings.core.protected_store

## services.veilid.settings.core.protected_store.allow_insecure_fallback

If we can’t use system-provided secure storage, should we proceed anyway? Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/networking/veilid.nix>

## services.veilid.settings.core.protected_store.always_use_insecure_storage

Should we bypass any attempt to use system-provided secure storage? Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/networking/veilid.nix>

## services.veilid.settings.core.protected_store.directory

The filesystem directory to store your protected store in. Type: string Default: "/var/db/veilid-server/protected_store" Declared by: <nixpkgs/nixos/modules/services/networking/veilid.nix>
