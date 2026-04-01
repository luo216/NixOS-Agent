---
module: services.blockbook-frontend.<name>
option_count: 17
source: options.html
---

# services.blockbook-frontend.<name>

## services.blockbook-frontend.<name>.enable

Whether to enable blockbook-frontend application. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/blockbook-frontend.nix>

## services.blockbook-frontend.<name>.package

The blockbook package to use. Type: package Default: pkgs.blockbook Declared by: <nixpkgs/nixos/modules/services/networking/blockbook-frontend.nix>

## services.blockbook-frontend.<name>.certFile

To enable SSL, specify path to the name of certificate files without extension. Expecting certFile.crt and certFile.key. Type: null or absolute path Default: null Example: "/etc/secrets/blockbook-frontend-‹name›/certFile" Declared by: <nixpkgs/nixos/modules/services/networking/blockbook-frontend.nix>

## services.blockbook-frontend.<name>.coinName

See https://github.com/trezor/blockbook/blob/master/bchain/coins/blockchain.go#L61 for current of coins supported in master (Note: may differ from release). Type: string Default: "Bitcoin" Declared by: <nixpkgs/nixos/modules/services/networking/blockbook-frontend.nix>

## services.blockbook-frontend.<name>.configFile

Location of the blockbook configuration file. Type: null or absolute path Default: null Example: "/var/lib/blockbook-frontend-‹name›/config.json" Declared by: <nixpkgs/nixos/modules/services/networking/blockbook-frontend.nix>

## services.blockbook-frontend.<name>.cssDir

Location of the dir with main.css CSS file. By default, the one shipped with the package is used. Type: absolute path Default: "${package}/share/css/" Example: "${dataDir}/static/css/" Declared by: <nixpkgs/nixos/modules/services/networking/blockbook-frontend.nix>

## services.blockbook-frontend.<name>.dataDir

Location of blockbook-frontend-‹name› data directory. Type: absolute path Default: "/var/lib/blockbook-frontend-‹name›" Declared by: <nixpkgs/nixos/modules/services/networking/blockbook-frontend.nix>

## services.blockbook-frontend.<name>.debug

Debug mode, return more verbose errors, reload templates on each request. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/blockbook-frontend.nix>

## services.blockbook-frontend.<name>.extraCmdLineOptions

Extra command line options to pass to Blockbook. Run blockbook --help to list all available options. Type: list of string Default: [ ] Example: [ "-workers=1" "-dbcache=0" "-logtosderr" ] Declared by: <nixpkgs/nixos/modules/services/networking/blockbook-frontend.nix>

## services.blockbook-frontend.<name>.extraConfig

Additional configurations to be appended to coin.conf. Overrides any already defined configuration options. See https://github.com/trezor/blockbook/tree/master/configs/coins for current configuration options supported in master (Note: may differ from release). Type: attribute set Default: { } Example: { "alternative_estimate_fee" = "whatthefee-disabled"; "alternative_estimate_fee_params" = "{\"url\": \"https://whatthefee.io/data.json\", \"periodSeconds\": 60}"; "fiat_rates" = "coingecko"; "fiat_rates_params" = "{\"url\": \"https://api.coingecko.com/api/v3\", \"coin\": \"bitcoin\", \"periodSeconds\": 60}"; "coin_shortcut" = "BTC"; "coin_label" = "Bitcoin"; "parse" = true; "subversion" = ""; "address_format" = ""; "xpub_magic" = 76067358; "xpub_magic_segwit_p2sh" = 77429938; "xpub_magic_segwit_native" = 78792518; "mempool_workers" = 8; "mempool_sub_workers" = 2; "block_addresses_to_keep" = 300; } Declared by: <nixpkgs/nixos/modules/services/networking/blockbook-frontend.nix>

## services.blockbook-frontend.<name>.group

The group as which to run blockbook-frontend-‹name›. Type: string Default: "blockbook-frontend-‹name›" Declared by: <nixpkgs/nixos/modules/services/networking/blockbook-frontend.nix>

## services.blockbook-frontend.<name>.internal

Internal http server binding [address]:port. Type: null or string Default: ":9030" Declared by: <nixpkgs/nixos/modules/services/networking/blockbook-frontend.nix>

## services.blockbook-frontend.<name>.messageQueueBinding

Message Queue Binding address:port. Type: string Default: "tcp://127.0.0.1:38330" Declared by: <nixpkgs/nixos/modules/services/networking/blockbook-frontend.nix>

## services.blockbook-frontend.<name>.public

Public http server binding [address]:port. Type: null or string Default: ":9130" Declared by: <nixpkgs/nixos/modules/services/networking/blockbook-frontend.nix>

## services.blockbook-frontend.<name>.sync

Synchronizes until tip, if together with zeromq, keeps index synchronized. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/networking/blockbook-frontend.nix>

## services.blockbook-frontend.<name>.templateDir

Location of the HTML templates. By default, ones shipped with the package are used. Type: absolute path Default: "${package}/share/templates/" Example: "${dataDir}/templates/static/" Declared by: <nixpkgs/nixos/modules/services/networking/blockbook-frontend.nix>

## services.blockbook-frontend.<name>.user

The user as which to run blockbook-frontend-‹name›. Type: string Default: "blockbook-frontend-‹name›" Declared by: <nixpkgs/nixos/modules/services/networking/blockbook-frontend.nix>
