---
module: virtualisation.directBoot
option_count: 2
source: options.html
---

# virtualisation.directBoot

## virtualisation.directBoot.enable

If enabled, the virtual machine will boot directly into the kernel instead of through a bootloader. Read more about this feature in the QEMU documentation on Direct Linux Boot This is enabled by default. If you want to test netboot, consider disabling this option. Enable a bootloader with virtualisation.useBootLoader if you need. Relevant parameters such as those set in boot.initrd and boot.kernelParams are also passed to QEMU. Additional parameters can be supplied on invocation through the environment variable $QEMU_KERNEL_PARAMS. They are added to the -append option, see QEMU User Documentation for details For example, to let QEMU use the parent terminal as the serial console, set QEMU_KERNEL_PARAMS="console=ttyS0". This will not (re-)boot correctly into a system that has switched to a different configuration on disk. Type: boolean Default: "!cfg.useBootLoader" Declared by: <nixpkgs/nixos/modules/virtualisation/qemu-vm.nix>

## virtualisation.directBoot.initrd

In direct boot situations, you may want to influence the initrd to load to use your own customized payload. This is useful if you want to test the netboot image without testing the firmware or the loading part. Type: string Default: "\${config.system.build.initialRamdisk}/\${config.system.boot.loader.initrdFile}" Declared by: <nixpkgs/nixos/modules/virtualisation/qemu-vm.nix>
