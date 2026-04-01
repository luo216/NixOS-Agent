---
module: services.wyoming.piper.servers.<name>
option_count: 10
source: options.html
---

# services.wyoming.piper.servers.<name>

## services.wyoming.piper.servers.<name>.enable

Whether to enable Wyoming Piper server. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/home-automation/wyoming/piper.nix>

## services.wyoming.piper.servers.<name>.extraArgs

Extra arguments to pass to the server commandline. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/home-automation/wyoming/piper.nix>

## services.wyoming.piper.servers.<name>.lengthScale

Phoneme length value. Type: floating point number Default: 1.0 Declared by: <nixpkgs/nixos/modules/services/home-automation/wyoming/piper.nix>

## services.wyoming.piper.servers.<name>.noiseScale

Generator noise value. Type: floating point number Default: 0.667 Declared by: <nixpkgs/nixos/modules/services/home-automation/wyoming/piper.nix>

## services.wyoming.piper.servers.<name>.noiseWidth

Phoneme width noise value. Type: floating point number Default: 0.333 Declared by: <nixpkgs/nixos/modules/services/home-automation/wyoming/piper.nix>

## services.wyoming.piper.servers.<name>.speaker

ID of a specific speaker in a multi-speaker model. Type: unsigned integer, meaning >=0 Default: 0 Declared by: <nixpkgs/nixos/modules/services/home-automation/wyoming/piper.nix>

## services.wyoming.piper.servers.<name>.streaming

Whether to enable audio streaming on sentence boundaries. Type: boolean Default: true Example: true Declared by: <nixpkgs/nixos/modules/services/home-automation/wyoming/piper.nix>

## services.wyoming.piper.servers.<name>.uri

URI to bind the wyoming server to. Type: string matching the pattern ^(tcp|unix)://.*$ Example: "tcp://0.0.0.0:10200" Declared by: <nixpkgs/nixos/modules/services/home-automation/wyoming/piper.nix>

## services.wyoming.piper.servers.<name>.useCUDA

Whether to accelerate the underlying onnxruntime library with CUDA. Type: boolean Default: pkgs.config.cudaSupport Declared by: <nixpkgs/nixos/modules/services/home-automation/wyoming/piper.nix>

## services.wyoming.piper.servers.<name>.voice

Name of the voice model to use. See the following website for samples: https://rhasspy.github.io/piper-samples/ Type: string Example: "en-us-ryan-medium" Declared by: <nixpkgs/nixos/modules/services/home-automation/wyoming/piper.nix>
