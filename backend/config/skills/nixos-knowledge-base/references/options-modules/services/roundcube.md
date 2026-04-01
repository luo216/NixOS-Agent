---
module: services.roundcube
option_count: 8
source: options.html
---

# services.roundcube

## services.roundcube.enable

Whether to enable roundcube. Also enables nginx virtual host management. Further nginx configuration can be done by adapting services.nginx.virtualHosts.<name>. See services.nginx.virtualHosts for further information. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/mail/roundcube.nix>

## services.roundcube.package

The roundcube package to use. Type: package Default: pkgs.roundcube Example: roundcube.withPlugins (plugins: [ plugins.persistent_login ]) Declared by: <nixpkgs/nixos/modules/services/mail/roundcube.nix>

## services.roundcube.configureNginx

Configure nginx as a reverse proxy for roundcube. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/mail/roundcube.nix>

## services.roundcube.dicts

List of aspell dictionaries for spell checking. If empty, spell checking is disabled. Type: list of package Default: [ ] Example: with pkgs.aspellDicts; [ en fr de ] Declared by: <nixpkgs/nixos/modules/services/mail/roundcube.nix>

## services.roundcube.extraConfig

Extra configuration for roundcube webmail instance Type: strings concatenated with “\n” Default: "" Declared by: <nixpkgs/nixos/modules/services/mail/roundcube.nix>

## services.roundcube.hostName

Hostname to use for the nginx vhost Type: string Example: "webmail.example.com" Declared by: <nixpkgs/nixos/modules/services/mail/roundcube.nix>

## services.roundcube.maxAttachmentSize

The maximum attachment size in MB. [upstream issue comment]: https://github.com/roundcube/roundcubemail/issues/7979#issuecomment-808879209 Note Since there is some overhead in base64 encoding applied to attachments, + 37% will be added to the value set in this option in order to offset the overhead. For example, setting maxAttachmentSize to 100 would result in 137M being the real value in the configuration. See [upstream issue comment] for more details on the motivations behind this. Type: signed integer Default: 18 Declared by: <nixpkgs/nixos/modules/services/mail/roundcube.nix>

## services.roundcube.plugins

List of roundcube plugins to enable. Currently, only those directly shipped with Roundcube are supported. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/mail/roundcube.nix>
