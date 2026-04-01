---
module: services.wyoming.faster-whisper.servers.<name>
option_count: 9
source: options.html
---

# services.wyoming.faster-whisper.servers.<name>

## services.wyoming.faster-whisper.servers.<name>.enable

Whether to enable Wyoming faster-whisper server. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/home-automation/wyoming/faster-whisper.nix>

## services.wyoming.faster-whisper.servers.<name>.beamSize

The number of beams to use in beam search. Use 0 to automatically select a value based on the CPU. Type: unsigned integer, meaning >=0 Default: 0 Example: 5 Declared by: <nixpkgs/nixos/modules/services/home-automation/wyoming/faster-whisper.nix>

## services.wyoming.faster-whisper.servers.<name>.device

Determines the platform faster-whisper is run on. CPU works everywhere, CUDA requires a compatible NVIDIA GPU. Type: one of “cpu”, “cuda”, “auto” Default: "cpu" Declared by: <nixpkgs/nixos/modules/services/home-automation/wyoming/faster-whisper.nix>

## services.wyoming.faster-whisper.servers.<name>.extraArgs

Extra arguments to pass to the server commandline. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/home-automation/wyoming/faster-whisper.nix>

## services.wyoming.faster-whisper.servers.<name>.initialPrompt

Optional text to provide as a prompt for the first window. This can be used to provide, or “prompt-engineer” a context for transcription, e.g. custom vocabularies or proper nouns to make it more likely to predict those word correctly. Not supported when the customModelType is transformers. Type: null or string Default: null Example: '' The following conversation takes place in the universe of Wizard of Oz. Key terms include 'Yellow Brick Road' (the path to follow), 'Emerald City' (the ultimate goal), and 'Ruby Slippers' (the magical tools to succeed). Keep these in mind as they guide the journey. '' Declared by: <nixpkgs/nixos/modules/services/home-automation/wyoming/faster-whisper.nix>

## services.wyoming.faster-whisper.servers.<name>.language

The language used to to parse words and sentences. Type: one of “auto”, “af”, “am”, “ar”, “as”, “az”, “ba”, “be”, “bg”, “bn”, “bo”, “br”, “bs”, “ca”, “cs”, “cy”, “da”, “de”, “el”, “en”, “es”, “et”, “eu”, “fa”, “fi”, “fo”, “fr”, “gl”, “gu”, “ha”, “haw”, “he”, “hi”, “hr”, “ht”, “hu”, “hy”, “id”, “is”, “it”, “ja”, “jw”, “ka”, “kk”, “km”, “kn”, “ko”, “la”, “lb”, “ln”, “lo”, “lt”, “lv”, “mg”, “mi”, “mk”, “ml”, “mn”, “mr”, “ms”, “mt”, “my”, “ne”, “nl”, “nn”, “no”, “oc”, “pa”, “pl”, “ps”, “pt”, “ro”, “ru”, “sa”, “sd”, “si”, “sk”, “sl”, “sn”, “so”, “sq”, “sr”, “su”, “sv”, “sw”, “ta”, “te”, “tg”, “th”, “tk”, “tl”, “tr”, “tt”, “uk”, “ur”, “uz”, “vi”, “yi”, “yue”, “yo”, “zh” Example: "en" Declared by: <nixpkgs/nixos/modules/services/home-automation/wyoming/faster-whisper.nix>

## services.wyoming.faster-whisper.servers.<name>.model

Name of the voice model to use. Can also be a HuggingFace model ID or a path to a custom model directory. With useTranformers enabled, a HuggingFace transformers Whisper model ID from HuggingFace like openai/whisper-tiny.en must be used. Compressed models (int8) are slightly less accurate, but smaller and faster. Distilled models are uncompressed and faster and smaller than non-distilled models. Available models: tiny-int8 (compressed) tiny tiny.en (English only) base-int8 (compressed) base base.en (English only) small-int8 (compressed) distil-small.en (distilled, English only) small small.en (English only) medium-int8 (compressed) distil-medium.en (distilled, English only) medium medium.en (English only) large large-v1 distil-large-v2 (distilled, English only) large-v2 distil-large-v3 (distilled, English only) large-v3 turbo (faster than large-v3) Type: string Default: "tiny-int8" Example: "Systran/faster-distil-whisper-small.en" Declared by: <nixpkgs/nixos/modules/services/home-automation/wyoming/faster-whisper.nix>

## services.wyoming.faster-whisper.servers.<name>.uri

URI to bind the wyoming server to. Type: string matching the pattern ^(tcp|unix)://.*$ Example: "tcp://0.0.0.0:10300" Declared by: <nixpkgs/nixos/modules/services/home-automation/wyoming/faster-whisper.nix>

## services.wyoming.faster-whisper.servers.<name>.useTransformers

Whether to provide the dependencies to allow using transformer models. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/home-automation/wyoming/faster-whisper.nix>
