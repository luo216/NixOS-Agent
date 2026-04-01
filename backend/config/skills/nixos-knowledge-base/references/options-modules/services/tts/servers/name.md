---
module: services.tts.servers.<name>
option_count: 5
source: options.html
---

# services.tts.servers.<name>

## services.tts.servers.<name>.enable

Whether to enable Coqui TTS server. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/audio/tts.nix>

## services.tts.servers.<name>.extraArgs

Extra arguments to pass to the server commandline. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/audio/tts.nix>

## services.tts.servers.<name>.model

Name of the model to download and use for speech synthesis. Check tts-server --list_models for possible values. Set to null to use a custom model. Type: null or string Default: "tts_models/en/ljspeech/tacotron2-DDC" Example: null Declared by: <nixpkgs/nixos/modules/services/audio/tts.nix>

## services.tts.servers.<name>.port

Port to bind the TTS server to. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Example: 5000 Declared by: <nixpkgs/nixos/modules/services/audio/tts.nix>

## services.tts.servers.<name>.useCuda

Whether to offload computation onto a CUDA compatible GPU. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/audio/tts.nix>
