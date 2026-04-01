---
module: services.akkoma
option_count: 11
source: options.html
---

# services.akkoma

## services.akkoma.enable

Whether to enable Akkoma. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/akkoma.nix>

## services.akkoma.package

The akkoma package to use. Type: package Default: pkgs.akkoma Declared by: <nixpkgs/nixos/modules/services/web-apps/akkoma.nix>

## services.akkoma.config

Configuration for Akkoma. The attributes are serialised to Elixir DSL. Refer to https://docs.akkoma.dev/stable/configuration/cheatsheet/ for configuration options. Settings containing secret data should be set to an attribute set containing the attribute _secret - a string pointing to a file containing the value the option should be set to. Type: open submodule of attribute set of attribute set of (Elixir value) Declared by: <nixpkgs/nixos/modules/services/web-apps/akkoma.nix>

## services.akkoma.extraPackages

List of extra packages to include in the executable search path of the service unit. These are needed by various configurable components such as: ExifTool for the Pleroma.Upload.Filter.Exiftool upload filter, ImageMagick for still image previews in the media proxy as well as for the Pleroma.Upload.Filters.Mogrify upload filter, and ffmpeg for video previews in the media proxy. Type: list of package Default: with pkgs; [ exiftool ffmpeg-headless imagemagick ] Example: with pkgs; [ exiftool ffmpeg-full imagemagick ] Declared by: <nixpkgs/nixos/modules/services/web-apps/akkoma.nix>

## services.akkoma.extraStatic

Attribute set of extra packages to add to the static files directory. Do not add frontends here. These should be configured through services.akkoma.frontends. Type: null or (attribute set of package) Default: null Example: { "emoji/blobs.gg" = pkgs.blobs_gg; "static/terms-of-service.html" = pkgs.writeText "terms-of-service.html" '' … ''; "favicon.png" = let rev = "697a8211b0f427a921e7935a35d14bb3e32d0a2c"; in pkgs.stdenvNoCC.mkDerivation { name = "favicon.png"; src = pkgs.fetchurl { url = "https://raw.githubusercontent.com/TilCreator/NixOwO/${rev}/NixOwO_plain.svg"; hash = "sha256-tWhHMfJ3Od58N9H5yOKPMfM56hYWSOnr/TGCBi8bo9E="; }; nativeBuildInputs = with pkgs; [ librsvg ]; dontUnpack = true; installPhase = '' rsvg-convert -o $out -w 96 -h 96 $src ''; }; } Declared by: <nixpkgs/nixos/modules/services/web-apps/akkoma.nix>

## services.akkoma.frontends

Akkoma frontends. Type: attribute set of (submodule) Default: { primary = { package = pkgs.akkoma-fe; name = "akkoma-fe"; ref = "stable"; }; admin = { package = pkgs.akkoma-admin-fe; name = "admin-fe"; ref = "stable"; }; } Declared by: <nixpkgs/nixos/modules/services/web-apps/akkoma.nix>

## services.akkoma.group

Group account under which Akkoma runs. Type: non-empty string Default: "akkoma" Declared by: <nixpkgs/nixos/modules/services/web-apps/akkoma.nix>

## services.akkoma.initSecrets

Whether to initialise non‐existent secrets with random values. If enabled, appropriate secrets for the following options will be created automatically if the files referenced in the _secrets attribute do not exist during startup. config.":pleroma"."Pleroma.Web.Endpoint".secret_key_base config.":pleroma"."Pleroma.Web.Endpoint".signing_salt config.":pleroma"."Pleroma.Web.Endpoint".live_view.signing_salt config.":web_push_encryption".":vapid_details".private_key config.":web_push_encryption".":vapid_details".public_key config.":joken".":default_signer" Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/web-apps/akkoma.nix>

## services.akkoma.installWrapper

Whether to install a wrapper around pleroma_ctl to simplify administration of the Akkoma instance. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/web-apps/akkoma.nix>

## services.akkoma.nginx

Extra configuration for the nginx virtual host of Akkoma. If set to null, no virtual host will be added to the nginx configuration. Type: null or (submodule) Default: null Declared by: <nixpkgs/nixos/modules/services/web-apps/akkoma.nix>

## services.akkoma.user

User account under which Akkoma runs. Type: non-empty string Default: "akkoma" Declared by: <nixpkgs/nixos/modules/services/web-apps/akkoma.nix>
