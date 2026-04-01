---
module: services.nextcloud-spreed-signaling.settings.sessions
option_count: 2
source: options.html
---

# services.nextcloud-spreed-signaling.settings.sessions

## services.nextcloud-spreed-signaling.settings.sessions.blockkeyFile

The path to the file containing the value for sessions.blockkey. Key for encrypting data in the sessions. Must be either 16, 24, or 32 bytes. Generate one using openssl rand -hex 16 Type: absolute path Example: "/run/secrets/sessions.blockkey" Declared by: <nixpkgs/nixos/modules/services/networking/nextcloud-spreed-signaling.nix>

## services.nextcloud-spreed-signaling.settings.sessions.hashkeyFile

The path to the file containing the value for sessions.hashkey. Secret value used to generate the checksums of sessions. This should be a random string of 32 or 64 bytes. Generate one using openssl rand -hex 32 Type: absolute path Example: "/run/secrets/sessions.hashkey" Declared by: <nixpkgs/nixos/modules/services/networking/nextcloud-spreed-signaling.nix>
