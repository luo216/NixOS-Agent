---
module: services.ergochat
option_count: 4
source: options.html
---

# services.ergochat

## services.ergochat.enable

Whether to enable Ergo IRC daemon. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/ergochat.nix>

## services.ergochat.configFile

Path to configuration file. Setting this will skip any configuration done via settings Type: absolute path Default: generated config file from settings Declared by: <nixpkgs/nixos/modules/services/networking/ergochat.nix>

## services.ergochat.openFilesLimit

Maximum number of open files. Limits the clients and server connections. Type: signed integer Default: 1024 Declared by: <nixpkgs/nixos/modules/services/networking/ergochat.nix>

## services.ergochat.settings

Ergo IRC daemon configuration file. https://raw.githubusercontent.com/ergochat/ergo/master/default.yaml Type: YAML 1.1 value Default: { accounts = { authentication-enabled = true; multiclient = { allowed-by-default = true; always-on = "opt-out"; auto-away = "opt-out"; enabled = true; }; registration = { allow-before-connect = true; bcrypt-cost = 4; email-verification = { enabled = false; }; enabled = true; throttling = { duration = "10m"; enabled = true; max-attempts = 30; }; }; }; channels = { default-modes = "+ntC"; registration = { enabled = true; }; }; datastore = { autoupgrade = true; path = "/var/lib/ergo/ircd.db"; }; history = { autoreplay-on-join = 0; autoresize-window = "3d"; channel-length = 2048; chathistory-maxmessages = 100; client-length = 256; enabled = true; restrictions = { expire-time = "1w"; grace-period = "1h"; query-cutoff = "none"; }; retention = { allow-individual-delete = false; enable-account-indexing = false; }; tagmsg-storage = { default = false; whitelist = [ "+draft/react" "+react" ]; }; znc-maxmessages = 2048; }; limits = { awaylen = 390; channellen = 64; identlen = 20; kicklen = 390; nicklen = 32; topiclen = 390; }; network = { name = "testnetwork"; }; server = { casemapping = "permissive"; check-ident = false; enforce-utf = true; forward-confirm-hostnames = false; ip-cloaking = { enabled = false; }; ip-limits = { count = false; throttle = false; }; listeners = { ":6667" = { }; }; lookup-hostnames = false; max-sendq = "1M"; name = "example.com"; relaymsg = { enabled = false; }; }; } Declared by: <nixpkgs/nixos/modules/services/networking/ergochat.nix>
