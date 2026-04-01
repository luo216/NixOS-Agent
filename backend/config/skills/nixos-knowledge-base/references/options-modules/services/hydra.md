---
module: services.hydra
option_count: 21
source: options.html
---

# services.hydra

## services.hydra.enable

Whether to run Hydra services. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/continuous-integration/hydra/default.nix>

## services.hydra.package

The hydra package to use. Type: package Default: pkgs.hydra Declared by: <nixpkgs/nixos/modules/services/continuous-integration/hydra/default.nix>

## services.hydra.buildMachinesFiles

List of files containing build machines. Type: list of absolute path Default: lib.optional (config.nix.buildMachines != []) "/etc/nix/machines" Example: [ "/etc/nix/machines" "/var/lib/hydra/provisioner/machines" ] Declared by: <nixpkgs/nixos/modules/services/continuous-integration/hydra/default.nix>

## services.hydra.dbi

The DBI string for Hydra database connection. NOTE: Attempts to set application_name will be overridden by hydra-TYPE (where TYPE is e.g. evaluator, queue-runner, etc.) in all hydra services to more easily distinguish where queries are coming from. Type: string Default: "dbi:Pg:dbname=hydra;user=hydra;" Example: "dbi:Pg:dbname=hydra;host=postgres.example.org;user=foo;" Declared by: <nixpkgs/nixos/modules/services/continuous-integration/hydra/default.nix>

## services.hydra.debugServer

Whether to run the server in debug mode. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/continuous-integration/hydra/default.nix>

## services.hydra.extraConfig

Extra lines for the Hydra configuration. Type: strings concatenated with “\n” Declared by: <nixpkgs/nixos/modules/services/continuous-integration/hydra/default.nix>

## services.hydra.extraEnv

Extra environment variables for Hydra. Type: attribute set of string Default: { } Declared by: <nixpkgs/nixos/modules/services/continuous-integration/hydra/default.nix>

## services.hydra.gcRootsDir

Directory that holds Hydra garbage collector roots. Type: absolute path Default: "/nix/var/nix/gcroots/hydra" Declared by: <nixpkgs/nixos/modules/services/continuous-integration/hydra/default.nix>

## services.hydra.hydraURL

The base URL for the Hydra webserver instance. Used for links in emails. Type: string Declared by: <nixpkgs/nixos/modules/services/continuous-integration/hydra/default.nix>

## services.hydra.listenHost

The hostname or address to listen on or * to listen on all interfaces. Type: string Default: "*" Example: "localhost" Declared by: <nixpkgs/nixos/modules/services/continuous-integration/hydra/default.nix>

## services.hydra.logo

Path to a file containing the logo of your Hydra instance. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/continuous-integration/hydra/default.nix>

## services.hydra.maxServers

Maximum number of starman workers to spawn. Type: signed integer Default: 25 Declared by: <nixpkgs/nixos/modules/services/continuous-integration/hydra/default.nix>

## services.hydra.maxSpareServers

Maximum number of spare starman workers to keep. Type: signed integer Default: 5 Declared by: <nixpkgs/nixos/modules/services/continuous-integration/hydra/default.nix>

## services.hydra.minSpareServers

Minimum number of spare starman workers to keep. Type: signed integer Default: 4 Declared by: <nixpkgs/nixos/modules/services/continuous-integration/hydra/default.nix>

## services.hydra.minimumDiskFree

Threshold of minimum disk space (GiB) to determine if the queue runner should run or not. Type: signed integer Default: 0 Declared by: <nixpkgs/nixos/modules/services/continuous-integration/hydra/default.nix>

## services.hydra.minimumDiskFreeEvaluator

Threshold of minimum disk space (GiB) to determine if the evaluator should run or not. Type: signed integer Default: 0 Declared by: <nixpkgs/nixos/modules/services/continuous-integration/hydra/default.nix>

## services.hydra.notificationSender

Sender email address used for email notifications. Type: string Declared by: <nixpkgs/nixos/modules/services/continuous-integration/hydra/default.nix>

## services.hydra.port

TCP port the web server should listen to. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 3000 Declared by: <nixpkgs/nixos/modules/services/continuous-integration/hydra/default.nix>

## services.hydra.smtpHost

Hostname of the SMTP server to use to send email. Type: null or string Default: null Example: "localhost" Declared by: <nixpkgs/nixos/modules/services/continuous-integration/hydra/default.nix>

## services.hydra.tracker

Piece of HTML that is included on all pages. Type: string Default: "" Declared by: <nixpkgs/nixos/modules/services/continuous-integration/hydra/default.nix>

## services.hydra.useSubstitutes

Whether to use binary caches for downloading store paths. Note that binary substitutions trigger (a potentially large number of) additional HTTP requests that slow down the queue monitor thread significantly. Also, this Hydra instance will serve those downloaded store paths to its users with its own signature attached as if it had built them itself, so don’t enable this feature unless your active binary caches are absolute trustworthy. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/continuous-integration/hydra/default.nix>
