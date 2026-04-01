---
module: services.asterisk
option_count: 6
source: options.html
---

# services.asterisk

## services.asterisk.enable

Whether to enable the Asterisk PBX server. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/asterisk.nix>

## services.asterisk.package

The asterisk package to use. Type: package Default: pkgs.asterisk Declared by: <nixpkgs/nixos/modules/services/networking/asterisk.nix>

## services.asterisk.confFiles

Sets the content of config files (typically ending with .conf) in the Asterisk configuration directory. Note that if you want to change asterisk.conf, it is preferable to use the services.asterisk.extraConfig option over this option. If "asterisk.conf" is specified with the confFiles option (not recommended), you must be prepared to set your own astetcdir path. See https://www.asterisk.org/community/documentation/ for more examples of what is possible here. Type: attribute set of string Default: { } Example: { "extensions.conf" = '' [tests] ; Dial 100 for "hello, world" exten => 100,1,Answer() same => n,Wait(1) same => n,Playback(hello-world) same => n,Hangup() [softphones] include => tests [unauthorized] ''; "sip.conf" = '' [general] allowguest=no ; Require authentication context=unauthorized ; Send unauthorized users to /dev/null srvlookup=no ; Don't do DNS lookup udpbindaddr=0.0.0.0 ; Listen on all interfaces nat=force_rport,comedia ; Assume device is behind NAT [softphone](!) type=friend ; Match on username first, IP second context=softphones ; Send to softphones context in ; extensions.conf file host=dynamic ; Device will register with asterisk disallow=all ; Manually specify codecs to allow allow=g722 allow=ulaw allow=alaw [myphone](softphone) secret=GhoshevFew ; Change this password! ''; "logger.conf" = '' [general] [logfiles] ; Add debug output to log syslog.local0 => notice,warning,error,debug ''; } Declared by: <nixpkgs/nixos/modules/services/networking/asterisk.nix>

## services.asterisk.extraArguments

Additional command line arguments to pass to Asterisk. Type: list of string Default: [ ] Example: [ "-vvvddd" "-e" "1024" ] Declared by: <nixpkgs/nixos/modules/services/networking/asterisk.nix>

## services.asterisk.extraConfig

Extra configuration options appended to the default asterisk.conf file. Type: strings concatenated with “\n” Default: "" Example: '' [options] verbose=3 debug=3 '' Declared by: <nixpkgs/nixos/modules/services/networking/asterisk.nix>

## services.asterisk.useTheseDefaultConfFiles

Sets these config files to the default content. The default value for this option contains all necesscary files to avoid errors at startup. This does not override settings via services.asterisk.confFiles. Type: list of string Default: [ "ari.conf" "acl.conf" "agents.conf" "amd.conf" "calendar.conf" "cdr.conf" "cdr_syslog.conf" "cdr_custom.conf" "cel.conf" "cel_custom.conf" "cli_aliases.conf" "confbridge.conf" "dundi.conf" "features.conf" "hep.conf" "iax.conf" "pjsip.conf" "pjsip_wizard.conf" "phone.conf" "phoneprov.conf" "queues.conf" "res_config_sqlite3.conf" "res_parking.conf" "statsd.conf" "udptl.conf" "unistim.conf" ] Example: [ "sip.conf" "dundi.conf" ] Declared by: <nixpkgs/nixos/modules/services/networking/asterisk.nix>
