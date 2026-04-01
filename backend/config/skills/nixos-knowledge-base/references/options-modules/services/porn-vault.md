---
module: services.porn-vault
option_count: 6
source: options.html
---

# services.porn-vault

## services.porn-vault.enable

Whether to enable Porn-Vault. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/porn-vault/default.nix>

## services.porn-vault.package

The porn-vault package to use. Type: package Default: pkgs.porn-vault Declared by: <nixpkgs/nixos/modules/services/web-apps/porn-vault/default.nix>

## services.porn-vault.autoStart

Whether to start porn-vault automatically. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/web-apps/porn-vault/default.nix>

## services.porn-vault.openFirewall

Whether to open the Porn-Vault port in the firewall. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/web-apps/porn-vault/default.nix>

## services.porn-vault.port

Which port Porn-Vault will use. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 3000 Declared by: <nixpkgs/nixos/modules/services/web-apps/porn-vault/default.nix>

## services.porn-vault.settings

Configuration for Porn-Vault. The attributes are serialized to JSON in config.json. See https://gitlab.com/porn-vault/porn-vault/-/blob/dev/config.example.json Type: JSON value Default: { auth = { password = null; }; binaries = { ffmpeg = "ffmpeg"; ffprobe = "ffprobe"; imagemagick = { convertPath = "convert"; identifyPath = "identify"; montagePath = "montage"; }; izzyPort = 8000; }; import = { images = [ { enable = true; exclude = [ ]; extensions = [ ".jpg" ".jpeg" ".png" ".gif" ]; include = [ ]; path = "/media/porn-vault/images"; } ]; scanInterval = 10800000; videos = [ { enable = true; exclude = [ ]; extensions = [ ".mp4" ".mov" ".webm" ]; include = [ ]; path = "/media/porn-vault/videos"; } ]; }; log = { level = "debug"; maxFiles = "5"; maxSize = "20m"; writeFile = [ { level = "debug"; prefix = "errors-"; silent = false; } ]; }; matching = { applyActorLabels = [ "event:actor:create" "event:actor:find-unmatched-scenes" "plugin:actor:create" "event:scene:create" "plugin:scene:create" "event:image:create" "plugin:marker:create" "event:marker:create" ]; applySceneLabels = true; applyStudioLabels = [ "event:studio:create" "event:studio:find-unmatched-scenes" "plugin:studio:create" "event:scene:create" "plugin:scene:create" ]; extractSceneActorsFromFilepath = true; extractSceneLabelsFromFilepath = true; extractSceneMoviesFromFilepath = true; extractSceneStudiosFromFilepath = true; matchCreatedActors = true; matchCreatedLabels = true; matchCreatedStudios = true; matcher = { options = { camelCaseWordGroups = true; enableWordGroups = true; filepathSeparators = [ "[/\\\\&]" ]; groupSeparators = [ "[\\s',()[\\]{}*\\.]" ]; ignoreDiacritics = true; ignoreSingleNames = false; overlappingMatchPreference = "longest"; wordSeparatorFallback = true; wordSeparators = [ "[-_]" ]; }; type = "word"; }; }; persistence = { backup = { enable = true; maxAmount = 10; }; libraryPath = "/media/porn-vault/lib"; }; plugins = { allowActorThumbnailOverwrite = false; allowMovieThumbnailOverwrite = false; allowSceneThumbnailOverwrite = false; allowStudioThumbnailOverwrite = false; createMissingActors = false; createMissingLabels = false; createMissingMovies = false; createMissingStudios = false; events = { actorCreated = [ ]; actorCustom = [ ]; movieCustom = [ ]; sceneCreated = [ ]; sceneCustom = [ ]; studioCreated = [ ]; studioCustom = [ ]; }; markerDeduplicationThreshold = 5; register = { }; }; processing = { generateImageThumbnails = true; generatePreviews = true; readImagesOnImport = false; }; server = { https = { certificate = ""; enable = false; key = ""; }; }; transcode = { h264 = { crf = 23; preset = "veryfast"; }; hwaDriver = null; vaapiDevice = "/dev/dri/renderD128"; webm = { cpuUsed = 3; crf = 31; deadline = "realtime"; }; }; } Declared by: <nixpkgs/nixos/modules/services/web-apps/porn-vault/default.nix>
