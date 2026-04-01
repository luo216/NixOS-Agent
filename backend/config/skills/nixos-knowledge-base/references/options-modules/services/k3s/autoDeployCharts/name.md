---
module: services.k3s.autoDeployCharts.<name>
option_count: 11
source: options.html
---

# services.k3s.autoDeployCharts.<name>

## services.k3s.autoDeployCharts.<name>.enable

Whether to enable the installation of this Helm chart. Note that setting this option to false will not uninstall the chart from the cluster, if it was previously installed. Please use the the --disable flag or .skip files to delete/disable Helm charts, as mentioned in the docs. Type: boolean Default: true Example: false Declared by: <nixpkgs/nixos/modules/services/cluster/rancher/default.nix>

## services.k3s.autoDeployCharts.<name>.package

The packaged Helm chart. Overwrites the options repo, name, version and hash in case of conflicts. Type: absolute path or package Example: ../my-helm-chart.tgz Declared by: <nixpkgs/nixos/modules/services/cluster/rancher/default.nix>

## services.k3s.autoDeployCharts.<name>.createNamespace

Whether to create the target namespace if not present. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/cluster/rancher/default.nix>

## services.k3s.autoDeployCharts.<name>.extraDeploy

List of extra Kubernetes manifests to deploy with this Helm chart. Type: list of (absolute path or (attribute set)) Default: [ ] Example: [ ../manifests/my-extra-deployment.yaml { apiVersion = "v1"; kind = "Service"; metadata = { name = "app-service"; }; spec = { selector = { "app.kubernetes.io/name" = "MyApp"; }; ports = [ { name = "name-of-service-port"; protocol = "TCP"; port = 80; targetPort = "http-web-svc"; } ]; }; } ]; Declared by: <nixpkgs/nixos/modules/services/cluster/rancher/default.nix>

## services.k3s.autoDeployCharts.<name>.extraFieldDefinitions

Extra HelmChart field definitions that are merged with the rest of the HelmChart custom resource. This can be used to set advanced fields or to overwrite generated fields. See https://docs.k3s.io/helm#helmchart-field-definitions for possible fields. Type: YAML 1.1 value Default: { } Example: { spec = { backOffLimit = 3; bootstrap = true; helmVersion = "v2"; jobImage = "custom-helm-controller:v0.0.1"; }; } Declared by: <nixpkgs/nixos/modules/services/cluster/rancher/default.nix>

## services.k3s.autoDeployCharts.<name>.hash

The hash of the packaged Helm chart. Only has an effect if package is not set. The Helm chart is fetched during build time and placed as a .tgz archive on the filesystem. Type: string Default: "" Example: "sha256-ej+vpPNdiOoXsaj1jyRpWLisJgWo8EqX+Z5VbpSjsPA=" Declared by: <nixpkgs/nixos/modules/services/cluster/rancher/default.nix>

## services.k3s.autoDeployCharts.<name>.name

The name of the Helm chart. Only has an effect if package is not set. The Helm chart is fetched during build time and placed as a .tgz archive on the filesystem. Type: non-empty string Example: "ingress-nginx" Declared by: <nixpkgs/nixos/modules/services/cluster/rancher/default.nix>

## services.k3s.autoDeployCharts.<name>.repo

The repo of the Helm chart. Only has an effect if package is not set. The Helm chart is fetched during build time and placed as a .tgz archive on the filesystem. Type: non-empty string Example: "https://kubernetes.github.io/ingress-nginx" Declared by: <nixpkgs/nixos/modules/services/cluster/rancher/default.nix>

## services.k3s.autoDeployCharts.<name>.targetNamespace

The namespace in which the Helm chart gets installed. Type: non-empty string Default: "default" Example: "kube-system" Declared by: <nixpkgs/nixos/modules/services/cluster/rancher/default.nix>

## services.k3s.autoDeployCharts.<name>.values

Override default chart values via Nix expressions. This is equivalent to setting values in a values.yaml file. WARNING: The values (including secrets!) specified here are exposed unencrypted in the world-readable nix store. Type: absolute path or (attribute set) Default: { } Example: { hostName = "my-host"; replicaCount = 3; server = { name = "nginx"; port = 80; }; } Declared by: <nixpkgs/nixos/modules/services/cluster/rancher/default.nix>

## services.k3s.autoDeployCharts.<name>.version

The version of the Helm chart. Only has an effect if package is not set. The Helm chart is fetched during build time and placed as a .tgz archive on the filesystem. Type: non-empty string Example: "4.7.0" Declared by: <nixpkgs/nixos/modules/services/cluster/rancher/default.nix>
