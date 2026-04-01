---
module: services.peertube-runner
option_count: 7
source: options.html
---

# services.peertube-runner

## services.peertube-runner.enable

Whether to enable peertube-runner. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/peertube-runner.nix>

## services.peertube-runner.enabledJobTypes

Job types that this runner will execute. Type: non-empty (list of string) Default: [ "vod-web-video-transcoding" "vod-hls-transcoding" "vod-audio-merge-transcoding" "live-rtmp-hls-transcoding" "video-studio-transcoding" "video-transcription" ] Example: [ "video-transcription" ] Declared by: <nixpkgs/nixos/modules/services/web-apps/peertube-runner.nix>

## services.peertube-runner.package

The runner package to use. Type: package Default: pkgs.peertube.runner Declared by: <nixpkgs/nixos/modules/services/web-apps/peertube-runner.nix>

## services.peertube-runner.group

Group under which peertube-runner runs. Type: string Default: "prunner" Example: "peertube-runner" Declared by: <nixpkgs/nixos/modules/services/web-apps/peertube-runner.nix>

## services.peertube-runner.instancesToRegister

PeerTube instances to register this runner with. Type: attribute set of (submodule) Default: { } Example: { personal = { registrationTokenFile = "/run/secrets/my-peertube-instance-registration-token"; runnerDescription = "Runner for video transcription"; runnerName = "Transcription"; url = "https://mypeertubeinstance.com"; }; } Declared by: <nixpkgs/nixos/modules/services/web-apps/peertube-runner.nix>

## services.peertube-runner.settings

Configuration for peertube-runner. See available configuration options at https://docs.joinpeertube.org/maintain/tools#configuration. Type: TOML value Default: { } Example: { jobs.concurrency = 4; ffmpeg = { threads = 0; # Let ffmpeg automatically choose. nice = 5; }; transcription.model = "large-v3"; } Declared by: <nixpkgs/nixos/modules/services/web-apps/peertube-runner.nix>

## services.peertube-runner.user

User account under which peertube-runner runs. Type: string Default: "prunner" Example: "peertube-runner" Declared by: <nixpkgs/nixos/modules/services/web-apps/peertube-runner.nix>
