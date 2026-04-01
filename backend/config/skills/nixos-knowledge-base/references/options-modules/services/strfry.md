---
module: services.strfry
option_count: 3
source: options.html
---

# services.strfry

## services.strfry.enable

Whether to enable strfry. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/strfry.nix>

## services.strfry.package

The strfry package to use. Type: package Default: pkgs.strfry Declared by: <nixpkgs/nixos/modules/services/web-apps/strfry.nix>

## services.strfry.settings

Configuration options to set for the Strfry service. See https://github.com/hoytech/strfry for documentation. Type: JSON value Default: { db = "/var/lib/strfry"; dbParams = { mapsize = 10995116277760; maxreaders = 256; noReadAhead = false; }; events = { ephemeralEventsLifetimeSeconds = 300; maxEventSize = 65536; maxNumTags = 2000; maxTagValSize = 1024; rejectEphemeralEventsOlderThanSeconds = 60; rejectEventsNewerThanSeconds = 900; rejectEventsOlderThanSeconds = 94608000; }; relay = { autoPingSeconds = 55; bind = "127.0.0.1"; compression = { enabled = true; slidingWindow = true; }; enableTcpKeepalive = false; info = { contact = ""; description = "This is a strfry instance."; icon = ""; name = "strfry default"; nips = ""; pubkey = ""; }; logging = { dbScanPerf = false; dumpInAll = false; dumpInEvents = false; dumpInReqs = false; invalidEvents = true; }; maxFilterLimit = 500; maxReqFilterSize = 200; maxSubsPerConnection = 20; maxWebsocketPayloadSize = 131072; negentropy = { enabled = true; maxSyncEvents = 1000000; }; nofiles = 1000000; numThreads = { ingester = 3; negentropy = 2; reqMonitor = 3; reqWorker = 3; }; port = 7777; queryTimesliceBudgetMicroseconds = 10000; realIpHeader = ""; writePolicy = { plugin = ""; }; }; } Example: dbParams = { maxreaders = 256; mapsize = 10995116277760; noReadAhead = false; }; Declared by: <nixpkgs/nixos/modules/services/web-apps/strfry.nix>
