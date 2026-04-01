---
module: services.v4l2-relayd
option_count: 1
source: options.html
---

# services.v4l2-relayd

## services.v4l2-relayd.instances

v4l2-relayd instances to be created. Type: attribute set of (submodule) Default: { } Example: { example = { cardLabel = "Example card"; input.pipeline = "videotestsrc"; }; } Declared by: <nixpkgs/nixos/modules/services/video/v4l2-relayd.nix>
