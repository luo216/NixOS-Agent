---
module: services.webhook.hooks.<name>
option_count: 2
source: options.html
---

# services.webhook.hooks.<name>

## services.webhook.hooks.<name>.execute-command

The command that should be executed when the hook is triggered. Type: string Declared by: <nixpkgs/nixos/modules/services/networking/webhook.nix>

## services.webhook.hooks.<name>.id

The ID of your hook. This value is used to create the HTTP endpoint (protocol://yourserver:port/prefix/${id}). Type: string Default: "‹name›" Declared by: <nixpkgs/nixos/modules/services/networking/webhook.nix>
