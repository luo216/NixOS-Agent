---
module: services.wyoming.openwakeword
option_count: 8
source: options.html
---

# services.wyoming.openwakeword

## services.wyoming.openwakeword.enable

Whether to enable Wyoming protocol server for openWakeWord wake word detection system. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/home-automation/wyoming/openwakeword.nix>

## services.wyoming.openwakeword.package

The wyoming-openwakeword package to use. Type: package Default: pkgs.wyoming-openwakeword Declared by: <nixpkgs/nixos/modules/services/home-automation/wyoming/openwakeword.nix>

## services.wyoming.openwakeword.customModelsDirectories

Paths to directories with custom wake word models (*.tflite model files). Type: list of absolute path Default: [ ] Declared by: <nixpkgs/nixos/modules/services/home-automation/wyoming/openwakeword.nix>

## services.wyoming.openwakeword.extraArgs

Extra arguments to pass to the server commandline. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/home-automation/wyoming/openwakeword.nix>

## services.wyoming.openwakeword.refractorySeconds

Duration in seconds before a wake word can be detected again. Type: signed integer or floating point number Default: 2 Example: 1.5 Declared by: <nixpkgs/nixos/modules/services/home-automation/wyoming/openwakeword.nix>

## services.wyoming.openwakeword.threshold

Activation threshold (0.0-1.0), where higher means fewer activations. See trigger level for the relationship between activations and wake word detections. Type: integer or floating point number between 0.0 and 1.0 (both inclusive) Default: 0.5 Declared by: <nixpkgs/nixos/modules/services/home-automation/wyoming/openwakeword.nix>

## services.wyoming.openwakeword.triggerLevel

Number of activations before a detection is registered. A higher trigger level means fewer detections. Type: unsigned integer, meaning >=0 Default: 1 Declared by: <nixpkgs/nixos/modules/services/home-automation/wyoming/openwakeword.nix>

## services.wyoming.openwakeword.uri

URI to bind the wyoming server to. Type: string matching the pattern ^(tcp|unix)://.*$ Default: "tcp://0.0.0.0:10400" Example: "tcp://192.0.2.1:5000" Declared by: <nixpkgs/nixos/modules/services/home-automation/wyoming/openwakeword.nix>
