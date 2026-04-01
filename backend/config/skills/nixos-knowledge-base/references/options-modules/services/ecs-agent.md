---
module: services.ecs-agent
option_count: 3
source: options.html
---

# services.ecs-agent

## services.ecs-agent.enable

Whether to enable Amazon ECS agent. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/virtualisation/ecs-agent.nix>

## services.ecs-agent.package

The ecs-agent package to use. Type: package Default: pkgs.ecs-agent Declared by: <nixpkgs/nixos/modules/virtualisation/ecs-agent.nix>

## services.ecs-agent.extra-environment

The environment the ECS agent should run with. See the ECS agent documentation for keys that work here. Type: attribute set of string Default: { } Declared by: <nixpkgs/nixos/modules/virtualisation/ecs-agent.nix>
