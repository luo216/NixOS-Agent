---
module: services.anuko-time-tracker.settings
option_count: 9
source: options.html
---

# services.anuko-time-tracker.settings

## services.anuko-time-tracker.settings.defaultCurrency

Defines a default currency symbol for new groups. Use €, £, a more specific dollar like US$, CAD, etc. Type: string Default: "$" Example: "€" Declared by: <nixpkgs/nixos/modules/services/web-apps/anuko-time-tracker.nix>

## services.anuko-time-tracker.settings.defaultLanguage

Defines Anuko Time Tracker default language. It is used on Time Tracker login page. After login, a language set for user group is used. Empty string means the language is defined by user browser. Type: string Default: "" Example: "nl" Declared by: <nixpkgs/nixos/modules/services/web-apps/anuko-time-tracker.nix>

## services.anuko-time-tracker.settings.emailRequired

Defines whether an email is required for new registrations. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/web-apps/anuko-time-tracker.nix>

## services.anuko-time-tracker.settings.exportDecimalDuration

Defines whether time duration values are decimal in CSV and XML data exports (1.25 vs 1:15). Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/web-apps/anuko-time-tracker.nix>

## services.anuko-time-tracker.settings.forumLink

Forum link from the main menu. Type: string Default: "https://www.anuko.com/forum/viewforum.php?f=4" Declared by: <nixpkgs/nixos/modules/services/web-apps/anuko-time-tracker.nix>

## services.anuko-time-tracker.settings.helpLink

Help link from the main menu. Type: string Default: "https://www.anuko.com/time-tracker/user-guide/index.htm" Declared by: <nixpkgs/nixos/modules/services/web-apps/anuko-time-tracker.nix>

## services.anuko-time-tracker.settings.multiorgMode

Defines whether users see the Register option in the menu of Time Tracker that allows them to self-register and create new organizations (top groups). Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/web-apps/anuko-time-tracker.nix>

## services.anuko-time-tracker.settings.reportFooter

Defines whether to use a footer on reports. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/web-apps/anuko-time-tracker.nix>

## services.anuko-time-tracker.settings.weekendStartDay

This option defines which days are highlighted with weekend color. 6 means Saturday. For Saudi Arabia, etc. set it to 4 for Thursday and Friday to be weekend days. Type: signed integer Default: 6 Declared by: <nixpkgs/nixos/modules/services/web-apps/anuko-time-tracker.nix>
