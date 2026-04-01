---
module: services.authelia
option_count: 1
source: options.html
---

# services.authelia

## services.authelia.instances

Multi-domain protection currently requires multiple instances of Authelia. If you don’t require multiple instances of Authelia you can define just the one. https://www.authelia.com/roadmap/active/multi-domain-protection/ Type: attribute set of (submodule) Default: { } Example: '' { main = { enable = true; secrets.storageEncryptionKeyFile = "/etc/authelia/storageEncryptionKeyFile"; secrets.jwtSecretFile = "/etc/authelia/jwtSecretFile"; settings = { theme = "light"; default_2fa_method = "totp"; log.level = "debug"; server.disable_healthcheck = true; }; }; preprod = { enable = false; secrets.storageEncryptionKeyFile = "/mnt/pre-prod/authelia/storageEncryptionKeyFile"; secrets.jwtSecretFile = "/mnt/pre-prod/jwtSecretFile"; settings = { theme = "dark"; default_2fa_method = "webauthn"; server.host = "0.0.0.0"; }; }; test.enable = true; test.secrets.manual = true; test.settings.theme = "grey"; test.settings.server.disable_healthcheck = true; test.settingsFiles = [ "/mnt/test/authelia" "/mnt/test-authelia.conf" ]; }; } '' Declared by: <nixpkgs/nixos/modules/services/security/authelia.nix>
