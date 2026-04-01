---
module: services.ollama
option_count: 14
source: options.html
---

# services.ollama

## services.ollama.enable

Whether to enable ollama server for local large language models. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/misc/ollama.nix>

## services.ollama.package

The ollama package to use. Different packages use different hardware acceleration. ollama: default behavior; usually equivalent to ollama-cpu if nixpkgs.config.rocmSupport is enabled, is equivalent to ollama-rocm if nixpkgs.config.cudaSupport is enabled, is equivalent to ollama-cuda otherwise defaults to ollama-cpu ollama-cpu: disable GPU; only use CPU ollama-rocm: supported by most modern AMD GPUs may require overriding gpu type with services.ollama.rocmOverrideGfx if rocm doesn’t detect your AMD gpu ollama-cuda: supported by most modern NVIDIA GPUs ollama-vulkan: supported by most GPUs Type: package Default: pkgs.ollama Example: pkgs.ollama-rocm Declared by: <nixpkgs/nixos/modules/services/misc/ollama.nix>

## services.ollama.acceleration

What interface to use for hardware acceleration. It is now preferred to set services.ollama.package instead. null: default behavior; usually equivalent to false if nixpkgs.config.rocmSupport is enabled, is equivalent to "rocm" if nixpkgs.config.cudaSupport is enabled, is equivalent to "cuda" otherwise defaults to false false: disable GPU; only use CPU "rocm": supported by most modern AMD GPUs may require overriding gpu type with services.ollama.rocmOverrideGfx if rocm doesn’t detect your AMD gpu "cuda": supported by most modern NVIDIA GPUs "vulkan": supported by most GPUs Type: null or one of false, “rocm”, “cuda”, “vulkan” Default: null Example: "rocm" Declared by: <nixpkgs/nixos/modules/services/misc/ollama.nix>

## services.ollama.environmentVariables

Set arbitrary environment variables for the ollama service. Be aware that these are only seen by the ollama server (systemd service), not normal invocations like ollama run. Since ollama run is mostly a shell around the ollama server, this is usually sufficient. Type: attribute set of string Default: { } Example: { HIP_VISIBLE_DEVICES = "0,1"; OLLAMA_LLM_LIBRARY = "cpu"; } Declared by: <nixpkgs/nixos/modules/services/misc/ollama.nix>

## services.ollama.group

Group under which to run ollama. Only used when services.ollama.user is set. The group will automatically be created, if this option is set to a non-null value. Type: null or string Default: config.services.ollama.user Example: "ollama" Declared by: <nixpkgs/nixos/modules/services/misc/ollama.nix>

## services.ollama.home

The home directory that the ollama service is started in. Type: string Default: "/var/lib/ollama" Example: "/home/foo" Declared by: <nixpkgs/nixos/modules/services/misc/ollama.nix>

## services.ollama.host

The host address which the ollama server HTTP interface listens to. Type: string Default: "127.0.0.1" Example: "[::]" Declared by: <nixpkgs/nixos/modules/services/misc/ollama.nix>

## services.ollama.loadModels

Download these models using ollama pull as soon as ollama.service has started. This creates a systemd unit ollama-model-loader.service. Use services.ollama.syncModels to automatically remove any models not currently declared here. Search for models of your choice from: https://ollama.com/library Type: list of string Default: [ ] Example: [ "dolphin3" "gemma3" "gemma3:27b" "deepseek-r1:latest" "deepseek-r1:1.5b" ] Declared by: <nixpkgs/nixos/modules/services/misc/ollama.nix>

## services.ollama.models

The directory that the ollama service will read models from and download new models to. Type: string Default: "\${config.services.ollama.home}/models" Example: "/path/to/ollama/models" Declared by: <nixpkgs/nixos/modules/services/misc/ollama.nix>

## services.ollama.openFirewall

Whether to open the firewall for ollama. This adds services.ollama.port to networking.firewall.allowedTCPPorts. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/misc/ollama.nix>

## services.ollama.port

Which port the ollama server listens to. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 11434 Example: 11111 Declared by: <nixpkgs/nixos/modules/services/misc/ollama.nix>

## services.ollama.rocmOverrideGfx

Override what rocm will detect your gpu model as. For example, if you have an RX 5700 XT, try setting this to "10.1.0" (gfx 1010). This sets the value of HSA_OVERRIDE_GFX_VERSION. See ollama’s docs for details. Type: null or string Default: null Example: "10.3.0" Declared by: <nixpkgs/nixos/modules/services/misc/ollama.nix>

## services.ollama.syncModels

Synchronize all currently installed models with those declared in services.ollama.loadModels, removing any models that are installed but not currently declared there. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/misc/ollama.nix>

## services.ollama.user

User account under which to run ollama. Defaults to DynamicUser when set to null. The user will automatically be created, if this option is set to a non-null value. Type: null or string Default: null Example: "ollama" Declared by: <nixpkgs/nixos/modules/services/misc/ollama.nix>
