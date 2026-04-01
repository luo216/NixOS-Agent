---
module: programs.proxychains.chain
option_count: 2
source: options.html
---

# programs.proxychains.chain

## programs.proxychains.chain.length

Chain length for random chain. Type: null or signed integer Default: null Declared by: <nixpkgs/nixos/modules/programs/proxychains.nix>

## programs.proxychains.chain.type

dynamic - Each connection will be done via chained proxies all proxies chained in the order as they appear in the list at least one proxy must be online to play in chain (dead proxies are skipped) otherwise EINTR is returned to the app. strict - Each connection will be done via chained proxies all proxies chained in the order as they appear in the list all proxies must be online to play in chain otherwise EINTR is returned to the app. random - Each connection will be done via random proxy (or proxy chain, see programs.proxychains.chain.length) from the list. Type: one of “dynamic”, “strict”, “random” Default: "strict" Declared by: <nixpkgs/nixos/modules/programs/proxychains.nix>
