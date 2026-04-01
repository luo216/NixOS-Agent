---
module: services.multipath.devices.*
option_count: 40
source: options.html
---

# services.multipath.devices.*

## services.multipath.devices.*.alias_prefix

The user_friendly_names prefix to use for this device type, instead of the default mpath Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/networking/multipath.nix>

## services.multipath.devices.*.all_tg_pt

Set the ‘all targets ports’ flag when registering keys with mpathpersist Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/networking/multipath.nix>

## services.multipath.devices.*.deferred_remove

If set to “yes”, multipathd will do a deferred remove instead of a regular remove when the last path device has been deleted. This means that if the multipath device is still in use, it will be freed when the last user closes it. If path is added to the multipath device before the last user closes it, the deferred remove will be canceled. Type: null or one of “yes”, “no” Default: null Declared by: <nixpkgs/nixos/modules/services/networking/multipath.nix>

## services.multipath.devices.*.delay_wait_checks

This option is deprecated, and mapped to san_path_err_recovery_time Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/networking/multipath.nix>

## services.multipath.devices.*.delay_watch_checks

This option is deprecated, and mapped to san_path_err_forget_rate Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/networking/multipath.nix>

## services.multipath.devices.*.detect_checker

If set to “yes”, multipath will try to detect if the device supports SCSI-3 ALUA. If so, the device will automatically use the tur checker. If set to “no”, the checker will be selected as usual. Type: null or one of “yes”, “no” Default: null Declared by: <nixpkgs/nixos/modules/services/networking/multipath.nix>

## services.multipath.devices.*.detect_prio

If set to “yes”, multipath will try to detect if the device supports SCSI-3 ALUA. If so, the device will automatically use the sysfs prioritizer if the required sysf attributes access_state and preferred_path are supported, or the alua prioritizer if not. If set to “no”, the prioritizer will be selected as usual. Type: null or one of “yes”, “no” Default: null Declared by: <nixpkgs/nixos/modules/services/networking/multipath.nix>

## services.multipath.devices.*.dev_loss_tmo

Specify the number of seconds the SCSI layer will wait after a problem has been detected on a FC remote port before removing it from the system. This can be set to “infinity” which sets it to the max value of 2147483647 seconds, or 68 years. It will be automatically adjusted to the overall retry interval no_path_retry * polling_interval if a number of retries is given with no_path_retry and the overall retry interval is longer than the specified dev_loss_tmo value. The Linux kernel will cap this value to 600 if fast_io_fail_tmo is not set. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/networking/multipath.nix>

## services.multipath.devices.*.failback

Tell multipathd how to manage path group failback. Quote integers as strings Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/networking/multipath.nix>

## services.multipath.devices.*.fast_io_fail_tmo

Specify the number of seconds the SCSI layer will wait after a problem has been detected on a FC remote port before failing I/O to devices on that remote port. This should be smaller than dev_loss_tmo. Setting this to “off” will disable the timeout. Quote integers as strings. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/networking/multipath.nix>

## services.multipath.devices.*.features

Specify any device-mapper features to be used Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/networking/multipath.nix>

## services.multipath.devices.*.flush_on_last_del

If set to “yes” multipathd will disable queueing when the last path to a device has been deleted. Type: null or one of “yes”, “no” Default: null Declared by: <nixpkgs/nixos/modules/services/networking/multipath.nix>

## services.multipath.devices.*.getuid_callout

(Superseded by uid_attribute) The default program and args to callout to obtain a unique path identifier. Should be specified with an absolute path. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/networking/multipath.nix>

## services.multipath.devices.*.ghost_delay

Sets the number of seconds that multipath will wait after creating a device with only ghost paths before marking it ready for use in systemd Type: null or signed integer Default: null Declared by: <nixpkgs/nixos/modules/services/networking/multipath.nix>

## services.multipath.devices.*.hardware_handler

The hardware handler to use for this device type Type: null or one of “emc”, “rdac”, “hp_sw”, “alua”, “ana” Default: null Declared by: <nixpkgs/nixos/modules/services/networking/multipath.nix>

## services.multipath.devices.*.marginal_path_double_failed_time

One of the four parameters of supporting path check based on accounting IO error such as intermittent error Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/networking/multipath.nix>

## services.multipath.devices.*.marginal_path_err_rate_threshold

The error rate threshold as a permillage (1/1000) Type: null or signed integer Default: null Declared by: <nixpkgs/nixos/modules/services/networking/multipath.nix>

## services.multipath.devices.*.marginal_path_err_recheck_gap_time

One of the four parameters of supporting path check based on accounting IO error such as intermittent error Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/networking/multipath.nix>

## services.multipath.devices.*.marginal_path_err_sample_time

One of the four parameters of supporting path check based on accounting IO error such as intermittent error Type: null or signed integer Default: null Declared by: <nixpkgs/nixos/modules/services/networking/multipath.nix>

## services.multipath.devices.*.max_sectors_kb

Sets the max_sectors_kb device parameter on all path devices and the multipath device to the specified value Type: null or signed integer Default: null Declared by: <nixpkgs/nixos/modules/services/networking/multipath.nix>

## services.multipath.devices.*.no_path_retry

Specify what to do when all paths are down. Quote integers as strings Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/networking/multipath.nix>

## services.multipath.devices.*.path_checker

The default method used to determine the paths state Type: one of “readsector0”, “tur”, “emc_clariion”, “hp_sw”, “rdac”, “directio”, “cciss_tur”, “none” Default: "tur" Declared by: <nixpkgs/nixos/modules/services/networking/multipath.nix>

## services.multipath.devices.*.path_grouping_policy

The default path grouping policy to apply to unspecified multipaths Type: null or one of “failover”, “multibus”, “group_by_serial”, “group_by_prio”, “group_by_node_name” Default: null Declared by: <nixpkgs/nixos/modules/services/networking/multipath.nix>

## services.multipath.devices.*.path_selector

The default path selector algorithm to use; they are offered by the kernel multipath target Type: null or one of "“round-robin 0"”, "“queue-length 0"”, "“service-time 0"”, "“historical-service-time 0"” Default: null Declared by: <nixpkgs/nixos/modules/services/networking/multipath.nix>

## services.multipath.devices.*.prio

The name of the path priority routine Type: null or one of “none”, “const”, “sysfs”, “emc”, “alua”, “ontap”, “rdac”, “hp_sw”, “hds”, “random”, “weightedpath”, “path_latency”, “ana”, “datacore”, “iet” Default: null Declared by: <nixpkgs/nixos/modules/services/networking/multipath.nix>

## services.multipath.devices.*.prio_args

Arguments to pass to to the prio function Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/networking/multipath.nix>

## services.multipath.devices.*.product

Regular expression to match the product name Type: string Example: "Compellent Vol" Declared by: <nixpkgs/nixos/modules/services/networking/multipath.nix>

## services.multipath.devices.*.product_blacklist

Products with the given vendor matching this string are blacklisted Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/networking/multipath.nix>

## services.multipath.devices.*.revision

Regular expression to match the product revision Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/networking/multipath.nix>

## services.multipath.devices.*.rr_min_io

Number of I/O requests to route to a path before switching to the next in the same path group. This is only for Block I/O (BIO) based multipath and only apply to round-robin path_selector. Type: null or signed integer Default: null Declared by: <nixpkgs/nixos/modules/services/networking/multipath.nix>

## services.multipath.devices.*.rr_min_io_rq

Number of I/O requests to route to a path before switching to the next in the same path group. This is only for Request based multipath and only apply to round-robin path_selector. Type: null or signed integer Default: null Declared by: <nixpkgs/nixos/modules/services/networking/multipath.nix>

## services.multipath.devices.*.rr_weight

If set to priorities the multipath configurator will assign path weights as “path prio * rr_min_io”. Type: null or one of “priorities”, “uniform” Default: null Declared by: <nixpkgs/nixos/modules/services/networking/multipath.nix>

## services.multipath.devices.*.san_path_err_forget_rate

If set to a value greater than 0, multipathd will check whether the path failures has exceeded the san_path_err_threshold within this many checks i.e san_path_err_forget_rate. If so we will not reinstante the path till san_path_err_recovery_time. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/networking/multipath.nix>

## services.multipath.devices.*.san_path_err_recovery_time

If set to a value greater than 0, multipathd will make sure that when path failures has exceeded the san_path_err_threshold within san_path_err_forget_rate then the path will be placed in failed state for san_path_err_recovery_time duration. Once san_path_err_recovery_time has timeout we will reinstante the failed path. san_path_err_recovery_time value should be in secs. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/networking/multipath.nix>

## services.multipath.devices.*.san_path_err_threshold

If set to a value greater than 0, multipathd will watch paths and check how many times a path has been failed due to errors.If the number of failures on a particular path is greater then the san_path_err_threshold, then the path will not reinstate till san_path_err_recovery_time. These path failures should occur within a san_path_err_forget_rate checks, if not we will consider the path is good enough to reinstantate. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/networking/multipath.nix>

## services.multipath.devices.*.skip_kpartx

If set to yes, kpartx will not automatically create partitions on the device Type: null or one of “yes”, “no” Default: null Declared by: <nixpkgs/nixos/modules/services/networking/multipath.nix>

## services.multipath.devices.*.uid_attribute

The udev attribute providing a unique path identifier (WWID) Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/networking/multipath.nix>

## services.multipath.devices.*.user_friendly_names

If set to “yes”, using the bindings file /etc/multipath/bindings to assign a persistent and unique alias to the multipath, in the form of mpath. If set to “no” use the WWID as the alias. In either case this be will be overridden by any specific aliases in the multipaths section. Type: null or one of “yes”, “no” Default: null Declared by: <nixpkgs/nixos/modules/services/networking/multipath.nix>

## services.multipath.devices.*.vendor

Regular expression to match the vendor name Type: string Example: "COMPELNT" Declared by: <nixpkgs/nixos/modules/services/networking/multipath.nix>

## services.multipath.devices.*.vpd_vendor

The vendor specific vpd page information, using the vpd page abbreviation Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/networking/multipath.nix>
