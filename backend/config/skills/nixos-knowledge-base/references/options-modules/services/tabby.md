---
module: services.tabby
option_count: 7
source: options.html
---

# services.tabby

## services.tabby.enable

Whether to enable Self-hosted AI coding assistant using large language models. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/misc/tabby.nix>

## services.tabby.package

The tabby package to use. Type: package Default: pkgs.tabby Declared by: <nixpkgs/nixos/modules/services/misc/tabby.nix>

## services.tabby.acceleration

Specifies the device to use for hardware acceleration. cpu: no acceleration just use the CPU rocm: supported by modern AMD GPUs cuda: supported by modern NVIDIA GPUs metal: supported on darwin aarch64 machines Tabby will try and determine what type of acceleration that is already enabled in your configuration when acceleration = null. nixpkgs.config.cudaSupport nixpkgs.config.rocmSupport if stdenv.hostPlatform.isDarwin && stdenv.hostPlatform.isAarch64 IFF multiple acceleration methods are found to be enabled or if you haven’t set either cudaSupport or rocmSupport you will have to specify the device type manually here otherwise it will default to the first from the list above or to cpu. Type: null or one of “cpu”, “rocm”, “cuda”, “metal” Default: null Example: "rocm" Declared by: <nixpkgs/nixos/modules/services/misc/tabby.nix>

## services.tabby.host

Specifies the hostname on which the tabby server HTTP interface listens. Type: string Default: "127.0.0.1" Declared by: <nixpkgs/nixos/modules/services/misc/tabby.nix>

## services.tabby.model

Specify the model that tabby will use to generate completions. This model will be downloaded automatically if it is not already present. If you want to utilize an existing model that you’ve already downloaded you’ll need to move it into tabby’s state directory which lives in /var/lib/tabby. Because the tabby.service is configured to use a DynamicUser the service will need to have been started at least once before you can move the locally existing model into /var/lib/tabby. You can set the model to ‘none’ and tabby will startup and fail to download a model, but will have created the /var/lib/tabby directory. You can then copy over the model manually into /var/lib/tabby, update the model option to the name you just downloaded and copied over then nixos-rebuild switch to start using it. $ tabby download --model TabbyML/DeepseekCoder-6.7B $ find ~/.tabby/ | tail -n1 /home/ghthor/.tabby/models/TabbyML/DeepseekCoder-6.7B/ggml/q8_0.v2.gguf $ sudo rsync -r ~/.tabby/models/ /var/lib/tabby/models/ $ sudo chown -R tabby:tabby /var/lib/tabby/models/ See for Model Options: https://github.com/TabbyML/registry-tabby Type: string Default: "TabbyML/StarCoder-1B" Declared by: <nixpkgs/nixos/modules/services/misc/tabby.nix>

## services.tabby.port

Specifies the bind port on which the tabby server HTTP interface listens. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 11029 Declared by: <nixpkgs/nixos/modules/services/misc/tabby.nix>

## services.tabby.usageCollection

Enable sending anonymous usage data. See for more details: https://tabby.tabbyml.com/docs/configuration#usage-collection Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/misc/tabby.nix>
