---
module: services.omnom.settings.activitypub
option_count: 2
source: options.html
---

# services.omnom.settings.activitypub

## services.omnom.settings.activitypub.privkey

ActivityPub private key. Will be generated, by default. Type: absolute path Default: "${config.services.omnom.dataDir}/private.pem" Declared by: <nixpkgs/nixos/modules/services/misc/omnom.nix>

## services.omnom.settings.activitypub.pubkey

ActivityPub public key. Will be generated, by default. Type: absolute path Default: "${config.services.omnom.dataDir}/public.pem" Declared by: <nixpkgs/nixos/modules/services/misc/omnom.nix>
