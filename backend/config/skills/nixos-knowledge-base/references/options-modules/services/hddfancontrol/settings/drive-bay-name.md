---
module: services.hddfancontrol.settings.<drive-bay-name>
option_count: 4
source: options.html
---

# services.hddfancontrol.settings.<drive-bay-name>

## services.hddfancontrol.settings.<drive-bay-name>.disks

Drive(s) to get temperature from Can also use command substitution to automatically grab all matching drives; such as all scsi (sas) drives Type: list of string Default: [ ] Example: [ "/dev/sda" "`find /dev/disk/by-id -name \"scsi*\" -and -not -name \"*-part*\" -printf \"%p \"`" ] Declared by: <nixpkgs/nixos/modules/services/hardware/hddfancontrol.nix>

## services.hddfancontrol.settings.<drive-bay-name>.extraArgs

Extra commandline arguments for hddfancontrol Type: list of string Default: [ ] Example: [ "--min-fan-speed-prct=10" "--interval=1min" ] Declared by: <nixpkgs/nixos/modules/services/hardware/hddfancontrol.nix>

## services.hddfancontrol.settings.<drive-bay-name>.logVerbosity

Verbosity of the log level Type: one of “TRACE”, “DEBUG”, “INFO”, “WARN”, “ERROR” Default: "INFO" Declared by: <nixpkgs/nixos/modules/services/hardware/hddfancontrol.nix>

## services.hddfancontrol.settings.<drive-bay-name>.pwmPaths

PWM filepath(s) to control fan speed (under /sys), followed by initial and fan-stop PWM values Can also use command substitution to ensure the correct hwmonX is selected on every boot Type: list of string Default: [ ] Example: [ "/sys/class/hwmon/hwmon2/pwm1:30:10" "`echo /sys/devices/platform/nct6775.656/hwmon/hwmon[[:print:]]`/pwm4:80:20" ] Declared by: <nixpkgs/nixos/modules/services/hardware/hddfancontrol.nix>
