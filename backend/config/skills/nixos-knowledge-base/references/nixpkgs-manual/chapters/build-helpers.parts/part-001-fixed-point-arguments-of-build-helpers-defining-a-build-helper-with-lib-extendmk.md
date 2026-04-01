---
title: "Build helpers"
source: index.html
---

# Build helpers

A build helper is a function that produces derivations.

#### Warning

This is not to be confused with the builder argument of the Nix derivation primitive, which refers to the executable that produces the build result, or remote builder, which refers to a remote machine that could run such an executable. Such a function is usually designed to abstract over a typical workflow for a given programming language or framework. This allows declaring a build recipe by setting a limited number of options relevant to the particular use case instead of using the derivation function directly. stdenv.mkDerivation is the most widely used build helper and serves as a basis for many others. In addition, it offers various options to customize parts of the builds. There is no uniform interface for build helpers. Trivial build helpers and fetchers have various input types for convenience. Language- or framework-specific build helpers usually follow the style of stdenv.mkDerivation, which accepts an attribute set or a fixed-point function taking an attribute set. Table of Contents Fixed-point arguments of build helpers Fetchers Trivial build helpers Testers Development Shell helpers Special build helpers Images Hooks reference Languages and frameworks Packages

### Fixed-point arguments of build helpers

Table of Contents Defining a build helper with lib.extendMkDerivation As mentioned in the beginning of this part, stdenv.mkDerivation could alternatively accept a fixed-point function. The input of this function, typically named finalAttrs, is expected to be the final state of the attribute set. A build helper like this is said to accept fixed-point arguments. Build helpers don’t always support fixed-point arguments yet, as support in stdenv.mkDerivation was first included in Nixpkgs 22.05.

### Defining a build helper with lib.extendMkDerivation

Developers can use the Nixpkgs library function lib.customisation.extendMkDerivation to define a build helper supporting fixed-point arguments from an existing one with such support, with an attribute overlay similar to the one taken by <pkg>.overrideAttrs. Besides overriding, lib.extendMkDerivation also supports excludeDrvArgNames to optionally exclude some arguments in the input fixed-point arguments from passing down the base build helper (specified as constructDrv). Example 296. Example definition of mkLocalDerivation extended from stdenv.mkDerivation with lib.extendMkDerivation We want to define a build helper named mkLocalDerivation that builds locally without using substitutes by default. Instead of taking a plain attribute set, { preferLocalBuild ? true, allowSubstitute ? false, specialArg ? (_: false), ... }@args: stdenv.mkDerivation ( removeAttrs [ # Don't pass specialArg into mkDerivation. "specialArg" ] args // { # Arguments to pass inherit preferLocalBuild allowSubstitute; # Some expressions involving specialArg greeting = if specialArg "hi" then "hi" else "hello"; } ) we could define with lib.extendMkDerivation an attribute overlay to make the result build helper also accept the attribute set’s fixed point passing to the underlying stdenv.mkDerivation, named finalAttrs here: lib.extendMkDerivation { constructDrv = stdenv.mkDerivation; excludeDrvArgNames = [ # Don't pass specialArg into mkDerivation. "specialArg" ]; extendDrvArgs = finalAttrs: { preferLocalBuild ? true, allowSubstitute ? false, specialArg ? (_: false), ... }@args: { # Arguments to pass inherit preferLocalBuild allowSubstitute; # Some expressions involving specialArg greeting = if specialArg "hi" then "hi" else "hello"; }; } If one needs to apply extra changes to the result derivation, pass the derivation transformation function to lib.extendMkDerivation as lib.customisation.extendMkDerivation { transformDrv = drv: ...; }.

### Fetchers

Table of Contents Caveats Updating source hashes Obtaining hashes securely Proxy usage fetchurl fetchzip fetchpatch fetchDebianPatch fetchsvn fetchgit fetchfossil fetchcvs fetchhg fetchFromGitea, fetchFromForgejo and fetchFromCodeberg fetchFromGitHub fetchFromGitLab fetchFromGitiles fetchFromBitbucket fetchFromSavannah fetchFromRepoOrCz fetchFromSourcehut fetchFromRadicle fetchRadiclePatch requireFile fetchtorrent Building software with Nix often requires downloading source code and other files from the internet. To this end, we use functions that we call fetchers, which obtain remote sources via various protocols and services. Nix provides built-in fetchers such as fetchTarball. Nixpkgs provides its own fetchers, which work differently: A built-in fetcher will download and cache files at evaluation time and produce a store path. A Nixpkgs fetcher will create a (fixed-output) derivation, and files are downloaded at build time. Built-in fetchers will invalidate their cache after tarball-ttl expires, and will require network activity to check if the cache entry is up to date. Nixpkgs fetchers only re-download if the specified hash changes or the store object is not available. Built-in fetchers do not use substituters. Derivations produced by Nixpkgs fetchers will use any configured binary cache transparently. This significantly reduces the time needed to evaluate Nixpkgs, and allows Hydra to retain and re-distribute sources used by Nixpkgs in the public binary cache. For these reasons, Nix’s built-in fetchers are not allowed in Nixpkgs. The following table summarises the differences: FetchersDownloadOutputCacheRe-download when builtins.fetch*evaluation timestore path/nix/store, ~/.cache/nixtarball-ttl expires, cache miss in ~/.cache/nix, output store object not in local store pkgs.fetch*build timederivation/nix/store, substitutersoutput store object not available

#### Tip

pkgs.fetchFrom* helpers retrieve snapshots of version-controlled sources, as opposed to the entire version history, which is more efficient. pkgs.fetchgit by default also has the same behaviour, but can be changed through specific attributes given to it.

### Caveats

Because Nixpkgs fetchers are fixed-output derivations, an output hash has to be specified, usually indirectly through a hash attribute. This hash refers to the derivation output, which can be different from the remote source itself! This has the following implications that you should be aware of: Use Nix (or Nix-aware) tooling to produce the output hash. When changing any fetcher parameters, always update the output hash. Use one of the methods from the section called “Updating source hashes”. Otherwise, existing store objects that match the output hash will be re-used rather than fetching new content.

#### Note

A similar problem arises while testing changes to a fetcher’s implementation. If the output of the derivation already exists in the Nix store, test failures can go undetected. The invalidateFetcherByDrvHash function helps prevent reusing cached derivations.

### Updating source hashes

There are several ways to obtain the hash corresponding to a remote source. Unless you understand how the fetcher you’re using calculates the hash from the downloaded contents, you should use the fake hash method. The fake hash method: In your package recipe, set the hash to one of "" lib.fakeHash lib.fakeSha256 lib.fakeSha512 Attempt to build, extract the calculated hashes from error messages, and put them into the recipe.

#### Warning

You must use one of these four fake hashes and not some arbitrarily-chosen hash. See the section called “Obtaining hashes securely” for details. Example 297. Update source hash with the fake hash method Consider the following recipe that produces a plain file: { fetchurl }: fetchurl { url = "https://raw.githubusercontent.com/NixOS/nixpkgs/23.05/.version"; hash = "sha256-ZHl1emidXVojm83LCVrwULpwIzKE/mYwfztVkvpruOM="; } A common mistake is to update a fetcher parameter, such as url, without updating the hash: { fetchurl }: fetchurl { url = "https://raw.githubusercontent.com/NixOS/nixpkgs/23.11/.version"; hash = "sha256-ZHl1emidXVojm83LCVrwULpwIzKE/mYwfztVkvpruOM="; } This will produce the same output as before! Set the hash to an empty string: { fetchurl }: fetchurl { url = "https://raw.githubusercontent.com/NixOS/nixpkgs/23.11/.version"; hash = ""; } When building the package, use the error message to determine the correct hash: $ nix-build (some output removed for clarity) error: hash mismatch in fixed-output derivation '/nix/store/7yynn53jpc93l76z9zdjj4xdxgynawcw-version.drv': specified: sha256-AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA= got: sha256-BZqI7r0MNP29yGH5+yW2tjU9OOpOCEvwWKrWCv5CQ0I= error: build of '/nix/store/bqdjcw5ij5ymfbm41dq230chk9hdhqff-version.drv' failed Prefetch the source with nix-prefetch-<type> <URL>, where <type> is one of url git hg cvs bzr svn The hash is printed to stdout. Prefetch by package source (with nix-prefetch-url '<nixpkgs>' -A <package>.src, where <package> is package attribute name). The hash is printed to stdout. This works well when you’ve upgraded the existing package version and want to find out new hash, but is useless if the package can’t be accessed by attribute or the package has multiple sources (.srcs, architecture-dependent sources, etc). Upstream hash: use it when upstream provides sha256 or sha512. Don’t use it when upstream provides md5, compute sha256 instead. A little nuance is that nix-prefetch-* tools produce hashes with the nix32 encoding (a Nix-specific base32 adaptation), but upstream usually provides hexadecimal (base16) encoding. Fetchers understand both formats. Nixpkgs does not standardise on any one format. You can convert between hash formats with nix-hash. Extract the hash from a local source archive with sha256sum. Use nix-prefetch-url file:///path/to/archive if you want the custom Nix base32 hash.

### Obtaining hashes securely

It’s always a good idea to avoid Man-in-the-Middle (MITM) attacks when downloading source contents. Otherwise, you could unknowingly download malware instead of the intended source, and instead of the actual source hash, you’ll end up using the hash of malware. Here are security considerations for this scenario: http:// URLs are not secure to prefetch hashes. Upstream hashes should be obtained via a secure protocol. https:// URLs give you more protections when using nix-prefetch-* or for upstream hashes. https:// URLs are secure when using the fake hash method only if you use one of the listed fake hashes. If you use any other hash, the download will be exposed to MITM attacks even if you use HTTPS URLs. In more concrete terms, if you use any other hash, the --insecure flag will be passed to the underlying call to curl when downloading content.

### Proxy usage

Nixpkgs fetchers can make use of a http(s) proxy. Each fetcher will automatically inherit proxy-related environment variables (http_proxy, https_proxy, etc) via impureEnvVars. The environment variable NIX_SSL_CERT_FILE is also inherited in fetchers, and can be used to provide a custom certificate bundle to fetchers. This is usually required for a https proxy to work without certificate validation errors. To use a temporary Tor instance as a proxy for fetching from .onion addresses, add nativeBuildInputs = [ tor.proxyHook ]; to the fetcher parameters.

### fetchurl

Inputs Passthru outputs Examples fetchurl returns a fixed-output derivation which downloads content from a given URL and stores the unaltered contents within the Nix store. It uses curl(1) internally, and allows its behaviour to be modified by specifying a few attributes in the argument to fetchurl (see the documentation for attributes curlOpts, curlOptsList, and netrcPhase). The resulting store path is determined by the hash given to fetchurl, and also the name (or pname and version) values. If neither name nor pname and version are specified when calling fetchurl, it will default to using the basename of url or the first element of urls. If pname and version are specified, fetchurl will use those values and will ignore name, even if it is also specified.

#### Inputs

fetchurl requires an attribute set with the following attributes: url (String; optional) The URL to download from.

#### Note

Either url or urls must be specified, but not both. All URLs of the format specified here are supported. Default value: "". urls (List of String; optional) A list of URLs, specifying download locations for the same content. Each URL will be tried in order until one of them succeeds with some content or all of them fail. See Example 299 to understand how this attribute affects the behaviour of fetchurl.

#### Note

Either url or urls must be specified, but not both. Default value: []. hash (String; optional) Hash of the derivation output of fetchurl, following the format for integrity metadata as defined by SRI. For more information, see the section called “Caveats”.

#### Note

It is recommended that you use the hash attribute instead of the other hash-specific attributes that exist for backwards compatibility. If hash is not specified, you must specify outputHash and outputHashAlgo, or one of sha512, sha256, or sha1. Default value: "". outputHash (String; optional) Hash of the derivation output of fetchurl in the format expected by Nix. See the documentation on the Nix manual for more information about its format.

#### Note

It is recommended that you use the hash attribute instead. If outputHash is specified, you must also specify outputHashAlgo. Default value: "". outputHashAlgo (String; optional) Algorithm used to generate the value specified in outputHash. See the documentation on the Nix manual for more information about the values it supports.

#### Note

It is recommended that you use the hash attribute instead. The value specified in outputHashAlgo will be ignored if outputHash isn’t also specified. Default value: "". sha1 (String; optional) SHA-1 hash of the derivation output of fetchurl in the format expected by Nix. See the documentation on the Nix manual for more information about its format.

#### Note

It is recommended that you use the hash attribute instead. Default value: "". sha256 (String; optional) SHA-256 hash of the derivation output of fetchurl in the format expected by Nix. See the documentation on the Nix manual for more information about its format.

#### Note

It is recommended that you use the hash attribute instead. Default value: "". sha512 (String; optional) SHA-512 hash of the derivation output of fetchurl in the format expected by Nix. See the documentation on the Nix manual for more information about its format.

#### Note

It is recommended that you use the hash attribute instead. Default value: "". name (String; optional) The symbolic name of the downloaded file when saved in the Nix store. See the fetchurl overview for details on how the name of the file is decided. Default value: "". pname (String; optional) A base name, which will be combined with version to form the symbolic name of the downloaded file when saved in the Nix store. See the fetchurl overview for details on how the name of the file is decided.

#### Note

If pname is specified, you must also specify version, otherwise fetchurl will ignore the value of pname. Default value: "". version (String; optional) A version, which will be combined with pname to form the symbolic name of the downloaded file when saved in the Nix store. See the fetchurl overview for details on how the name of the file is decided. Default value: "". recursiveHash (Boolean; optional) If set to true, will signal to Nix that the hash given to fetchurl was calculated using the "recursive" mode. See the documentation on the Nix manual for more information about the existing modes. By default, fetchurl uses "recursive" mode when the executable attribute is set to true, so you don’t need to specify recursiveHash in this case. Default value: false. executable (Boolean; optional) If true, sets the executable bit on the downloaded file. Default value: false. downloadToTemp (Boolean; optional) If true, saves the downloaded file to a temporary location instead of the expected Nix store location. This is useful when used in conjunction with postFetch attribute, otherwise fetchurl will not produce any meaningful output. The location of the downloaded file will be set in the $downloadedFile variable, which should be used by the script in the postFetch attribute. See Example 300 to understand how to work with this attribute. Default value: false. postFetch (String; optional) Script executed after the file has been downloaded successfully, and before fetchurl finishes running. Useful for post-processing, to check or transform the file in some way. See Example 300 to understand how to work with this attribute. Default value: "". netrcPhase (String or Null; optional) Script executed to create a netrc(5) file to be used with curl(1). The script should create the netrc file (note that it does not begin with a “.”) in the directory it’s currently running in ($PWD). The script is executed during the setup done by fetchurl before it runs any of its code to download the specified content.

#### Note

If specified, fetchurl will automatically alter its invocation of curl(1) to use the netrc file, so you don’t need to add anything to curlOpts or curlOptsList.

#### Caution

Since netrcPhase needs to be specified in your source Nix code, any secrets that you put directly in it will be world-readable by design (both in your source code, and when the derivation gets created in the Nix store). If you want to avoid this behaviour, see the documentation of netrcImpureEnvVars for an alternative way of dealing with these secrets. Default value: null. netrcImpureEnvVars (List of String; optional) If specified, fetchurl will add these environment variable names to the list of impure environment variables, which will be passed from the environment of the calling user to the builder running the fetchurl code. This is useful when used with netrcPhase to hide any secrets that are used in it, because the script in netrcPhase only needs to reference the environment variables with the secrets in them instead. However, note that these are called impure variables for a reason: the environment that starts the build needs to have these variables declared for everything to work properly, which means that additional setup is required outside what Nix controls. Default value: []. curlOpts (String; optional) If specified, this value will be appended to the invocation of curl(1) when downloading the URL(s) given to fetchurl. Multiple arguments can be separated by spaces normally, but values with whitespaces will be interpreted as multiple arguments (instead of a single value), even if the value is escaped. See curlOptsList for a way to pass values with whitespaces in them. Default value: "". curlOptsList (List of String; optional) If specified, each element of this list will be passed as an argument to the invocation of curl(1) when downloading the URL(s) given to fetchurl. This allows passing values that contain spaces, with no escaping needed. Default value: []. showURLs (Boolean; optional) If set to true, this will stop fetchurl from downloading anything at all. Instead, it will output a list of all the URLs it would’ve used to download the content (after resolving mirror:// URLs, for example). This is useful for debugging. Default value: false. meta (Attribute Set; optional) Specifies any meta-attributes for the derivation returned by fetchurl. Default value: {}. passthru (Attribute Set; optional) Specifies any extra passthru attributes for the derivation returned by fetchurl. Note that fetchurl defines passthru attributes of its own. Attributes specified in passthru can override the default attributes returned by fetchurl. Default value: {}. preferLocalBuild (Boolean; optional) This is the same attribute as defined in the Nix manual. It is true by default because making a remote machine download the content just duplicates network traffic (since the local machine might download the results from the derivation anyway), but this could be useful in cases where network access is restricted on local machines. Default value: true. nativeBuildInputs (List of Attribute Set; optional) Additional packages needed to download the content. This is useful if you need extra packages for postFetch or netrcPhase, for example. Has the same semantics as in the section called “nativeBuildInputs”. See Example 300 to understand how this can be used with postFetch. Default value: [].

#### Passthru outputs

fetchurl also defines its own passthru attributes: url (String) The same url attribute passed in the argument to fetchurl.

#### Examples

Example 298. Using fetchurl to download a file The following package downloads a small file from a URL and shows the most common way to use fetchurl: { fetchurl }: fetchurl { url = "https://raw.githubusercontent.com/NixOS/nixpkgs/23.11/.version"; hash = "sha256-BZqI7r0MNP29yGH5+yW2tjU9OOpOCEvwWKrWCv5CQ0I="; } After building the package, the file will be downloaded and placed into the Nix store: $ nix-build (output removed for clarity) /nix/store/4g9y3x851wqrvim4zcz5x2v3zivmsq8n-version $ cat /nix/store/4g9y3x851wqrvim4zcz5x2v3zivmsq8n-version 23.11 Example 299. Using fetchurl to download a file with multiple possible URLs The following package adapts Example 298 to use multiple URLs. The first URL was crafted to intentionally return an error to illustrate how fetchurl will try multiple URLs until it finds one that works (or all URLs fail). { fetchurl }: fetchurl { urls = [ "https://raw.githubusercontent.com/NixOS/nixpkgs/23.11/does-not-exist" "https://raw.githubusercontent.com/NixOS/nixpkgs/23.11/.version" ]; hash = "sha256-BZqI7r0MNP29yGH5+yW2tjU9OOpOCEvwWKrWCv5CQ0I="; } After building the package, both URLs will be used to download the file: $ nix-build (some output removed for clarity) trying https://raw.githubusercontent.com/NixOS/nixpkgs/23.11/does-not-exist (some output removed for clarity) curl: (22) The requested URL returned error: 404 trying https://raw.githubusercontent.com/NixOS/nixpkgs/23.11/.version (some output removed for clarity) /nix/store/n9asny31z32q7sdw6a8r1gllrsfy53kl-does-not-exist $ cat /nix/store/n9asny31z32q7sdw6a8r1gllrsfy53kl-does-not-exist 23.11 However, note that the name of the file was derived from the first URL (this is further explained in the fetchurl overview). To ensure the result will have the same name regardless of which URLs are used, we can modify the package: { fetchurl }: fetchurl { name = "nixpkgs-version"; urls = [ "https://raw.githubusercontent.com/NixOS/nixpkgs/23.11/does-not-exist" "https://raw.githubusercontent.com/NixOS/nixpkgs/23.11/.version" ]; hash = "sha256-BZqI7r0MNP29yGH5+yW2tjU9OOpOCEvwWKrWCv5CQ0I="; } After building the package, the result will have the name we specified: $ nix-build (output removed for clarity) /nix/store/zczb6wl3al6jm9sm5h3pr6nqn0i5ji9z-nixpkgs-version Example 300. Manipulating the content downloaded by fetchurl It might be useful to manipulate the content downloaded by fetchurl directly in its derivation. In this example, we’ll adapt Example 298 to append the result of running the hello package to the contents we download, purely to illustrate how to manipulate the content. { fetchurl, hello, lib, }: fetchurl { url = "https://raw.githubusercontent.com/NixOS/nixpkgs/23.11/.version"; nativeBuildInputs = [ hello ]; downloadToTemp = true; postFetch = '' hello >> "$downloadedFile" mv "$downloadedFile" "$out" ''; hash = "sha256-ceooQQYmDx5+0nfg40uU3NNI2yKrixP7HZ/xLZUNv+w="; } After building the package, the resulting file will have “Hello, world!” appended to it: $ nix-build (output removed for clarity) /nix/store/ifi6pp7q0ag5h7c5v9h1c1c7bhd10c7f-version $ cat /nix/store/ifi6pp7q0ag5h7c5v9h1c1c7bhd10c7f-version 23.11 Hello, world! Note that the hash specified in the package is different than the hash specified in Example 298, because the contents of the output have changed (even though the actual file that was downloaded is the same). See the section called “Caveats” for more details on how to work with the hash attribute when the output changes.

### fetchzip

Inputs Examples Returns a fixed-output derivation which downloads an archive from a given URL and decompresses it. Despite its name, fetchzip is not limited to .zip files but can also be used with various compressed tarball formats by default. This can extended by specifying additional attributes, see Example 302 to understand how to do that.

#### Inputs

fetchzip requires an attribute set, and most attributes are passed to the underlying call to fetchurl. The attributes below are treated differently by fetchzip when compared to what fetchurl expects: name (String; optional) Works as defined in fetchurl, but has a different default value than fetchurl. Default value: "source". nativeBuildInputs (List of Attribute Set; optional) Works as defined in fetchurl, but it is also augmented by fetchzip to include packages to deal with additional archives (such as .zip). Default value: []. postFetch (String; optional) Works as defined in fetchurl, but it is also augmented with the code needed to make fetchzip work.

#### Caution

It is only safe to modify files in $out in postFetch. Consult the implementation of fetchzip for anything more involved. Default value: "". stripRoot (Boolean; optional) If true, the decompressed contents are moved one level up the directory tree. This is useful for archives that decompress into a single directory which commonly includes some values that change with time, such as version numbers. When this is the case (and stripRoot is true), fetchzip will remove this directory and make the decompressed contents available in the top-level directory. Example 301 shows what this attribute does. This attribute is not passed through to fetchurl. Default value: true. extension (String or Null; optional) If set, the archive downloaded by fetchzip will be renamed to a filename with the extension specified in this attribute. This is useful when making fetchzip support additional types of archives, because the implementation may use the extension of an archive to determine whether they can decompress it. If the URL you’re using to download the contents doesn’t end with the extension associated with the archive, use this attribute to fix the filename of the archive. This attribute is not passed through to fetchurl. Default value: null. recursiveHash (Boolean; optional) Works as defined in fetchurl, but its default value is different than for fetchurl. Default value: true. downloadToTemp (Boolean; optional) Works as defined in fetchurl, but its default value is different than for fetchurl. Default value: true. extraPostFetch DEPRECATED This attribute is deprecated. Please use postFetch instead. This attribute is not passed through to fetchurl.

#### Examples

Example 301. Using fetchzip to output contents directly The following recipe shows how to use fetchzip to decompress a .tar.gz archive: { fetchzip }: fetchzip { url = "https://github.com/NixOS/patchelf/releases/download/0.18.0/patchelf-0.18.0.tar.gz"; hash = "sha256-3ABYlME9R8klcpJ7MQpyFEFwHmxDDEzIYBqu/CpDYmg="; } This archive has all its contents in a directory named patchelf-0.18.0. This means that after decompressing, you’d have to enter this directory to see the contents of the archive. However, fetchzip makes this easier through the attribute stripRoot (enabled by default). After building the recipe, the derivation output will show all the files in the archive at the top level: $ nix-build (output removed for clarity) /nix/store/1b7h3fvmgrcddvs0m299hnqxlgli1yjw-source $ ls /nix/store/1b7h3fvmgrcddvs0m299hnqxlgli1yjw-source aclocal.m4 completions configure.ac m4 Makefile.in patchelf.spec README.md tests build-aux configure COPYING Makefile.am patchelf.1 patchelf.spec.in src version If stripRoot is set to false, the derivation output will be the decompressed archive as-is: { fetchzip }: fetchzip { url = "https://github.com/NixOS/patchelf/releases/download/0.18.0/patchelf-0.18.0.tar.gz"; hash = "sha256-uv3FuKE4DqpHT3yfE0qcnq0gYjDNQNKZEZt2+PUAneg="; stripRoot = false; }

#### Caution

The hash changed! Whenever changing attributes of a Nixpkgs fetcher, remember to invalidate the hash, otherwise you won’t get the results you’re expecting! After building the recipe: $ nix-build (output removed for clarity) /nix/store/2hy5bxw7xgbgxkn0i4x6hjr8w3dbx16c-source $ ls /nix/store/2hy5bxw7xgbgxkn0i4x6hjr8w3dbx16c-source patchelf-0.18.0 Example 302. Using fetchzip to decompress a .rar file The unrar package provides a setup hook to decompress .rar archives during the unpack phase, which can be used with fetchzip to decompress those archives: { fetchzip, unrar }: fetchzip { url = "https://archive.org/download/SpaceCadet_Plus95/Space_Cadet.rar"; hash = "sha256-fC+zsR8BY6vXpUkVd6i1jF0IZZxVKVvNi6VWCKT+pA4="; stripRoot = false; nativeBuildInputs = [ unrar ]; } Since this particular .rar file doesn’t put its contents in a directory inside the archive, stripRoot must be set to false. After building the recipe, the derivation output will show the decompressed files: $ nix-build (output removed for clarity) /nix/store/zpn7knxfva6rfjja2gbb4p3l9w1f0d36-source $ ls /nix/store/zpn7knxfva6rfjja2gbb4p3l9w1f0d36-source FONT.DAT PINBALL.DAT PINBALL.EXE PINBALL2.MID TABLE.BMP WMCONFIG.EXE MSCREATE.DIR PINBALL.DOC PINBALL.MID Sounds WAVEMIX.INF

### fetchpatch

fetchpatch works very similarly to fetchurl with the same arguments expected. It expects patch files as a source and performs normalization on them before computing the checksum. For example, it will remove comments or other unstable parts that are sometimes added by version control systems and can change over time. relative: Similar to using git-diff’s --relative flag, only keep changes inside the specified directory, making paths relative to it. stripLen: Remove the first stripLen components of pathnames in the patch. decode: Pipe the downloaded data through this command before processing it as a patch. extraPrefix: Prefix pathnames by this string. excludes: Exclude files matching these patterns (applies after the above arguments). includes: Include only files matching these patterns (applies after the above arguments). hunks: Choose the specified hunks from each file (applies after the above arguments). Note that you can specify a list of numbers or ranges of numbers (for example, [ 1 2 3 4 ], [ "1-4" ], [ "-4" ], or [ "1-" ] would all be the same effective range in a patch applying 4 hunks to a single file). revert: Revert the patch. Note that because the checksum is computed after applying these effects, using or modifying these arguments will have no effect unless the hash argument is changed as well. Most other fetchers return a directory rather than a single file.

### fetchDebianPatch

A wrapper around fetchpatch, which takes: patch and hash: the patch’s filename, and its hash after normalization by fetchpatch ; pname: the Debian source package’s name ; version: the upstream version number ; debianRevision: the Debian revision number if applicable ; the area of the Debian archive: main (default), contrib, or non-free. Here is an example of fetchDebianPatch in action: { lib, fetchDebianPatch, buildPythonPackage, }: buildPythonPackage rec { pname = "pysimplesoap"; version = "1.16.2"; src = <...>; patches = [ (fetchDebianPatch { inherit pname version; debianRevision = "5"; patch = "Add-quotes-to-SOAPAction-header-in-SoapClient.patch"; hash = "sha256-xA8Wnrpr31H8wy3zHSNfezFNjUJt1HbSXn3qUMzeKc0="; }) ]; # ... } Patches are fetched from sources.debian.org, and so must come from a package version that was uploaded to the Debian archive. Packages may be removed from there once that specific version isn’t in any suite anymore (stable, testing, unstable, etc.), so maintainers should use copy-tarballs.pl to archive the patch if it needs to be available longer-term.

### fetchsvn

Used with Subversion. Expects url to a Subversion directory, rev, and hash.

### fetchgit

Used with Git. Expects url to a Git repo, rev, and hash. rev in this case can be full the git commit id (SHA1 hash) or a tag name like refs/tags/v1.0. If you want to fetch a tag you should pass the tag parameter instead of rev which has the same effect as setting rev = "refs/tags"/${version}". This is safer than just setting rev = version w.r.t. possible branch and tag name conflicts. Additionally, the following optional arguments can be given: fetchSubmodules (Boolean) Whether to also fetch the submodules of a repository. fetchLFS (Boolean) Whether to fetch LFS objects. preFetch (String) Shell code to be executed before the repository has been fetched, to allow changing the environment the fetcher runs in. postFetch (String) Shell code executed after the repository has been fetched successfully. This can do things like check or transform the file. leaveDotGit (Boolean) Whether the .git directory of the clone should not be removed after checkout. Be warned though that the git repository format is not stable and this flag is therefore not suitable for actual use by itself. Only use this for testing purposes or in conjunction with removing the .git directory in postFetch. deepClone (Boolean) Clone the entire repository as opposing to just creating a shallow clone. This implies leaveDotGit. fetchTags (Boolean) Whether to fetch all tags from the remote repository. This is useful when the build process needs to run git describe or other commands that require tag information to be available. This parameter implies leaveDotGit, as tags are stored in the .git directory. sparseCheckout (List of String) Prevent git from fetching unnecessary blobs from server. This is useful if only parts of the repository are needed. Example 303. Use sparseCheckout to only include some directories: { stdenv, fetchgit }: stdenv.mkDerivation { name = "hello"; src = fetchgit { url = "https://..."; sparseCheckout = [ "directory/to/be/included" "another/directory" ]; hash = "sha256-AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA="; }; } See git sparse-checkout for more information. rootDir (String) When not empty, copy only contents of the subdirectory of the repository to the result. Automatically sets sparseCheckout and nonConeMode to avoid checking out any extra pieces. Incompatible with leaveDotGit. Some additional parameters for niche use-cases can be found listed in the function parameters in the declaration of fetchgit: pkgs/build-support/fetchgit/default.nix. Future parameters additions might also happen without immediately being documented here.

### fetchfossil

Used with Fossil. Expects url to a Fossil archive, rev, and hash.

### fetchcvs

Used with CVS. Expects cvsRoot, tag, and hash.

### fetchhg

Used with Mercurial. Expects url, rev, hash, overridable with <pkg>.overrideAttrs. A number of fetcher functions wrap part of fetchurl and fetchzip. They are mainly convenience functions intended for commonly used destinations of source code in Nixpkgs. These wrapper fetchers are listed below.

### fetchFromGitea, fetchFromForgejo and fetchFromCodeberg

fetchFromGitea, also aliased to fetchFromForgejo, expects five arguments. domain is the Gitea/Forgejo server name. owner is a string corresponding to the user or organization that controls this repository. repo corresponds to the name of the software repository. These are located at the top of every Gitea/Forgejo HTML page as owner/repo. rev corresponds to the Git commit hash or tag (e.g v1.0) that will be downloaded from Git. Finally, hash corresponds to the hash of the extracted directory. Again, other hash algorithms are also available but hash is currently preferred. As <codeberg.org> is currently the most popular public Forgejo server, the fetchFromCodeberg fetcher is also available, which pre-fills the domain attribute.

### fetchFromGitHub

fetchFromGitHub expects four arguments. owner is a string corresponding to the GitHub user or organization that controls this repository. repo corresponds to the name of the software repository. These are located at the top of every GitHub HTML page as owner/repo. rev corresponds to the Git commit hash or tag (e.g v1.0) that will be downloaded from Git. If you need to fetch a tag however, you should prefer to use the tag parameter which achieves this in a safer way with less boilerplate. Finally, hash corresponds to the hash of the extracted directory. Again, other hash algorithms are also available, but hash is currently preferred. To use a different GitHub instance, use githubBase (defaults to "github.com"). By default, fetchFromGitHub uses fetchzip to download GitHub’s source archive for the specified revision. However, fetchFromGitHub will automatically switch to using fetchgit in any of these cases: forceFetchGit, leaveDotGit, deepClone, fetchLFS, or fetchSubmodules are set to true sparseCheckout contains any entries (is a non-empty list) rootDir is set to a non-empty string When fetchgit is used, refer to the fetchgit section for documentation of its available options.

### fetchFromGitLab

This is used with GitLab repositories. It behaves similarly to fetchFromGitHub, and expects owner, repo, rev, and hash. To use a specific GitLab instance, use domain (defaults to "gitlab.com").

### fetchFromGitiles

This is used with Gitiles repositories. The arguments expected are similar to fetchgit.

### fetchFromBitbucket

Used for repositories hosted on Bitbucket ("bitbucket.org") owned by the Australian-based Atlassian Corporation. It requires an owner and repo argument which are both strings that reference the workspace ID and repository name hosted on Bitbucket cloud as well as either a tag or rev argument. By default, fetchFromBitbucket will attempt to download a commit snapshot tarball at the specified tag or rev at https://bitbucket.org/<owner>/<repo>/get/<tag-or-rev>.tar.gz However, fetchFromBitbucket will automatically switch to using fetchgit and fetch from https://bitbucket.org/<owner>/<repo>.git in any of these cases: forceFetchGit, leaveDotGit, deepClone, fetchLFS, or fetchSubmodules are set to true sparseCheckout contains any entries (is a non-empty list) rootDir is set to a non-empty string When fetchgit is used, refer to the fetchgit section for documentation of its available options.

### fetchFromSavannah

This is used with Savannah repositories. The arguments expected are very similar to fetchFromGitHub above.

### fetchFromRepoOrCz

This is used with repo.or.cz repositories. The arguments expected are very similar to fetchFromGitHub above.

### fetchFromSourcehut

This is used with sourcehut repositories. Similar to fetchFromGitHub above, it expects owner, repo, rev and hash, but don’t forget the tilde (~) in front of the username! Expected arguments also include vc (“git” (default) or “hg”), domain and fetchSubmodules. If fetchSubmodules is true, fetchFromSourcehut uses fetchgit or fetchhg with fetchSubmodules or fetchSubrepos set to true, respectively. Otherwise, the fetcher uses fetchzip.

### fetchFromRadicle

This is used with Radicle repositories. The arguments expected are similar to fetchgit. Requires a seed argument (e.g. seed.radicle.xyz or rosa.radicle.xyz) and a repo argument (the repository id without the rad: prefix). Also accepts an optional node argument which contains the id of the node from which to fetch the specified ref. If node is null (the default), a canonical ref is fetched instead. fetchFromRadicle { seed = "seed.radicle.xyz"; repo = "z3gqcJUoA1n9HaHKufZs5FCSGazv5"; # heartwood tag = "releases/1.3.0"; hash = "sha256-4o88BWKGGOjCIQy7anvzbA/kPOO+ZsLMzXJhE61odjw="; }

### fetchRadiclePatch

fetchRadiclePatch works very similarly to fetchFromRadicle with almost the same arguments expected. However, instead of a rev or tag argument, a revision argument is expected, which contains the full revision id of the Radicle patch to fetch. fetchRadiclePatch { seed = "rosa.radicle.xyz"; repo = "z4V1sjrXqjvFdnCUbxPFqd5p4DtH5"; # radicle-explorer revision = "d97d872386c70607beda2fb3fc2e60449e0f4ce4"; # patch: d77e064 hash = "sha256-ttnNqj0lhlSP6BGzEhhUOejKkkPruM9yMwA5p9Di4bk="; }

### requireFile

requireFile allows requesting files that cannot be fetched automatically, but whose content is known. This is a useful last-resort workaround for license restrictions that prohibit redistribution, or for downloads that are only accessible after authenticating interactively in a browser. If the requested file is present in the Nix store, the resulting derivation will not be built, because its expected output is already available. Otherwise, the builder will run, but fail with a message explaining to the user how to provide the file. The following code, for example: requireFile { name = "jdk-${version}_linux-x64_bin.tar.gz"; url = "https://www.oracle.com/java/technologies/javase-jdk11-downloads.html"; hash = "sha256-lL00+F7jjT71nlKJ7HRQuUQ7kkxVYlZh//5msD8sjeI="; } results in this error message: *** Unfortunately, we cannot download file jdk-11.0.10_linux-x64_bin.tar.gz automatically. Please go to https://www.oracle.com/java/technologies/javase-jdk11-downloads.html to download it yourself, and add it to the Nix store using either nix-store --add-fixed sha256 jdk-11.0.10_linux-x64_bin.tar.gz or nix-prefetch-url --type sha256 file:///path/to/jdk-11.0.10_linux-x64_bin.tar.gz *** This function should only be used by non-redistributable software with an unfree license that we need to require the user to download manually. It produces packages that cannot be built automatically.

### fetchtorrent

Parameters fetchtorrent expects two arguments. url which can either be a Magnet URI (Magnet Link) such as magnet:?xt=urn:btih:dd8255ecdc7ca55fb0bbf81323d87062db1f6d1c or an HTTP URL pointing to a .torrent file. It can also take a config argument which will craft a settings.json configuration file and give it to transmission, the underlying program that is performing the fetch. The available config options for transmission can be found here { fetchtorrent }: fetchtorrent { config = { peer-limit-global = 100; }; url = "magnet:?xt=urn:btih:dd8255ecdc7ca55fb0bbf81323d87062db1f6d1c"; hash = ""; }

#### Parameters

url: Magnet URI (Magnet Link) such as magnet:?xt=urn:btih:dd8255ecdc7ca55fb0bbf81323d87062db1f6d1c or an HTTP URL pointing to a .torrent file. backend: Which bittorrent program to use. Default: "transmission". Valid values are "rqbit" or "transmission". These are the two most suitable torrent clients for fetching in a fixed-output derivation at the time of writing, as they can be easily exited after usage. rqbit is written in Rust and has a smaller closure size than transmission, and the performance and peer discovery properties differs between these clients, requiring experimentation to decide upon which is the best. config: When using transmission as the backend, a json configuration can be supplied to transmission. Refer to the upstream documentation for information on how to configure.

### Trivial build helpers

Table of Contents runCommandWith runCommand and runCommandCC Writing text files concatTextFile, concatText, concatScript writeShellApplication symlinkJoin writeClosure writeDirectReferencesToFile Nixpkgs provides a variety of wrapper functions that help build commonly useful derivations. Like stdenv.mkDerivation, each of these build helpers creates a derivation, but the arguments passed are different (usually simpler) from those required by stdenv.mkDerivation.

### runCommandWith

Type Inputs The function runCommandWith returns a derivation built using the specified command(s), in a specified environment. It is the underlying base function of all runCommand* variants. The general behavior is controlled via a single attribute set passed as the first argument, and allows specifying stdenv freely. The following runCommand* variants exist: runCommand, runCommandCC, and runCommandLocal.

#### Type

runCommandWith :: { name :: name; stdenv? :: Derivation; runLocal? :: Bool; derivationArgs? :: { ... }; } -> String -> Derivation

#### Inputs

name (String) The derivation’s name, which Nix will append to the store path; see mkDerivation. runLocal (Boolean) If set to true this forces the derivation to be built locally, not using substitutes nor remote builds. This is intended for very cheap commands (<1s execution time) which can be sped up by avoiding the network round-trip(s). Its effect is to set preferLocalBuild = true and allowSubstitutes = false.

#### Note

This prevents the use of substituters, so only set runLocal (or use runCommandLocal) when certain the user will always have a builder for the system of the derivation. This should be true for most trivial use cases (e.g., just copying some files to a different location or adding symlinks) because there the system is usually the same as builtins.currentSystem. stdenv (Derivation) The standard environment to use, defaulting to pkgs.stdenv derivationArgs (Attribute set) Additional arguments for mkDerivation. buildCommand (String) Shell commands to run in the derivation builder.

#### Note

You have to create a file or directory $out for Nix to be able to run the builder successfully. Example 304. Invocation of runCommandWith runCommandWith { name = "example"; derivationArgs.nativeBuildInputs = [ cowsay ]; } '' cowsay > $out <<EOMOO 'runCommandWith' is a bit cumbersome, so we have more ergonomic wrappers. EOMOO ''

### runCommand and runCommandCC

Type Input The function runCommand returns a derivation built using the specified command(s), in the stdenvNoCC environment. runCommandCC is similar but uses the default compiler environment. To minimize dependencies, runCommandCC should only be used when the build command needs a C compiler. runCommandLocal is also similar to runCommand, but forces the derivation to be built locally. See the note on runCommandWith about runLocal.

#### Type

runCommand :: String -> AttrSet -> String -> Derivation runCommandCC :: String -> AttrSet -> String -> Derivation runCommandLocal :: String -> AttrSet -> String -> Derivation

#### Input

While the type signature(s) differ from runCommandWith, individual arguments with the same name will have the same type and meaning: name (String) The derivation’s name derivationArgs (Attribute set) Additional parameters passed to [mkDerivation] buildCommand (String) The command(s) run to build the derivation. Example 305. Invocation of runCommand runCommand "my-example" { } '' echo My example command is running mkdir $out echo I can write data to the Nix store > $out/message echo I can also run basic commands like: echo ls ls echo whoami whoami echo date date ''

#### Note

runCommand name derivationArgs buildCommand is equivalent to runCommandWith { inherit name derivationArgs; stdenv = stdenvNoCC; } buildCommand Likewise, runCommandCC name derivationArgs buildCommand is equivalent to runCommandWith { inherit name derivationArgs; } buildCommand
