---
module: hardware.alsa
option_count: 8
source: options.html
---

# hardware.alsa

## hardware.alsa.enable

Whether to set up the user space part of the Advanced Linux Sound Architecture (ALSA) Warning Enable this option only if you want to use ALSA as your main sound system, not if you’re using a sound server (e.g. PulseAudio or Pipewire). Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/audio/alsa.nix>

## hardware.alsa.enableOSSEmulation

Whether to enable the OSS emulation. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/audio/alsa.nix>

## hardware.alsa.enablePersistence

Whether to enable ALSA sound card state saving on shutdown. This is generally not necessary if you’re using an external sound server. Type: boolean Default: config.hardware.alsa.enable Declared by: <nixpkgs/nixos/modules/services/audio/alsa.nix>

## hardware.alsa.enableRecorder

Whether to set up a loopback device that continuously records and allows to play back audio from the computer. The loopback device is named pcm.recorder, audio can be saved by capturing from this device as with any microphone. Note By default the output is duplicated to the recorder assuming stereo audio, for a more complex layout you have to override the pcm.splitter device using hardware.alsa.config. See the generated /etc/asound.conf for its definition. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/audio/alsa.nix>

## hardware.alsa.cardAliases

Assign custom names and reorder the sound cards. Note You can find the card ids by looking at /proc/asound/cards. Type: attribute set of (submodule) Default: { } Example: { soundchip = { driver = "snd_intel_hda"; id = 0; }; videocard = { driver = "snd_intel_hda"; id = 1; }; usb = { driver = "snd_usb_audio"; id = 2; }; } Declared by: <nixpkgs/nixos/modules/services/audio/alsa.nix>

## hardware.alsa.config

The content of the system-wide ALSA configuration (/etc/asound.conf). Documentation of the configuration language and examples can be found in the unofficial ALSA wiki: https://alsa.opensrc.org/Asoundrc Type: strings concatenated with “\n” Default: "" Example: # Send audio to a remote host via SSH pcm.remote { @args [ HOSTNAME ] @args.HOSTNAME { type string } type file format raw slave.pcm pcm.null file { @func concat strings [ "| ${lib.getExec pkgs.openssh} -C " $HOSTNAME " aplay -f %f -c %c -r %r -" ] } } Declared by: <nixpkgs/nixos/modules/services/audio/alsa.nix>

## hardware.alsa.controls

Virtual volume controls (softvols) to add to a sound card. These can be used to control the volume of specific applications or a digital output device (HDMI video card). Type: attribute set of (submodule) Default: { } Example: { firefox = { device = "front"; maxVolume = -25.0; }; mpv = { device = "front"; maxVolume = -25.0; }; # and run programs with `env ALSA_AUDIO_OUT=<name>` } Declared by: <nixpkgs/nixos/modules/services/audio/alsa.nix>

## hardware.alsa.deviceAliases

Assign custom names to sound cards. Type: attribute set of string Default: { } Example: { hdmi1 = "hw:CARD=videocard,DEV=5"; hdmi2 = "hw:CARD=videocard,DEV=6"; } Declared by: <nixpkgs/nixos/modules/services/audio/alsa.nix>
