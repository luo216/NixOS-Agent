---
module: services.github-runners.<name>
option_count: 17
source: options.html
---

# services.github-runners.<name>

## services.github-runners.<name>.enable

Whether to enable GitHub Actions runner. Note: GitHub recommends using self-hosted runners with private repositories only. Learn more here: About self-hosted runners. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/continuous-integration/github-runner/options.nix>

## services.github-runners.<name>.package

The github-runner package to use. Type: package Default: pkgs.github-runner Declared by: <nixpkgs/nixos/modules/services/continuous-integration/github-runner/options.nix>

## services.github-runners.<name>.ephemeral

If enabled, causes the following behavior: Passes the --ephemeral flag to the runner configuration script De-registers and stops the runner with GitHub after it has processed one job On stop, systemd wipes the runtime directory (this always happens, even without using the ephemeral option) Restarts the service after its successful exit On start, wipes the state directory and configures a new runner You should only enable this option if tokenFile points to a file which contains a personal access token (PAT). If you’re using the option with a registration token, restarting the service will fail as soon as the registration token expired. Changing this option triggers a new runner registration. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/continuous-integration/github-runner/options.nix>

## services.github-runners.<name>.extraEnvironment

Extra environment variables to set for the runner, as an attrset. Type: attribute set Default: { } Example: { GIT_CONFIG = "/path/to/git/config"; } Declared by: <nixpkgs/nixos/modules/services/continuous-integration/github-runner/options.nix>

## services.github-runners.<name>.extraLabels

Extra labels in addition to the default (unless disabled through the noDefaultLabels option). Changing this option triggers a new runner registration. Type: list of string Default: [ ] Example: [ "nixos" ] Declared by: <nixpkgs/nixos/modules/services/continuous-integration/github-runner/options.nix>

## services.github-runners.<name>.extraPackages

Extra packages to add to PATH of the service to make them available to workflows. Type: list of package Default: [ ] Declared by: <nixpkgs/nixos/modules/services/continuous-integration/github-runner/options.nix>

## services.github-runners.<name>.group

Group under which to run the service. The effect of this option depends on the value of the user option: group == null and user == null: The service runs with a dynamically allocated user and group. group == null and user != null: The service runs as the given user and its default group. group != null and user == null: This configuration is invalid. In this case, the service would use the given group but run as root implicitly. If this is really what you want, set user = "root" explicitly. Type: null or string Default: groupname Declared by: <nixpkgs/nixos/modules/services/continuous-integration/github-runner/options.nix>

## services.github-runners.<name>.name

Name of the runner to configure. If null, defaults to the hostname. Changing this option triggers a new runner registration. Type: null or string Default: "‹name›" Example: "nixos" Declared by: <nixpkgs/nixos/modules/services/continuous-integration/github-runner/options.nix>

## services.github-runners.<name>.noDefaultLabels

Disables adding the default labels. Also see the extraLabels option. Changing this option triggers a new runner registration. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/continuous-integration/github-runner/options.nix>

## services.github-runners.<name>.nodeRuntimes

List of Node.js runtimes the runner should support. Type: non-empty (list of (one of “node20”, “node24”)) Default: [ "node20" "node24" ] Declared by: <nixpkgs/nixos/modules/services/continuous-integration/github-runner/options.nix>

## services.github-runners.<name>.replace

Replace any existing runner with the same name. Without this flag, registering a new runner with the same name fails. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/continuous-integration/github-runner/options.nix>

## services.github-runners.<name>.runnerGroup

Name of the runner group to add this runner to (defaults to the default runner group). Changing this option triggers a new runner registration. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/continuous-integration/github-runner/options.nix>

## services.github-runners.<name>.serviceOverrides

Modify the systemd service. Can be used to, e.g., adjust the sandboxing options. See systemd.exec(5) for more options. Type: attribute set Default: { } Example: { ProtectHome = false; RestrictAddressFamilies = [ "AF_PACKET" ]; } Declared by: <nixpkgs/nixos/modules/services/continuous-integration/github-runner/options.nix>

## services.github-runners.<name>.tokenFile

The full path to a file which contains either a fine-grained personal access token (PAT), a classic PAT or a runner registration token Changing this option or the tokenFile’s content triggers a new runner registration. We suggest using the fine-grained PATs. A runner registration token is valid only for 1 hour after creation, so the next time the runner configuration changes this will give you hard-to-debug HTTP 404 errors in the configure step. The file should contain exactly one line with the token without any newline. (Use echo -n '…token…' > …token file… to make sure no newlines sneak in.) If the file contains a PAT, the service creates a new registration token on startup as needed. If a registration token is given, it can be used to re-register a runner of the same name but is time-limited as noted above. For fine-grained PATs: Give it “Read and Write access to organization/repository self hosted runners”, depending on whether it is organization wide or per-repository. You might have to experiment a little, fine-grained PATs are a beta Github feature and still subject to change; nonetheless they are the best option at the moment. For classic PATs: Make sure the PAT has a scope of admin:org for organization-wide registrations or a scope of repo for a single repository. For runner registration tokens: Nothing special needs to be done, but updating will break after one hour, so these are not recommended. Type: absolute path Example: "/run/secrets/github-runner/nixos.token" Declared by: <nixpkgs/nixos/modules/services/continuous-integration/github-runner/options.nix>

## services.github-runners.<name>.url

Repository to add the runner to. Changing this option triggers a new runner registration. IMPORTANT: If your token is org-wide (not per repository), you need to provide a github org link, not a single repository, so do it like this https://github.com/nixos, not like this https://github.com/nixos/nixpkgs. Otherwise, you are going to get a 404 NotFound from POST https://api.github.com/actions/runner-registration in the configure script. Type: string Example: "https://github.com/nixos/nixpkgs" Declared by: <nixpkgs/nixos/modules/services/continuous-integration/github-runner/options.nix>

## services.github-runners.<name>.user

User under which to run the service. If this option and the group option is set to null, the service runs as a dynamically allocated user. Also see the group option for an overview on the effects of the user and group settings. Type: null or string Default: username Declared by: <nixpkgs/nixos/modules/services/continuous-integration/github-runner/options.nix>

## services.github-runners.<name>.workDir

Working directory, available as $GITHUB_WORKSPACE during workflow runs and used as a default for repository checkouts. The service cleans this directory on every service start. A value of null will default to the systemd RuntimeDirectory. Changing this option triggers a new runner registration. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/continuous-integration/github-runner/options.nix>
