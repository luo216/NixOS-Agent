---
module: services.discourse.mail.incoming
option_count: 4
source: options.html
---

# services.discourse.mail.incoming

## services.discourse.mail.incoming.enable

Whether to set up Postfix to receive incoming mail. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/web-apps/discourse.nix>

## services.discourse.mail.incoming.apiKeyFile

A file containing the Discourse API key used to add posts and messages from mail. If left at its default value null, one will be automatically generated. This should be a string, not a nix path, since nix paths are copied into the world-readable nix store. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/web-apps/discourse.nix>

## services.discourse.mail.incoming.mailReceiverPackage

The discourse-mail-receiver package to use. Type: package Default: pkgs.discourse-mail-receiver Declared by: <nixpkgs/nixos/modules/services/web-apps/discourse.nix>

## services.discourse.mail.incoming.replyEmailAddress

Template for reply by email incoming email address, for example: %{reply_key}@reply.example.com or replies+%{reply_key}@example.com Type: string Default: "%{reply_key}@${config.services.discourse.hostname}" Declared by: <nixpkgs/nixos/modules/services/web-apps/discourse.nix>
