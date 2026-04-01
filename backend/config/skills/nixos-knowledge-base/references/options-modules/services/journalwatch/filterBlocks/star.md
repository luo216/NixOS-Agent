---
module: services.journalwatch.filterBlocks.*
option_count: 2
source: options.html
---

# services.journalwatch.filterBlocks.*

## services.journalwatch.filterBlocks.*.filters

The filters to apply on all messages which satisfy match. Any of those messages that match any specified filter will be removed from journalwatch’s output. Each filter is an extended Python regular expression. You can specify multiple filters and separate them by newlines. Lines starting with ‘#’ are comments. Inline-comments are not permitted. Type: string Example: '' (Stopped|Stopping|Starting|Started) .* (Reached target|Stopped target) .* '' Declared by: <nixpkgs/nixos/modules/services/logging/journalwatch.nix>

## services.journalwatch.filterBlocks.*.match

Syntax: field = value Specifies the log entry field this block should apply to. If the field of a message matches this value, this patternBlock’s filters are applied. If value starts and ends with a slash, it is interpreted as an extended python regular expression, if not, it’s an exact match. The journal fields are explained in systemd.journal-fields(7). Type: string Example: "SYSLOG_IDENTIFIER = systemd" Declared by: <nixpkgs/nixos/modules/services/logging/journalwatch.nix>
