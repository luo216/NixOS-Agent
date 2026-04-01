---
module: services.thanos.receive.objstore
option_count: 2
source: options.html
---

# services.thanos.receive.objstore

## services.thanos.receive.objstore.config

Object store configuration. When not null the attribute set gets converted to a YAML file and stored in the Nix store. The option objstore.config-file will default to its path. If objstore.config-file is set this option has no effect. See format details: https://thanos.io/tip/thanos/storage.md/#configuring-access-to-object-storage Type: YAML 1.1 value Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/thanos.nix>

## services.thanos.receive.objstore.config-file

Path to YAML file that contains object store configuration. See format details: https://thanos.io/tip/thanos/storage.md/#configuring-access-to-object-storage Type: null or string Default: if config.services.thanos.<cmd>.objstore.config == null then null else toString (format.generate "objstore.yaml" config.services.thanos.<cmd>.objstore.config); Declared by: <nixpkgs/nixos/modules/services/monitoring/thanos.nix>
