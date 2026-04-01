---
module: services.home-assistant.blueprints
option_count: 3
source: options.html
---

# services.home-assistant.blueprints

## services.home-assistant.blueprints.automation

List of automation blueprints to install into ${config.services.home-assistant.configDir}/blueprints/automation. Type: list of (path in the Nix store or absolute path convertible to it) Default: [ ] Example: [ (pkgs.fetchurl { url = "https://github.com/home-assistant/core/raw/2025.1.4/homeassistant/components/automation/blueprints/motion_light.yaml"; hash = "sha256-4HrDX65ycBMfEY2nZ7A25/d3ZnIHdpHZ+80Cblp+P5w="; }) ] Declared by: <nixpkgs/nixos/modules/services/home-automation/home-assistant.nix>

## services.home-assistant.blueprints.script

List of script blueprints to install into ${config.services.home-assistant.configDir}/blueprints/script. Type: list of (path in the Nix store or absolute path convertible to it) Default: [ ] Example: [ ./blueprint.yaml ] Declared by: <nixpkgs/nixos/modules/services/home-automation/home-assistant.nix>

## services.home-assistant.blueprints.template

List of template blueprints to install into ${config.services.home-assistant.configDir}/blueprints/template. Type: list of (path in the Nix store or absolute path convertible to it) Default: [ ] Example: [ "${pkgs.home-assistant.src}/homeassistant/components/template/blueprints/inverted_binary_sensor.yaml" ] Declared by: <nixpkgs/nixos/modules/services/home-automation/home-assistant.nix>
