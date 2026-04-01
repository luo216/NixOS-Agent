---
module: services.hockeypuck
option_count: 3
source: options.html
---

# services.hockeypuck

## services.hockeypuck.enable

Whether to enable Hockeypuck OpenPGP Key Server. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/security/hockeypuck.nix>

## services.hockeypuck.port

HKP port to listen on. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 11371 Declared by: <nixpkgs/nixos/modules/services/security/hockeypuck.nix>

## services.hockeypuck.settings

Configuration file for hockeypuck, here you can override certain settings (loglevel and openpgp.db.dsn) by just setting those values. For other settings you need to use lib.mkForce to override them. This service doesn’t provision or enable postgres on your system, it rather assumes that you enable postgres and create the database yourself. Example: services.postgresql = { enable = true; ensureDatabases = [ "hockeypuck" ]; ensureUsers = [{ name = "hockeypuck"; ensureDBOwnership = true; }]; }; Type: TOML value Default: { } Example: { hockeypuck = { loglevel = "INFO"; logfile = "/var/log/hockeypuck/hockeypuck.log"; indexTemplate = "${pkgs.hockeypuck-web}/share/templates/index.html.tmpl"; vindexTemplate = "${pkgs.hockeypuck-web}/share/templates/index.html.tmpl"; statsTemplate = "${pkgs.hockeypuck-web}/share/templates/stats.html.tmpl"; webroot = "${pkgs.hockeypuck-web}/share/webroot"; hkp.bind = ":${toString cfg.port}"; openpgp.db = { driver = "postgres-jsonb"; dsn = "database=hockeypuck host=/var/run/postgresql sslmode=disable"; }; }; } Declared by: <nixpkgs/nixos/modules/services/security/hockeypuck.nix>
