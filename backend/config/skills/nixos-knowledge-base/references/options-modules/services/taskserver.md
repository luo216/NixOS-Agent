---
module: services.taskserver
option_count: 20
source: options.html
---

# services.taskserver

## services.taskserver.enable

Whether to enable the Taskwarrior 2 server. More instructions about NixOS in conjunction with Taskserver can be found in the NixOS manual. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/misc/taskserver>

## services.taskserver.allowedClientIDs

A list of regular expressions that are matched against the reported client id (such as task 2.3.0). The values all or none have special meaning. Overridden by any entry in the option services.taskserver.disallowedClientIDs. Type: string or list of string Default: [ ] Example: [ "[Tt]ask [2-9]+" ] Declared by: <nixpkgs/nixos/modules/services/misc/taskserver>

## services.taskserver.ciphers

List of GnuTLS ciphers to use. See the GnuTLS documentation about priority strings at https://gnutls.org/manual/html_node/Priority-Strings.html for full details. Type: null or strings concatenated with “:” Default: null Example: "NORMAL:-VERS-SSL3.0" Declared by: <nixpkgs/nixos/modules/services/misc/taskserver>

## services.taskserver.config

Configuration options to pass to Taskserver. The options here are the same as described in taskdrc(5) from the taskwarrior2 package, but with one difference: The server option is server.listen here, because the server option would collide with other options like server.cert and we would run in a type error (attribute set versus string). Nix types like integers or booleans are automatically converted to the right values Taskserver would expect. Type: attribute set Example: { client = { cert = "/tmp/debugging.cert"; }; } Declared by: <nixpkgs/nixos/modules/services/misc/taskserver>

## services.taskserver.confirmation

Determines whether certain commands are confirmed. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/misc/taskserver>

## services.taskserver.dataDir

Data directory for Taskserver. Type: absolute path Default: "/var/lib/taskserver" Declared by: <nixpkgs/nixos/modules/services/misc/taskserver>

## services.taskserver.debug

Logs debugging information. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/misc/taskserver>

## services.taskserver.disallowedClientIDs

A list of regular expressions that are matched against the reported client id (such as task 2.3.0). The values all or none have special meaning. Any entry here overrides those in services.taskserver.allowedClientIDs. Type: string or list of string Default: [ ] Example: [ "[Tt]ask [2-9]+" ] Declared by: <nixpkgs/nixos/modules/services/misc/taskserver>

## services.taskserver.extensions

Fully qualified path of the Taskserver extension scripts. Currently there are none. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/misc/taskserver>

## services.taskserver.fqdn

The fully qualified domain name of this server, which is also used as the common name in the certificates. Type: string Default: "localhost" Declared by: <nixpkgs/nixos/modules/services/misc/taskserver>

## services.taskserver.group

Group for Taskserver. Type: string Default: "taskd" Declared by: <nixpkgs/nixos/modules/services/misc/taskserver>

## services.taskserver.ipLog

Logs the IP addresses of incoming requests. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/misc/taskserver>

## services.taskserver.listenHost

The address (IPv4, IPv6 or DNS) to listen on. Type: string Default: "localhost" Example: "::" Declared by: <nixpkgs/nixos/modules/services/misc/taskserver>

## services.taskserver.listenPort

Port number of the Taskserver. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 53589 Declared by: <nixpkgs/nixos/modules/services/misc/taskserver>

## services.taskserver.openFirewall

Whether to open the firewall for the specified Taskserver port. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/misc/taskserver>

## services.taskserver.organisations

An attribute set where the keys name the organisation and the values are a set of lists of users and groups. Type: attribute set of (submodule) Default: { } Example: { myShinyOrganisation = { groups = [ "staff" "outsiders" ]; users = [ "alice" "bob" ]; }; yetAnotherOrganisation = { users = [ "foo" "bar" ]; }; } Declared by: <nixpkgs/nixos/modules/services/misc/taskserver>

## services.taskserver.queueSize

Size of the connection backlog, see listen(2). Type: signed integer Default: 10 Declared by: <nixpkgs/nixos/modules/services/misc/taskserver>

## services.taskserver.requestLimit

Size limit of incoming requests, in bytes. Type: signed integer Default: 1048576 Declared by: <nixpkgs/nixos/modules/services/misc/taskserver>

## services.taskserver.trust

Determines how client certificates are validated. The value allow all performs no client certificate validation. This is not recommended. The value strict causes the client certificate to be validated against a CA. Type: one of “allow all”, “strict” Default: "strict" Declared by: <nixpkgs/nixos/modules/services/misc/taskserver>

## services.taskserver.user

User for Taskserver. Type: string Default: "taskd" Declared by: <nixpkgs/nixos/modules/services/misc/taskserver>
