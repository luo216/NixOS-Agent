---
module: services.logcheck.ignoreCron.<name>
option_count: 3
source: options.html
---

# services.logcheck.ignoreCron.<name>

## services.logcheck.ignoreCron.<name>.cmdline

Command line for the cron job. Will be turned into a regex for the logcheck ignore rule. Type: string Default: "" Declared by: <nixpkgs/nixos/modules/services/logging/logcheck.nix>

## services.logcheck.ignoreCron.<name>.timeArgs

“min hr dom mon dow” crontab time args, to auto-create a cronjob too. Leave at null to not do this and just add a logcheck ignore rule. Type: null or string Default: null Example: "02 06 * * *" Declared by: <nixpkgs/nixos/modules/services/logging/logcheck.nix>

## services.logcheck.ignoreCron.<name>.user

User that runs the cronjob. Type: string Default: "root" Declared by: <nixpkgs/nixos/modules/services/logging/logcheck.nix>
