---
module: services.tuliprox
option_count: 7
source: options.html
---

# services.tuliprox

## services.tuliprox.enable

Whether to enable Tuliprox IPTV playlist processor & proxy. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/tuliprox.nix>

## services.tuliprox.package

The tuliprox package to use. Type: package Default: pkgs.tuliprox Declared by: <nixpkgs/nixos/modules/services/web-apps/tuliprox.nix>

## services.tuliprox.apiProxySettings

Users and proxy configuration Refer to the Tuliprox documentation for available attributes Type: YAML 1.1 value Example: { server = [ { host = "192.169.1.9"; message = "Welcome to tuliprox"; name = "default"; port = 8901; protocol = "http"; timezone = "Europe/Paris"; } { host = "tuliprox.mydomain.tv"; message = "Welcome to tuliprox"; name = "external"; port = 443; protocol = "https"; timezone = "Europe/Paris"; } ]; user = [ { credentials = [ { exp_date = 1672705545; max_connections = 1; password = "secret1"; proxy = "reverse"; server = "default"; status = "Active"; token = "token1"; username = "test1"; } ]; target = "xc_m3u"; } ]; } Declared by: <nixpkgs/nixos/modules/services/web-apps/tuliprox.nix>

## services.tuliprox.extraArgs

Additional command-line arguments for the systemd service. Refer to the Tuliprox documentation for available arguments. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/web-apps/tuliprox.nix>

## services.tuliprox.mappingSettings

Templates configuration Refer to the Tuliprox documentation for available attributes Type: YAML 1.1 value Example: { mappings = { mapping = [ { id = "iptv-org"; mapper = [ { filter = "!bbc!"; script = '' @Group = "BBC" ''; } { filter = "!documentary!"; script = '' @Group = "Documentary" ''; } { filter = "!entertainment!"; script = '' @Group = "Entertainment" ''; } { filter = "!pluto_tv!"; script = '' @Group = "Pluto TV" ''; } { filter = "!business!"; script = '' @Group = "News" ''; } { filter = "Input ~ \"iptv-org\""; script = '' @Caption = concat(@Caption, " (iptv-org)") ''; } ]; match_as_ascii = true; } ]; templates = [ { name = "bbc"; value = "Title ~ \"^BBC\""; } { name = "documentary"; value = "(Group ~ \"(Documentary|Outdoor)\")"; } { name = "entertainment"; value = "Group ~ \"Entertainment\""; } { name = "pluto_tv"; value = "(Caption ~ \"Pluto TV\") AND NOT(Caption ~ \"Sports\")"; } { name = "business"; value = "Group ~ \"Business\""; } ]; }; } Declared by: <nixpkgs/nixos/modules/services/web-apps/tuliprox.nix>

## services.tuliprox.sourceSettings

Source definitions Refer to the Tuliprox documentation for available attributes Type: YAML 1.1 value Example: { sources = [ { inputs = [ { name = "iptv-org"; type = "m3u"; url = "https://iptv-org.github.io/iptv/countries/uk.m3u"; } ]; targets = [ { filter = "!final_channel_lineup!"; mapping = [ "iptv-org" ]; name = "iptv-org"; options = { ignore_logo = false; share_live_streams = true; }; output = [ { type = "xtream"; } { filename = "iptv.m3u"; type = "m3u"; } { device = "hdhr1"; type = "hdhomerun"; username = "local"; } ]; } ]; } ]; templates = [ { name = "not_red_button"; value = "NOT (Title ~ \"(?i).*red button.*\")"; } { name = "not_low_resolution"; value = "NOT (Title ~ \"(?i).*(360p|240p).*\")"; } { name = "all_channels"; value = "Title ~ \".*\""; } { name = "final_channel_lineup"; value = "!all_channels! AND !not_red_button! AND !not_low_resolution!"; } ]; } Declared by: <nixpkgs/nixos/modules/services/web-apps/tuliprox.nix>

## services.tuliprox.systemSettings

Main config file Refer to the Tuliprox documentation for available attributes Type: YAML 1.1 value Example: { api = { host = "0.0.0.0"; port = 8901; }; } Declared by: <nixpkgs/nixos/modules/services/web-apps/tuliprox.nix>
