---
module: services.sympa
option_count: 7
source: options.html
---

# services.sympa

## services.sympa.enable

Whether to enable Sympa mailing list manager. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/mail/sympa.nix>

## services.sympa.domains

Email domains handled by this instance. There have to be MX records for keys of this attribute set. Type: attribute set of (submodule) Example: { "lists.example.org" = { webHost = "lists.example.org"; webLocation = "/"; }; "sympa.example.com" = { webHost = "example.com"; webLocation = "/sympa"; }; } Declared by: <nixpkgs/nixos/modules/services/mail/sympa.nix>

## services.sympa.lang

Default Sympa language. See https://github.com/sympa-community/sympa/tree/sympa-6.2/po/sympa for available options. Type: string Default: "en_US" Example: "cs" Declared by: <nixpkgs/nixos/modules/services/mail/sympa.nix>

## services.sympa.listMasters

The list of the email addresses of the listmasters (users authorized to perform global server commands). Type: list of string Example: [ "postmaster@sympa.example.org" ] Declared by: <nixpkgs/nixos/modules/services/mail/sympa.nix>

## services.sympa.mainDomain

Main domain to be used in sympa.conf. If null, one of the services.sympa.domains is chosen for you. Type: null or string Default: null Example: "lists.example.org" Declared by: <nixpkgs/nixos/modules/services/mail/sympa.nix>

## services.sympa.settings

The sympa.conf configuration file as key value set. See https://sympa-community.github.io/gpldoc/man/sympa.conf.5.html for list of configuration parameters. Type: attribute set of (string or signed integer or boolean) Default: { } Example: { default_home = "lists"; viewlogs_page_size = 50; } Declared by: <nixpkgs/nixos/modules/services/mail/sympa.nix>

## services.sympa.settingsFile

Set of files to be linked in /var/lib/sympa. Type: attribute set of (submodule) Default: { } Example: { "list_data/lists.example.org/help" = { text = "subject This list provides help to users"; }; } Declared by: <nixpkgs/nixos/modules/services/mail/sympa.nix>
