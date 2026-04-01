---
module: services.firezone.server.settingsSecret
option_count: 7
source: options.html
---

# services.firezone.server.settingsSecret

## services.firezone.server.settingsSecret.COOKIE_ENCRYPTION_SALT

A file containing a unique base64 encoded secret for the COOKIE_ENCRYPTION_SALT. All Firezone components in your cluster must use the same value. If this is null, a shared value will automatically be generated on startup and used for all components on this machine. You do not need to set this except when you spread your cluster over multiple hosts. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/networking/firezone/server.nix>

## services.firezone.server.settingsSecret.COOKIE_SIGNING_SALT

A file containing a unique base64 encoded secret for the COOKIE_SIGNING_SALT. All Firezone components in your cluster must use the same value. If this is null, a shared value will automatically be generated on startup and used for all components on this machine. You do not need to set this except when you spread your cluster over multiple hosts. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/networking/firezone/server.nix>

## services.firezone.server.settingsSecret.LIVE_VIEW_SIGNING_SALT

A file containing a unique base64 encoded secret for the LIVE_VIEW_SIGNING_SALT. All Firezone components in your cluster must use the same value. If this is null, a shared value will automatically be generated on startup and used for all components on this machine. You do not need to set this except when you spread your cluster over multiple hosts. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/networking/firezone/server.nix>

## services.firezone.server.settingsSecret.RELEASE_COOKIE

A file containing a unique secret identifier for the Erlang cluster. All Firezone components in your cluster must use the same value. If this is null, a shared value will automatically be generated on startup and used for all components on this machine. You do not need to set this except when you spread your cluster over multiple hosts. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/networking/firezone/server.nix>

## services.firezone.server.settingsSecret.SECRET_KEY_BASE

A file containing a unique base64 encoded secret for the SECRET_KEY_BASE. All Firezone components in your cluster must use the same value. If this is null, a shared value will automatically be generated on startup and used for all components on this machine. You do not need to set this except when you spread your cluster over multiple hosts. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/networking/firezone/server.nix>

## services.firezone.server.settingsSecret.TOKENS_KEY_BASE

A file containing a unique base64 encoded secret for the TOKENS_KEY_BASE. All Firezone components in your cluster must use the same value. If this is null, a shared value will automatically be generated on startup and used for all components on this machine. You do not need to set this except when you spread your cluster over multiple hosts. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/networking/firezone/server.nix>

## services.firezone.server.settingsSecret.TOKENS_SALT

A file containing a unique base64 encoded secret for the TOKENS_SALT. All Firezone components in your cluster must use the same value. If this is null, a shared value will automatically be generated on startup and used for all components on this machine. You do not need to set this except when you spread your cluster over multiple hosts. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/networking/firezone/server.nix>
