---
module: services.redmine
option_count: 11
source: options.html
---

# services.redmine

## services.redmine.enable

Whether to enable Redmine, a project management web application. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/misc/redmine.nix>

## services.redmine.package

The redmine package to use. Type: package Default: pkgs.redmine Example: redmine.override { ruby = pkgs.ruby_3_3; } Declared by: <nixpkgs/nixos/modules/services/misc/redmine.nix>

## services.redmine.address

IP address Redmine should bind to. Type: string Default: "0.0.0.0" Declared by: <nixpkgs/nixos/modules/services/misc/redmine.nix>

## services.redmine.extraEnv

Extra configuration in additional_environment.rb. See https://svn.redmine.org/redmine/trunk/config/additional_environment.rb.example for details. Type: strings concatenated with “\n” Default: "" Example: '' config.logger.level = Logger::DEBUG '' Declared by: <nixpkgs/nixos/modules/services/misc/redmine.nix>

## services.redmine.group

Group under which Redmine is ran. Type: string Default: "redmine" Declared by: <nixpkgs/nixos/modules/services/misc/redmine.nix>

## services.redmine.plugins

Set of plugins. Type: attribute set of absolute path Default: { } Example: { redmine_env_auth = builtins.fetchurl { url = "https://github.com/Intera/redmine_env_auth/archive/0.6.zip"; sha256 = "0yyr1yjd8gvvh832wdc8m3xfnhhxzk2pk3gm2psg5w9jdvd6skak"; }; } Declared by: <nixpkgs/nixos/modules/services/misc/redmine.nix>

## services.redmine.port

Port on which Redmine is ran. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 3000 Declared by: <nixpkgs/nixos/modules/services/misc/redmine.nix>

## services.redmine.settings

Redmine configuration (configuration.yml). Refer to https://guides.rubyonrails.org/action_mailer_basics.html#action-mailer-configuration for details. Type: YAML 1.1 value Default: { } Example: { email_delivery = { delivery_method = "smtp"; smtp_settings = { address = "mail.example.com"; port = 25; }; }; } Declared by: <nixpkgs/nixos/modules/services/misc/redmine.nix>

## services.redmine.stateDir

The state directory, logs and plugins are stored here. Type: absolute path Default: "/var/lib/redmine" Declared by: <nixpkgs/nixos/modules/services/misc/redmine.nix>

## services.redmine.themes

Set of themes. Type: attribute set of absolute path Default: { } Example: { dkuk-redmine_alex_skin = builtins.fetchurl { url = "https://bitbucket.org/dkuk/redmine_alex_skin/get/1842ef675ef3.zip"; sha256 = "0hrin9lzyi50k4w2bd2b30vrf1i4fi1c0gyas5801wn8i7kpm9yl"; }; } Declared by: <nixpkgs/nixos/modules/services/misc/redmine.nix>

## services.redmine.user

User under which Redmine is ran. Type: string Default: "redmine" Declared by: <nixpkgs/nixos/modules/services/misc/redmine.nix>
