---
module: services.prosody.muc.*
option_count: 18
source: options.html
---

# services.prosody.muc.*

## services.prosody.muc.*.allowners_muc

Add module allowners, any user in chat is able to kick other. Useful in jitsi-meet to kick ghosts. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/prosody.nix>

## services.prosody.muc.*.domain

Domain name of the MUC Type: string Declared by: <nixpkgs/nixos/modules/services/networking/prosody.nix>

## services.prosody.muc.*.extraConfig

Additional MUC specific configuration Type: strings concatenated with “\n” Default: "" Declared by: <nixpkgs/nixos/modules/services/networking/prosody.nix>

## services.prosody.muc.*.maxHistoryMessages

Specifies a limit on what each room can be configured to keep Type: signed integer Default: 20 Declared by: <nixpkgs/nixos/modules/services/networking/prosody.nix>

## services.prosody.muc.*.moderation

Allow rooms to be moderated Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/prosody.nix>

## services.prosody.muc.*.name

The name to return in service discovery responses for the MUC service itself Type: string Default: "Prosody Chatrooms" Declared by: <nixpkgs/nixos/modules/services/networking/prosody.nix>

## services.prosody.muc.*.restrictRoomCreation

Restrict room creation to server admins Type: one of true, false, “admin”, “local” Default: false Declared by: <nixpkgs/nixos/modules/services/networking/prosody.nix>

## services.prosody.muc.*.roomDefaultChangeSubject

If set, the rooms will display the public JIDs by default. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/prosody.nix>

## services.prosody.muc.*.roomDefaultHistoryLength

Number of history message sent to participants by default. Type: signed integer Default: 20 Declared by: <nixpkgs/nixos/modules/services/networking/prosody.nix>

## services.prosody.muc.*.roomDefaultLanguage

Default room language. Type: string Default: "en" Declared by: <nixpkgs/nixos/modules/services/networking/prosody.nix>

## services.prosody.muc.*.roomDefaultMembersOnly

If set, the MUC rooms will only be accessible to the members by default. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/prosody.nix>

## services.prosody.muc.*.roomDefaultModerated

If set, the MUC rooms will be moderated by default. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/prosody.nix>

## services.prosody.muc.*.roomDefaultPublic

If set, the MUC rooms will be public by default. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/networking/prosody.nix>

## services.prosody.muc.*.roomDefaultPublicJids

If set, the MUC rooms will display the public JIDs by default. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/prosody.nix>

## services.prosody.muc.*.roomLockTimeout

Timeout after which the room is destroyed or unlocked if not configured, in seconds Type: signed integer Default: 300 Declared by: <nixpkgs/nixos/modules/services/networking/prosody.nix>

## services.prosody.muc.*.roomLocking

Enables room locking, which means that a room must be configured before it can be used. Locked rooms are invisible and cannot be entered by anyone but the creator Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/networking/prosody.nix>

## services.prosody.muc.*.tombstoneExpiry

This settings controls how long a tombstone is considered valid. It defaults to 31 days. After this time, the room in question can be created again. Type: signed integer Default: 2678400 Declared by: <nixpkgs/nixos/modules/services/networking/prosody.nix>

## services.prosody.muc.*.tombstones

When a room is destroyed, it leaves behind a tombstone which prevents the room being entered or recreated. It also allows anyone who was not in the room at the time it was destroyed to learn about it, and to update their bookmarks. Tombstones prevents the case where someone could recreate a previously semi-anonymous room in order to learn the real JIDs of those who often join there. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/networking/prosody.nix>
