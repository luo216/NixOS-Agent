---
module: services.home-assistant.config.homeassistant
option_count: 6
source: options.html
---

# services.home-assistant.config.homeassistant

## services.home-assistant.config.homeassistant.latitude

Latitude of your location required to calculate the time the sun rises and sets. Type: null or floating point number or string Default: null Example: 52.3 Declared by: <nixpkgs/nixos/modules/services/home-automation/home-assistant.nix>

## services.home-assistant.config.homeassistant.longitude

Longitude of your location required to calculate the time the sun rises and sets. Type: null or floating point number or string Default: null Example: 4.9 Declared by: <nixpkgs/nixos/modules/services/home-automation/home-assistant.nix>

## services.home-assistant.config.homeassistant.name

Name of the location where Home Assistant is running. Type: null or string Default: null Example: "Home" Declared by: <nixpkgs/nixos/modules/services/home-automation/home-assistant.nix>

## services.home-assistant.config.homeassistant.temperature_unit

Override temperature unit set by unit_system. C for Celsius, F for Fahrenheit. Type: null or one of “C”, “F” Default: null Example: "C" Declared by: <nixpkgs/nixos/modules/services/home-automation/home-assistant.nix>

## services.home-assistant.config.homeassistant.time_zone

Pick your time zone from the column TZ of Wikipedia’s list of tz database time zones. Type: null or string Default: config.time.timeZone or null Example: "Europe/Amsterdam" Declared by: <nixpkgs/nixos/modules/services/home-automation/home-assistant.nix>

## services.home-assistant.config.homeassistant.unit_system

The unit system to use. This also sets temperature_unit, Celsius for Metric and Fahrenheit for US Customary. Type: null or one of “metric”, “us_customary” Default: null Example: "metric" Declared by: <nixpkgs/nixos/modules/services/home-automation/home-assistant.nix>
