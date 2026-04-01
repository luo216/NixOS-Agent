---
module: services.mediagoblin.settings.mediagoblin
option_count: 5
source: options.html
---

# services.mediagoblin.settings.mediagoblin

## services.mediagoblin.settings.mediagoblin.allow_registration

Whether to enable user self registration. This is generally not recommend due to spammers. See upstream FAQ. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/web-apps/mediagoblin.nix>

## services.mediagoblin.settings.mediagoblin.email_debug_mode

Disable email debug mode to start sending outgoing mails. This requires configuring SMTP settings, see the upstream docs for details. Type: boolean Default: true Example: false Declared by: <nixpkgs/nixos/modules/services/web-apps/mediagoblin.nix>

## services.mediagoblin.settings.mediagoblin.email_sender_address

Email address which notices are sent from. Type: string Example: "noreply@example.org" Declared by: <nixpkgs/nixos/modules/services/web-apps/mediagoblin.nix>

## services.mediagoblin.settings.mediagoblin.plugins

Plugins to enable. See upstream docs for details. Extra dependencies are automatically enabled. Type: unspecified value Default: '' { "mediagoblin.plugins.geolocation" = { }; "mediagoblin.plugins.processing_info" = { }; "mediagoblin.plugins.basic_auth" = { }; "mediagoblin.media_types.image" = { }; } '' Declared by: <nixpkgs/nixos/modules/services/web-apps/mediagoblin.nix>

## services.mediagoblin.settings.mediagoblin.sql_engine

Database to use. Type: string Default: "sqlite:///var/lib/mediagoblin/mediagoblin.db" Example: "postgresql:///mediagoblin" Declared by: <nixpkgs/nixos/modules/services/web-apps/mediagoblin.nix>
