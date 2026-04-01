---
module: services.jibri
option_count: 5
source: options.html
---

# services.jibri

## services.jibri.enable

Whether to enable Jitsi BRoadcasting Infrastructure. Currently Jibri must be run on a host that is also running services.jitsi-meet.enable, so for most use cases it will be simpler to run services.jitsi-meet.jibri.enable. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/jibri/default.nix>

## services.jibri.config

Jibri configuration. See https://github.com/jitsi/jibri/blob/master/src/main/resources/reference.conf for default configuration with comments. Type: HOCON value Default: { } Declared by: <nixpkgs/nixos/modules/services/networking/jibri/default.nix>

## services.jibri.finalizeScript

This script runs when jibri finishes recording a video of a conference. Type: absolute path Default: pkgs.writeScript "finalize_recording.sh" '''' #!/bin/sh RECORDINGS_DIR=$1 echo "This is a dummy finalize script" > /tmp/finalize.out echo "The script was invoked with recordings directory $RECORDINGS_DIR." >> /tmp/finalize.out echo "You should put any finalize logic (renaming, uploading to a service" >> /tmp/finalize.out echo "or storage provider, etc.) in this script" >> /tmp/finalize.out exit 0 ''''; Example: pkgs.writeScript "finalize_recording.sh" '''' #!/bin/sh RECORDINGS_DIR=$1 ${pkgs.rclone}/bin/rclone copy $RECORDINGS_DIR RCLONE_REMOTE:jibri-recordings/ -v --log-file=/var/log/jitsi/jibri/recording-upload.txt exit 0 ''''; Declared by: <nixpkgs/nixos/modules/services/networking/jibri/default.nix>

## services.jibri.ignoreCert

Whether to enable the flag “–ignore-certificate-errors” for the Chromium browser opened by Jibri. Intended for use in automated tests or anywhere else where using a verified cert for Jitsi-Meet is not possible. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/jibri/default.nix>

## services.jibri.xmppEnvironments

XMPP servers to connect to. Type: attribute set of (submodule) Default: { } Example: "jitsi-meet" = { xmppServerHosts = [ "localhost" ]; xmppDomain = config.services.jitsi-meet.hostName; control.muc = { domain = "internal.${config.services.jitsi-meet.hostName}"; roomName = "JibriBrewery"; nickname = "jibri"; }; control.login = { domain = "auth.${config.services.jitsi-meet.hostName}"; username = "jibri"; passwordFile = "/var/lib/jitsi-meet/jibri-auth-secret"; }; call.login = { domain = "recorder.${config.services.jitsi-meet.hostName}"; username = "recorder"; passwordFile = "/var/lib/jitsi-meet/jibri-recorder-secret"; }; usageTimeout = "0"; disableCertificateVerification = true; stripFromRoomDomain = "conference."; }; Declared by: <nixpkgs/nixos/modules/services/networking/jibri/default.nix>
