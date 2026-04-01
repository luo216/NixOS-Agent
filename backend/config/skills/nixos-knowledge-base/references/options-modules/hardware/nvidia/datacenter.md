---
module: hardware.nvidia.datacenter
option_count: 2
source: options.html
---

# hardware.nvidia.datacenter

## hardware.nvidia.datacenter.enable

Whether to enable Data Center drivers for NVIDIA cards on a NVLink topology . Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/hardware/video/nvidia.nix>

## hardware.nvidia.datacenter.settings

Additional configuration options for fabricmanager. Type: attribute set of (atom (null, bool, int, float or string)) Default: { LOG_LEVEL=4; LOG_FILE_NAME="/var/log/fabricmanager.log"; LOG_APPEND_TO_LOG=1; LOG_FILE_MAX_SIZE=1024; LOG_USE_SYSLOG=0; DAEMONIZE=1; BIND_INTERFACE_IP="127.0.0.1"; STARTING_TCP_PORT=16000; FABRIC_MODE=0; FABRIC_MODE_RESTART=0; STATE_FILE_NAME="/var/tmp/fabricmanager.state"; FM_CMD_BIND_INTERFACE="127.0.0.1"; FM_CMD_PORT_NUMBER=6666; FM_STAY_RESIDENT_ON_FAILURES=0; ACCESS_LINK_FAILURE_MODE=0; TRUNK_LINK_FAILURE_MODE=0; NVSWITCH_FAILURE_MODE=0; ABORT_CUDA_JOBS_ON_FM_EXIT=1; } Declared by: <nixpkgs/nixos/modules/hardware/video/nvidia.nix>
