---
module: services.athens.storage.mongo
option_count: 4
source: options.html
---

# services.athens.storage.mongo

## services.athens.storage.mongo.certPath

Path to the certificate file for the mongo database. Type: null or absolute path Default: null Example: "/etc/ssl/mongo.pem" Declared by: <nixpkgs/nixos/modules/services/development/athens.nix>

## services.athens.storage.mongo.defaultDBName

Name of the mongo database. Type: null or string Default: null Example: "athens" Declared by: <nixpkgs/nixos/modules/services/development/athens.nix>

## services.athens.storage.mongo.insecure

Allow insecure connections to the mongo database. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/development/athens.nix>

## services.athens.storage.mongo.url

URL of the mongo database. Type: null or string Default: null Example: "mongodb://localhost:27017" Declared by: <nixpkgs/nixos/modules/services/development/athens.nix>
