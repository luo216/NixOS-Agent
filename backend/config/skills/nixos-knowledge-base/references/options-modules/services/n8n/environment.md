---
module: services.n8n.environment
option_count: 5
source: options.html
---

# services.n8n.environment

## services.n8n.environment.GENERIC_TIMEZONE

The n8n instance timezone. Important for schedule nodes (such as Cron). Type: null or string Default: config.time.timeZone Declared by: <nixpkgs/nixos/modules/services/misc/n8n.nix>

## services.n8n.environment.N8N_DIAGNOSTICS_ENABLED

Whether to share selected, anonymous telemetry with n8n. Note that if you set this to false, you can’t enable Ask AI in the Code node. Type: string or boolean convertible to it Default: false Declared by: <nixpkgs/nixos/modules/services/misc/n8n.nix>

## services.n8n.environment.N8N_PORT

The HTTP port n8n runs on. Type: string or 16 bit unsigned integer; between 0 and 65535 (both inclusive) convertible to it Default: 5678 Declared by: <nixpkgs/nixos/modules/services/misc/n8n.nix>

## services.n8n.environment.N8N_USER_FOLDER

Provide the path where n8n will create the .n8n folder. This directory stores user-specific data, such as database file and encryption key. Type: absolute path (read only) Default: "/var/lib/n8n" Declared by: <nixpkgs/nixos/modules/services/misc/n8n.nix>

## services.n8n.environment.N8N_VERSION_NOTIFICATIONS_ENABLED

When enabled, n8n sends notifications of new versions and security updates. Type: string or boolean convertible to it Default: false Declared by: <nixpkgs/nixos/modules/services/misc/n8n.nix>
