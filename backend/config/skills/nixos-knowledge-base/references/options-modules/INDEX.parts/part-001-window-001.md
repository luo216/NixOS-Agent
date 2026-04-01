# NixOS Options Module Index

Generated from `options.html` in the local NixOS manual mirror.

Total modules: 4526
Total options: 23162

## Common Modules

- `GRUB` -> `options-modules/boot/loader/grub.md`
- `systemd-boot` -> `options-modules/boot/loader/systemd-boot.md`
- `initrd` -> `options-modules/boot/initrd.md`
- `firewall` -> `options-modules/networking/firewall.md`
- `NetworkManager` -> `options-modules/networking/networkmanager.md`
- `OpenSSH` -> `options-modules/services/openssh.md`
- `nginx` -> `options-modules/services/nginx.md`
- `PostgreSQL` -> `options-modules/services/postgresql.md`
- `xserver` -> `options-modules/services/xserver.md`
- `sudo` -> `options-modules/security/sudo.md`
- `users` -> `options-modules/users/users/name.md`
- `systemd services` -> `options-modules/systemd/services/name.md`
- `docker` -> `options-modules/virtualisation/docker.md`

## _module

- `_module` -> `module.md`

## appstream

- `appstream` -> `appstream.md`

## bfq

- `bfq` -> `bfq.md`

## boot

- `boot` -> `boot.md`
- `boot.bcache` -> `boot/bcache.md`
- `boot.bcachefs` -> `boot/bcachefs.md`
- `boot.binfmt` -> `boot/binfmt.md`
- `boot.binfmt.registrations.<name>` -> `boot/binfmt/registrations/name.md`
- `boot.bootspec` -> `boot/bootspec.md`
- `boot.crashDump` -> `boot/crashDump.md`
- `boot.initrd` -> `boot/initrd.md`
- `boot.initrd.clevis` -> `boot/initrd/clevis.md`
- `boot.initrd.clevis.devices.<name>` -> `boot/initrd/clevis/devices/name.md`
- `boot.initrd.extraFiles.<name>` -> `boot/initrd/extraFiles/name.md`
- `boot.initrd.luks` -> `boot/initrd/luks.md`
- `boot.initrd.luks.devices.<name>` -> `boot/initrd/luks/devices/name.md`
- `boot.initrd.luks.devices.<name>.fido2` -> `boot/initrd/luks/devices/name/fido2.md`
- `boot.initrd.luks.devices.<name>.gpgCard` -> `boot/initrd/luks/devices/name/gpgCard.md`
- `boot.initrd.luks.devices.<name>.yubikey` -> `boot/initrd/luks/devices/name/yubikey.md`
- `boot.initrd.luks.devices.<name>.yubikey.storage` -> `boot/initrd/luks/devices/name/yubikey/storage.md`
- `boot.initrd.network` -> `boot/initrd/network.md`
- `boot.initrd.network.ifstate` -> `boot/initrd/network/ifstate.md`
- `boot.initrd.network.openvpn` -> `boot/initrd/network/openvpn.md`
- `boot.initrd.network.ssh` -> `boot/initrd/network/ssh.md`
- `boot.initrd.network.udhcpc` -> `boot/initrd/network/udhcpc.md`
- `boot.initrd.nix-store-veritysetup` -> `boot/initrd/nix-store-veritysetup.md`
- `boot.initrd.services.bcache` -> `boot/initrd/services/bcache.md`
- `boot.initrd.services.lvm` -> `boot/initrd/services/lvm.md`
- `boot.initrd.services.resolved` -> `boot/initrd/services/resolved.md`
- `boot.initrd.services.udev` -> `boot/initrd/services/udev.md`
- `boot.initrd.systemd` -> `boot/initrd/systemd.md`
- `boot.initrd.systemd.contents.<name>` -> `boot/initrd/systemd/contents/name.md`
- `boot.initrd.systemd.contents.<name>.dlopen` -> `boot/initrd/systemd/contents/name/dlopen.md`
- `boot.initrd.systemd.dbus` -> `boot/initrd/systemd/dbus.md`
- `boot.initrd.systemd.dmVerity` -> `boot/initrd/systemd/dmVerity.md`
- `boot.initrd.systemd.fido2` -> `boot/initrd/systemd/fido2.md`
- `boot.initrd.systemd.groups.<name>` -> `boot/initrd/systemd/groups/name.md`
- `boot.initrd.systemd.network` -> `boot/initrd/systemd/network.md`
- `boot.initrd.systemd.network.wait-online` -> `boot/initrd/systemd/network/wait-online.md`
- `boot.initrd.systemd.repart` -> `boot/initrd/systemd/repart.md`
- `boot.initrd.systemd.settings` -> `boot/initrd/systemd/settings.md`
- `boot.initrd.systemd.storePaths.*` -> `boot/initrd/systemd/storePaths/star.md`
- `boot.initrd.systemd.storePaths.*.dlopen` -> `boot/initrd/systemd/storePaths/star/dlopen.md`
- `boot.initrd.systemd.tmpfiles` -> `boot/initrd/systemd/tmpfiles.md`
- `boot.initrd.systemd.tmpfiles.settings.<config-name>.<path>.<tmpfiles-type>` -> `boot/initrd/systemd/tmpfiles/settings/config-name/path/tmpfiles-type.md`
- `boot.initrd.systemd.tpm2` -> `boot/initrd/systemd/tpm2.md`
- `boot.initrd.systemd.users.<name>` -> `boot/initrd/systemd/users/name.md`
- `boot.initrd.unl0kr` -> `boot/initrd/unl0kr.md`
- `boot.iscsi-initiator` -> `boot/iscsi-initiator.md`
- `boot.kernel` -> `boot/kernel.md`
- `boot.kexec` -> `boot/kexec.md`
- `boot.loader` -> `boot/loader.md`
- `boot.loader.efi` -> `boot/loader/efi.md`
- `boot.loader.external` -> `boot/loader/external.md`
- `boot.loader.generationsDir` -> `boot/loader/generationsDir.md`
- `boot.loader.generic-extlinux-compatible` -> `boot/loader/generic-extlinux-compatible.md`
- `boot.loader.generic-extlinux-compatible.mirroredBoots.*` -> `boot/loader/generic-extlinux-compatible/mirroredBoots/star.md`
- `boot.loader.grub` -> `boot/loader/grub.md`
- `boot.loader.grub.memtest86` -> `boot/loader/grub/memtest86.md`
- `boot.loader.grub.mirroredBoots.*` -> `boot/loader/grub/mirroredBoots/star.md`
- `boot.loader.grub.users.<name>` -> `boot/loader/grub/users/name.md`
- `boot.loader.initScript` -> `boot/loader/initScript.md`
- `boot.loader.limine` -> `boot/loader/limine.md`
- `boot.loader.limine.secureBoot` -> `boot/loader/limine/secureBoot.md`
- `boot.loader.limine.style` -> `boot/loader/limine/style.md`
- `boot.loader.limine.style.graphicalTerminal` -> `boot/loader/limine/style/graphicalTerminal.md`
- `boot.loader.limine.style.graphicalTerminal.font` -> `boot/loader/limine/style/graphicalTerminal/font.md`
- `boot.loader.limine.style.interface` -> `boot/loader/limine/style/interface.md`
- `boot.loader.refind` -> `boot/loader/refind.md`
- `boot.loader.systemd-boot` -> `boot/loader/systemd-boot.md`
- `boot.loader.systemd-boot.edk2-uefi-shell` -> `boot/loader/systemd-boot/edk2-uefi-shell.md`
- `boot.loader.systemd-boot.memtest86` -> `boot/loader/systemd-boot/memtest86.md`
- `boot.loader.systemd-boot.netbootxyz` -> `boot/loader/systemd-boot/netbootxyz.md`
- `boot.loader.systemd-boot.windows.<name>` -> `boot/loader/systemd-boot/windows/name.md`
- `boot.modprobeConfig` -> `boot/modprobeConfig.md`
- `boot.plymouth` -> `boot/plymouth.md`
- `boot.plymouth.tpm2-totp` -> `boot/plymouth/tpm2-totp.md`
- `boot.specialFileSystems.<name>` -> `boot/specialFileSystems/name.md`
- `boot.specialFileSystems.<name>.stratis` -> `boot/specialFileSystems/name/stratis.md`
- `boot.swraid` -> `boot/swraid.md`
- `boot.tmp` -> `boot/tmp.md`
- `boot.tmp.zramSettings` -> `boot/tmp/zramSettings.md`
- `boot.uki` -> `boot/uki.md`
- `boot.uvesafb` -> `boot/uvesafb.md`
- `boot.uvesafb.v86d` -> `boot/uvesafb/v86d.md`
- `boot.zfs` -> `boot/zfs.md`
- `boot.zfs.pools.<name>` -> `boot/zfs/pools/name.md`

## console

- `console` -> `console.md`

## containers

- `containers` -> `containers.md`
- `containers.<name>` -> `containers/name.md`
- `containers.<name>.allowedDevices.*` -> `containers/name/allowedDevices/star.md`
- `containers.<name>.bindMounts.<name>` -> `containers/name/bindMounts/name.md`
- `containers.<name>.extraVeths.<name>` -> `containers/name/extraVeths/name.md`
- `containers.<name>.extraVeths.<name>.forwardPorts.*` -> `containers/name/extraVeths/name/forwardPorts/star.md`
- `containers.<name>.forwardPorts.*` -> `containers/name/forwardPorts/star.md`

## documentation

- `documentation` -> `documentation.md`
- `documentation.dev` -> `documentation/dev.md`
- `documentation.doc` -> `documentation/doc.md`
- `documentation.info` -> `documentation/info.md`
- `documentation.man` -> `documentation/man.md`
- `documentation.man.man-db` -> `documentation/man/man-db.md`
- `documentation.man.mandoc` -> `documentation/man/mandoc.md`
- `documentation.man.mandoc.settings` -> `documentation/man/mandoc/settings.md`
- `documentation.man.mandoc.settings.output` -> `documentation/man/mandoc/settings/output.md`
- `documentation.nixos` -> `documentation/nixos.md`
- `documentation.nixos.options` -> `documentation/nixos/options.md`

## ec2

- `ec2.zfs` -> `ec2/zfs.md`
- `ec2.zfs.datasets.<name>` -> `ec2/zfs/datasets/name.md`

## environment

- `environment` -> `environment.md`
- `environment.budgie` -> `environment/budgie.md`
- `environment.cinnamon` -> `environment/cinnamon.md`
- `environment.cosmic` -> `environment/cosmic.md`
- `environment.enlightenment` -> `environment/enlightenment.md`
- `environment.etc.<name>` -> `environment/etc/name.md`
- `environment.gnome` -> `environment/gnome.md`
- `environment.lxqt` -> `environment/lxqt.md`
- `environment.mate` -> `environment/mate.md`
- `environment.memoryAllocator` -> `environment/memoryAllocator.md`
- `environment.pantheon` -> `environment/pantheon.md`
- `environment.plasma6` -> `environment/plasma6.md`
- `environment.stub-ld` -> `environment/stub-ld.md`
- `environment.wordlist` -> `environment/wordlist.md`
- `environment.wvdial` -> `environment/wvdial.md`
- `environment.xfce` -> `environment/xfce.md`

## fileSystems

- `fileSystems` -> `fileSystems.md`
- `fileSystems.<name>` -> `fileSystems/name.md`
- `fileSystems.<name>.encrypted` -> `fileSystems/name/encrypted.md`
- `fileSystems.<name>.overlay` -> `fileSystems/name/overlay.md`
- `fileSystems.<name>.stratis` -> `fileSystems/name/stratis.md`

## fonts

- `fonts` -> `fonts.md`
- `fonts.fontDir` -> `fonts/fontDir.md`
- `fonts.fontconfig` -> `fonts/fontconfig.md`
- `fonts.fontconfig.defaultFonts` -> `fonts/fontconfig/defaultFonts.md`
- `fonts.fontconfig.hinting` -> `fonts/fontconfig/hinting.md`
- `fonts.fontconfig.subpixel` -> `fonts/fontconfig/subpixel.md`

## gtk

- `gtk.iconCache` -> `gtk/iconCache.md`

## hardware

- `hardware` -> `hardware.md`
- `hardware.acpilight` -> `hardware/acpilight.md`
- `hardware.alsa` -> `hardware/alsa.md`
- `hardware.alsa.cardAliases.<name>` -> `hardware/alsa/cardAliases/name.md`
- `hardware.alsa.controls.<name>` -> `hardware/alsa/controls/name.md`
- `hardware.alsa.defaultDevice` -> `hardware/alsa/defaultDevice.md`
- `hardware.amdgpu.initrd` -> `hardware/amdgpu/initrd.md`
- `hardware.amdgpu.legacySupport` -> `hardware/amdgpu/legacySupport.md`
- `hardware.amdgpu.opencl` -> `hardware/amdgpu/opencl.md`
- `hardware.amdgpu.overdrive` -> `hardware/amdgpu/overdrive.md`
- `hardware.apple.touchBar` -> `hardware/apple/touchBar.md`
- `hardware.bladeRF` -> `hardware/bladeRF.md`
- `hardware.block` -> `hardware/block.md`
- `hardware.bluetooth` -> `hardware/bluetooth.md`
- `hardware.bluetooth.hsphfpd` -> `hardware/bluetooth/hsphfpd.md`
- `hardware.brillo` -> `hardware/brillo.md`
- `hardware.bumblebee` -> `hardware/bumblebee.md`
- `hardware.ckb-next` -> `hardware/ckb-next.md`
- `hardware.coral.pcie` -> `hardware/coral/pcie.md`
- `hardware.coral.usb` -> `hardware/coral/usb.md`
- `hardware.cpu.amd` -> `hardware/cpu/amd.md`
- `hardware.cpu.amd.ryzen-smu` -> `hardware/cpu/amd/ryzen-smu.md`
- `hardware.cpu.amd.sev` -> `hardware/cpu/amd/sev.md`
- `hardware.cpu.amd.sevGuest` -> `hardware/cpu/amd/sevGuest.md`
- `hardware.cpu.intel` -> `hardware/cpu/intel.md`
- `hardware.cpu.intel.sgx` -> `hardware/cpu/intel/sgx.md`
- `hardware.cpu.intel.sgx.provision` -> `hardware/cpu/intel/sgx/provision.md`
- `hardware.cpu.x86.msr` -> `hardware/cpu/x86/msr.md`
- `hardware.cpu.x86.msr.settings` -> `hardware/cpu/x86/msr/settings.md`
- `hardware.decklink` -> `hardware/decklink.md`
- `hardware.deviceTree` -> `hardware/deviceTree.md`
- `hardware.deviceTree.overlays.*` -> `hardware/deviceTree/overlays/star.md`
- `hardware.digitalbitbox` -> `hardware/digitalbitbox.md`
- `hardware.display` -> `hardware/display.md`
- `hardware.display.edid` -> `hardware/display/edid.md`
- `hardware.display.outputs.<name>` -> `hardware/display/outputs/name.md`
- `hardware.facetimehd` -> `hardware/facetimehd.md`
- `hardware.facter` -> `hardware/facter.md`
- `hardware.facter.detected.boot.disk` -> `hardware/facter/detected/boot/disk.md`
- `hardware.facter.detected.boot.graphics` -> `hardware/facter/detected/boot/graphics.md`
- `hardware.facter.detected.boot.initrd.networking` -> `hardware/facter/detected/boot/initrd/networking.md`
- `hardware.facter.detected.boot.keyboard` -> `hardware/facter/detected/boot/keyboard.md`
- `hardware.facter.detected.dhcp` -> `hardware/facter/detected/dhcp.md`
- `hardware.facter.detected.graphics` -> `hardware/facter/detected/graphics.md`
- `hardware.facter.detected.graphics.amd` -> `hardware/facter/detected/graphics/amd.md`
- `hardware.facter.detected.networking.intel._2200BG` -> `hardware/facter/detected/networking/intel/2200BG.md`
- `hardware.facter.detected.networking.intel._3945ABG` -> `hardware/facter/detected/networking/intel/3945ABG.md`
- `hardware.facter.detected.virtualisation.hyperv` -> `hardware/facter/detected/virtualisation/hyperv.md`
- `hardware.facter.detected.virtualisation.none` -> `hardware/facter/detected/virtualisation/none.md`
- `hardware.facter.detected.virtualisation.oracle` -> `hardware/facter/detected/virtualisation/oracle.md`
- `hardware.facter.detected.virtualisation.parallels` -> `hardware/facter/detected/virtualisation/parallels.md`
- `hardware.facter.detected.virtualisation.qemu` -> `hardware/facter/detected/virtualisation/qemu.md`
- `hardware.facter.detected.virtualisation.virtio_scsi` -> `hardware/facter/detected/virtualisation/virtio_scsi.md`
- `hardware.fancontrol` -> `hardware/fancontrol.md`
- `hardware.flipperzero` -> `hardware/flipperzero.md`
- `hardware.flirc` -> `hardware/flirc.md`
- `hardware.fw-fanctrl` -> `hardware/fw-fanctrl.md`
- `hardware.fw-fanctrl.config` -> `hardware/fw-fanctrl/config.md`
- `hardware.fw-fanctrl.config.strategies.<name>` -> `hardware/fw-fanctrl/config/strategies/name.md`
- `hardware.fw-fanctrl.config.strategies.<name>.speedCurve.*` -> `hardware/fw-fanctrl/config/strategies/name/speedCurve/star.md`
- `hardware.glasgow` -> `hardware/glasgow.md`
- `hardware.gpgSmartcards` -> `hardware/gpgSmartcards.md`
- `hardware.graphics` -> `hardware/graphics.md`
- `hardware.hackrf` -> `hardware/hackrf.md`
- `hardware.hid-fanatecff` -> `hardware/hid-fanatecff.md`
- `hardware.i2c` -> `hardware/i2c.md`
- `hardware.infiniband` -> `hardware/infiniband.md`
- `hardware.inputmodule` -> `hardware/inputmodule.md`
- `hardware.intel-gpu-tools` -> `hardware/intel-gpu-tools.md`
- `hardware.ipu6` -> `hardware/ipu6.md`
- `hardware.keyboard.qmk` -> `hardware/keyboard/qmk.md`
- `hardware.keyboard.teck` -> `hardware/keyboard/teck.md`
- `hardware.keyboard.uhk` -> `hardware/keyboard/uhk.md`
- `hardware.keyboard.zsa` -> `hardware/keyboard/zsa.md`
- `hardware.kryoflux` -> `hardware/kryoflux.md`
- `hardware.ksm` -> `hardware/ksm.md`
- `hardware.ledger` -> `hardware/ledger.md`
- `hardware.libftdi` -> `hardware/libftdi.md`
- `hardware.libjaylink` -> `hardware/libjaylink.md`
- `hardware.logitech.lcd` -> `hardware/logitech/lcd.md`
- `hardware.logitech.wireless` -> `hardware/logitech/wireless.md`
- `hardware.mcelog` -> `hardware/mcelog.md`
- `hardware.mwProCapture` -> `hardware/mwProCapture.md`
- `hardware.new-lg4ff` -> `hardware/new-lg4ff.md`
- `hardware.nfc-nci` -> `hardware/nfc-nci.md`
- `hardware.nitrokey` -> `hardware/nitrokey.md`
- `hardware.nvidia` -> `hardware/nvidia.md`
- `hardware.nvidia-container-toolkit` -> `hardware/nvidia-container-toolkit.md`
- `hardware.nvidia-container-toolkit.mounts.*` -> `hardware/nvidia-container-toolkit/mounts/star.md`
- `hardware.nvidia.datacenter` -> `hardware/nvidia/datacenter.md`
- `hardware.nvidia.dynamicBoost` -> `hardware/nvidia/dynamicBoost.md`
- `hardware.nvidia.gsp` -> `hardware/nvidia/gsp.md`
- `hardware.nvidia.modesetting` -> `hardware/nvidia/modesetting.md`
- `hardware.nvidia.powerManagement` -> `hardware/nvidia/powerManagement.md`
- `hardware.nvidia.prime` -> `hardware/nvidia/prime.md`
- `hardware.nvidia.prime.offload` -> `hardware/nvidia/prime/offload.md`
- `hardware.nvidia.prime.reverseSync` -> `hardware/nvidia/prime/reverseSync.md`
- `hardware.nvidia.prime.reverseSync.setupCommands` -> `hardware/nvidia/prime/reverseSync/setupCommands.md`
- `hardware.nvidia.prime.sync` -> `hardware/nvidia/prime/sync.md`
- `hardware.nvidiaOptimus` -> `hardware/nvidiaOptimus.md`
- `hardware.onlykey` -> `hardware/onlykey.md`
- `hardware.openrazer` -> `hardware/openrazer.md`
- `hardware.openrazer.batteryNotifier` -> `hardware/openrazer/batteryNotifier.md`
