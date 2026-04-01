---
module: services.cron
option_count: 4
source: options.html
---

# services.cron

## services.cron.enable

Whether to enable the Vixie cron daemon. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/scheduling/cron.nix>

## services.cron.cronFiles

A list of extra crontab files that will be read and appended to the main crontab file when the cron service starts. Type: list of absolute path Default: [ ] Declared by: <nixpkgs/nixos/modules/services/scheduling/cron.nix>

## services.cron.mailto

Email address to which job output will be mailed. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/scheduling/cron.nix>

## services.cron.systemCronJobs

A list of Cron jobs to be appended to the system-wide crontab. See the manual page for crontab for the expected format. If you want to get the results mailed you must setuid sendmail. See security.wrappers If neither /var/cron/cron.deny nor /var/cron/cron.allow exist only root is allowed to have its own crontab file. The /var/cron/cron.deny file is created automatically for you, so every user can use a crontab. Many nixos modules set systemCronJobs, so if you decide to disable vixie cron and enable another cron daemon, you may want it to get its system crontab based on systemCronJobs. Type: list of string Default: [ ] Example: [ "* * * * * test ls -l / > /tmp/cronout 2>&1" "* * * * * eelco echo Hello World > /home/eelco/cronout" ] Declared by: <nixpkgs/nixos/modules/services/scheduling/cron.nix>
