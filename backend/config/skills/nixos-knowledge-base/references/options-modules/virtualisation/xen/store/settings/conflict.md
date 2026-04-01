---
module: virtualisation.xen.store.settings.conflict
option_count: 3
source: options.html
---

# virtualisation.xen.store.settings.conflict

## virtualisation.xen.store.settings.conflict.burstLimit

Limits applied to domains whose writes cause other domains’ transaction commits to fail. Must include decimal point. The burst limit is the number of conflicts a domain can cause to fail in a short period; this value is used for both the initial and the maximum value of each domain’s conflict-credit, which falls by one point for each conflict caused, and when it reaches zero the domain’s requests are ignored. Type: nonnegative floating point number, meaning >=0 Default: 5.0 Example: 15.0 Declared by: <nixpkgs/nixos/modules/virtualisation/xen-dom0.nix>

## virtualisation.xen.store.settings.conflict.maxHistorySeconds

Limits applied to domains whose writes cause other domains’ transaction commits to fail. Must include decimal point. The conflict-credit is replenished over time: one point is issued after each conflict.maxHistorySeconds, so this is the minimum pause-time during which a domain will be ignored. Type: nonnegative floating point number, meaning >=0 Default: 0.05 Example: 1.0 Declared by: <nixpkgs/nixos/modules/virtualisation/xen-dom0.nix>

## virtualisation.xen.store.settings.conflict.rateLimitIsAggregate

If the conflict.rateLimitIsAggregate option is true, then after each tick one point of conflict-credit is given to just one domain: the one at the front of the queue. If false, then after each tick each domain gets a point of conflict-credit. In environments where it is known that every transaction will involve a set of nodes that is writable by at most one other domain, then it is safe to set this aggregate limit flag to false for better performance. (This can be determined by considering the layout of the xenstore tree and permissions, together with the content of the transactions that require protection.) A transaction which involves a set of nodes which can be modified by multiple other domains can suffer conflicts caused by any of those domains, so the flag must be set to true. Type: boolean Default: true Example: false Declared by: <nixpkgs/nixos/modules/virtualisation/xen-dom0.nix>
