---
module: services.rke2
option_count: 26
source: options.html
---

# services.rke2

## services.rke2.enable

Whether to enable rke2. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/cluster/rancher/default.nix>

## services.rke2.package

The rke2 package to use. Type: package Default: pkgs.rke2 Declared by: <nixpkgs/nixos/modules/services/cluster/rancher/default.nix>

## services.rke2.agentToken

The rke2 token agents can use to connect to the server. This option only makes sense on server nodes (role = server). WARNING: This option will expose your token unencrypted in the world-readable nix store. If this is undesired use the tokenFile option instead. Type: string Default: "" Declared by: <nixpkgs/nixos/modules/services/cluster/rancher/default.nix>

## services.rke2.agentTokenFile

File path containing the rke2 token agents can use to connect to the server. This option only makes sense on server nodes (role = server). Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/cluster/rancher/default.nix>

## services.rke2.autoDeployCharts

Auto deploying Helm charts that are installed by the rke2 Helm controller. Avoid using attribute names that are also used in the services.rke2.manifests and services.rke2.charts options. Manifests with the same name will override auto deploying charts with the same name. This option only makes sense on server nodes (role = server). See the rke2 Helm documentation for further information. WARNING: If you have multiple server nodes, and set this option on more than one server, it is your responsibility to ensure that files stay in sync across those nodes. AddOn content is not synced between nodes, and rke2 cannot guarantee correct behavior if different servers attempt to deploy conflicting manifests. Type: attribute set of (submodule) Default: { } Example: { harbor = { name = "harbor"; repo = "https://helm.goharbor.io"; version = "1.14.0"; hash = "sha256-fMP7q1MIbvzPGS9My91vbQ1d3OJMjwc+o8YE/BXZaYU="; values = { existingSecretAdminPassword = "harbor-admin"; expose = { tls = { enabled = true; certSource = "secret"; secret.secretName = "my-tls-secret"; }; ingress = { hosts.core = "example.com"; className = "nginx"; }; }; }; }; nginx = { repo = "oci://registry-1.docker.io/bitnamicharts/nginx"; version = "20.0.0"; hash = "sha256-sy+tzB+i9jIl/tqOMzzuhVhTU4EZVsoSBtPznxF/36c="; }; custom-chart = { package = ../charts/my-chart.tgz; values = ../values/my-values.yaml; extraFieldDefinitions = { spec.timeout = "60s"; }; }; } Declared by: <nixpkgs/nixos/modules/services/cluster/rancher/default.nix>

## services.rke2.charts

Packaged Helm charts that are linked to /var/lib/rancher/rke2/server/static/charts before rke2 starts. The attribute name will be used as the link target (relative to /var/lib/rancher/rke2/server/static/charts). The specified charts will only be placed on the file system and made available via port 9345 on server nodes. See the services.rke2.autoDeployCharts option and the rke2 Helm controller docs to deploy Helm charts. This option only makes sense on server nodes (role = server). Type: attribute set of (absolute path or package) Default: { } Example: nginx = ../charts/my-nginx-chart.tgz; redis = ../charts/my-redis-chart.tgz; Declared by: <nixpkgs/nixos/modules/services/cluster/rancher/default.nix>

## services.rke2.cisHardening

Enable CIS Hardening for RKE2. The OS-level configuration options required to pass the CIS benchmark are enabled by default. This option only creates the etcd user and group, and passes the --profile=cis flag to RKE2. Learn more about CIS Hardening for RKE2. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/cluster/rancher/default.nix>

## services.rke2.cni

CNI plugins to deploy, one of none, calico, canal, cilium or flannel. All CNI plugins get installed via a helm chart after the main components are up and running and can be customized by modifying the helm chart options. Learn more about RKE2 and CNI plugins WARNING: Flannel support in RKE2 is currently experimental. Type: null or one of “none”, “canal”, “cilium”, “calico”, “flannel” Default: null Declared by: <nixpkgs/nixos/modules/services/cluster/rancher/default.nix>

## services.rke2.configPath

File path containing the rke2 YAML config. This is useful when the config is generated (for example on boot). Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/cluster/rancher/default.nix>

## services.rke2.containerdConfigTemplate

Config template for containerd, to be placed at /var/lib/rancher/rke2/agent/etc/containerd/config.toml.tmpl. See the docs on configuring containerd. Type: null or string Default: null Example: # Base config {{ template "base" . }} # Add a custom runtime [plugins."io.containerd.grpc.v1.cri".containerd.runtimes."custom"] runtime_type = "io.containerd.runc.v2" [plugins."io.containerd.grpc.v1.cri".containerd.runtimes."custom".options] BinaryName = "/path/to/custom-container-runtime" Declared by: <nixpkgs/nixos/modules/services/cluster/rancher/default.nix>

## services.rke2.disable

Disable default components, see the RKE2 documentation. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/cluster/rancher/default.nix>

## services.rke2.environmentFile

File path containing environment variables for configuring the rke2 service in the format of an EnvironmentFile. See systemd.exec(5). Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/cluster/rancher/default.nix>

## services.rke2.extraFlags

Extra flags to pass to the rke2 command. Type: string or list of string Default: [ ] Example: [ "--etcd-expose-metrics" "--cluster-cidr 10.24.0.0/16" ] Declared by: <nixpkgs/nixos/modules/services/cluster/rancher/default.nix>

## services.rke2.extraKubeProxyConfig

Extra configuration to add to the kube-proxy’s configuration file. The subset of the kube-proxy’s configuration that can be configured via a file is defined by the KubeProxyConfiguration struct. Note that the kubeconfig param will be overriden by clientConnection.kubeconfig, so you must set the clientConnection.kubeconfig option if you want to use extraKubeProxyConfig. Type: attribute set of anything Default: { } Example: { clientConnection = { kubeconfig = "/var/lib/rancher/rke2/agent/kubeproxy.kubeconfig"; }; mode = "nftables"; } Declared by: <nixpkgs/nixos/modules/services/cluster/rancher/default.nix>

## services.rke2.extraKubeletConfig

Extra configuration to add to the kubelet’s configuration file. The subset of the kubelet’s configuration that can be configured via a file is defined by the KubeletConfiguration struct. See the documentation for further information. Type: attribute set of anything Default: { } Example: { containerLogMaxSize = "5Mi"; memoryThrottlingFactor = 0.69; podsPerCore = 3; } Declared by: <nixpkgs/nixos/modules/services/cluster/rancher/default.nix>

## services.rke2.images

List of derivations that provide container images. All images are linked to /var/lib/rancher/rke2/agent/images before rke2 starts and are consequently imported by the rke2 agent. Consider importing the rke2 core and CNI image archives of the rke2 package in use, if you want to pre-provision this node with all rke2 container images. For a full list of available airgap images, check the source. of the rke2 package in use. Type: list of package Default: [ ] Example: [ (pkgs.dockerTools.pullImage { imageName = "docker.io/bitnami/keycloak"; imageDigest = "sha256:714dfadc66a8e3adea6609bda350345bd3711657b7ef3cf2e8015b526bac2d6b"; hash = "sha256-IM2BLZ0EdKIZcRWOtuFY9TogZJXCpKtPZnMnPsGlq0Y="; finalImageTag = "21.1.2-debian-11-r0"; }) config.services.rke2.package.images-core-linux-amd64-tar-zst config.services.rke2.package.images-canal-linux-amd64-tar-zst ] Declared by: <nixpkgs/nixos/modules/services/cluster/rancher/default.nix>

## services.rke2.manifests

Auto-deploying manifests that are linked to /var/lib/rancher/rke2/server/manifests before rke2 starts. Note that deleting manifest files will not remove or otherwise modify the resources it created. Please use the the --disable flag or .skip files to delete/disable AddOns, as mentioned in the docs. This option only makes sense on server nodes (role = server). Read the auto-deploying manifests docs for further information. WARNING: If you have multiple server nodes, and set this option on more than one server, it is your responsibility to ensure that files stay in sync across those nodes. AddOn content is not synced between nodes, and rke2 cannot guarantee correct behavior if different servers attempt to deploy conflicting manifests. Type: attribute set of (submodule) Default: { } Example: { deployment.source = ../manifests/deployment.yaml; my-service = { enable = false; target = "app-service.yaml"; content = { apiVersion = "v1"; kind = "Service"; metadata = { name = "app-service"; }; spec = { selector = { "app.kubernetes.io/name" = "MyApp"; }; ports = [ { name = "name-of-service-port"; protocol = "TCP"; port = 80; targetPort = "http-web-svc"; } ]; }; }; }; nginx.content = [ { apiVersion = "v1"; kind = "Pod"; metadata = { name = "nginx"; labels = { "app.kubernetes.io/name" = "MyApp"; }; }; spec = { containers = [ { name = "nginx"; image = "nginx:1.14.2"; ports = [ { containerPort = 80; name = "http-web-svc"; } ]; } ]; }; } { apiVersion = "v1"; kind = "Service"; metadata = { name = "nginx-service"; }; spec = { selector = { "app.kubernetes.io/name" = "MyApp"; }; ports = [ { name = "name-of-service-port"; protocol = "TCP"; port = 80; targetPort = "http-web-svc"; } ]; }; } ]; }; Declared by: <nixpkgs/nixos/modules/services/cluster/rancher/default.nix>

## services.rke2.nodeIP

IPv4/IPv6 addresses to advertise for node. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/cluster/rancher/default.nix>

## services.rke2.nodeLabel

Registering and starting kubelet with set of labels. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/cluster/rancher/default.nix>

## services.rke2.nodeName

Node name. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/cluster/rancher/default.nix>

## services.rke2.nodeTaint

Registering kubelet with set of taints. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/cluster/rancher/default.nix>

## services.rke2.role

Whether rke2 should run as a server or agent. If it’s a server: By default it also runs workloads as an agent. All options can be set. If it’s an agent: serverAddr is required. token or tokenFile is required. agentToken, agentTokenFile, disable and cni should not be set. Type: one of “server”, “agent” Default: "server" Declared by: <nixpkgs/nixos/modules/services/cluster/rancher/default.nix>

## services.rke2.selinux

Enable SELinux in containerd. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/cluster/rancher/default.nix>

## services.rke2.serverAddr

The rke2 server to connect to, used to join a cluster. Type: string Default: "" Example: "https://10.0.0.10:6443" Declared by: <nixpkgs/nixos/modules/services/cluster/rancher/default.nix>

## services.rke2.token

The rke2 token to use when connecting to a server. WARNING: This option will expose your token unencrypted in the world-readable nix store. If this is undesired use the tokenFile option instead. Type: string Default: "" Declared by: <nixpkgs/nixos/modules/services/cluster/rancher/default.nix>

## services.rke2.tokenFile

File path containing the rke2 token to use when connecting to a server. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/cluster/rancher/default.nix>
