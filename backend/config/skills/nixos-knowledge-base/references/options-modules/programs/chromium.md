---
module: programs.chromium
option_count: 10
source: options.html
---

# programs.chromium

## programs.chromium.enable

Whether to enable policies for chromium based browsers like Chromium, Google Chrome or Brave. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/programs/chromium.nix>

## programs.chromium.enablePlasmaBrowserIntegration

Whether to enable Native Messaging Host for Plasma Browser Integration. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/programs/chromium.nix>

## programs.chromium.defaultSearchProviderEnabled

Enable the default search provider. Type: null or boolean Default: null Example: true Declared by: <nixpkgs/nixos/modules/programs/chromium.nix>

## programs.chromium.defaultSearchProviderSearchURL

Chromium default search provider url. Type: null or string Default: null Example: "https://encrypted.google.com/search?q={searchTerms}&{google:RLZ}{google:originalQueryForSuggestion}{google:assistedQueryStats}{google:searchFieldtrialParameter}{google:searchClient}{google:sourceId}{google:instantExtendedEnabledParameter}ie={inputEncoding}" Declared by: <nixpkgs/nixos/modules/programs/chromium.nix>

## programs.chromium.defaultSearchProviderSuggestURL

Chromium default search provider url for suggestions. Type: null or string Default: null Example: "https://encrypted.google.com/complete/search?output=chrome&q={searchTerms}" Declared by: <nixpkgs/nixos/modules/programs/chromium.nix>

## programs.chromium.extensions

List of chromium extensions to install. For list of plugins ids see id in url of extensions on chrome web store page. To install a chromium extension not included in the chrome web store, append to the extension id a semicolon “;” followed by a URL pointing to an Update Manifest XML file. See ExtensionInstallForcelist for additional details. Type: null or (list of string) Default: null Example: [ "chlffgpmiacpedhhbkiomidkjlcfhogd" # pushbullet "mbniclmhobmnbdlbpiphghaielnnpgdp" # lightshot "gcbommkclmclpchllfjekcdonpmejbdp" # https everywhere "cjpalhdlnbpafiamejdnhcphjbkeiagm" # ublock origin ] Declared by: <nixpkgs/nixos/modules/programs/chromium.nix>

## programs.chromium.extraOpts

Extra chromium policy options. A list of available policies can be found in the Chrome Enterprise documentation: https://cloud.google.com/docs/chrome-enterprise/policies/ Make sure the selected policy is supported on Linux and your browser version. Type: attribute set Default: { } Example: { "BrowserSignin" = 0; "SyncDisabled" = true; "PasswordManagerEnabled" = false; "SpellcheckEnabled" = true; "SpellcheckLanguage" = [ "de" "en-US" ]; } Declared by: <nixpkgs/nixos/modules/programs/chromium.nix>

## programs.chromium.homepageLocation

Chromium default homepage Type: null or string Default: null Example: "https://nixos.org" Declared by: <nixpkgs/nixos/modules/programs/chromium.nix>

## programs.chromium.initialPrefs

Initial preferences are used to configure the browser for the first run. Unlike programs.chromium.extraOpts, initialPrefs can be changed by users in the browser settings. More information can be found in the Chromium documentation: https://www.chromium.org/administrators/configuring-other-preferences/ Type: attribute set Default: { } Example: { "first_run_tabs" = [ "https://nixos.org/" ]; } Declared by: <nixpkgs/nixos/modules/programs/chromium.nix>

## programs.chromium.plasmaBrowserIntegrationPackage

The plasma-browser-integration package to use. Type: package Default: pkgs.kdePackages.plasma-browser-integration Declared by: <nixpkgs/nixos/modules/programs/chromium.nix>
