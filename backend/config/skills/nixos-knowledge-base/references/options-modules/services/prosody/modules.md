---
module: services.prosody.modules
option_count: 35
source: options.html
---

# services.prosody.modules

## services.prosody.modules.admin_adhoc

Allows administration via an XMPP client that supports ad-hoc commands Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/networking/prosody.nix>

## services.prosody.modules.admin_telnet

Opens telnet console interface on localhost port 5582 Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/prosody.nix>

## services.prosody.modules.announce

Send announcement to all online users Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/prosody.nix>

## services.prosody.modules.blocklist

Allow users to block communications with other users Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/networking/prosody.nix>

## services.prosody.modules.bookmarks

Allows interop between older clients that use XEP-0048: Bookmarks in its 1.0 version and recent clients which use it in PEP Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/networking/prosody.nix>

## services.prosody.modules.bosh

Enable BOSH clients, aka ‘Jabber over HTTP’ Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/prosody.nix>

## services.prosody.modules.carbons

Keep multiple clients in sync Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/networking/prosody.nix>

## services.prosody.modules.cloud_notify

Push notifications to inform users of new messages or other pertinent information even when they have no XMPP clients online Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/networking/prosody.nix>

## services.prosody.modules.csi

Implements the CSI protocol that allows clients to report their active/inactive state to the server Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/networking/prosody.nix>

## services.prosody.modules.dialback

s2s dialback support Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/networking/prosody.nix>

## services.prosody.modules.disco

Service discovery Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/networking/prosody.nix>

## services.prosody.modules.groups

Shared roster support Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/prosody.nix>

## services.prosody.modules.http_files

Serve static files from a directory over HTTP Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/prosody.nix>

## services.prosody.modules.legacyauth

Legacy authentication. Only used by some old clients and bots Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/prosody.nix>

## services.prosody.modules.limits

Enable bandwidth limiting for XMPP connections Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/prosody.nix>

## services.prosody.modules.mam

Store messages in an archive and allow users to access it Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/networking/prosody.nix>

## services.prosody.modules.motd

Send a message to users when they log in Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/prosody.nix>

## services.prosody.modules.pep

Enables users to publish their mood, activity, playing music and more Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/networking/prosody.nix>

## services.prosody.modules.ping

Replies to XMPP pings with pongs Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/networking/prosody.nix>

## services.prosody.modules.private

Private XML storage (for room bookmarks, etc.) Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/networking/prosody.nix>

## services.prosody.modules.proxy65

Enables a file transfer proxy service which clients behind NAT can use Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/networking/prosody.nix>

## services.prosody.modules.register

Allow users to register on this server using a client and change passwords Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/networking/prosody.nix>

## services.prosody.modules.roster

Allow users to have a roster Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/networking/prosody.nix>

## services.prosody.modules.saslauth

Authentication for clients and servers. Recommended if you want to log in. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/networking/prosody.nix>

## services.prosody.modules.server_contact_info

Publish contact information for this service Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/prosody.nix>

## services.prosody.modules.smacks

Allow a client to resume a disconnected session, and prevent message loss Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/networking/prosody.nix>

## services.prosody.modules.time

Let others know the time here on this server Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/networking/prosody.nix>

## services.prosody.modules.tls

Add support for secure TLS on c2s/s2s connections Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/networking/prosody.nix>

## services.prosody.modules.uptime

Report how long server has been running Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/networking/prosody.nix>

## services.prosody.modules.vcard

Allow users to set vCards Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/prosody.nix>

## services.prosody.modules.vcard_legacy

Converts users profiles and Avatars between old and new formats Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/networking/prosody.nix>

## services.prosody.modules.version

Replies to server version requests Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/networking/prosody.nix>

## services.prosody.modules.watchregistrations

Alert admins of registrations Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/prosody.nix>

## services.prosody.modules.websocket

Enable WebSocket support Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/prosody.nix>

## services.prosody.modules.welcome

Welcome users who register accounts Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/prosody.nix>
