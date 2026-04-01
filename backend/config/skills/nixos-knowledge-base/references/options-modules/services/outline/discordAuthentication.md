---
module: services.outline.discordAuthentication
option_count: 4
source: options.html
---

# services.outline.discordAuthentication

## services.outline.discordAuthentication.clientId

Authentication client identifier. Type: string Declared by: <nixpkgs/nixos/modules/services/web-apps/outline.nix>

## services.outline.discordAuthentication.clientSecretFile

File path containing the authentication secret. Type: string Declared by: <nixpkgs/nixos/modules/services/web-apps/outline.nix>

## services.outline.discordAuthentication.serverId

Restrict logins to a specific server (optional, but recommended). You can find a Discord server’s ID by right-clicking the server icon, and select “Copy Server ID”. Type: string Default: "" Declared by: <nixpkgs/nixos/modules/services/web-apps/outline.nix>

## services.outline.discordAuthentication.serverRoles

Optionally restrict logins to a comma-separated list of role IDs Type: strings concatenated with “,” Default: "" Declared by: <nixpkgs/nixos/modules/services/web-apps/outline.nix>
