---
module: services.tor.relay
option_count: 3
source: options.html
---

# services.tor.relay

## services.tor.relay.enable

Whether to enable relaying of Tor traffic for others. See https://www.torproject.org/docs/tor-doc-relay for details. Setting this to true requires setting services.tor.relay.role and services.tor.settings.ORPort options. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/security/tor.nix>

## services.tor.relay.onionServices

See torrc manual. Type: attribute set of (submodule) Default: { } Example: { "example.org/www" = { authorizedClients = [ "descriptor:x25519:XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX" ]; map = [ 80 ]; }; } Declared by: <nixpkgs/nixos/modules/services/security/tor.nix>

## services.tor.relay.role

Your role in Tor network. There’re several options: exit: An exit relay. This allows Tor users to access regular Internet services through your public IP. You can specify which services Tor users may access via your exit relay using settings.ExitPolicy option. relay: Regular relay. This allows Tor users to relay onion traffic to other Tor nodes, but not to public Internet. See https://www.torproject.org/docs/tor-doc-relay.html.en for more info. bridge: Regular bridge. Works like a regular relay, but doesn’t list you in the public relay directory and hides your Tor node behind obfs4proxy. Using this option will make Tor advertise your bridge to users through various mechanisms like https://bridges.torproject.org/, though. See https://www.torproject.org/docs/bridges.html.en for more info. private-bridge: Private bridge. Works like regular bridge, but does not advertise your node in any way. Using this role means that you won’t contribute to Tor network in any way unless you advertise your node yourself in some way. Use this if you want to run a private bridge, for example because you’ll give out your bridge addr manually to your friends. Switching to this role after measurable time in “bridge” role is pretty useless as some Tor users would have learned about your node already. In the latter case you can still change port option. See https://www.torproject.org/docs/bridges.html.en for more info. Important Running an exit relay may expose you to abuse complaints. See https://www.torproject.org/faq.html.en#ExitPolicies for more info. Important Note that some misconfigured and/or disrespectful towards privacy sites will block you even if your relay is not an exit relay. That is, just being listed in a public relay directory can have unwanted consequences. Which means you might not want to use this role if you browse public Internet from the same network as your relay, unless you want to write e-mails to those sites (you should!). Important WARNING: THE FOLLOWING PARAGRAPH IS NOT LEGAL ADVICE. Consult with your lawyer when in doubt. The bridge role should be safe to use in most situations (unless the act of forwarding traffic for others is a punishable offence under your local laws, which would be pretty insane as it would make ISP illegal). Type: one of “exit”, “relay”, “bridge”, “private-bridge” Declared by: <nixpkgs/nixos/modules/services/security/tor.nix>
