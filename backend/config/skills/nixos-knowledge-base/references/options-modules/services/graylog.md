---
module: services.graylog
option_count: 14
source: options.html
---

# services.graylog

## services.graylog.enable

Whether to enable Graylog, a log management solution. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/logging/graylog.nix>

## services.graylog.package

The graylog package to use. Type: package Default: pkgs.graylog Example: graylog-6_0 Declared by: <nixpkgs/nixos/modules/services/logging/graylog.nix>

## services.graylog.dataDir

Directory used to store Graylog server state. Type: string Default: "/var/lib/graylog/data" Declared by: <nixpkgs/nixos/modules/services/logging/graylog.nix>

## services.graylog.elasticsearchHosts

List of valid URIs of the http ports of your elastic nodes. If one or more of your elasticsearch hosts require authentication, include the credentials in each node URI that requires authentication Type: list of string Example: [ "http://node1:9200" "http://user:password@node2:19200" ] Declared by: <nixpkgs/nixos/modules/services/logging/graylog.nix>

## services.graylog.extraConfig

Any other configuration options you might want to add Type: strings concatenated with “\n” Default: "" Declared by: <nixpkgs/nixos/modules/services/logging/graylog.nix>

## services.graylog.isMaster

Whether this is the master instance of your Graylog cluster Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/logging/graylog.nix>

## services.graylog.messageJournalDir

The directory which will be used to store the message journal. The directory must be exclusively used by Graylog and must not contain any other files than the ones created by Graylog itself Type: string Default: "/var/lib/graylog/data/journal" Declared by: <nixpkgs/nixos/modules/services/logging/graylog.nix>

## services.graylog.mongodbUri

MongoDB connection string. See http://docs.mongodb.org/manual/reference/connection-string/ for details Type: string Default: "mongodb://localhost/graylog" Declared by: <nixpkgs/nixos/modules/services/logging/graylog.nix>

## services.graylog.nodeIdFile

Path of the file containing the graylog node-id Type: string Default: "/var/lib/graylog/server/node-id" Declared by: <nixpkgs/nixos/modules/services/logging/graylog.nix>

## services.graylog.passwordSecret

You MUST set a secret to secure/pepper the stored user passwords here. Use at least 64 characters. Generate one by using for example: pwgen -N 1 -s 96 Type: string Declared by: <nixpkgs/nixos/modules/services/logging/graylog.nix>

## services.graylog.plugins

Extra graylog plugins Type: list of package Default: [ ] Declared by: <nixpkgs/nixos/modules/services/logging/graylog.nix>

## services.graylog.rootPasswordSha2

You MUST specify a hash password for the root user (which you only need to initially set up the system and in case you lose connectivity to your authentication backend) This password cannot be changed using the API or via the web interface. If you need to change it, modify it here. Create one by using for example: echo -n yourpassword | shasum -a 256 and use the resulting hash value as string for the option Type: string Example: "e3c652f0ba0b4801205814f8b6bc49672c4c74e25b497770bb89b22cdeb4e952" Declared by: <nixpkgs/nixos/modules/services/logging/graylog.nix>

## services.graylog.rootUsername

Name of the default administrator user Type: string Default: "admin" Declared by: <nixpkgs/nixos/modules/services/logging/graylog.nix>

## services.graylog.user

User account under which graylog runs Type: string Default: "graylog" Declared by: <nixpkgs/nixos/modules/services/logging/graylog.nix>
