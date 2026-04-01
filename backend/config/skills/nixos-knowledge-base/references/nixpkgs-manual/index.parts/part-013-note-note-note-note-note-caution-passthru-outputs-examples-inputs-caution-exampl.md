---
title: "Nixpkgs Reference Manual"
source: index.html
---
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

### Writing text files

makeDesktopItem writeTextFile writeText writeTextDir writeScript writeScriptBin writeShellScript writeShellScriptBin Nixpkgs provides the following functions for producing derivations which write text files or executable scripts into the Nix store. They are useful for creating files from Nix expression, and are all implemented as convenience wrappers around writeTextFile. Each of these functions will cause a derivation to be produced. When you coerce the result of each of these functions to a string with string interpolation or toString, it will evaluate to the store path of this derivation.

#### Note

Some of these functions will put the resulting files within a directory inside the derivation output. If you need to refer to the resulting files somewhere else in a Nix expression, append their path to the derivation’s store path. For example, if the file destination is a directory: { my-file = writeTextFile { name = "my-file"; text = '' Contents of File ''; destination = "/share/my-file"; }; } Remember to append “/share/my-file” to the resulting store path when using it elsewhere: writeShellScript "evaluate-my-file.sh" '' cat ${my-file}/share/my-file ''

#### makeDesktopItem

Write an XDG desktop file to the Nix store. This function is usually used to add desktop items to a package through the copyDesktopItems hook. makeDesktopItem adheres to version 1.4 of the specification.

##### Inputs

makeDesktopItem takes an attribute set that accepts most values from the XDG specification. All recognised keys from the specification are supported with the exception of the “Hidden” field. The keys are converted into camelCase format, but correspond 1:1 to their equivalent in the specification: genericName, noDisplay, comment, icon, onlyShowIn, notShowIn, dbusActivatable, tryExec, exec, path, terminal, mimeTypes, categories, implements, keywords, startupNotify, startupWMClass, url, prefersNonDefaultGPU. The “Version” field is hardcoded to the version makeDesktopItem currently adheres to. The following fields are either required, are of a different type than in the specification, carry specific default values, or are additional fields supported by makeDesktopItem: name (String) The name of the desktop file in the Nix store. type (String; optional) Default value: "Application" desktopName (String) Corresponds to the “Name” field of the specification. actions (List of Attribute set; optional) A list of attribute sets {name, exec?, icon?} extraConfig (Attribute set; optional) Additional key/value pairs to be added verbatim to the desktop file. Attributes need to be prefixed with ‘X-’.

##### Examples

Example 306. Usage 1 of makeDesktopItem Write a desktop file /nix/store/<store path>/my-program.desktop to the Nix store. { makeDesktopItem }: makeDesktopItem { name = "my-program"; desktopName = "My Program"; genericName = "Video Player"; noDisplay = false; comment = "Cool video player"; icon = "/path/to/icon"; onlyShowIn = [ "KDE" ]; dbusActivatable = true; tryExec = "my-program"; exec = "my-program --someflag"; path = "/some/working/path"; terminal = false; actions.example = { name = "New Window"; exec = "my-program --new-window"; icon = "/some/icon"; }; mimeTypes = [ "video/mp4" ]; categories = [ "Utility" ]; implements = [ "org.my-program" ]; keywords = [ "Video" "Player" ]; startupNotify = false; startupWMClass = "MyProgram"; prefersNonDefaultGPU = false; extraConfig.X-SomeExtension = "somevalue"; } Example 307. Usage 2 of makeDesktopItem Override the hello package to add a desktop item. { copyDesktopItems, hello, makeDesktopItem, }: hello.overrideAttrs { nativeBuildInputs = [ copyDesktopItems ]; desktopItems = [ (makeDesktopItem { name = "hello"; desktopName = "Hello"; exec = "hello"; }) ]; }

#### writeTextFile

Write a text file to the Nix store. writeTextFile takes an attribute set with the following possible attributes: name (String) Corresponds to the name used in the Nix store path identifier. text (String) The contents of the file. executable (Bool, optional) Make this file have the executable bit set. Default: false destination (String, optional) A subpath under the derivation’s output path into which to put the file. Subdirectories are created automatically when the derivation is realised. By default, the store path itself will be a file containing the text contents. Default: "" checkPhase (String, optional) Commands to run after generating the file. Default: "" meta (Attribute set, optional) Additional metadata for the derivation. Default: {} allowSubstitutes (Bool, optional) Whether to allow substituting from a binary cache. Passed through to allowSubstitutes of the underlying call to derivation. It defaults to false, as running the derivation’s simple builder executable locally is assumed to be faster than network operations. Set it to true if the checkPhase step is expensive. Default: false preferLocalBuild (Bool, optional) Whether to prefer building locally, even if faster remote build machines are available. Passed through to preferLocalBuild of the underlying call to derivation. It defaults to true for the same reason allowSubstitutes defaults to false. Default: true derivationArgs (Attribute set, optional) Extra arguments to pass to the underlying call to stdenv.mkDerivation. Default: {} The resulting store path will include some variation of the name, and it will be a file unless destination is used, in which case it will be a directory. Example 308. Usage 1 of writeTextFile Write my-file to /nix/store/<store path>/some/subpath/my-cool-script, making it executable. Also run a check on the resulting file in a checkPhase, and supply values for the less-used options. writeTextFile { name = "my-cool-script"; text = '' #!/bin/sh echo "This is my cool script!" ''; executable = true; destination = "/some/subpath/my-cool-script"; checkPhase = '' ${pkgs.shellcheck}/bin/shellcheck $out/some/subpath/my-cool-script ''; meta = { license = pkgs.lib.licenses.cc0; }; allowSubstitutes = true; preferLocalBuild = false; } Example 309. Usage 2 of writeTextFile Write the string Contents of File to /nix/store/<store path>. See also the the section called “writeText” helper function. writeTextFile { name = "my-file"; text = '' Contents of File ''; } Example 310. Usage 3 of writeTextFile Write an executable script my-script to /nix/store/<store path>/bin/my-script. See also the the section called “writeScriptBin” helper function. writeTextFile { name = "my-script"; text = '' echo "hi" ''; executable = true; destination = "/bin/my-script"; }

#### writeText

Write a text file to the Nix store writeText takes the following arguments: a string. name (String) The name used in the Nix store path. text (String) The contents of the file. The store path will include the name, and it will be a file. Example 311. Usage of writeText Write the string Contents of File to /nix/store/<store path>: writeText "my-file" '' Contents of File '' This is equivalent to: writeTextFile { name = "my-file"; text = '' Contents of File ''; }

#### writeTextDir

Write a text file within a subdirectory of the Nix store. writeTextDir takes the following arguments: path (String) The destination within the Nix store path under which to create the file. text (String) The contents of the file. The store path will be a directory. Example 312. Usage of writeTextDir Write the string Contents of File to /nix/store/<store path>/share/my-file: writeTextDir "share/my-file" '' Contents of File '' This is equivalent to: writeTextFile { name = "my-file"; text = '' Contents of File ''; destination = "/share/my-file"; }

#### writeScript

Write an executable script file to the Nix store. writeScript takes the following arguments: name (String) The name used in the Nix store path. text (String) The contents of the file. The created file is marked as executable. The store path will include the name, and it will be a file. Example 313. Usage of writeScript Write the string Contents of File to /nix/store/<store path> and make the file executable. writeScript "my-file" '' Contents of File '' This is equivalent to: writeTextFile { name = "my-file"; text = '' Contents of File ''; executable = true; }

#### writeScriptBin

Write a script within a bin subdirectory of a directory in the Nix store. This is for consistency with the convention of software packages placing executables under bin. writeScriptBin takes the following arguments: name (String) The name used in the Nix store path and within the file created under the store path. text (String) The contents of the file. The created file is marked as executable. The file’s contents will be put into /nix/store/<store path>/bin/<name>. The store path will include the name, and it will be a directory. Example 314. Usage of writeScriptBin writeScriptBin "my-script" '' echo "hi" '' This is equivalent to: writeTextFile { name = "my-script"; text = '' echo "hi" ''; executable = true; destination = "/bin/my-script"; }

#### writeShellScript

Write a Bash script to the store. writeShellScript takes the following arguments: name (String) The name used in the Nix store path. text (String) The contents of the file. The created file is marked as executable. The store path will include the name, and it will be a file. This function is almost exactly like the section called “writeScript”, except that it prepends to the file a shebang line that points to the version of Bash used in Nixpkgs. Example 315. Usage of writeShellScript writeShellScript "my-script" '' echo "hi" '' This is equivalent to: writeTextFile { name = "my-script"; text = '' #! ${pkgs.runtimeShell} echo "hi" ''; executable = true; }

#### writeShellScriptBin

Write a Bash script to a “bin” subdirectory of a directory in the Nix store. writeShellScriptBin takes the following arguments: name (String) The name used in the Nix store path and within the file generated under the store path. text (String) The contents of the file. The file’s contents will be put into /nix/store/<store path>/bin/<name>. The store path will include the name, and it will be a directory. This function is a combination of the section called “writeShellScript” and the section called “writeScriptBin”. Example 316. Usage of writeShellScriptBin writeShellScriptBin "my-script" '' echo "hi" '' This is equivalent to: writeTextFile { name = "my-script"; text = '' #! ${pkgs.runtimeShell} echo "hi" ''; executable = true; destination = "/bin/my-script"; }

### concatTextFile, concatText, concatScript

These functions concatenate files to the Nix store in a single file. This is useful for configuration files structured in lines of text. concatTextFile takes an attribute set and expects two arguments, name and files. name corresponds to the name used in the Nix store path. files will be the files to be concatenated. You can also set executable to true to make this file have the executable bit set. concatText andconcatScript are simple wrappers over concatTextFile. Here are a few examples: # Writes my-file to /nix/store/<store path> concatTextFile { name = "my-file"; files = [ drv1 "${drv2}/path/to/file" ]; } # See also the `concatText` helper function below. # Writes executable my-file to /nix/store/<store path>/bin/my-file concatTextFile { name = "my-file"; files = [ drv1 "${drv2}/path/to/file" ]; executable = true; destination = "/bin/my-file"; } # Writes contents of files to /nix/store/<store path> concatText "my-file" [ file1 file2 ] # Writes contents of files to /nix/store/<store path> concatScript "my-file" [ file1 file2 ]

### writeShellApplication

writeShellApplication is similar to writeShellScriptBin and writeScriptBin but supports runtime dependencies with runtimeInputs. Writes an executable shell script to /nix/store/<store path>/bin/<name> and checks its syntax with shellcheck and the bash’s -n option. Some basic Bash options are set by default (errexit, nounset, and pipefail), but can be overridden with bashOptions. Extra arguments may be passed to stdenv.mkDerivation by setting derivationArgs; note that variables set in this manner will be set when the shell script is built, not when it’s run. Runtime environment variables can be set with the runtimeEnv argument. For example, the following shell application can refer to curl directly, rather than needing to write ${curl}/bin/curl: writeShellApplication { name = "show-nixos-org"; runtimeInputs = [ curl w3m ]; text = '' curl -s 'https://nixos.org' | w3m -dump -T text/html ''; }

### symlinkJoin

This can be used to put many derivations into the same directory structure. It works by creating a new derivation and adding symlinks to each of the paths listed. It expects two arguments, name, and paths. name (or alternatively pname and version) is the name used in the Nix store path for the created derivation. paths is a list of paths that will be symlinked. These paths can be to Nix store derivations or any other subdirectory contained within. Here is an example: # adds symlinks of hello and stack to current build and prints "links added" symlinkJoin { name = "myexample"; paths = [ pkgs.hello pkgs.stack ]; postBuild = "echo links added"; } This creates a derivation with a directory structure like the following: /nix/store/sglsr5g079a5235hy29da3mq3hv8sjmm-myexample |-- bin | |-- hello -> /nix/store/qy93dp4a3rqyn2mz63fbxjg228hffwyw-hello-2.10/bin/hello | `-- stack -> /nix/store/6lzdpxshx78281vy056lbk553ijsdr44-stack-2.1.3.1/bin/stack `-- share |-- bash-completion | `-- completions | `-- stack -> /nix/store/6lzdpxshx78281vy056lbk553ijsdr44-stack-2.1.3.1/share/bash-completion/completions/stack |-- fish | `-- vendor_completions.d | `-- stack.fish -> /nix/store/6lzdpxshx78281vy056lbk553ijsdr44-stack-2.1.3.1/share/fish/vendor_completions.d/stack.fish ...

### writeClosure

Given a list of store paths (or string-like expressions coercible to store paths), write their collective closure to a text file. The result is equivalent to the output of nix-store -q --requisites. For example, writeClosure [ (writeScriptBin "hi" "${hello}/bin/hello") ] produces an output path /nix/store/<hash>-runtime-deps containing /nix/store/<hash>-hello-2.10 /nix/store/<hash>-hi /nix/store/<hash>-libidn2-2.3.0 /nix/store/<hash>-libunistring-0.9.10 /nix/store/<hash>-glibc-2.32-40 You can see that this includes hi, the original input path, hello, which is a direct reference, but also the other paths that are indirectly required to run hello.

### writeDirectReferencesToFile

Writes the set of references to the output file, that is, their immediate dependencies. This produces the equivalent of nix-store -q --references. For example, writeDirectReferencesToFile (writeScriptBin "hi" "${hello}/bin/hello") produces an output path /nix/store/<hash>-runtime-references containing /nix/store/<hash>-hello-2.10 but none of hello’s dependencies because those are not referenced directly by hi’s output.

### Testers

Table of Contents hasPkgConfigModules hasCmakeConfigModules lycheeLinkCheck shellcheck shfmt testVersion testBuildFailure testBuildFailure' testEqualContents testEqualArrayOrMap testEqualDerivation invalidateFetcherByDrvHash runCommand runNixOSTest nixosTest This chapter describes several testing builders which are available in the testers namespace.

### hasPkgConfigModules

Checks whether a package exposes a given list of pkg-config modules. If the moduleNames argument is omitted, hasPkgConfigModules will use meta.pkgConfigModules. Example 317. Check that pkg-config modules are exposed using default values { passthru.tests.pkg-config = testers.hasPkgConfigModules { package = finalAttrs.finalPackage; }; meta.pkgConfigModules = [ "libfoo" ]; } Example 318. Check that pkg-config modules are exposed using explicit module names { passthru.tests.pkg-config = testers.hasPkgConfigModules { package = finalAttrs.finalPackage; moduleNames = [ "libfoo" ]; }; }

### hasCmakeConfigModules

Checks whether a package exposes a given list of *config.cmake modules. Note the moduleNames used in cmake find_package are case sensitive. Example 319. Check that *config.cmake modules are exposed using explicit module names { passthru.tests.cmake-config = testers.hasCmakeConfigModules { package = finalAttrs.finalPackage; moduleNames = [ "Foo" ]; }; }

### lycheeLinkCheck

Return value Inputs Check a packaged static site’s links with the lychee package. You may use Nix to reproducibly build static websites, such as for software documentation. Some packages will install documentation in their out or doc outputs, or maybe you have dedicated package where you’ve made your static site reproducible by running a generator, such as Hugo or mdBook, in a derivation. If you have a static site that can be built with Nix, you can use lycheeLinkCheck to check that the hyperlinks in your site are correct, and do so as part of your Nix workflow and CI. Example 320. Check hyperlinks in the nix documentation testers.lycheeLinkCheck { site = nix.doc + "/share/doc/nix/manual"; }

#### Return value

This tester produces a package that does not produce useful outputs, but only succeeds if the hyperlinks in your site are correct. The build log will list the broken links. It has two modes: Build the returned derivation; its build process will check that internal hyperlinks are correct. This runs in the sandbox, so it will not check external hyperlinks, but it is quick and reliable. Invoke the .online attribute with nix run (experimental). This runs outside the sandbox, and checks that both internal and external hyperlinks are correct. Example: nix run nixpkgs#lychee.tests.ok.online

#### Inputs

site (path or derivation) {#tester-lycheeLinkCheck-param-site} The path to the files to check. remap (attribute set, optional) {#tester-lycheeLinkCheck-param-remap} An attribute set where the attribute names are regular expressions. The values should be strings, derivations, or path values. In the returned check’s default configuration, external URLs are only checked when you run the .online attribute. By adding remappings, you can check offline that URLs to external resources are correct, by providing a stand-in from the file system. Before checking the existence of a URL, the regular expressions are matched and replaced by their corresponding values. Example: { "https://nix\\.dev/manual/nix/[a-z0-9.-]*" = "${nix.doc}/share/doc/nix/manual"; "https://nixos\\.org/manual/nix/(un)?stable" = "${emptyDirectory}/placeholder-to-disallow-old-nix-docs-urls"; } Store paths in the attribute values are automatically prefixed with file://, because lychee requires this for paths in the file system. If this is a problem, or if you need to control the order in which replacements are performed, use extraConfig.remap instead. extraConfig (attribute set) {#tester-lycheeLinkCheck-param-extraConfig} Extra configuration to pass to lychee in its configuration file. It is automatically translated to TOML. Example: { "include_verbatim" = true; } lychee (derivation, optional) {#tester-lycheeLinkCheck-param-lychee} The lychee package to use.

### shellcheck

Inputs Return value Run files through shellcheck, a static analysis tool for shell scripts, failing if there are any issues. Example 321. Run testers.shellcheck A single script testers.shellcheck { name = "script"; src = ./script.sh; } Multiple files let inherit (lib) fileset; in testers.shellcheck { name = "nixbsd-activate"; src = fileset.toSource { root = ./.; fileset = fileset.unions [ ./lib.sh ./nixbsd-activate ]; }; }

#### Inputs

name (string, optional) The name of the test. name will be required at a future point because it massively improves traceability of test failures, but is kept optional for now to avoid breaking existing usages. Defaults to run-shellcheck. The name of the derivation produced by the tester is shellcheck-${name} when name is supplied. src (path-like) The path to the shell script(s) to check. This can be a single file or a directory containing shell files. All files in src will be checked, so you may want to provide fileset-based source instead of a whole directory.

#### Return value

A derivation that runs shellcheck on the given script(s), producing an empty output if no issues are found. The build will fail if shellcheck finds any issues.

### shfmt

Inputs Return value Run files through shfmt, a shell script formatter, failing if any files are reformatted. Example 322. Run testers.shfmt A single script testers.shfmt { name = "script"; src = ./script.sh; } Multiple files let inherit (lib) fileset; in testers.shfmt { name = "nixbsd"; src = fileset.toSource { root = ./.; fileset = fileset.unions [ ./lib.sh ./nixbsd-activate ]; }; }

#### Inputs

name (string) The name of the test. name is required because it massively improves traceability of test failures. The name of the derivation produced by the tester is shfmt-${name}. src (path-like) The path to the shell script(s) to check. This can be a single file or a directory containing shell files. All files in src will be checked, so you may want to provide fileset-based source instead of a whole directory. indent (integer, optional) The number of spaces to use for indentation. Defaults to 2. A value of 0 indents with tabs.
