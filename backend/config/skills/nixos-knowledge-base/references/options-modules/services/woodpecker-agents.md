---
module: services.woodpecker-agents
option_count: 1
source: options.html
---

# services.woodpecker-agents

## services.woodpecker-agents.agents

woodpecker-agents configurations Type: attribute set of (submodule) Default: { } Example: { podman = { environment = { WOODPECKER_SERVER = "localhost:9000"; WOODPECKER_BACKEND = "docker"; DOCKER_HOST = "unix:///run/podman/podman.sock"; }; extraGroups = [ "podman" ]; environmentFile = [ "/run/secrets/woodpecker/agent-secret.txt" ]; }; exec = { environment = { WOODPECKER_SERVER = "localhost:9000"; WOODPECKER_BACKEND = "local"; }; environmentFile = [ "/run/secrets/woodpecker/agent-secret.txt" ]; path = [ # Needed to clone repos git git-lfs woodpecker-plugin-git # Used by the runner as the default shell bash # Most likely to be used in pipeline definitions coreutils ]; }; } Declared by: <nixpkgs/nixos/modules/services/continuous-integration/woodpecker/agents.nix>
