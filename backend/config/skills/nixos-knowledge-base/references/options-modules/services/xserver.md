---
module: services.xserver
option_count: 35
source: options.html
---

# services.xserver

## services.xserver.enable

Whether to enable the X server. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/x11/xserver.nix>

## services.xserver.enableCtrlAltBackspace

Whether to enable the DontZap option, which binds Ctrl+Alt+Backspace to forcefully kill X. This can lead to data loss and is disabled by default. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/x11/xserver.nix>

## services.xserver.enableTCP

Whether to allow the X server to accept TCP connections. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/x11/xserver.nix>

## services.xserver.enableTearFree

Whether to enable the TearFree option in the first Device section. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/x11/xserver.nix>

## services.xserver.autoRepeatDelay

Sets the autorepeat delay (length of time in milliseconds that a key must be depressed before autorepeat starts). Type: null or signed integer Default: null Declared by: <nixpkgs/nixos/modules/services/x11/xserver.nix>

## services.xserver.autoRepeatInterval

Sets the autorepeat interval (length of time in milliseconds that should elapse between autorepeat-generated keystrokes). Type: null or signed integer Default: null Declared by: <nixpkgs/nixos/modules/services/x11/xserver.nix>

## services.xserver.autorun

Whether to start the X server automatically. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/x11/xserver.nix>

## services.xserver.config

The contents of the configuration file of the X server (xorg.conf). This option is set by multiple modules, and the configs are concatenated together. In Xorg configs the last config entries take precedence, so you may want to use lib.mkAfter on this option to override NixOS’s defaults. Type: strings concatenated with “\n” Declared by: <nixpkgs/nixos/modules/services/x11/xserver.nix>

## services.xserver.defaultDepth

Default colour depth. Type: signed integer Default: 0 Example: 8 Declared by: <nixpkgs/nixos/modules/services/x11/xserver.nix>

## services.xserver.deviceSection

Contents of the first Device section of the X server configuration file. Type: strings concatenated with “\n” Default: "" Example: "VideoRAM 131072" Declared by: <nixpkgs/nixos/modules/services/x11/xserver.nix>

## services.xserver.display

Display number for the X server. Type: null or signed integer Default: 0 Declared by: <nixpkgs/nixos/modules/services/x11/xserver.nix>

## services.xserver.dpi

Force global DPI resolution to use for X server. It’s recommended to use this only when DPI is detected incorrectly; also consider using Monitor section in configuration file instead. Type: null or signed integer Default: null Declared by: <nixpkgs/nixos/modules/services/x11/xserver.nix>

## services.xserver.excludePackages

Which X11 packages to exclude from the default environment Type: list of package Default: [ ] Example: [ pkgs.xterm ] Declared by: <nixpkgs/nixos/modules/services/x11/xserver.nix>

## services.xserver.exportConfiguration

Whether to symlink the X server configuration under /etc/X11/xorg.conf. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/x11/xserver.nix>

## services.xserver.extraConfig

Additional contents (sections) included in the X server configuration file Type: strings concatenated with “\n” Default: "" Declared by: <nixpkgs/nixos/modules/services/x11/xserver.nix>

## services.xserver.extraDisplaySettings

Lines to be added to every Display subsection of the Screen section. Type: strings concatenated with “\n” Default: "" Example: "Virtual 2048 2048" Declared by: <nixpkgs/nixos/modules/services/x11/xserver.nix>

## services.xserver.filesSection

Contents of the first Files section of the X server configuration file. Type: strings concatenated with “\n” Default: "" Example: "FontPath \"/path/to/my/fonts\"" Declared by: <nixpkgs/nixos/modules/services/x11/xserver.nix>

## services.xserver.fontPath

Set the X server FontPath. Defaults to null, which means the compiled in defaults will be used. See man xorg.conf for details. Type: null or string Default: null Example: "unix/:7100" Declared by: <nixpkgs/nixos/modules/services/x11/xserver.nix>

## services.xserver.inputClassSections

Content of additional InputClass sections of the X server configuration file. Type: list of strings concatenated with “\n” Default: [ ] Example: [ '' Identifier "Trackpoint Wheel Emulation" MatchProduct "ThinkPad USB Keyboard with TrackPoint" Option "EmulateWheel" "true" Option "EmulateWheelButton" "2" Option "Emulate3Buttons" "false" '' ] Declared by: <nixpkgs/nixos/modules/services/x11/xserver.nix>

## services.xserver.logFile

Controls the file Xorg logs to. The default of /dev/null is set so that systemd services (like displayManagers) only log to the journal and don’t create their own log files. Setting this to null will not pass the -logfile argument to Xorg which allows it to log to its default logfile locations instead (see man Xorg). You probably only want this behaviour when running Xorg manually (e.g. via startx). Type: null or string Default: "/dev/null" Example: "/var/log/Xorg.0.log" Declared by: <nixpkgs/nixos/modules/services/x11/xserver.nix>

## services.xserver.moduleSection

Contents of the Module section of the X server configuration file. Type: strings concatenated with “\n” Default: "" Example: '' SubSection "extmod" EndSubsection '' Declared by: <nixpkgs/nixos/modules/services/x11/xserver.nix>

## services.xserver.modules

Packages to be added to the module search path of the X server. Type: list of absolute path Default: [ ] Example: [ pkgs.xf86_input_wacom ] Declared by: <nixpkgs/nixos/modules/services/x11/xserver.nix>

## services.xserver.monitorSection

Contents of the first Monitor section of the X server configuration file. Type: strings concatenated with “\n” Default: "" Example: "HorizSync 28-49" Declared by: <nixpkgs/nixos/modules/services/x11/xserver.nix>

## services.xserver.resolutions

The screen resolutions for the X server. The first element is the default resolution. If this list is empty, the X server will automatically configure the resolution. Type: list of (attribute set) Default: [ ] Example: [ { x = 1600; y = 1200; } { x = 1024; y = 786; } ] Declared by: <nixpkgs/nixos/modules/services/x11/xserver.nix>

## services.xserver.screenSection

Contents of the first Screen section of the X server configuration file. Type: strings concatenated with “\n” Default: "" Example: '' Option "RandRRotation" "on" '' Declared by: <nixpkgs/nixos/modules/services/x11/xserver.nix>

## services.xserver.serverFlagsSection

Contents of the ServerFlags section of the X server configuration file. Type: strings concatenated with “\n” Default: "" Example: '' Option "BlankTime" "0" Option "StandbyTime" "0" Option "SuspendTime" "0" Option "OffTime" "0" '' Declared by: <nixpkgs/nixos/modules/services/x11/xserver.nix>

## services.xserver.serverLayoutSection

Contents of the ServerLayout section of the X server configuration file. Type: strings concatenated with “\n” Default: "" Example: '' Option "AIGLX" "true" '' Declared by: <nixpkgs/nixos/modules/services/x11/xserver.nix>

## services.xserver.terminateOnReset

Whether to terminate X upon server reset. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/x11/xserver.nix>

## services.xserver.updateDbusEnvironment

Whether to update the DBus activation environment after launching the desktop manager. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/x11/xserver.nix>

## services.xserver.upscaleDefaultCursor

Upscale the default X cursor to be more visible on high-density displays. Requires config.services.xserver.dpi to be set. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/x11/xserver.nix>

## services.xserver.verbose

Controls verbosity of X logging. Type: null or signed integer Default: 3 Example: 7 Declared by: <nixpkgs/nixos/modules/services/x11/xserver.nix>

## services.xserver.videoDriver

The name of the video driver for your graphics card. This option is obsolete; please set the services.xserver.videoDrivers instead. Type: null or string Default: null Example: "i810" Declared by: <nixpkgs/nixos/modules/services/x11/xserver.nix>

## services.xserver.videoDrivers

The names of the video drivers the configuration supports. They will be tried in order until one that supports your card is found. Don’t combine those with “incompatible” OpenGL implementations, e.g. free ones (mesa-based) with proprietary ones. For unfree “nvidia*”, the supported GPU lists are on https://www.nvidia.com/object/unix.html Type: list of string Default: [ "modesetting" "fbdev" ] Example: [ "nvidia" "amdgpu" ] Related packages: amdgpu aka pkgs.xorg.xf86videoamdgpu apm aka pkgs.xorg.xf86videoapm ark aka pkgs.xorg.xf86videoark ast aka pkgs.xorg.xf86videoast ati aka pkgs.xorg.xf86videoati chips aka pkgs.xorg.xf86videochips cirrus aka pkgs.xorg.xf86videocirrus dummy aka pkgs.xorg.xf86videodummy fbdev aka pkgs.xorg.xf86videofbdev geode aka pkgs.xorg.xf86videogeode glide aka pkgs.xorg.xf86videoglide glint aka pkgs.xorg.xf86videoglint i128 aka pkgs.xorg.xf86videoi128 i740 aka pkgs.xorg.xf86videoi740 intel aka pkgs.xorg.xf86videointel mga aka pkgs.xorg.xf86videomga neomagic aka pkgs.xorg.xf86videoneomagic newport aka pkgs.xorg.xf86videonewport nouveau aka pkgs.xorg.xf86videonouveau nv aka pkgs.xorg.xf86videonv omap aka pkgs.xorg.xf86videoomap openchrome aka pkgs.xorg.xf86videoopenchrome qxl aka pkgs.xorg.xf86videoqxl r128 aka pkgs.xorg.xf86videor128 s3virge aka pkgs.xorg.xf86videos3virge savage aka pkgs.xorg.xf86videosavage siliconmotion aka pkgs.xorg.xf86videosiliconmotion sis aka pkgs.xorg.xf86videosis sisusb aka pkgs.xorg.xf86videosisusb suncg6 aka pkgs.xorg.xf86videosuncg6 sunffb aka pkgs.xorg.xf86videosunffb sunleo aka pkgs.xorg.xf86videosunleo tdfx aka pkgs.xorg.xf86videotdfx tga aka pkgs.xorg.xf86videotga trident aka pkgs.xorg.xf86videotrident v4l aka pkgs.xorg.xf86videov4l vboxvideo aka pkgs.xorg.xf86videovboxvideo vesa aka pkgs.xorg.xf86videovesa vmware aka pkgs.xorg.xf86videovmware voodoo aka pkgs.xorg.xf86videovoodoo wsfb aka pkgs.xorg.xf86videowsfb Declared by: <nixpkgs/nixos/modules/services/x11/xserver.nix>

## services.xserver.virtualScreen

Virtual screen size for Xrandr. Type: null or (attribute set) Default: null Example: { x = 2048; y = 2048; } Declared by: <nixpkgs/nixos/modules/services/x11/xserver.nix>

## services.xserver.xrandrHeads

Multiple monitor configuration, just specify a list of XRandR outputs. The individual elements should be either simple strings or an attribute set of output options. If the element is a string, it is denoting the physical output for a monitor, if it’s an attribute set, you must at least provide the output option. The monitors will be mapped from left to right in the order of the list. By default, the first monitor will be set as the primary monitor if none of the elements contain an option that has set primary to true. Note Only one monitor is allowed to be primary. Be careful using this option with multiple graphic adapters or with drivers that have poor support for XRandR, unexpected things might happen with those. Type: list of ((submodule) or string convertible to it) Default: [ ] Example: [ "HDMI-0" { output = "DVI-0"; primary = true; } { monitorConfig = "Option \"Rotate\" \"left\""; output = "DVI-1"; } ] Declared by: <nixpkgs/nixos/modules/services/x11/xserver.nix>
