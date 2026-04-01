---
module: services.kubernetes.apiserver
option_count: 32
source: options.html
---

# services.kubernetes.apiserver

## services.kubernetes.apiserver.enable

Whether to enable Kubernetes apiserver. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/cluster/kubernetes/apiserver.nix>

## services.kubernetes.apiserver.enableAdmissionPlugins

Kubernetes admission control plugins to enable. See https://kubernetes.io/docs/admin/admission-controllers/ Type: list of string Default: [ "NamespaceLifecycle" "LimitRanger" "ServiceAccount" "ResourceQuota" "DefaultStorageClass" "DefaultTolerationSeconds" "NodeRestriction" ] Example: [ "NamespaceLifecycle" "NamespaceExists" "LimitRanger" "SecurityContextDeny" "ServiceAccount" "ResourceQuota" "PodSecurityPolicy" "NodeRestriction" "DefaultStorageClass" ] Declared by: <nixpkgs/nixos/modules/services/cluster/kubernetes/apiserver.nix>

## services.kubernetes.apiserver.advertiseAddress

Kubernetes apiserver IP address on which to advertise the apiserver to members of the cluster. This address must be reachable by the rest of the cluster. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/cluster/kubernetes/apiserver.nix>

## services.kubernetes.apiserver.allowPrivileged

Whether to allow privileged containers on Kubernetes. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/cluster/kubernetes/apiserver.nix>

## services.kubernetes.apiserver.apiAudiences

Kubernetes apiserver ServiceAccount issuer. Type: string Default: "api,https://kubernetes.default.svc" Declared by: <nixpkgs/nixos/modules/services/cluster/kubernetes/apiserver.nix>

## services.kubernetes.apiserver.authorizationMode

Kubernetes apiserver authorization mode (AlwaysAllow/AlwaysDeny/ABAC/Webhook/RBAC/Node). See https://kubernetes.io/docs/reference/access-authn-authz/authorization/ Type: list of (one of “AlwaysAllow”, “AlwaysDeny”, “ABAC”, “Webhook”, “RBAC”, “Node”) Default: [ "RBAC" "Node" ] Declared by: <nixpkgs/nixos/modules/services/cluster/kubernetes/apiserver.nix>

## services.kubernetes.apiserver.authorizationPolicy

Kubernetes apiserver authorization policy file. See https://kubernetes.io/docs/reference/access-authn-authz/authorization/ Type: list of (attribute set) Default: [ ] Declared by: <nixpkgs/nixos/modules/services/cluster/kubernetes/apiserver.nix>

## services.kubernetes.apiserver.basicAuthFile

Kubernetes apiserver basic authentication file. See https://kubernetes.io/docs/reference/access-authn-authz/authentication Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/cluster/kubernetes/apiserver.nix>

## services.kubernetes.apiserver.bindAddress

The IP address on which to listen for the --secure-port port. The associated interface(s) must be reachable by the rest of the cluster, and by CLI/web clients. Type: string Default: "0.0.0.0" Declared by: <nixpkgs/nixos/modules/services/cluster/kubernetes/apiserver.nix>

## services.kubernetes.apiserver.clientCaFile

Kubernetes apiserver CA file for client auth. Type: null or absolute path Default: config.services.kubernetes.caFile Declared by: <nixpkgs/nixos/modules/services/cluster/kubernetes/apiserver.nix>

## services.kubernetes.apiserver.disableAdmissionPlugins

Kubernetes admission control plugins to disable. See https://kubernetes.io/docs/admin/admission-controllers/ Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/cluster/kubernetes/apiserver.nix>

## services.kubernetes.apiserver.extraOpts

Kubernetes apiserver extra command line options. Type: strings concatenated with " " Default: "" Declared by: <nixpkgs/nixos/modules/services/cluster/kubernetes/apiserver.nix>

## services.kubernetes.apiserver.extraSANs

Extra x509 Subject Alternative Names to be added to the kubernetes apiserver tls cert. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/cluster/kubernetes/apiserver.nix>

## services.kubernetes.apiserver.featureGates

Attribute set of feature gates. Type: attribute set of boolean Default: config.services.kubernetes.featureGates Declared by: <nixpkgs/nixos/modules/services/cluster/kubernetes/apiserver.nix>

## services.kubernetes.apiserver.kubeletClientCaFile

Path to a cert file for connecting to kubelet. Type: null or absolute path Default: config.services.kubernetes.caFile Declared by: <nixpkgs/nixos/modules/services/cluster/kubernetes/apiserver.nix>

## services.kubernetes.apiserver.kubeletClientCertFile

Client certificate to use for connections to kubelet. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/cluster/kubernetes/apiserver.nix>

## services.kubernetes.apiserver.kubeletClientKeyFile

Key to use for connections to kubelet. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/cluster/kubernetes/apiserver.nix>

## services.kubernetes.apiserver.preferredAddressTypes

List of the preferred NodeAddressTypes to use for kubelet connections. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/cluster/kubernetes/apiserver.nix>

## services.kubernetes.apiserver.proxyClientCertFile

Client certificate to use for connections to proxy. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/cluster/kubernetes/apiserver.nix>

## services.kubernetes.apiserver.proxyClientKeyFile

Key to use for connections to proxy. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/cluster/kubernetes/apiserver.nix>

## services.kubernetes.apiserver.runtimeConfig

Api runtime configuration. See https://kubernetes.io/docs/tasks/administer-cluster/cluster-management/ Type: string Default: "authentication.k8s.io/v1beta1=true" Example: "api/all=false,api/v1=true" Declared by: <nixpkgs/nixos/modules/services/cluster/kubernetes/apiserver.nix>

## services.kubernetes.apiserver.securePort

Kubernetes apiserver secure port. Type: signed integer Default: 6443 Declared by: <nixpkgs/nixos/modules/services/cluster/kubernetes/apiserver.nix>

## services.kubernetes.apiserver.serviceAccountIssuer

Kubernetes apiserver ServiceAccount issuer. Type: string Default: "https://kubernetes.default.svc" Declared by: <nixpkgs/nixos/modules/services/cluster/kubernetes/apiserver.nix>

## services.kubernetes.apiserver.serviceAccountKeyFile

File containing PEM-encoded x509 RSA or ECDSA private or public keys, used to verify ServiceAccount tokens. The specified file can contain multiple keys, and the flag can be specified multiple times with different files. If unspecified, --tls-private-key-file is used. Must be specified when --service-account-signing-key is provided Type: absolute path Declared by: <nixpkgs/nixos/modules/services/cluster/kubernetes/apiserver.nix>

## services.kubernetes.apiserver.serviceAccountSigningKeyFile

Path to the file that contains the current private key of the service account token issuer. The issuer will sign issued ID tokens with this private key. Type: absolute path Declared by: <nixpkgs/nixos/modules/services/cluster/kubernetes/apiserver.nix>

## services.kubernetes.apiserver.serviceClusterIpRange

A CIDR notation IP range from which to assign service cluster IPs. This must not overlap with any IP ranges assigned to nodes for pods. Type: string Default: "10.0.0.0/24" Declared by: <nixpkgs/nixos/modules/services/cluster/kubernetes/apiserver.nix>

## services.kubernetes.apiserver.storageBackend

Kubernetes apiserver storage backend. Type: one of “etcd2”, “etcd3” Default: "etcd3" Declared by: <nixpkgs/nixos/modules/services/cluster/kubernetes/apiserver.nix>

## services.kubernetes.apiserver.tlsCertFile

Kubernetes apiserver certificate file. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/cluster/kubernetes/apiserver.nix>

## services.kubernetes.apiserver.tlsKeyFile

Kubernetes apiserver private key file. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/cluster/kubernetes/apiserver.nix>

## services.kubernetes.apiserver.tokenAuthFile

Kubernetes apiserver token authentication file. See https://kubernetes.io/docs/reference/access-authn-authz/authentication Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/cluster/kubernetes/apiserver.nix>

## services.kubernetes.apiserver.verbosity

Optional glog verbosity level for logging statements. See https://github.com/kubernetes/community/blob/master/contributors/devel/logging.md Type: null or signed integer Default: null Declared by: <nixpkgs/nixos/modules/services/cluster/kubernetes/apiserver.nix>

## services.kubernetes.apiserver.webhookConfig

Kubernetes apiserver Webhook config file. It uses the kubeconfig file format. See https://kubernetes.io/docs/reference/access-authn-authz/webhook/ Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/cluster/kubernetes/apiserver.nix>
