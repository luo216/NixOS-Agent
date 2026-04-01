---
module: services.peertube-runner.instancesToRegister.<name>
option_count: 4
source: options.html
---

# services.peertube-runner.instancesToRegister.<name>

## services.peertube-runner.instancesToRegister.<name>.registrationTokenFile

Path to a file containing a registration token for the PeerTube instance. See how to generate registration tokens at https://docs.joinpeertube.org/admin/remote-runners#manage-remote-runners. Type: absolute path Example: "/run/secrets/my-peertube-instance-registration-token" Declared by: <nixpkgs/nixos/modules/services/web-apps/peertube-runner.nix>

## services.peertube-runner.instancesToRegister.<name>.runnerDescription

Runner description declared to the PeerTube instance. Type: null or string Default: null Example: "Runner for video transcription" Declared by: <nixpkgs/nixos/modules/services/web-apps/peertube-runner.nix>

## services.peertube-runner.instancesToRegister.<name>.runnerName

Runner name declared to the PeerTube instance. Type: string Example: "Transcription" Declared by: <nixpkgs/nixos/modules/services/web-apps/peertube-runner.nix>

## services.peertube-runner.instancesToRegister.<name>.url

URL of the PeerTube instance. Type: string Example: "https://mypeertubeinstance.com" Declared by: <nixpkgs/nixos/modules/services/web-apps/peertube-runner.nix>
