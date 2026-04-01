---
module: services.open-web-calendar
option_count: 5
source: options.html
---

# services.open-web-calendar

## services.open-web-calendar.enable

Whether to enable OpenWebCalendar service. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/open-web-calendar.nix>

## services.open-web-calendar.package

The open-web-calendar package to use. Type: package Default: pkgs.open-web-calendar Declared by: <nixpkgs/nixos/modules/services/web-apps/open-web-calendar.nix>

## services.open-web-calendar.calendarSettings

Configure the default calendar. See the documentation options in https://open-web-calendar.quelltext.eu/host/configure/#configuring-the-default-calendar and https://github.com/niccokunzmann/open-web-calendar/blob/master/open_web_calendar/default_specification.yml. Individual calendar instances can be further configured outside this module, by specifying the specification_url parameter. Type: open submodule of (JSON value) Default: { } Declared by: <nixpkgs/nixos/modules/services/web-apps/open-web-calendar.nix>

## services.open-web-calendar.domain

The domain under which open-web-calendar is made available Type: string Example: "open-web-calendar.example.org" Declared by: <nixpkgs/nixos/modules/services/web-apps/open-web-calendar.nix>

## services.open-web-calendar.settings

Configuration for the server. These are set as environment variables to the gunicorn/flask service. See the documentation options in https://open-web-calendar.quelltext.eu/host/configure/#configuring-the-server. Type: open submodule of attribute set of (atom (null, bool, int, float or string)) Default: { } Declared by: <nixpkgs/nixos/modules/services/web-apps/open-web-calendar.nix>
