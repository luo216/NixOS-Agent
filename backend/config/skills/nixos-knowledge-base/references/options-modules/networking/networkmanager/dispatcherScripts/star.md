---
module: networking.networkmanager.dispatcherScripts.*
option_count: 2
source: options.html
---

# networking.networkmanager.dispatcherScripts.*

## networking.networkmanager.dispatcherScripts.*.source

Path to the hook script. Type: absolute path Declared by: <nixpkgs/nixos/modules/services/networking/networkmanager.nix>

## networking.networkmanager.dispatcherScripts.*.type

Dispatcher hook type. Look up the hooks described at https://developer.gnome.org/NetworkManager/stable/NetworkManager.html and choose the type depending on the output folder. You should then filter the event type (e.g., “up”/“down”) from within your script. Type: one of “basic”, “pre-down”, “pre-up” Default: "basic" Declared by: <nixpkgs/nixos/modules/services/networking/networkmanager.nix>
