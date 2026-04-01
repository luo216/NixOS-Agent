---
module: hardware.trackpoint
option_count: 18
source: options.html
---

# hardware.trackpoint

## hardware.trackpoint.enable

Enable sensitivity and speed configuration for trackpoints. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/tasks/trackpoint.nix>

## hardware.trackpoint.device

The device name of the trackpoint. You can check with xinput. Some newer devices (example x1c6) use “TPPS/2 Elan TrackPoint”. Type: string Default: "TPPS/2 IBM TrackPoint" Declared by: <nixpkgs/nixos/modules/tasks/trackpoint.nix>

## hardware.trackpoint.draghys

The drag hysteresis controls how hard it is to drag with z-axis pressed. Type: signed integer Default: 255 Example: 200 Declared by: <nixpkgs/nixos/modules/tasks/trackpoint.nix>

## hardware.trackpoint.drift_time

This parameter controls the period of time to test for a ‘hands off’ condition (i.e. when no force is applied) before a drift (noise) calibration occurs. IBM Trackpoints have a feature to compensate for drift by recalibrating themselves periodically. By default, if for 0.5 seconds there is no change in position, it’s used as the new zero. This duration is too low. Often, the calibration happens when the trackpoint is in fact being used. Type: signed integer Default: 5 Example: 100 Declared by: <nixpkgs/nixos/modules/tasks/trackpoint.nix>

## hardware.trackpoint.emulateWheel

Enable scrolling while holding the middle mouse button. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/tasks/trackpoint.nix>

## hardware.trackpoint.ext_dev

Disable or enable external pointing device. Type: boolean Default: true Example: false Declared by: <nixpkgs/nixos/modules/tasks/trackpoint.nix>

## hardware.trackpoint.fakeButtons

Switch to “bare” PS/2 mouse support in case Trackpoint buttons are not recognized properly. This can happen for example on models like the L430, T450, T450s, on which the Trackpoint buttons are actually a part of the Synaptics touchpad. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/tasks/trackpoint.nix>

## hardware.trackpoint.inertia

Negative inertia factor. High values cause the cursor to snap backward when the trackpoint is released. Type: signed integer Default: 6 Example: 10 Declared by: <nixpkgs/nixos/modules/tasks/trackpoint.nix>

## hardware.trackpoint.jenks

Minimum curvature in degrees required to generate a double click without a release. Type: signed integer Default: 135 Example: 100 Declared by: <nixpkgs/nixos/modules/tasks/trackpoint.nix>

## hardware.trackpoint.mindrag

Minimum amount of force needed to trigger dragging. Type: signed integer Default: 20 Example: 30 Declared by: <nixpkgs/nixos/modules/tasks/trackpoint.nix>

## hardware.trackpoint.press_to_select

Setting this to true will enable the Press to Select functions like tapping the control stick to simulate a left click, and setting false will disable it. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/tasks/trackpoint.nix>

## hardware.trackpoint.reach

Backup range for z-axis press. Type: signed integer Default: 10 Example: 20 Declared by: <nixpkgs/nixos/modules/tasks/trackpoint.nix>

## hardware.trackpoint.sensitivity

Trackpoint sensitivity. Type: signed integer Default: 128 Example: 255 Declared by: <nixpkgs/nixos/modules/tasks/trackpoint.nix>

## hardware.trackpoint.skipback

When the skipback bit is set, backup cursor movement during releases from drags will be suppressed. The default value for this bit is 0. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/tasks/trackpoint.nix>

## hardware.trackpoint.speed

Speed of the trackpoint cursor. Type: signed integer Default: 97 Example: 255 Declared by: <nixpkgs/nixos/modules/tasks/trackpoint.nix>

## hardware.trackpoint.thresh

Minimum value for z-axis force required to trigger a press or release, relative to the running average. Type: signed integer Default: 8 Example: 10 Declared by: <nixpkgs/nixos/modules/tasks/trackpoint.nix>

## hardware.trackpoint.upthresh

The offset from the running average required to generate a select (click) on z-axis on release. Type: signed integer Default: 255 Example: 250 Declared by: <nixpkgs/nixos/modules/tasks/trackpoint.nix>

## hardware.trackpoint.ztime

This attribute determines how sharp a press has to be in order to be recognized. Type: signed integer Default: 38 Example: 50 Declared by: <nixpkgs/nixos/modules/tasks/trackpoint.nix>
