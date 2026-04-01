---
module: services.bluesky-pds.settings
option_count: 13
source: options.html
---

# services.bluesky-pds.settings

## services.bluesky-pds.settings.LOG_ENABLED

Enable logging Type: null or string Default: "true" Declared by: <nixpkgs/nixos/modules/services/web-apps/bluesky-pds.nix>

## services.bluesky-pds.settings.PDS_BLOBSTORE_DISK_LOCATION

Store blobs at this location, set to null to use e.g. S3 Type: null or string Default: "/var/lib/pds/blocks" Declared by: <nixpkgs/nixos/modules/services/web-apps/bluesky-pds.nix>

## services.bluesky-pds.settings.PDS_BLOB_UPLOAD_LIMIT

Size limit of uploaded blobs in bytes Type: string Default: "104857600" Declared by: <nixpkgs/nixos/modules/services/web-apps/bluesky-pds.nix>

## services.bluesky-pds.settings.PDS_BSKY_APP_VIEW_DID

DID of bsky frontend Type: string Default: "did:web:api.bsky.app" Declared by: <nixpkgs/nixos/modules/services/web-apps/bluesky-pds.nix>

## services.bluesky-pds.settings.PDS_BSKY_APP_VIEW_URL

URL of bsky frontend Type: string Default: "https://api.bsky.app" Declared by: <nixpkgs/nixos/modules/services/web-apps/bluesky-pds.nix>

## services.bluesky-pds.settings.PDS_CRAWLERS

URL of crawlers Type: string Default: "https://bsky.network" Declared by: <nixpkgs/nixos/modules/services/web-apps/bluesky-pds.nix>

## services.bluesky-pds.settings.PDS_DATA_DIRECTORY

Directory to store state Type: string Default: "/var/lib/pds" Declared by: <nixpkgs/nixos/modules/services/web-apps/bluesky-pds.nix>

## services.bluesky-pds.settings.PDS_DID_PLC_URL

URL of DID PLC directory Type: string Default: "https://plc.directory" Declared by: <nixpkgs/nixos/modules/services/web-apps/bluesky-pds.nix>

## services.bluesky-pds.settings.PDS_HOSTNAME

Instance hostname (base domain name) Type: string Example: "pds.example.com" Declared by: <nixpkgs/nixos/modules/services/web-apps/bluesky-pds.nix>

## services.bluesky-pds.settings.PDS_PORT

Port to listen on Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 3000 Declared by: <nixpkgs/nixos/modules/services/web-apps/bluesky-pds.nix>

## services.bluesky-pds.settings.PDS_RATE_LIMITS_ENABLED

Enable rate limiting Type: null or string Default: "true" Declared by: <nixpkgs/nixos/modules/services/web-apps/bluesky-pds.nix>

## services.bluesky-pds.settings.PDS_REPORT_SERVICE_DID

DID of mod service Type: string Default: "did:plc:ar7c4by46qjdydhdevvrndac" Declared by: <nixpkgs/nixos/modules/services/web-apps/bluesky-pds.nix>

## services.bluesky-pds.settings.PDS_REPORT_SERVICE_URL

URL of mod service Type: string Default: "https://mod.bsky.app" Declared by: <nixpkgs/nixos/modules/services/web-apps/bluesky-pds.nix>
