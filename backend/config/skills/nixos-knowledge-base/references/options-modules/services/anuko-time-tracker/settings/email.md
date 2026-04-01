---
module: services.anuko-time-tracker.settings.email
option_count: 8
source: options.html
---

# services.anuko-time-tracker.settings.email

## services.anuko-time-tracker.settings.email.mode

Mail sending mode. Can be ‘mail’ or ‘smtp’. Type: string Default: "smtp" Declared by: <nixpkgs/nixos/modules/services/web-apps/anuko-time-tracker.nix>

## services.anuko-time-tracker.settings.email.sender

Default sender for mail. Type: string Default: "Anuko Time Tracker <bounces@example.com>" Declared by: <nixpkgs/nixos/modules/services/web-apps/anuko-time-tracker.nix>

## services.anuko-time-tracker.settings.email.smtpAuth

MTA requires authentication. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/web-apps/anuko-time-tracker.nix>

## services.anuko-time-tracker.settings.email.smtpDebug

Debug mail sending. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/web-apps/anuko-time-tracker.nix>

## services.anuko-time-tracker.settings.email.smtpHost

MTA hostname. Type: string Default: "localhost" Declared by: <nixpkgs/nixos/modules/services/web-apps/anuko-time-tracker.nix>

## services.anuko-time-tracker.settings.email.smtpPasswordFile

Path to file containing the MTA authentication password. Type: null or absolute path Default: null Example: "/var/lib/anuko-time-tracker/secrets/smtp-password" Declared by: <nixpkgs/nixos/modules/services/web-apps/anuko-time-tracker.nix>

## services.anuko-time-tracker.settings.email.smtpPort

MTA port. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 25 Declared by: <nixpkgs/nixos/modules/services/web-apps/anuko-time-tracker.nix>

## services.anuko-time-tracker.settings.email.smtpUser

MTA authentication username. Type: string Default: "" Declared by: <nixpkgs/nixos/modules/services/web-apps/anuko-time-tracker.nix>
