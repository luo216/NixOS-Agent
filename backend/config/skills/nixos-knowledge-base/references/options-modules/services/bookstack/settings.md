---
module: services.bookstack.settings
option_count: 5
source: options.html
---

# services.bookstack.settings

## services.bookstack.settings.APP_KEY_FILE

The path to your appkey. The file should contain a 32 character random app key. This may be set using echo "base64:$(head -c 32 /dev/urandom | base64)" > /path/to/key-file. Type: absolute path Declared by: <nixpkgs/nixos/modules/services/web-apps/bookstack.nix>

## services.bookstack.settings.APP_URL

The root URL that you want to host BookStack on. All URLs in BookStack will be generated using this value. It is used to validate specific requests and to generate URLs in emails. Type: string Default: "http(s)://\${config.services.bookstack.hostname}" Example: "https://example.com" Declared by: <nixpkgs/nixos/modules/services/web-apps/bookstack.nix>

## services.bookstack.settings.DB_HOST

The IP or hostname which hosts your database. Type: string Default: "localhost" Declared by: <nixpkgs/nixos/modules/services/web-apps/bookstack.nix>

## services.bookstack.settings.DB_PASSWORD_FILE

The file containing your mysql/mariadb database password. Type: null or absolute path Default: null Example: "/var/secrets/bookstack-mysql-pass.txt" Declared by: <nixpkgs/nixos/modules/services/web-apps/bookstack.nix>

## services.bookstack.settings.DB_PORT

The port your database is listening at. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 3306 Declared by: <nixpkgs/nixos/modules/services/web-apps/bookstack.nix>
