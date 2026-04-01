---
module: services.acme-dns.settings.database
option_count: 2
source: options.html
---

# services.acme-dns.settings.database

## services.acme-dns.settings.database.connection

Database connection string. Type: string Default: "/var/lib/acme-dns/acme-dns.db" Example: "postgres://user:password@localhost/acmedns" Declared by: <nixpkgs/nixos/modules/services/networking/acme-dns.nix>

## services.acme-dns.settings.database.engine

Database engine to use. Type: one of “sqlite3”, “postgres” Default: "sqlite3" Declared by: <nixpkgs/nixos/modules/services/networking/acme-dns.nix>
