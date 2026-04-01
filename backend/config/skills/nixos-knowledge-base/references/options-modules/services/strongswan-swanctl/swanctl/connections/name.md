---
module: services.strongswan-swanctl.swanctl.connections.<name>
option_count: 35
source: options.html
---

# services.strongswan-swanctl.swanctl.connections.<name>

## services.strongswan-swanctl.swanctl.connections.<name>.aggressive

Enables Aggressive Mode instead of Main Mode with Identity Protection. Aggressive Mode is considered less secure, because the ID and HASH payloads are exchanged unprotected. This allows a passive attacker to snoop peer identities, and even worse, start dictionary attacks on the Preshared Key. StrongSwan default: false Type: null or boolean Default: null Declared by: <nixpkgs/nixos/modules/services/networking/strongswan-swanctl/module.nix>

## services.strongswan-swanctl.swanctl.connections.<name>.childless

Use childless IKE_SA initiation (allow, prefer, force or never). Use childless IKE_SA initiation (RFC 6023) for IKEv2, with the first CHILD_SA created with a separate CREATE_CHILD_SA exchange (e.g. to use an independent key exchange for all CHILD_SAs). Acceptable values are allow (the default), prefer, force and never. If set to allow, responders will accept childless IKE_SAs (as indicated via notify in the IKE_SA_INIT response) while initiators continue to create regular IKE_SAs with the first CHILD_SA created during IKE_AUTH, unless the IKE_SA is initiated explicitly without any children (which will fail if the responder does not support or has disabled this extension). The effect of prefer is the same as allow on responders, but as initiator a childless IKE_SA is initiated if the responder supports it. If set to force, only childless initiation is accepted in either role. Finally, setting the option to never disables support for childless IKE_SAs as responder. StrongSwan default: "allow" Type: null or one of “allow”, “prefer”, “force”, “never” Default: null Declared by: <nixpkgs/nixos/modules/services/networking/strongswan-swanctl/module.nix>

## services.strongswan-swanctl.swanctl.connections.<name>.children

CHILD_SA configuration sub-section. Each connection definition may have one or more sections in its children subsection. The section name defines the name of the CHILD_SA configuration, which must be unique within the connection (denoted <child> below). Type: attribute set of (submodule) Default: { } Declared by: <nixpkgs/nixos/modules/services/networking/strongswan-swanctl/module.nix>

## services.strongswan-swanctl.swanctl.connections.<name>.dpd_delay

Interval to check the liveness of a peer actively using IKEv2 INFORMATIONAL exchanges or IKEv1 R_U_THERE messages. Active DPD checking is only enforced if no IKE or ESP/AH packet has been received for the configured DPD delay. StrongSwan default: "0s" Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/networking/strongswan-swanctl/module.nix>

## services.strongswan-swanctl.swanctl.connections.<name>.dpd_timeout

Charon by default uses the normal retransmission mechanism and timeouts to check the liveness of a peer, as all messages are used for liveness checking. For compatibility reasons, with IKEv1 a custom interval may be specified; this option has no effect on connections using IKEv2. StrongSwan default: "0s" Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/networking/strongswan-swanctl/module.nix>

## services.strongswan-swanctl.swanctl.connections.<name>.dscp

Differentiated Services Field Codepoint to set on outgoing IKE packets for this connection. The value is a six digit binary encoded string specifying the Codepoint to set, as defined in RFC 2474. StrongSwan default: "000000" Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/networking/strongswan-swanctl/module.nix>

## services.strongswan-swanctl.swanctl.connections.<name>.encap

To enforce UDP encapsulation of ESP packets, the IKE daemon can fake the NAT detection payloads. This makes the peer believe that NAT takes place on the path, forcing it to encapsulate ESP packets in UDP. Usually this is not required, but it can help to work around connectivity issues with too restrictive intermediary firewalls. StrongSwan default: false Type: null or boolean Default: null Declared by: <nixpkgs/nixos/modules/services/networking/strongswan-swanctl/module.nix>

## services.strongswan-swanctl.swanctl.connections.<name>.fragmentation

Use IKE fragmentation (proprietary IKEv1 extension or RFC 7383 IKEv2 fragmentation). Acceptable values are yes (the default since 5.5.1), accept (since versions:5.5.3), force and no. If set to yes, and the peer supports it, oversized IKE messages will be sent in fragments. If set to accept, support for fragmentation is announced to the peer but the daemon does not send its own messages in fragments. If set to force (only supported for IKEv1) the initial IKE message will already be fragmented if required. Finally, setting the option to no will disable announcing support for this feature. Note that fragmented IKE messages sent by a peer are always processed irrespective of the value of this option (even when set to no). StrongSwan default: "yes" Type: null or one of “yes”, “accept”, “force”, “no” Default: null Declared by: <nixpkgs/nixos/modules/services/networking/strongswan-swanctl/module.nix>

## services.strongswan-swanctl.swanctl.connections.<name>.if_id_in

XFRM interface ID set on inbound policies/SA, can be overridden by child config, see there for details. The special value %unique allocates a unique interface ID per IKE_SA, which is inherited by all its CHILD_SAs (unless overridden there), beyond that the value %unique-dir assigns a different unique interface ID for each direction (in/out). StrongSwan default: "0" Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/networking/strongswan-swanctl/module.nix>

## services.strongswan-swanctl.swanctl.connections.<name>.if_id_out

XFRM interface ID set on outbound policies/SA, can be overridden by child config, see there for details. The special value %unique allocates a unique interface ID per IKE_SA, which is inherited by all its CHILD_SAs (unless overridden there), beyond that the value %unique-dir assigns a different unique interface ID for each direction (in/out). StrongSwan default: "0" Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/networking/strongswan-swanctl/module.nix>

## services.strongswan-swanctl.swanctl.connections.<name>.keyingtries

Number of retransmission sequences to perform during initial connect. Instead of giving up initiation after the first retransmission sequence with the default value of 1, additional sequences may be started according to the configured value. A value of 0 initiates a new sequence until the connection establishes or fails with a permanent error. StrongSwan default: 1 Type: null or signed integer Default: null Declared by: <nixpkgs/nixos/modules/services/networking/strongswan-swanctl/module.nix>

## services.strongswan-swanctl.swanctl.connections.<name>.local

Section for a local authentication round. A local authentication round defines the rules how authentication is performed for the local peer. Multiple rounds may be defined to use IKEv2 RFC 4739 Multiple Authentication or IKEv1 XAuth. Each round is defined in a section having local as prefix, and an optional unique suffix. To define a single authentication round, the suffix may be omitted. Type: attribute set of (submodule) Default: { } Declared by: <nixpkgs/nixos/modules/services/networking/strongswan-swanctl/module.nix>

## services.strongswan-swanctl.swanctl.connections.<name>.local_addrs

Local address(es) to use for IKE communication. Takes single IPv4/IPv6 addresses, DNS names, CIDR subnets or IP address ranges. As initiator, the first non-range/non-subnet is used to initiate the connection from. As responder, the local destination address must match at least to one of the specified addresses, subnets or ranges. If FQDNs are assigned they are resolved every time a configuration lookup is done. If DNS resolution times out, the lookup is delayed for that time. StrongSwan default: [] Type: null or (list of string) Default: null Declared by: <nixpkgs/nixos/modules/services/networking/strongswan-swanctl/module.nix>

## services.strongswan-swanctl.swanctl.connections.<name>.local_port

Local UDP port for IKE communication. By default the port of the socket backend is used, which is usually 500. If port 500 is used, automatic IKE port floating to port 4500 is used to work around NAT issues. Using a non-default local IKE port requires support from the socket backend in use (socket-dynamic). StrongSwan default: 500 Type: null or signed integer Default: null Declared by: <nixpkgs/nixos/modules/services/networking/strongswan-swanctl/module.nix>

## services.strongswan-swanctl.swanctl.connections.<name>.mediated_by

The name of the connection to mediate this connection through. If given, the connection will be mediated through the named mediation connection. The mediation connection must have mediation enabled. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/networking/strongswan-swanctl/module.nix>

## services.strongswan-swanctl.swanctl.connections.<name>.mediation

Whether this connection is a mediation connection, that is, whether this connection is used to mediate other connections using the IKEv2 Mediation Extension. Mediation connections create no CHILD_SA. StrongSwan default: false Type: null or boolean Default: null Declared by: <nixpkgs/nixos/modules/services/networking/strongswan-swanctl/module.nix>

## services.strongswan-swanctl.swanctl.connections.<name>.mediation_peer

Identity under which the peer is registered at the mediation server, that is, the IKE identity the other end of this connection uses as its local identity on its connection to the mediation server. This is the identity we request the mediation server to mediate us with. Only relevant on connections that set mediated_by. If it is not given, the remote IKE identity of the first authentication round of this connection will be used. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/networking/strongswan-swanctl/module.nix>

## services.strongswan-swanctl.swanctl.connections.<name>.mobike

Enables MOBIKE on IKEv2 connections. MOBIKE is enabled by default on IKEv2 connections, and allows mobility of clients and multi-homing on servers by migrating active IPsec tunnels. Usually keeping MOBIKE enabled is unproblematic, as it is not used if the peer does not indicate support for it. However, due to the design of MOBIKE, IKEv2 always floats to port 4500 starting from the second exchange. Some implementations don’t like this behavior, hence it can be disabled. StrongSwan default: true Type: null or boolean Default: null Declared by: <nixpkgs/nixos/modules/services/networking/strongswan-swanctl/module.nix>

## services.strongswan-swanctl.swanctl.connections.<name>.over_time

Hard IKE_SA lifetime if rekey/reauth does not complete, as time. To avoid having an IKE/ISAKMP kept alive if IKE reauthentication or rekeying fails perpetually, a maximum hard lifetime may be specified. If the IKE_SA fails to rekey or reauthenticate within the specified time, the IKE_SA gets closed. In contrast to CHILD_SA rekeying, over_time is relative in time to the rekey_time and reauth_time values, as it applies to both. The default is 10% of the longer of rekey_time and reauth_time. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/networking/strongswan-swanctl/module.nix>

## services.strongswan-swanctl.swanctl.connections.<name>.pools

List of named IP pools to allocate virtual IP addresses and other configuration attributes from. Each name references a pool by name from either the pools section or an external pool. StrongSwan default: [] Type: null or (list of string) Default: null Declared by: <nixpkgs/nixos/modules/services/networking/strongswan-swanctl/module.nix>

## services.strongswan-swanctl.swanctl.connections.<name>.ppk_id

String identifying the Postquantum Preshared Key (PPK) to be used. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/networking/strongswan-swanctl/module.nix>

## services.strongswan-swanctl.swanctl.connections.<name>.ppk_required

Whether a Postquantum Preshared Key (PPK) is required for this connection. StrongSwan default: false Type: null or boolean Default: null Declared by: <nixpkgs/nixos/modules/services/networking/strongswan-swanctl/module.nix>

## services.strongswan-swanctl.swanctl.connections.<name>.proposals

A proposal is a set of algorithms. For non-AEAD IKE proposals, this includes an encryption algorithm, an integrity algorithm, a pseudo-random function and a key exchange method. For AEAD proposals, instead of encryption and integrity algorithms, a combined mode algorithm is used. With peers that support multiple IKEv2 key exchanges (RFC 9370), up to seven additional key exchanges may be negotiated. They can be configured by prefixing the algorithm keyword with keX_ (where X is a number between 1 and 7). For IKEv2, multiple algorithms of the same kind can be specified in a single proposal, from which one gets selected. For IKEv1, only one algorithm per kind is allowed per proposal, more algorithms get implicitly stripped. Use multiple proposals to offer different algorithm combinations with IKEv1. Algorithm keywords get separated using dashes. The special value default forms a default proposal of supported algorithms considered safe, and is usually a good choice for interoperability. StrongSwan default: ["default"] Type: null or (list of string) Default: null Declared by: <nixpkgs/nixos/modules/services/networking/strongswan-swanctl/module.nix>

## services.strongswan-swanctl.swanctl.connections.<name>.pull

If the default of yes is used, Mode Config works in pull mode, where the initiator actively requests a virtual IP. With no, push mode is used, where the responder pushes down a virtual IP to the initiating peer. Push mode is currently supported for IKEv1, but not in IKEv2. It is used by a few implementations only, pull mode is recommended. StrongSwan default: true Type: null or boolean Default: null Declared by: <nixpkgs/nixos/modules/services/networking/strongswan-swanctl/module.nix>

## services.strongswan-swanctl.swanctl.connections.<name>.rand_time

Time range from which to choose a random value to subtract from rekey/reauth times. To avoid having both peers initiating the rekey/reauth procedure simultaneously, a random time gets subtracted from the rekey/reauth times. The default is equal to the configured over_time. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/networking/strongswan-swanctl/module.nix>

## services.strongswan-swanctl.swanctl.connections.<name>.reauth_time

Time to schedule IKE reauthentication. IKE reauthentication recreates the IKE/ISAKMP SA from scratch and re-evaluates the credentials. In asymmetric configurations (with EAP or configuration payloads) it might not be possible to actively reauthenticate as responder. The IKEv2 reauthentication lifetime negotiation can instruct the client to perform reauthentication. Reauthentication is disabled by default. Enabling it can usually result in short connection interruptions, even when using make-before-break reauthentication, which is now the default. However, they are significantly shorter than when using the legacy break-before-make approach. StrongSwan default: "0s" Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/networking/strongswan-swanctl/module.nix>

## services.strongswan-swanctl.swanctl.connections.<name>.rekey_time

IKE rekeying refreshes key material using a Diffie-Hellman exchange, but does not re-check associated credentials. It is supported in IKEv2 only, IKEv1 performs a reauthentication procedure instead. With the default value IKE rekeying is scheduled every 4 hours, minus the configured rand_time. If a reauth_time is configured, rekey_time defaults to zero, disabling rekeying; explicitly set both to enforce rekeying and reauthentication. StrongSwan default: "4h" Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/networking/strongswan-swanctl/module.nix>

## services.strongswan-swanctl.swanctl.connections.<name>.remote

Section for a remote authentication round. A remote authentication round defines the constraints how the peers must authenticate to use this connection. Multiple rounds may be defined to use IKEv2 RFC 4739 Multiple Authentication or IKEv1 XAuth. Each round is defined in a section having remote as prefix, and an optional unique suffix. To define a single authentication round, the suffix may be omitted. Type: attribute set of (submodule) Default: { } Declared by: <nixpkgs/nixos/modules/services/networking/strongswan-swanctl/module.nix>

## services.strongswan-swanctl.swanctl.connections.<name>.remote_addrs

Remote address(es) to use for IKE communication. Takes single IPv4/IPv6 addresses, DNS names, CIDR subnets or IP address ranges. As initiator, the first non-range/non-subnet is used to initiate the connection to. As responder, the initiator source address must match at least to one of the specified addresses, subnets or ranges. If FQDNs are assigned they are resolved every time a configuration lookup is done. If DNS resolution times out, the lookup is delayed for that time. To initiate a connection, at least one specific address or DNS name must be specified. StrongSwan default: [] Type: null or (list of string) Default: null Declared by: <nixpkgs/nixos/modules/services/networking/strongswan-swanctl/module.nix>

## services.strongswan-swanctl.swanctl.connections.<name>.remote_port

Remote UDP port for IKE communication. If the default of port 500 is used, automatic IKE port floating to port 4500 is used to work around NAT issues. StrongSwan default: 500 Type: null or signed integer Default: null Declared by: <nixpkgs/nixos/modules/services/networking/strongswan-swanctl/module.nix>

## services.strongswan-swanctl.swanctl.connections.<name>.send_cert

Send certificate payloads when using certificate authentication. With the default of ifasked the daemon sends certificate payloads only if certificate requests have been received. never disables sending of certificate payloads altogether, always causes certificate payloads to be sent unconditionally whenever certificate authentication is used. StrongSwan default: "ifasked" Type: null or one of “always”, “never”, “ifasked” Default: null Declared by: <nixpkgs/nixos/modules/services/networking/strongswan-swanctl/module.nix>

## services.strongswan-swanctl.swanctl.connections.<name>.send_certreq

Send certificate request payloads to offer trusted root CA certificates to the peer. Certificate requests help the peer to choose an appropriate certificate/private key for authentication and are enabled by default. Disabling certificate requests can be useful if too many trusted root CA certificates are installed, as each certificate request increases the size of the initial IKE packets. StrongSwan default: true Type: null or boolean Default: null Declared by: <nixpkgs/nixos/modules/services/networking/strongswan-swanctl/module.nix>

## services.strongswan-swanctl.swanctl.connections.<name>.unique

Connection uniqueness policy to enforce. To avoid multiple connections from the same user, a uniqueness policy can be enforced. The value never does never enforce such a policy, even if a peer included INITIAL_CONTACT notification messages, whereas no replaces existing connections for the same identity if a new one has the INITIAL_CONTACT notify. keep rejects new connection attempts if the same user already has an active connection, replace deletes any existing connection if a new one for the same user gets established. To compare connections for uniqueness, the remote IKE identity is used. If EAP or XAuth authentication is involved, the EAP-Identity or XAuth username is used to enforce the uniqueness policy instead. On initiators this setting specifies whether an INITIAL_CONTACT notify is sent during IKE_AUTH if no existing connection is found with the remote peer (determined by the identities of the first authentication round). Unless set to never the client will send a notify. StrongSwan default: "no" Type: null or one of “no”, “never”, “keep”, “replace” Default: null Declared by: <nixpkgs/nixos/modules/services/networking/strongswan-swanctl/module.nix>

## services.strongswan-swanctl.swanctl.connections.<name>.version

IKE major version to use for connection. 1 uses IKEv1 aka ISAKMP, 2 uses IKEv2. A connection using the default of 0 accepts both IKEv1 and IKEv2 as responder, and initiates the connection actively with IKEv2. StrongSwan default: 0 Type: null or signed integer Default: null Declared by: <nixpkgs/nixos/modules/services/networking/strongswan-swanctl/module.nix>

## services.strongswan-swanctl.swanctl.connections.<name>.vips

List of virtual IPs to request in IKEv2 configuration payloads or IKEv1 Mode Config. The wildcard addresses 0.0.0.0 and :: request an arbitrary address, specific addresses may be defined. The responder may return a different address, though, or none at all. StrongSwan default: [] Type: null or (list of string) Default: null Declared by: <nixpkgs/nixos/modules/services/networking/strongswan-swanctl/module.nix>
