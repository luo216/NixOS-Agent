---
module: services.journaldriver
option_count: 6
source: options.html
---

# services.journaldriver

## services.journaldriver.enable

Whether to enable journaldriver to forward journald logs to Stackdriver Logging. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/logging/journaldriver.nix>

## services.journaldriver.applicationCredentials

Path to the service account private key (in JSON-format) used to forward log entries to Stackdriver Logging on non-GCP instances. This option is required on non-GCP machines, but should not be set on GCP instances. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/logging/journaldriver.nix>

## services.journaldriver.googleCloudProject

Configures the name of the Google Cloud project to which to forward journald logs. This option is required on non-GCP machines, but should not be set on GCP instances. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/logging/journaldriver.nix>

## services.journaldriver.logLevel

Log level at which journaldriver logs its own output. Type: string Default: "info" Declared by: <nixpkgs/nixos/modules/services/logging/journaldriver.nix>

## services.journaldriver.logName

Configures the name of the target log in Stackdriver Logging. This option can be set to, for example, the hostname of a machine to improve the user experience in the logging overview. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/logging/journaldriver.nix>

## services.journaldriver.logStream

Configures the name of the Stackdriver Logging log stream into which to write journald entries. This option is required on non-GCP machines, but should not be set on GCP instances. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/logging/journaldriver.nix>
