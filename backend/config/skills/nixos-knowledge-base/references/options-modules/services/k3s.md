---
module: services.k3s
option_count: 26
source: options.html
---

# services.k3s

## services.k3s.enable

Whether to enable k3s. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/cluster/rancher/default.nix>

## services.k3s.package

The k3s package to use. Type: package Default: pkgs.k3s Declared by: <nixpkgs/nixos/modules/services/cluster/rancher/default.nix>

## services.k3s.agentToken

The k3s token agents can use to connect to the server. This option only makes sense on server nodes (role = server). WARNING: This option will expose your token unencrypted in the world-readable nix store. If this is undesired use the tokenFile option instead. Type: string Default: "" Declared by: <nixpkgs/nixos/modules/services/cluster/rancher/default.nix>

## services.k3s.agentTokenFile

File path containing the k3s token agents can use to connect to the server. This option only makes sense on server nodes (role = server). Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/cluster/rancher/default.nix>

## services.k3s.autoDeployCharts

Auto deploying Helm charts that are installed by the k3s Helm controller. Avoid using attribute names that are also used in the services.k3s.manifests and services.k3s.charts options. Manifests with the same name will override auto deploying charts with the same name. This option only makes sense on server nodes (role = server). See the k3s Helm documentation for further information. WARNING: If you have multiple server nodes, and set this option on more than one server, it is your responsibility to ensure that files stay in sync across those nodes. AddOn content is not synced between nodes, and k3s cannot guarantee correct behavior if different servers attempt to deploy conflicting manifests. Type: attribute set of (submodule) Default: { } Example: { harbor = { name = "harbor"; repo = "https://helm.goharbor.io"; version = "1.14.0"; hash = "sha256-fMP7q1MIbvzPGS9My91vbQ1d3OJMjwc+o8YE/BXZaYU="; values = { existingSecretAdminPassword = "harbor-admin"; expose = { tls = { enabled = true; certSource = "secret"; secret.secretName = "my-tls-secret"; }; ingress = { hosts.core = "example.com"; className = "nginx"; }; }; }; }; nginx = { repo = "oci://registry-1.docker.io/bitnamicharts/nginx"; version = "20.0.0"; hash = "sha256-sy+tzB+i9jIl/tqOMzzuhVhTU4EZVsoSBtPznxF/36c="; }; custom-chart = { package = ../charts/my-chart.tgz; values = ../values/my-values.yaml; extraFieldDefinitions = { spec.timeout = "60s"; }; }; } Declared by: <nixpkgs/nixos/modules/services/cluster/rancher/default.nix>

## services.k3s.charts

Packaged Helm charts that are linked to /var/lib/rancher/k3s/server/static/charts before k3s starts. The attribute name will be used as the link target (relative to /var/lib/rancher/k3s/server/static/charts). The specified charts will only be placed on the file system and made available via the Kubernetes APIServer from within the cluster. See the services.k3s.autoDeployCharts option and the k3s Helm controller docs to deploy Helm charts. This option only makes sense on server nodes (role = server). Type: attribute set of (absolute path or package) Default: { } Example: nginx = ../charts/my-nginx-chart.tgz; redis = ../charts/my-redis-chart.tgz; Declared by: <nixpkgs/nixos/modules/services/cluster/rancher/default.nix>

## services.k3s.clusterInit

Initialize HA cluster using an embedded etcd datastore. If this option is false and role is server On a server that was using the default embedded sqlite backend, enabling this option will migrate to an embedded etcd DB. If an HA cluster using the embedded etcd datastore was already initialized, this option has no effect. This option only makes sense in a server that is not connecting to another server. If you are configuring an HA cluster with an embedded etcd, the 1st server must have clusterInit = true and other servers must connect to it using serverAddr. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/cluster/rancher/default.nix>

## services.k3s.configPath

File path containing the k3s YAML config. This is useful when the config is generated (for example on boot). Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/cluster/rancher/default.nix>

## services.k3s.containerdConfigTemplate

Config template for containerd, to be placed at /var/lib/rancher/k3s/agent/etc/containerd/config.toml.tmpl. See the docs on configuring containerd. Type: null or string Default: null Example: # Base config {{ template "base" . }} # Add a custom runtime [plugins."io.containerd.grpc.v1.cri".containerd.runtimes."custom"] runtime_type = "io.containerd.runc.v2" [plugins."io.containerd.grpc.v1.cri".containerd.runtimes."custom".options] BinaryName = "/path/to/custom-container-runtime" Declared by: <nixpkgs/nixos/modules/services/cluster/rancher/default.nix>

## services.k3s.disable

Disable default components, see the K3s documentation. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/cluster/rancher/default.nix>

## services.k3s.disableAgent

Only run the server. This option only makes sense for a server. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/cluster/rancher/default.nix>

## services.k3s.environmentFile

File path containing environment variables for configuring the k3s service in the format of an EnvironmentFile. See systemd.exec(5). Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/cluster/rancher/default.nix>

## services.k3s.extraFlags

Extra flags to pass to the k3s command. Type: string or list of string Default: [ ] Example: [ "--etcd-expose-metrics" "--cluster-cidr 10.24.0.0/16" ] Declared by: <nixpkgs/nixos/modules/services/cluster/rancher/default.nix>

## services.k3s.extraKubeProxyConfig

Extra configuration to add to the kube-proxy’s configuration file. The subset of the kube-proxy’s configuration that can be configured via a file is defined by the KubeProxyConfiguration struct. Note that the kubeconfig param will be overriden by clientConnection.kubeconfig, so you must set the clientConnection.kubeconfig option if you want to use extraKubeProxyConfig. Type: attribute set of anything Default: { } Example: { clientConnection = { kubeconfig = "/var/lib/rancher/k3s/agent/kubeproxy.kubeconfig"; }; mode = "nftables"; } Declared by: <nixpkgs/nixos/modules/services/cluster/rancher/default.nix>

## services.k3s.extraKubeletConfig

Extra configuration to add to the kubelet’s configuration file. The subset of the kubelet’s configuration that can be configured via a file is defined by the KubeletConfiguration struct. See the documentation for further information. Type: attribute set of anything Default: { } Example: { containerLogMaxSize = "5Mi"; memoryThrottlingFactor = 0.69; podsPerCore = 3; } Declared by: <nixpkgs/nixos/modules/services/cluster/rancher/default.nix>

## services.k3s.images

List of derivations that provide container images. All images are linked to /var/lib/rancher/k3s/agent/images before k3s starts and are consequently imported by the k3s agent. Consider importing the k3s airgap images archive of the k3s package in use, if you want to pre-provision this node with all k3s container images. This option only makes sense on nodes with an enabled agent. Type: list of package Default: [ ] Example: [ (pkgs.dockerTools.pullImage { imageName = "docker.io/bitnami/keycloak"; imageDigest = "sha256:714dfadc66a8e3adea6609bda350345bd3711657b7ef3cf2e8015b526bac2d6b"; hash = "sha256-IM2BLZ0EdKIZcRWOtuFY9TogZJXCpKtPZnMnPsGlq0Y="; finalImageTag = "21.1.2-debian-11-r0"; }) config.services.k3s.package.airgap-images ] Declared by: <nixpkgs/nixos/modules/services/cluster/rancher/default.nix>

## services.k3s.manifests

Auto-deploying manifests that are linked to /var/lib/rancher/k3s/server/manifests before k3s starts. Note that deleting manifest files will not remove or otherwise modify the resources it created. Please use the the --disable flag or .skip files to delete/disable AddOns, as mentioned in the docs. This option only makes sense on server nodes (role = server). Read the auto-deploying manifests docs for further information. WARNING: If you have multiple server nodes, and set this option on more than one server, it is your responsibility to ensure that files stay in sync across those nodes. AddOn content is not synced between nodes, and k3s cannot guarantee correct behavior if different servers attempt to deploy conflicting manifests. Type: attribute set of (submodule) Default: { } Example: { deployment.source = ../manifests/deployment.yaml; my-service = { enable = false; target = "app-service.yaml"; content = { apiVersion = "v1"; kind = "Service"; metadata = { name = "app-service"; }; spec = { selector = { "app.kubernetes.io/name" = "MyApp"; }; ports = [ { name = "name-of-service-port"; protocol = "TCP"; port = 80; targetPort = "http-web-svc"; } ]; }; }; }; nginx.content = [ { apiVersion = "v1"; kind = "Pod"; metadata = { name = "nginx"; labels = { "app.kubernetes.io/name" = "MyApp"; }; }; spec = { containers = [ { name = "nginx"; image = "nginx:1.14.2"; ports = [ { containerPort = 80; name = "http-web-svc"; } ]; } ]; }; } { apiVersion = "v1"; kind = "Service"; metadata = { name = "nginx-service"; }; spec = { selector = { "app.kubernetes.io/name" = "MyApp"; }; ports = [ { name = "name-of-service-port"; protocol = "TCP"; port = 80; targetPort = "http-web-svc"; } ]; }; } ]; }; Declared by: <nixpkgs/nixos/modules/services/cluster/rancher/default.nix>

## services.k3s.nodeIP

IPv4/IPv6 addresses to advertise for node. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/cluster/rancher/default.nix>

## services.k3s.nodeLabel

Registering and starting kubelet with set of labels. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/cluster/rancher/default.nix>

## services.k3s.nodeName

Node name. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/cluster/rancher/default.nix>

## services.k3s.nodeTaint

Registering kubelet with set of taints. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/cluster/rancher/default.nix>

## services.k3s.role

Whether k3s should run as a server or agent. If it’s a server: By default it also runs workloads as an agent. Starts by default as a standalone server using an embedded sqlite datastore. Configure clusterInit = true to switch over to embedded etcd datastore and enable HA mode. Configure serverAddr to join an already-initialized HA cluster. If it’s an agent: serverAddr is required. Type: one of “server”, “agent” Default: "server" Declared by: <nixpkgs/nixos/modules/services/cluster/rancher/default.nix>

## services.k3s.selinux

Enable SELinux in containerd. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/cluster/rancher/default.nix>

## services.k3s.serverAddr

The k3s server to connect to. Servers and agents need to communicate each other. Read the networking docs to know how to configure the firewall. Type: string Default: "" Example: "https://10.0.0.10:6443" Declared by: <nixpkgs/nixos/modules/services/cluster/rancher/default.nix>

## services.k3s.token

The k3s token to use when connecting to a server. WARNING: This option will expose your token unencrypted in the world-readable nix store. If this is undesired use the tokenFile option instead. Type: string Default: "" Declared by: <nixpkgs/nixos/modules/services/cluster/rancher/default.nix>

## services.k3s.tokenFile

File path containing the k3s token to use when connecting to a server. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/cluster/rancher/default.nix>
