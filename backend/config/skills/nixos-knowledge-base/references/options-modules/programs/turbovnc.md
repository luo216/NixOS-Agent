---
module: programs.turbovnc
option_count: 1
source: options.html
---

# programs.turbovnc

## programs.turbovnc.ensureHeadlessSoftwareOpenGL

Whether to set up NixOS such that TurboVNC’s built-in software OpenGL implementation works. This will enable hardware.graphics.enable so that OpenGL programs can find Mesa’s llvmpipe drivers. Setting this option to false does not mean that software OpenGL won’t work; it may still work depending on your system configuration. This option is also intended to generate warnings if you are using some configuration that’s incompatible with using headless software OpenGL in TurboVNC. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/programs/turbovnc.nix>
