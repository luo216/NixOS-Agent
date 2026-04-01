---
module: services.mattermost.telemetry
option_count: 2
source: options.html
---

# services.mattermost.telemetry

## services.mattermost.telemetry.enableDiagnostics

True if we should enable sending diagnostic data. This reaches out to Mattermost’s servers: https://docs.mattermost.com/manage/telemetry.html#error-and-diagnostics-reporting-feature Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/web-apps/mattermost.nix>

## services.mattermost.telemetry.enableSecurityAlerts

True if we should enable security update checking. This reaches out to Mattermost’s servers: https://docs.mattermost.com/manage/telemetry.html#security-update-check-feature Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/web-apps/mattermost.nix>
