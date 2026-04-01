---
module: services.peertube.settings.video_transcription
option_count: 2
source: options.html
---

# services.peertube.settings.video_transcription

## services.peertube.settings.video_transcription.enabled

Enable automatic transcription of videos. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/web-apps/peertube.nix>

## services.peertube.settings.video_transcription.engine_path

Custom engine path for local transcription. Type: absolute path or string Default: if config.services.peertube.settings.video_transcription.enabled then lib.getExe pkgs.whisper-ctranslate2 else "Set `services.peertube.settings.video_transcription.enabled = true`." Declared by: <nixpkgs/nixos/modules/services/web-apps/peertube.nix>
