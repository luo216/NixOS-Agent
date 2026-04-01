---
module: services.murmur
option_count: 33
source: options.html
---

# services.murmur

## services.murmur.enable

Whether to enable Mumble server. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/murmur.nix>

## services.murmur.package

The murmur package to use. Type: package Default: pkgs.murmur Declared by: <nixpkgs/nixos/modules/services/networking/murmur.nix>

## services.murmur.allowHtml

Allow HTML in client messages, comments, and channel descriptions. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/networking/murmur.nix>

## services.murmur.autobanAttempts

Number of attempts a client is allowed to make in autobanTimeframe seconds, before being banned for autobanTime. Type: signed integer Default: 10 Declared by: <nixpkgs/nixos/modules/services/networking/murmur.nix>

## services.murmur.autobanTime

The amount of time an IP ban lasts (in seconds). Type: signed integer Default: 300 Declared by: <nixpkgs/nixos/modules/services/networking/murmur.nix>

## services.murmur.autobanTimeframe

Timeframe in which a client can connect without being banned for repeated attempts (in seconds). Type: signed integer Default: 120 Declared by: <nixpkgs/nixos/modules/services/networking/murmur.nix>

## services.murmur.bandwidth

Maximum bandwidth (in bits per second) that clients may send speech at. Type: signed integer Default: 72000 Declared by: <nixpkgs/nixos/modules/services/networking/murmur.nix>

## services.murmur.bonjour

Whether to enable Bonjour auto-discovery, which allows clients over your LAN to automatically discover Mumble servers. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/murmur.nix>

## services.murmur.clientCertRequired

Whether to enable requiring clients to authenticate via certificates. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/murmur.nix>

## services.murmur.dbus

Enable D-Bus remote control. Set to the bus you want Murmur to connect to. Type: one of <null>, “session”, “system” Default: null Declared by: <nixpkgs/nixos/modules/services/networking/murmur.nix>

## services.murmur.environmentFile

Environment file as defined in systemd.exec(5). Secrets may be passed to the service without adding them to the world-readable Nix store, by specifying placeholder variables as the option value in Nix and setting these variables accordingly in the environment file. # snippet of murmur-related config services.murmur.password = "$MURMURD_PASSWORD"; # content of the environment file MURMURD_PASSWORD=verysecretpassword Note that this file needs to be available on the host on which murmur is running. Type: null or absolute path Default: null Example: "${config.services.murmur.stateDir}/murmurd.env" Declared by: <nixpkgs/nixos/modules/services/networking/murmur.nix>

## services.murmur.extraConfig

Extra configuration to put into murmur.ini. Type: strings concatenated with “\n” Default: "" Declared by: <nixpkgs/nixos/modules/services/networking/murmur.nix>

## services.murmur.group

The name of an existing group to use to run the service. If not specified, the default group will be created. Type: string Default: "murmur" Declared by: <nixpkgs/nixos/modules/services/networking/murmur.nix>

## services.murmur.hostName

Host to bind to. Defaults binding on all addresses. Type: string Default: "" Declared by: <nixpkgs/nixos/modules/services/networking/murmur.nix>

## services.murmur.imgMsgLength

Max length of image messages. Set 0 for no limit. Type: signed integer Default: 131072 Declared by: <nixpkgs/nixos/modules/services/networking/murmur.nix>

## services.murmur.logDays

How long to store RPC logs for in the database. Set 0 to keep logs forever, or -1 to disable DB logging. Type: signed integer Default: 31 Declared by: <nixpkgs/nixos/modules/services/networking/murmur.nix>

## services.murmur.logToFile

Whether to enable logging to a file instead of journald, which is stored in /var/log/murmur. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/murmur.nix>

## services.murmur.openFirewall

Whether to enable opening ports in the firewall for the Mumble server. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/murmur.nix>

## services.murmur.password

Required password to join server, if specified. Type: string Default: "" Declared by: <nixpkgs/nixos/modules/services/networking/murmur.nix>

## services.murmur.port

Ports to bind to (UDP and TCP). Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 64738 Declared by: <nixpkgs/nixos/modules/services/networking/murmur.nix>

## services.murmur.registerHostname

DNS hostname where your server can be reached. This is only needed if you want your server to be accessed by its hostname and not IP - but the name must resolve on the internet properly. Type: string Default: "" Declared by: <nixpkgs/nixos/modules/services/networking/murmur.nix>

## services.murmur.registerName

Public server registration name, and also the name of the Root channel. Even if you don’t publicly register your server, you probably still want to set this. Type: string Default: "" Declared by: <nixpkgs/nixos/modules/services/networking/murmur.nix>

## services.murmur.registerPassword

Public server registry password, used authenticate your server to the registry to prevent impersonation; required for subsequent registry updates. Type: string Default: "" Declared by: <nixpkgs/nixos/modules/services/networking/murmur.nix>

## services.murmur.registerUrl

URL website for your server. Type: string Default: "" Declared by: <nixpkgs/nixos/modules/services/networking/murmur.nix>

## services.murmur.sendVersion

Send Murmur version in UDP response. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/networking/murmur.nix>

## services.murmur.sslCa

Path to your SSL CA certificate. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/networking/murmur.nix>

## services.murmur.sslCert

Path to your SSL certificate. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/networking/murmur.nix>

## services.murmur.sslKey

Path to your SSL key. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/networking/murmur.nix>

## services.murmur.stateDir

Directory to store data for the server. Type: absolute path Default: "/var/lib/murmur" Declared by: <nixpkgs/nixos/modules/services/networking/murmur.nix>

## services.murmur.textMsgLength

Max length of text messages. Set 0 for no limit. Type: signed integer Default: 5000 Declared by: <nixpkgs/nixos/modules/services/networking/murmur.nix>

## services.murmur.user

The name of an existing user to use to run the service. If not specified, the default user will be created. Type: string Default: "murmur" Declared by: <nixpkgs/nixos/modules/services/networking/murmur.nix>

## services.murmur.users

Maximum number of concurrent clients allowed. Type: signed integer Default: 100 Declared by: <nixpkgs/nixos/modules/services/networking/murmur.nix>

## services.murmur.welcometext

Welcome message for connected clients. Type: string Default: "" Declared by: <nixpkgs/nixos/modules/services/networking/murmur.nix>
