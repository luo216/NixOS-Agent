---
module: services.journalwatch
option_count: 10
source: options.html
---

# services.journalwatch

## services.journalwatch.enable

If enabled, periodically check the journal with journalwatch and report the results by mail. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/logging/journalwatch.nix>

## services.journalwatch.package

The journalwatch package to use. Type: package Default: pkgs.journalwatch Declared by: <nixpkgs/nixos/modules/services/logging/journalwatch.nix>

## services.journalwatch.accuracy

The time window around the interval in which the journalwatch run will be scheduled. The format is described in systemd.time(7). Type: string Default: "10min" Declared by: <nixpkgs/nixos/modules/services/logging/journalwatch.nix>

## services.journalwatch.extraConfig

Extra lines to be added verbatim to the journalwatch/config configuration file. You can add any commandline argument to the config, without the ‘–’. See journalwatch --help for all arguments and their description. Type: string Default: "" Declared by: <nixpkgs/nixos/modules/services/logging/journalwatch.nix>

## services.journalwatch.filterBlocks

filterBlocks can be defined to blacklist journal messages which are not errors. Each block matches on a log entry field, and the filters in that block then are matched against all messages with a matching log entry field. All messages whose PRIORITY is at least 6 (INFO) are processed by journalwatch. If you don’t specify any filterBlocks, PRIORITY is reduced to 5 (NOTICE) by default. All regular expressions are extended Python regular expressions, for details see: http://doc.pyschools.com/html/regex.html Type: list of (submodule) Default: [ { filters = '' (Stopped|Stopping|Starting|Started) .* (Created slice|Removed slice) user-\d*\.slice\. Received SIGRTMIN\+24 from PID .* (Reached target|Stopped target) .* Startup finished in \d*ms\. ''; match = "SYSLOG_IDENTIFIER = systemd"; } ] Example: [ { filters = '' New session [a-z]?\d+ of user \w+\. Removed session [a-z]?\d+\. ''; match = "_SYSTEMD_UNIT = systemd-logind.service"; } { filters = '' pam_unix\(crond:session\): session (opened|closed) for user \w+ \(\w+\) CMD .* ''; match = "SYSLOG_IDENTIFIER = /(CROND|crond)/"; } ] Declared by: <nixpkgs/nixos/modules/services/logging/journalwatch.nix>

## services.journalwatch.interval

How often to run journalwatch. The format is described in systemd.time(7). Type: string Default: "hourly" Declared by: <nixpkgs/nixos/modules/services/logging/journalwatch.nix>

## services.journalwatch.mailBinary

Sendmail-compatible binary to be used to send the messages. Type: absolute path Default: "/run/wrappers/bin/sendmail" Declared by: <nixpkgs/nixos/modules/services/logging/journalwatch.nix>

## services.journalwatch.mailFrom

Mail address to send journalwatch reports from. Type: string Default: "journalwatch@${config.networking.hostName}" Declared by: <nixpkgs/nixos/modules/services/logging/journalwatch.nix>

## services.journalwatch.mailTo

Mail address to send journalwatch reports to. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/logging/journalwatch.nix>

## services.journalwatch.priority

Lowest priority of message to be considered. A value between 7 (“debug”), and 0 (“emerg”). Defaults to 6 (“info”). If you don’t care about anything with “info” priority, you can reduce this to e.g. 5 (“notice”) to considerably reduce the amount of messages without needing many filterBlocks. Type: integer between 0 and 7 (both inclusive) Default: 6 Declared by: <nixpkgs/nixos/modules/services/logging/journalwatch.nix>
