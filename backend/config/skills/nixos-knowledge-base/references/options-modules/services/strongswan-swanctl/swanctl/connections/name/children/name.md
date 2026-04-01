---
module: services.strongswan-swanctl.swanctl.connections.<name>.children.<name>
option_count: 41
source: options.html
---

# services.strongswan-swanctl.swanctl.connections.<name>.children.<name>

## services.strongswan-swanctl.swanctl.connections.<name>.children.<name>.ah_proposals

AH proposals to offer for the CHILD_SA. A proposal is a set of algorithms. For AH, this includes an integrity algorithm and an optional key exchange method. If a KE method is specified, CHILD_SA/Quick Mode rekeying and initial negotiation uses a separate key exchange using the negotiated method (refer to esp_proposals for details). With peers that support multiple IKEv2 key exchanges (RFC 9370), up to seven additional key exchanges may be negotiated. They can be configured by prefixing the algorithm keyword with keX_ (where X is a number between 1 and 7). For IKEv2, multiple algorithms of the same kind can be specified in a single proposal, from which one gets selected. For IKEv1, only one algorithm per kind is allowed per proposal, more algorithms get implicitly stripped. Use multiple proposals to offer different algorithm combinations with IKEv1. Algorithm keywords get separated using dashes. The special value default forms a default proposal of supported algorithms considered safe, and is usually a good choice for interoperability. By default no AH proposals are included, instead ESP is proposed. StrongSwan default: [] Type: null or (list of string) Default: null Declared by: <nixpkgs/nixos/modules/services/networking/strongswan-swanctl/module.nix>

## services.strongswan-swanctl.swanctl.connections.<name>.children.<name>.close_action

Action to perform after a CHILD_SA gets closed by the peer. The default of none does not take any action, trap installs a trap policy for the CHILD_SA. start tries to re-create the CHILD_SA. close_action does not provide any guarantee that the CHILD_SA is kept alive. It acts on explicit close messages only, but not on negotiation failures. Use trap policies to reliably re-create failed CHILD_SAs. StrongSwan default: "none" Type: null or one of “none”, “trap”, “start” Default: null Declared by: <nixpkgs/nixos/modules/services/networking/strongswan-swanctl/module.nix>

## services.strongswan-swanctl.swanctl.connections.<name>.children.<name>.copy_df

Whether to copy the DF bit to the outer IPv4 header in tunnel mode. This effectively disables Path MTU discovery (PMTUD). Controlling this behavior is not supported by all kernel interfaces. StrongSwan default: true Type: null or boolean Default: null Declared by: <nixpkgs/nixos/modules/services/networking/strongswan-swanctl/module.nix>

## services.strongswan-swanctl.swanctl.connections.<name>.children.<name>.copy_dscp

Whether to copy the DSCP (Differentiated Services Field Codepoint) header field to/from the outer IP header in tunnel mode. The value out only copies the field from the inner to the outer header, the value in does the opposite and only copies the field from the outer to the inner header when decapsulating, the value yes copies the field in both directions, and the value no disables copying the field altogether. Setting this to yes or in could allow an attacker to adversely affect other traffic at the receiver, which is why the default is out. Controlling this behavior is not supported by all kernel interfaces. StrongSwan default: "out" Type: null or one of “out”, “in”, “yes”, “no” Default: null Declared by: <nixpkgs/nixos/modules/services/networking/strongswan-swanctl/module.nix>

## services.strongswan-swanctl.swanctl.connections.<name>.children.<name>.copy_ecn

Whether to copy the ECN (Explicit Congestion Notification) header field to/from the outer IP header in tunnel mode. Controlling this behavior is not supported by all kernel interfaces. StrongSwan default: true Type: null or boolean Default: null Declared by: <nixpkgs/nixos/modules/services/networking/strongswan-swanctl/module.nix>

## services.strongswan-swanctl.swanctl.connections.<name>.children.<name>.dpd_action

Action to perform for this CHILD_SA on DPD timeout. The default clear closes the CHILD_SA and does not take further action. trap installs a trap policy, which will catch matching traffic and tries to re-negotiate the tunnel on-demand. restart immediately tries to re-negotiate the CHILD_SA under a fresh IKE_SA. StrongSwan default: "clear" Type: null or one of “clear”, “trap”, “restart” Default: null Declared by: <nixpkgs/nixos/modules/services/networking/strongswan-swanctl/module.nix>

## services.strongswan-swanctl.swanctl.connections.<name>.children.<name>.esp_proposals

ESP proposals to offer for the CHILD_SA. A proposal is a set of algorithms. For non-AEAD ESP proposals, this includes an integrity algorithm, an encryption algorithm, an optional key exchange method and an optional Extended Sequence Number Mode indicator. For AEAD proposals, a combined mode algorithm is used instead of the separate encryption/integrity algorithms. If a key exchange method is specified, CHILD_SA/Quick Mode rekeying and initial negotiation use a separate key exchange using the specified method. However, for IKEv2, the keys of the CHILD_SA created implicitly with the IKE_SA will always be derived from the IKE_SA’s key material. So any key exchange method specified here will only apply when the CHILD_SA is later rekeyed or is created with a separate CREATE_CHILD_SA exchange. A proposal mismatch might, therefore, not immediately be noticed when the SA is established, but may later cause rekeying to fail. With peers that support multiple IKEv2 key exchanges (RFC 9370), up to seven additional key exchanges may be negotiated. They can be configured by prefixing the algorithm keyword with keX_ (where X is a number between 1 and 7). Extended Sequence Number support may be indicated with the esn and noesn values, both may be included to indicate support for both modes. If omitted, noesn is assumed. For IKEv2, multiple algorithms of the same kind can be specified in a single proposal, from which one gets selected. For IKEv1, only one algorithm per kind is allowed per proposal, more algorithms get implicitly stripped. Use multiple proposals to offer different algorithm combinations with IKEv1. Algorithm keywords get separated using dashes. The special value default forms a default proposal of supported algorithms considered safe, and is usually a good choice for interoperability. If no algorithms are specified for AH nor ESP, the default set of algorithms for ESP is included. StrongSwan default: ["default"] Type: null or (list of string) Default: null Declared by: <nixpkgs/nixos/modules/services/networking/strongswan-swanctl/module.nix>

## services.strongswan-swanctl.swanctl.connections.<name>.children.<name>.hostaccess

Hostaccess variable to pass to updown script. StrongSwan default: false Type: null or boolean Default: null Declared by: <nixpkgs/nixos/modules/services/networking/strongswan-swanctl/module.nix>

## services.strongswan-swanctl.swanctl.connections.<name>.children.<name>.hw_offload

Enable hardware offload for this CHILD_SA, if supported by the IPsec implementation. The values crypto or packet enforce crypto or full packet offloading and the installation will fail if the selected mode is not supported by either kernel or device. On Linux, packet also offloads policies, including trap policies. The value auto enables full packet or crypto offloading, if either is supported, but the installation does not fail otherwise. StrongSwan default: "no" Type: null or one of “yes”, “no”, “auto”, “crypto”, “packet” Default: null Declared by: <nixpkgs/nixos/modules/services/networking/strongswan-swanctl/module.nix>

## services.strongswan-swanctl.swanctl.connections.<name>.children.<name>.if_id_in

XFRM interface ID set on inbound policies/SA. This allows installing duplicate policies/SAs and associates them with an interface with the same ID. The special value %unique sets a unique interface ID on each CHILD_SA instance, beyond that the value %unique-dir assigns a different unique interface ID for each CHILD_SA direction (in/out). StrongSwan default: "0" Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/networking/strongswan-swanctl/module.nix>

## services.strongswan-swanctl.swanctl.connections.<name>.children.<name>.if_id_out

XFRM interface ID set on outbound policies/SA. This allows installing duplicate policies/SAs and associates them with an interface with the same ID. The special value %unique sets a unique interface ID on each CHILD_SA instance, beyond that the value %unique-dir assigns a different unique interface ID for each CHILD_SA direction (in/out). The daemon will not install routes for CHILD_SAs that have this option set. StrongSwan default: "0" Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/networking/strongswan-swanctl/module.nix>

## services.strongswan-swanctl.swanctl.connections.<name>.children.<name>.inactivity

Timeout before closing CHILD_SA after inactivity. If no traffic has been processed in either direction for the configured timeout, the CHILD_SA gets closed due to inactivity. The default value of 0 disables inactivity checks. StrongSwan default: "0s" Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/networking/strongswan-swanctl/module.nix>

## services.strongswan-swanctl.swanctl.connections.<name>.children.<name>.interface

Optional interface name to restrict outbound IPsec policies. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/networking/strongswan-swanctl/module.nix>

## services.strongswan-swanctl.swanctl.connections.<name>.children.<name>.ipcomp

Enable IPComp compression before encryption. If enabled, IKE tries to negotiate IPComp compression to compress ESP payload data prior to encryption. StrongSwan default: false Type: null or boolean Default: null Declared by: <nixpkgs/nixos/modules/services/networking/strongswan-swanctl/module.nix>

## services.strongswan-swanctl.swanctl.connections.<name>.children.<name>.life_bytes

Maximum bytes processed before CHILD_SA gets closed. Usually this hard volume limit is never reached, because the CHILD_SA gets rekeyed before. If that fails for whatever reason, this limit closes the CHILD_SA. The default is 10% more than rekey_bytes. Type: null or signed integer Default: null Declared by: <nixpkgs/nixos/modules/services/networking/strongswan-swanctl/module.nix>

## services.strongswan-swanctl.swanctl.connections.<name>.children.<name>.life_packets

Maximum number of packets processed before CHILD_SA gets closed. Usually this hard packets limit is never reached, because the CHILD_SA gets rekeyed before. If that fails for whatever reason, this limit closes the CHILD_SA. The default is 10% more than rekey_bytes. Type: null or signed integer Default: null Declared by: <nixpkgs/nixos/modules/services/networking/strongswan-swanctl/module.nix>

## services.strongswan-swanctl.swanctl.connections.<name>.children.<name>.life_time

Maximum lifetime before CHILD_SA gets closed. Usually this hard lifetime is never reached, because the CHILD_SA gets rekeyed before. If that fails for whatever reason, this limit closes the CHILD_SA. The default is 10% more than the rekey_time. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/networking/strongswan-swanctl/module.nix>

## services.strongswan-swanctl.swanctl.connections.<name>.children.<name>.local_ts

List of local traffic selectors to include in CHILD_SA. Each selector is a CIDR subnet definition, followed by an optional proto/port selector. The special value dynamic may be used instead of a subnet definition, which gets replaced by the tunnel outer address or the virtual IP, if negotiated. This is the default. A protocol/port selector is surrounded by opening and closing square brackets. Between these brackets, a numeric or getservent(3) protocol name may be specified. After the optional protocol restriction, an optional port restriction may be specified, separated by a slash. The port restriction may be numeric, a getservent(3) service name, or the special value opaque for RFC 4301 OPAQUE selectors. Port ranges may be specified as well, none of the kernel backends currently support port ranges, though. If the protocol is icmp or ipv6-icmp, the port is interpreted as ICMP message type if it is less than 256 or as type and code if it is greater or equal to 256, with the type in the most significant 8 bits and the code in the least significant 8 bits. When IKEv1 is used only the first selector is interpreted, except if the Cisco Unity extension plugin is used. This is due to a limitation of the IKEv1 protocol, which only allows a single pair of selectors per CHILD_SA. So to tunnel traffic matched by several pairs of selectors when using IKEv1 several children (CHILD_SAs) have to be defined that cover the selectors. The IKE daemon uses traffic selector narrowing for IKEv1, the same way it is standardized and implemented for IKEv2. However, this may lead to problems with other implementations. To avoid that, configure identical selectors in such scenarios. StrongSwan default: ["dynamic"] Type: null or (list of string) Default: null Declared by: <nixpkgs/nixos/modules/services/networking/strongswan-swanctl/module.nix>

## services.strongswan-swanctl.swanctl.connections.<name>.children.<name>.mark_in

Netfilter mark and mask for input traffic. On Linux, Netfilter may require marks on each packet to match an SA/policy having that option set. This allows installing duplicate policies and enables Netfilter rules to select specific SAs/policies for incoming traffic. Note that inbound marks are only set on policies, by default, unless mark_in_sa is enabled. The special value %unique sets a unique mark on each CHILD_SA instance, beyond that the value %unique-dir assigns a different unique mark for each An additional mask may be appended to the mark, separated by /. The default mask if omitted is 0xffffffff. StrongSwan default: "0/0x00000000" Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/networking/strongswan-swanctl/module.nix>

## services.strongswan-swanctl.swanctl.connections.<name>.children.<name>.mark_in_sa

Whether to set mark_in on the inbound SA. By default, the inbound mark is only set on the inbound policy. The tuple destination address, protocol and SPI is unique and the mark is not required to find the correct SA, allowing to mark traffic after decryption instead (where more specific selectors may be used) to match different policies. Marking packets before decryption is still possible, even if no mark is set on the SA. StrongSwan default: false Type: null or boolean Default: null Declared by: <nixpkgs/nixos/modules/services/networking/strongswan-swanctl/module.nix>

## services.strongswan-swanctl.swanctl.connections.<name>.children.<name>.mark_out

Netfilter mark and mask for output traffic. On Linux, Netfilter may require marks on each packet to match a policy/SA having that option set. This allows installing duplicate policies and enables Netfilter rules to select specific policies/SAs for outgoing traffic. The special value %unique sets a unique mark on each CHILD_SA instance, beyond that the value %unique-dir assigns a different unique mark for each CHILD_SA direction (in/out). An additional mask may be appended to the mark, separated by /. The default mask if omitted is 0xffffffff. StrongSwan default: "0/0x00000000" Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/networking/strongswan-swanctl/module.nix>

## services.strongswan-swanctl.swanctl.connections.<name>.children.<name>.mode

IPsec Mode to establish CHILD_SA with. tunnel negotiates the CHILD_SA in IPsec Tunnel Mode, whereas transport uses IPsec Transport Mode. transport_proxy signifying the special Mobile IPv6 Transport Proxy Mode. beet is the Bound End to End Tunnel mixture mode, working with fixed inner addresses without the need to include them in each packet. Both transport and beet modes are subject to mode negotiation; tunnel mode is negotiated if the preferred mode is not available. pass and drop are used to install shunt policies which explicitly bypass the defined traffic from IPsec processing or drop it, respectively. StrongSwan default: "tunnel" Type: null or one of “tunnel”, “transport”, “transport_proxy”, “beet”, “pass”, “drop” Default: null Declared by: <nixpkgs/nixos/modules/services/networking/strongswan-swanctl/module.nix>

## services.strongswan-swanctl.swanctl.connections.<name>.children.<name>.per_cpu_sas

Enable per-CPU CHILD_SAs. Requires trap in start_action. The value encap enables a special type of UDP encapsulation (requires enabling encap for the connection if there is no NAT), where a random source port is used for each outbound per-CPU SA (the destination port for all of them remains 4500). This allows using the port for RSS if the SPI can’t be used. Note that this type of behavior is not standardized and not negotiated. So regardless of whether the option is enabled, inbound per-CPU SAs with UDP-encapsulation always have the source port set to 0 as the peer’s random port is unknown if it has this option enabled. StrongSwan default: "no" Type: null or one of “yes”, “no”, “encap” Default: null Declared by: <nixpkgs/nixos/modules/services/networking/strongswan-swanctl/module.nix>

## services.strongswan-swanctl.swanctl.connections.<name>.children.<name>.policies

Whether to install IPsec policies or not. Disabling this can be useful in some scenarios e.g. MIPv6, where policies are not managed by the IKE daemon. Since 5.3.3. StrongSwan default: true Type: null or boolean Default: null Declared by: <nixpkgs/nixos/modules/services/networking/strongswan-swanctl/module.nix>

## services.strongswan-swanctl.swanctl.connections.<name>.children.<name>.policies_fwd_out

Whether to install outbound FWD IPsec policies or not. Enabling this is required in case there is a drop policy that would match and block forwarded traffic for this CHILD_SA. Since 5.5.1. StrongSwan default: false Type: null or boolean Default: null Declared by: <nixpkgs/nixos/modules/services/networking/strongswan-swanctl/module.nix>

## services.strongswan-swanctl.swanctl.connections.<name>.children.<name>.priority

Optional fixed priority for IPsec policies. This could be useful to install high-priority drop policies. The default of 0 uses dynamically calculated priorities based on the size of the traffic selectors. StrongSwan default: 0 Type: null or signed integer Default: null Declared by: <nixpkgs/nixos/modules/services/networking/strongswan-swanctl/module.nix>

## services.strongswan-swanctl.swanctl.connections.<name>.children.<name>.rand_bytes

Byte range from which to choose a random value to subtract from rekey_bytes. The default is the difference between life_bytes and rekey_bytes. Type: null or signed integer Default: null Declared by: <nixpkgs/nixos/modules/services/networking/strongswan-swanctl/module.nix>

## services.strongswan-swanctl.swanctl.connections.<name>.children.<name>.rand_packets

Packet range from which to choose a random value to subtract from rekey_packets. The default is the difference between life_packets and rekey_packets. Type: null or signed integer Default: null Declared by: <nixpkgs/nixos/modules/services/networking/strongswan-swanctl/module.nix>

## services.strongswan-swanctl.swanctl.connections.<name>.children.<name>.rand_time

Time range from which to choose a random value to subtract from rekey_time. The default is the difference between life_time and rekey_time. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/networking/strongswan-swanctl/module.nix>

## services.strongswan-swanctl.swanctl.connections.<name>.children.<name>.rekey_bytes

Number of bytes processed before initiating CHILD_SA rekeying. Number of bytes processed before initiating CHILD_SA rekeying. CHILD_SA rekeying refreshes key material, optionally using a Diffie-Hellman exchange if a group is specified in the proposal. To avoid rekey collisions initiated by both ends simultaneously, a value in the range of rand_bytes gets subtracted to form the effective soft volume limit. Volume based CHILD_SA rekeying is disabled by default. If life_bytes is explicitly configured, rekey_bytes defaults to 10% less than that. Type: null or signed integer Default: null Declared by: <nixpkgs/nixos/modules/services/networking/strongswan-swanctl/module.nix>

## services.strongswan-swanctl.swanctl.connections.<name>.children.<name>.rekey_packets

Number of packets processed before initiating CHILD_SA rekeying. Number of packets processed before initiating CHILD_SA rekeying. CHILD_SA rekeying refreshes key material, optionally using a Diffie-Hellman exchange if a group is specified in the proposal. To avoid rekey collisions initiated by both ends simultaneously, a value in the range of rand_packets gets subtracted to form the effective soft packet count limit. Packet count based CHILD_SA rekeying is disabled by default. If life_packets is explicitly configured, rekey_packets defaults to 10% less than that. Type: null or signed integer Default: null Declared by: <nixpkgs/nixos/modules/services/networking/strongswan-swanctl/module.nix>

## services.strongswan-swanctl.swanctl.connections.<name>.children.<name>.rekey_time

Time to schedule CHILD_SA rekeying. CHILD_SA rekeying refreshes key material, optionally using a Diffie-Hellman exchange if a group is specified in the proposal. To avoid rekey collisions initiated by both ends simultaneously, a value in the range of rand_time gets subtracted to form the effective soft lifetime. If life_time is explicitly configured, rekey_time defaults to 10% less than that, otherwise, CHILD_SA rekeying is scheduled every hour, minus rand_time. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/networking/strongswan-swanctl/module.nix>

## services.strongswan-swanctl.swanctl.connections.<name>.children.<name>.remote_ts

List of remote selectors to include in CHILD_SA. See local_ts for a description of the selector syntax. StrongSwan default: ["dynamic"] Type: null or (list of string) Default: null Declared by: <nixpkgs/nixos/modules/services/networking/strongswan-swanctl/module.nix>

## services.strongswan-swanctl.swanctl.connections.<name>.children.<name>.replay_window

IPsec replay window to configure for this CHILD_SA. Larger values than the default of 32 are supported using the Netlink backend only, a value of 0 disables IPsec replay protection. StrongSwan default: 32 Type: null or signed integer Default: null Declared by: <nixpkgs/nixos/modules/services/networking/strongswan-swanctl/module.nix>

## services.strongswan-swanctl.swanctl.connections.<name>.children.<name>.reqid

Fixed reqid to use for this CHILD_SA. This might be helpful in some scenarios, but works only if each CHILD_SA configuration is instantiated not more than once. The default of 0 uses dynamic reqids, allocated incrementally. StrongSwan default: 0 Type: null or signed integer Default: null Declared by: <nixpkgs/nixos/modules/services/networking/strongswan-swanctl/module.nix>

## services.strongswan-swanctl.swanctl.connections.<name>.children.<name>.set_mark_in

Netfilter mark applied to packets after the inbound IPsec SA processed them. This way it’s not necessary to mark packets via Netfilter before decryption or right afterwards to match policies or process them differently (e.g. via policy routing). An additional mask may be appended to the mark, separated by /. The default mask if omitted is 0xffffffff. The special value %same uses the value (but not the mask) from mark_in as mark value, which can be fixed, %unique or %unique-dir. Setting marks in XFRM input requires Linux 4.19 or higher. StrongSwan default: "0/0x00000000" Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/networking/strongswan-swanctl/module.nix>

## services.strongswan-swanctl.swanctl.connections.<name>.children.<name>.set_mark_out

Netfilter mark applied to packets after the outbound IPsec SA processed them. This allows processing ESP packets differently than the original traffic (e.g. via policy routing). An additional mask may be appended to the mark, separated by /. The default mask if omitted is 0xffffffff. The special value %same uses the value (but not the mask) from mark_out as mark value, which can be fixed, %unique_ or %unique-dir. Setting marks in XFRM output is supported since Linux 4.14. Setting a mask requires at least Linux 4.19. StrongSwan default: "0/0x00000000" Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/networking/strongswan-swanctl/module.nix>

## services.strongswan-swanctl.swanctl.connections.<name>.children.<name>.sha256_96

HMAC-SHA-256 is used with 128-bit truncation with IPsec. For compatibility with implementations that incorrectly use 96-bit truncation this option may be enabled to configure the shorter truncation length in the kernel. This is not negotiated, so this only works with peers that use the incorrect truncation length (or have this option enabled). StrongSwan default: false Type: null or boolean Default: null Declared by: <nixpkgs/nixos/modules/services/networking/strongswan-swanctl/module.nix>

## services.strongswan-swanctl.swanctl.connections.<name>.children.<name>.start_action

Action to perform after loading the configuration. The default of none loads the connection only, which then can be manually initiated or used as a responder configuration. The value trap installs a trap policy, which triggers the tunnel as soon as matching traffic has been detected. The value start initiates the connection actively. Since version 5.9.6 two modes above can be combined with trap|start, to immediately initiate a connection for which trap policies have been installed. When unloading or replacing a CHILD_SA configuration having a start_action different from none, the inverse action is performed. Configurations with start get closed, while such with trap get uninstalled. StrongSwan default: "none" Type: null or one of “none”, “trap”, “start”, “trap|start” Default: null Declared by: <nixpkgs/nixos/modules/services/networking/strongswan-swanctl/module.nix>

## services.strongswan-swanctl.swanctl.connections.<name>.children.<name>.tfc_padding

Pads ESP packets with additional data to have a consistent ESP packet size for improved Traffic Flow Confidentiality. The padding defines the minimum size of all ESP packets sent. The default value of 0 disables TFC padding, the special value mtu adds TFC padding to create a packet size equal to the Path Maximum Transfer Unit. StrongSwan default: 0 Type: null or signed integer or value “mtu” (singular enum) Default: null Declared by: <nixpkgs/nixos/modules/services/networking/strongswan-swanctl/module.nix>

## services.strongswan-swanctl.swanctl.connections.<name>.children.<name>.updown

Updown script to invoke on CHILD_SA up and down events. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/networking/strongswan-swanctl/module.nix>
