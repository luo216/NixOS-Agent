---
module: services.rustus
option_count: 12
source: options.html
---

# services.rustus

## services.rustus.enable

Whether to enable TUS protocol implementation in Rust. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-servers/rustus.nix>

## services.rustus.cors

list of origins allowed to upload Type: list of string Default: [ "*" ] Example: [ "*.staging.domain" "*.prod.domain" ] Declared by: <nixpkgs/nixos/modules/services/web-servers/rustus.nix>

## services.rustus.disable_health_access_logs

disable access log for /health endpoint Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/web-servers/rustus.nix>

## services.rustus.host

The host that rustus will connect to. Type: string Default: "127.0.0.1" Example: "127.0.0.1" Declared by: <nixpkgs/nixos/modules/services/web-servers/rustus.nix>

## services.rustus.info_storage

Info storages are used to store information about file uploads. These storages must be persistent, because every time chunk is uploaded rustus updates information about upload. And when someone wants to download file, information about it requested from storage to get actual path of an upload. Type: submodule Default: { } Declared by: <nixpkgs/nixos/modules/services/web-servers/rustus.nix>

## services.rustus.log_level

Desired log level Type: one of “DEBUG”, “INFO”, “ERROR” Default: "INFO" Example: "ERROR" Declared by: <nixpkgs/nixos/modules/services/web-servers/rustus.nix>

## services.rustus.max_body_size

Maximum body size in bytes Type: string Default: "10000000" Example: "100000000" Declared by: <nixpkgs/nixos/modules/services/web-servers/rustus.nix>

## services.rustus.port

The port that rustus will connect to. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 1081 Example: 1081 Declared by: <nixpkgs/nixos/modules/services/web-servers/rustus.nix>

## services.rustus.remove_parts

remove parts files after successful concatenation Type: boolean Default: true Example: false Declared by: <nixpkgs/nixos/modules/services/web-servers/rustus.nix>

## services.rustus.storage

Storages are used to actually store your files. You can configure where you want to store files. Type: submodule Default: { } Example: { type = "hybrid-s3" s3_access_key_file = konfig.age.secrets.R2_ACCESS_KEY.path; s3_secret_key_file = konfig.age.secrets.R2_SECRET_KEY.path; s3_bucket = "my_bucket"; s3_url = "https://s3.example.com"; } Declared by: <nixpkgs/nixos/modules/services/web-servers/rustus.nix>

## services.rustus.tus_extensions

Since TUS protocol offers extensibility you can turn off some protocol extensions. Type: list of (one of “getting”, “creation”, “termination”, “creation-with-upload”, “creation-defer-length”, “concatenation”, “checksum”) Default: [ "getting" "creation" "termination" "creation-with-upload" "creation-defer-length" "concatenation" "checksum" ] Declared by: <nixpkgs/nixos/modules/services/web-servers/rustus.nix>

## services.rustus.url

url path for uploads Type: string Default: "/files" Declared by: <nixpkgs/nixos/modules/services/web-servers/rustus.nix>
