---
module: services.tts
option_count: 1
source: options.html
---

# services.tts

## services.tts.servers

TTS server instances. Type: attribute set of (submodule) Default: { } Example: { english = { port = 5300; model = "tts_models/en/ljspeech/tacotron2-DDC"; }; german = { port = 5301; model = "tts_models/de/thorsten/tacotron2-DDC"; }; dutch = { port = 5302; model = "tts_models/nl/mai/tacotron2-DDC"; }; } Declared by: <nixpkgs/nixos/modules/services/audio/tts.nix>
