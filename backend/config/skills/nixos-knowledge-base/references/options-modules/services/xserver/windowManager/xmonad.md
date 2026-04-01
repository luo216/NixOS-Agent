---
module: services.xserver.windowManager.xmonad
option_count: 8
source: options.html
---

# services.xserver.windowManager.xmonad

## services.xserver.windowManager.xmonad.enable

Whether to enable xmonad. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/x11/window-managers/xmonad.nix>

## services.xserver.windowManager.xmonad.enableConfiguredRecompile

Enable recompilation even if config is set to a non-null value. This adds the necessary Haskell dependencies (GHC with packages) to the xmonad binary’s environment. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/x11/window-managers/xmonad.nix>

## services.xserver.windowManager.xmonad.enableContribAndExtras

Enable xmonad-{contrib,extras} in Xmonad. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/x11/window-managers/xmonad.nix>

## services.xserver.windowManager.xmonad.config

Configuration from which XMonad gets compiled. If no value is specified, a vanilla xmonad binary is put in PATH, which will attempt to recompile and exec your xmonad config from $HOME/.xmonad. This setup is then analogous to other (non-NixOS) linux distributions. If you do set this option, you likely want to use “launch” as your entry point for xmonad (as in the example), to avoid xmonad’s recompilation logic on startup. Doing so will render the default “mod+q” restart key binding dysfunctional though, because that attempts to call your binary with the “–restart” command line option, unless you implement that yourself. You way mant to bind “mod+q” to (restart "xmonad" True) instead, which will just restart xmonad from PATH. This allows e.g. switching to the new xmonad binary after rebuilding your system with nixos-rebuild. For the same reason, ghc is not added to the environment when this option is set, unless enableConfiguredRecompile is set to true. If you actually want to run xmonad with a config specified here, but also be able to recompile and restart it from a copy of that source in $HOME/.xmonad on the fly, set enableConfiguredRecompile to true and implement something like “compileRestart” from the example. This should allow you to switch at will between the local xmonad and the one NixOS puts in your PATH. Type: null or absolute path or string Default: null Example: '' import XMonad import XMonad.Util.EZConfig (additionalKeys) import Control.Monad (when) import Text.Printf (printf) import System.Posix.Process (executeFile) import System.Info (arch,os) import System.Environment (getArgs) import System.FilePath ((</>)) compiledConfig = printf "xmonad-%s-%s" arch os myConfig = defaultConfig { modMask = mod4Mask -- Use Super instead of Alt , terminal = "urxvt" } `additionalKeys` [ ( (mod4Mask,xK_r), compileRestart True) , ( (mod4Mask,xK_q), restart "xmonad" True ) ] compileRestart resume = do dirs <- asks directories whenX (recompile dirs True) $ do when resume writeStateToFile catchIO ( do args <- getArgs executeFile (cacheDir dirs </> compiledConfig) False args Nothing ) main = getDirectories >>= launch myConfig -------------------------------------------- {- For versions before 0.17.0 use this instead -} -------------------------------------------- -- compileRestart resume = -- whenX (recompile True) $ -- when resume writeStateToFile -- *> catchIO -- ( do -- dir <- getXMonadDataDir -- args <- getArgs -- executeFile (dir </> compiledConfig) False args Nothing -- ) -- -- main = launch myConfig -------------------------------------------- '' Declared by: <nixpkgs/nixos/modules/services/x11/window-managers/xmonad.nix>

## services.xserver.windowManager.xmonad.extraPackages

Extra packages available to ghc when rebuilding Xmonad. The value must be a function which receives the attrset defined in haskellPackages as the sole argument. Type: function that evaluates to a(n) list of package Default: self: [] Example: haskellPackages: [ haskellPackages.xmonad-contrib haskellPackages.monad-logger ] Declared by: <nixpkgs/nixos/modules/services/x11/window-managers/xmonad.nix>

## services.xserver.windowManager.xmonad.ghcArgs

Command line arguments passed to the compiler (ghc) invocation when xmonad.config is set. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/x11/window-managers/xmonad.nix>

## services.xserver.windowManager.xmonad.haskellPackages

haskellPackages used to build Xmonad and other packages. This can be used to change the GHC version used to build Xmonad and the packages listed in extraPackages. Type: attribute set Default: pkgs.haskellPackages Example: pkgs.haskell.packages.ghc910 Declared by: <nixpkgs/nixos/modules/services/x11/window-managers/xmonad.nix>

## services.xserver.windowManager.xmonad.xmonadCliArgs

Command line arguments passed to the xmonad binary. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/x11/window-managers/xmonad.nix>
