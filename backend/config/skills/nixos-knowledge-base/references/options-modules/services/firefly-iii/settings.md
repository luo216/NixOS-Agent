---
module: services.firefly-iii.settings
option_count: 6
source: options.html
---

# services.firefly-iii.settings

## services.firefly-iii.settings.APP_ENV

The app environment. It is recommended to keep this at “local”. Possible values are “local”, “production” and “testing” Type: one of “local”, “production”, “testing” Default: "local" Example: "production" Declared by: <nixpkgs/nixos/modules/services/web-apps/firefly-iii.nix>

## services.firefly-iii.settings.APP_KEY_FILE

The path to your appkey. The file should contain a 32 character random app key. This may be set using echo "base64:$(head -c 32 /dev/urandom | base64)" > /path/to/key-file. Type: absolute path Declared by: <nixpkgs/nixos/modules/services/web-apps/firefly-iii.nix>

## services.firefly-iii.settings.APP_URL

The APP_URL used by firefly-iii internally. Please make sure this URL matches the external URL of your Firefly III installation. It is used to validate specific requests and to generate URLs in emails. Type: string Default: '' http(s)://''${config.services.firefly-iii.virtualHost} '' Declared by: <nixpkgs/nixos/modules/services/web-apps/firefly-iii.nix>

## services.firefly-iii.settings.DB_CONNECTION

The type of database you wish to use. Can be one of “sqlite”, “mysql” or “pgsql”. Type: one of “sqlite”, “pgsql”, “mysql” Default: "sqlite" Example: "pgsql" Declared by: <nixpkgs/nixos/modules/services/web-apps/firefly-iii.nix>

## services.firefly-iii.settings.DB_HOST

The machine which hosts your database. This is left at the default value for “mysql” because we use the “DB_SOCKET” option to connect to a unix socket instead. “pgsql” requires that the unix socket location be specified here instead of at “DB_SOCKET”. This option does not affect “sqlite”. Type: string Default: '' "localhost" if DB_CONNECTION is "sqlite" or "mysql", "/run/postgresql" if "pgsql". '' Declared by: <nixpkgs/nixos/modules/services/web-apps/firefly-iii.nix>

## services.firefly-iii.settings.DB_PORT

The port your database is listening at. sqlite does not require this value to be filled. Type: null or signed integer Default: '' `null` if DB_CONNECTION is "sqlite", `3306` if "mysql", `5432` if "pgsql" '' Declared by: <nixpkgs/nixos/modules/services/web-apps/firefly-iii.nix>
