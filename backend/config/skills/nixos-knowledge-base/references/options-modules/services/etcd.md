---
module: services.etcd
option_count: 22
source: options.html
---

# services.etcd

## services.etcd.enable

Whether to enable etcd. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/databases/etcd.nix>

## services.etcd.package

The etcd package to use. Type: package Default: pkgs.etcd Declared by: <nixpkgs/nixos/modules/services/databases/etcd.nix>

## services.etcd.advertiseClientUrls

Etcd list of this member’s client URLs to advertise to the rest of the cluster. Type: list of string Default: config.services.etcd.listenClientUrls Declared by: <nixpkgs/nixos/modules/services/databases/etcd.nix>

## services.etcd.certFile

Cert file to use for clients Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/databases/etcd.nix>

## services.etcd.clientCertAuth

Whether to use certs for client authentication Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/databases/etcd.nix>

## services.etcd.dataDir

Etcd data directory. Type: absolute path Default: "/var/lib/etcd" Declared by: <nixpkgs/nixos/modules/services/databases/etcd.nix>

## services.etcd.discovery

Etcd discovery url Type: string Default: "" Declared by: <nixpkgs/nixos/modules/services/databases/etcd.nix>

## services.etcd.extraConf

Etcd extra configuration. See https://github.com/coreos/etcd/blob/master/Documentation/op-guide/configuration.md#configuration-flags Type: attribute set of string Default: { } Example: { "CORS" = "*"; "NAME" = "default-name"; "MAX_RESULT_BUFFER" = "1024"; "MAX_CLUSTER_SIZE" = "9"; "MAX_RETRY_ATTEMPTS" = "3"; } Declared by: <nixpkgs/nixos/modules/services/databases/etcd.nix>

## services.etcd.initialAdvertisePeerUrls

Etcd list of this member’s peer URLs to advertise to rest of the cluster. Type: list of string Default: config.services.etcd.listenPeerUrls Declared by: <nixpkgs/nixos/modules/services/databases/etcd.nix>

## services.etcd.initialCluster

Etcd initial cluster configuration for bootstrapping. Type: list of string Default: ["${config.services.etcd.name}=http://127.0.0.1:2380"] Declared by: <nixpkgs/nixos/modules/services/databases/etcd.nix>

## services.etcd.initialClusterState

Etcd initial cluster configuration for bootstrapping. Type: one of “new”, “existing” Default: "new" Declared by: <nixpkgs/nixos/modules/services/databases/etcd.nix>

## services.etcd.initialClusterToken

Etcd initial cluster token for etcd cluster during bootstrap. Type: string Default: "etcd-cluster" Declared by: <nixpkgs/nixos/modules/services/databases/etcd.nix>

## services.etcd.keyFile

Key file to use for clients Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/databases/etcd.nix>

## services.etcd.listenClientUrls

Etcd list of URLs to listen on for client traffic. Type: list of string Default: [ "http://127.0.0.1:2379" ] Declared by: <nixpkgs/nixos/modules/services/databases/etcd.nix>

## services.etcd.listenPeerUrls

Etcd list of URLs to listen on for peer traffic. Type: list of string Default: [ "http://127.0.0.1:2380" ] Declared by: <nixpkgs/nixos/modules/services/databases/etcd.nix>

## services.etcd.name

Etcd unique node name. Type: string Default: config.networking.hostName Declared by: <nixpkgs/nixos/modules/services/databases/etcd.nix>

## services.etcd.openFirewall

Open etcd ports in the firewall. Ports opened: 2379/tcp for client requests 2380/tcp for peer communication Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/databases/etcd.nix>

## services.etcd.peerCertFile

Cert file to use for peer to peer communication Type: null or absolute path Default: config.services.etcd.certFile Declared by: <nixpkgs/nixos/modules/services/databases/etcd.nix>

## services.etcd.peerClientCertAuth

Whether to check all incoming peer requests from the cluster for valid client certificates signed by the supplied CA Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/databases/etcd.nix>

## services.etcd.peerKeyFile

Key file to use for peer to peer communication Type: null or absolute path Default: config.services.etcd.keyFile Declared by: <nixpkgs/nixos/modules/services/databases/etcd.nix>

## services.etcd.peerTrustedCaFile

Certificate authority file to use for peer to peer communication Type: null or absolute path Default: config.services.etcd.trustedCaFile Declared by: <nixpkgs/nixos/modules/services/databases/etcd.nix>

## services.etcd.trustedCaFile

Certificate authority file to use for clients Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/databases/etcd.nix>
