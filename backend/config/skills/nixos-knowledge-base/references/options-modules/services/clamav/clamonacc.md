---
module: services.clamav.clamonacc
option_count: 1
source: options.html
---

# services.clamav.clamonacc

## services.clamav.clamonacc.enable

Whether to enable ClamAV on-access scanner. The settings for ClamAV’s on-access scanner is configured in clamd.conf via services.clamav.daemon.settings. Refer to https://docs.clamav.net/manual/OnAccess.html on how to configure it. Example to scan /home/foo/Downloads (and block access until scanning is completed) would be: services.clamav = { daemon.enable = true; clamonacc.enable = true; daemon.settings = { OnAccessPrevention = true; OnAccessIncludePath = "/home/foo/Downloads"; }; }; Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/security/clamav.nix>
