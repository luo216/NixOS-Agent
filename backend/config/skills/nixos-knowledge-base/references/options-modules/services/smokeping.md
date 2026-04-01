---
module: services.smokeping
option_count: 22
source: options.html
---

# services.smokeping

## services.smokeping.enable

Whether to enable smokeping service. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/smokeping.nix>

## services.smokeping.package

The smokeping package to use. Type: package Default: pkgs.smokeping Declared by: <nixpkgs/nixos/modules/services/networking/smokeping.nix>

## services.smokeping.alertConfig

Configuration for alerts. Type: strings concatenated with “\n” Default: '' to = root@localhost from = smokeping@localhost '' Example: '' to = alertee@address.somewhere from = smokealert@company.xy +someloss type = loss # in percent pattern = >0%,*12*,>0%,*12*,>0% comment = loss 3 times in a row; '' Declared by: <nixpkgs/nixos/modules/services/networking/smokeping.nix>

## services.smokeping.cgiUrl

URL to the smokeping cgi. Type: string Default: "http://${hostName}/smokeping.cgi" Example: "https://somewhere.example.com/smokeping.cgi" Declared by: <nixpkgs/nixos/modules/services/networking/smokeping.nix>

## services.smokeping.config

Full smokeping config supplied by the user. Overrides and replaces any other configuration supplied. Type: null or strings concatenated with “\n” Default: null Declared by: <nixpkgs/nixos/modules/services/networking/smokeping.nix>

## services.smokeping.databaseConfig

Configure the ping frequency and retention of the rrd files. Once set, changing the interval will require deletion or migration of all the collected data. Type: strings concatenated with “\n” Default: '' step = 300 pings = 20 # consfn mrhb steps total AVERAGE 0.5 1 1008 AVERAGE 0.5 12 4320 MIN 0.5 12 4320 MAX 0.5 12 4320 AVERAGE 0.5 144 720 MAX 0.5 144 720 MIN 0.5 144 720 '' Example: '' # near constant pings. step = 30 pings = 20 # consfn mrhb steps total AVERAGE 0.5 1 10080 AVERAGE 0.5 12 43200 MIN 0.5 12 43200 MAX 0.5 12 43200 AVERAGE 0.5 144 7200 MAX 0.5 144 7200 MIN 0.5 144 7200 '' Declared by: <nixpkgs/nixos/modules/services/networking/smokeping.nix>

## services.smokeping.extraConfig

Any additional customization not already included. Type: strings concatenated with “\n” Default: "" Declared by: <nixpkgs/nixos/modules/services/networking/smokeping.nix>

## services.smokeping.host

Host/IP to bind to for the web server. Setting it to null skips passing the -h option to thttpd, which makes it bind to all interfaces. Type: null or string Default: "localhost" Example: "192.0.2.1" Declared by: <nixpkgs/nixos/modules/services/networking/smokeping.nix>

## services.smokeping.hostName

DNS name for the urls generated in the cgi. Type: string Default: config.networking.fqdn Example: "somewhere.example.com" Declared by: <nixpkgs/nixos/modules/services/networking/smokeping.nix>

## services.smokeping.imgUrl

Base url for images generated in the cgi. The default is a relative URL to ensure it works also when e.g. forwarding the GUI port via SSH. Type: string Default: "cache" Example: "https://somewhere.example.com/cache" Declared by: <nixpkgs/nixos/modules/services/networking/smokeping.nix>

## services.smokeping.linkStyle

DNS name for the urls generated in the cgi. Type: one of “original”, “absolute”, “relative” Default: "relative" Example: "absolute" Declared by: <nixpkgs/nixos/modules/services/networking/smokeping.nix>

## services.smokeping.mailHost

Use this SMTP server to send alerts Type: string Default: "" Example: "localhost" Declared by: <nixpkgs/nixos/modules/services/networking/smokeping.nix>

## services.smokeping.owner

Real name of the owner of the instance Type: string Default: "nobody" Example: "Bob Foobawr" Declared by: <nixpkgs/nixos/modules/services/networking/smokeping.nix>

## services.smokeping.ownerEmail

Email contact for owner Type: string Default: "no-reply@${hostName}" Example: "no-reply@yourdomain.com" Declared by: <nixpkgs/nixos/modules/services/networking/smokeping.nix>

## services.smokeping.presentationConfig

presentation graph style Type: strings concatenated with “\n” Default: '' + charts menu = Charts title = The most interesting destinations ++ stddev sorter = StdDev(entries=>4) title = Top Standard Deviation menu = Std Deviation format = Standard Deviation %f ++ max sorter = Max(entries=>5) title = Top Max Roundtrip Time menu = by Max format = Max Roundtrip Time %f seconds ++ loss sorter = Loss(entries=>5) title = Top Packet Loss menu = Loss format = Packets Lost %f ++ median sorter = Median(entries=>5) title = Top Median Roundtrip Time menu = by Median format = Median RTT %f seconds + overview width = 600 height = 50 range = 10h + detail width = 600 height = 200 unison_tolerance = 2 "Last 3 Hours" 3h "Last 30 Hours" 30h "Last 10 Days" 10d "Last 360 Days" 360d '' Declared by: <nixpkgs/nixos/modules/services/networking/smokeping.nix>

## services.smokeping.presentationTemplate

Default page layout for the web UI. Type: string Default: "${pkgs.smokeping}/etc/basepage.html.dist" Declared by: <nixpkgs/nixos/modules/services/networking/smokeping.nix>

## services.smokeping.probeConfig

Probe configuration Type: strings concatenated with “\n” Default: '' + FPing binary = ${config.security.wrapperDir}/fping '' Declared by: <nixpkgs/nixos/modules/services/networking/smokeping.nix>

## services.smokeping.sendmail

Use this sendmail compatible script to deliver alerts Type: null or absolute path Default: null Example: "/run/wrappers/bin/sendmail" Declared by: <nixpkgs/nixos/modules/services/networking/smokeping.nix>

## services.smokeping.smokeMailTemplate

Specify the smokemail template for alerts. Type: string Default: "${package}/etc/smokemail.dist" Declared by: <nixpkgs/nixos/modules/services/networking/smokeping.nix>

## services.smokeping.targetConfig

Target configuration Type: strings concatenated with “\n” Default: '' probe = FPing menu = Top title = Network Latency Grapher remark = Welcome to the SmokePing website of xxx Company. \ Here you will learn all about the latency of our network. + Local menu = Local title = Local Network ++ LocalMachine menu = Local Machine title = This host host = localhost '' Declared by: <nixpkgs/nixos/modules/services/networking/smokeping.nix>

## services.smokeping.user

User that runs smokeping and (optionally) thttpd. A group of the same name will be created as well. Type: string Default: "smokeping" Declared by: <nixpkgs/nixos/modules/services/networking/smokeping.nix>

## services.smokeping.webService

Enable a smokeping web interface Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/networking/smokeping.nix>
