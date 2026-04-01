---
module: virtualisation.xen.store.settings.quota
option_count: 9
source: options.html
---

# virtualisation.xen.store.settings.quota

## virtualisation.xen.store.settings.quota.enable

Whether to enable the quota system. Type: boolean Default: true Example: false Declared by: <nixpkgs/nixos/modules/virtualisation/xen-dom0.nix>

## virtualisation.xen.store.settings.quota.maxEntity

Entity limit for transactions. Type: positive integer, meaning >0 Default: 1000 Example: 1024 Declared by: <nixpkgs/nixos/modules/virtualisation/xen-dom0.nix>

## virtualisation.xen.store.settings.quota.maxOutstanding

Maximum outstanding requests, i.e. in-flight requests / domain. Type: positive integer, meaning >0 Default: 1024 Example: 1024 Declared by: <nixpkgs/nixos/modules/virtualisation/xen-dom0.nix>

## virtualisation.xen.store.settings.quota.maxPath

Path limit for the quota system. Type: positive integer, meaning >0 Default: 1024 Example: 1024 Declared by: <nixpkgs/nixos/modules/virtualisation/xen-dom0.nix>

## virtualisation.xen.store.settings.quota.maxRequests

Maximum number of requests per transaction. Type: positive integer, meaning >0 Default: 1024 Example: 1024 Declared by: <nixpkgs/nixos/modules/virtualisation/xen-dom0.nix>

## virtualisation.xen.store.settings.quota.maxSize

Size limit for transactions. Type: positive integer, meaning >0 Default: 2048 Example: 4096 Declared by: <nixpkgs/nixos/modules/virtualisation/xen-dom0.nix>

## virtualisation.xen.store.settings.quota.maxWatch

Maximum number of watches by the Xenstore Watchdog. Type: positive integer, meaning >0 Default: 100 Example: 256 Declared by: <nixpkgs/nixos/modules/virtualisation/xen-dom0.nix>

## virtualisation.xen.store.settings.quota.maxWatchEvents

Maximum number of outstanding watch events per watch. Type: positive integer, meaning >0 Default: 1024 Example: 2048 Declared by: <nixpkgs/nixos/modules/virtualisation/xen-dom0.nix>

## virtualisation.xen.store.settings.quota.transaction

Maximum number of transactions. Type: positive integer, meaning >0 Default: 10 Example: 50 Declared by: <nixpkgs/nixos/modules/virtualisation/xen-dom0.nix>
