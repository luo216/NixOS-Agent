---
module: services.oncall.settings.db.conn
option_count: 2
source: options.html
---

# services.oncall.settings.db.conn

## services.oncall.settings.db.conn.require_auth

Whether authentication is required to access the web app. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/web-apps/oncall.nix>

## services.oncall.settings.db.conn.str

Database connection scheme. The default specifies the connection through a local socket. Type: string Default: "%(scheme)s://%(user)s@%(host)s:%(port)s/%(database)s?charset=%(charset)s&unix_socket=/run/mysqld/mysqld.sock" Declared by: <nixpkgs/nixos/modules/services/web-apps/oncall.nix>
