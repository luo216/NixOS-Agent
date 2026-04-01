---
module: services.sympa.mta
option_count: 1
source: options.html
---

# services.sympa.mta

## services.sympa.mta.type

Mail transfer agent (MTA) integration. Use none if you want to configure it yourself. The postfix integration sets up local Postfix instance that will pass incoming messages from configured domains to Sympa. You still need to configure at least outgoing message handling using e.g. services.postfix.relayHost. Type: one of “postfix”, “none” Default: "postfix" Declared by: <nixpkgs/nixos/modules/services/mail/sympa.nix>
