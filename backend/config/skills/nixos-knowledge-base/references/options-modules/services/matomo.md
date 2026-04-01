---
module: services.matomo
option_count: 6
source: options.html
---

# services.matomo

## services.matomo.enable

Enable Matomo web analytics with php-fpm backend. Either the nginx option or the webServerUser option is mandatory. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/web-apps/matomo.nix>

## services.matomo.package

The matomo package to use. Type: package Default: pkgs.matomo Declared by: <nixpkgs/nixos/modules/services/web-apps/matomo.nix>

## services.matomo.hostname

URL of the host, without https prefix. You may want to change it if you run Matomo on a different URL than matomo.yourdomain. Type: string Default: "matomo.${config.networking.fqdnOrHostName}" Example: "matomo.yourdomain.org" Declared by: <nixpkgs/nixos/modules/services/web-apps/matomo.nix>

## services.matomo.nginx

With this option, you can customize an nginx virtualHost which already has sensible defaults for Matomo. Either this option or the webServerUser option is mandatory. Set this to {} to just enable the virtualHost if you don’t need any customization. If enabled, then by default, the serverName is ${user}.${config.networking.hostName}.${config.networking.domain}, SSL is active, and certificates are acquired via ACME. If this is set to null (the default), no nginx virtualHost will be configured. Type: null or (submodule) Default: null Example: { serverAliases = [ "matomo.${config.networking.domain}" "stats.${config.networking.domain}" ]; enableACME = false; } Declared by: <nixpkgs/nixos/modules/services/web-apps/matomo.nix>

## services.matomo.periodicArchiveProcessing

Enable periodic archive processing, which generates aggregated reports from the visits. This means that you can safely disable browser triggers for Matomo archiving, and safely enable to delete old visitor logs. Before deleting visitor logs, make sure though that you run systemctl start matomo-archive-processing.service at least once without errors if you have already collected data before. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/web-apps/matomo.nix>

## services.matomo.webServerUser

Name of the web server user that forwards requests to services.phpfpm.pools.<name>.socket the fastcgi socket for Matomo if the nginx option is not used. Either this option or the nginx option is mandatory. If you want to use another webserver than nginx, you need to set this to that server’s user and pass fastcgi requests to index.php, matomo.php and piwik.php (legacy name) to this socket. Type: null or string Default: null Example: "lighttpd" Declared by: <nixpkgs/nixos/modules/services/web-apps/matomo.nix>
