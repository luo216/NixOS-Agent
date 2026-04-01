---
module: services.kubernetes.addonManager
option_count: 3
source: options.html
---

# services.kubernetes.addonManager

## services.kubernetes.addonManager.enable

Whether to enable Kubernetes addon manager. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/cluster/kubernetes/addon-manager.nix>

## services.kubernetes.addonManager.addons

Kubernetes addons (any kind of Kubernetes resource can be an addon). Type: attribute set of ((attribute set) or list of (attribute set)) Default: { } Example: { "my-service" = { "apiVersion" = "v1"; "kind" = "Service"; "metadata" = { "name" = "my-service"; "namespace" = "default"; }; "spec" = { ... }; }; } // import <nixpkgs/nixos/modules/services/cluster/kubernetes/dns.nix> { cfg = config.services.kubernetes; }; Declared by: <nixpkgs/nixos/modules/services/cluster/kubernetes/addon-manager.nix>

## services.kubernetes.addonManager.bootstrapAddons

Bootstrap addons are like regular addons, but they are applied with cluster-admin rights. They are applied at addon-manager startup only. Type: attribute set of (attribute set) Default: { } Example: { "my-service" = { "apiVersion" = "v1"; "kind" = "Service"; "metadata" = { "name" = "my-service"; "namespace" = "default"; }; "spec" = { ... }; }; } Declared by: <nixpkgs/nixos/modules/services/cluster/kubernetes/addon-manager.nix>
