---
title: "Quick Start - Nix 2.28.6 Reference Manual"
source: quick-start.html
---

# Quick Start - Nix 2.28.6 Reference Manual

Auto Light Rust Coal Navy Ayu

## Quick Start

This chapter is for impatient people who don't like reading documentation. For more in-depth information you are kindly referred to subsequent chapters. Install Nix: $ curl -L https://nixos.org/nix/install | sh The install script will use sudo, so make sure you have sufficient rights. For other installation methods, see the detailed installation instructions. Run software without installing it permanently: $ nix-shell --packages cowsay lolcat This downloads the specified packages with all their dependencies, and drops you into a Bash shell where the commands provided by those packages are present. This will not affect your normal environment: [nix-shell:~]$ cowsay Hello, Nix! | lolcat Exiting the shell will make the programs disappear again: [nix-shell:~]$ exit $ lolcat lolcat: command not found Search for more packages on search.nixos.org to try them out. Free up storage space: $ nix-collect-garbage
