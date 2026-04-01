---
module: programs.pay-respects
option_count: 5
source: options.html
---

# programs.pay-respects

## programs.pay-respects.enable

Whether to enable pay-respects, an app which corrects your previous console command. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/programs/pay-respects.nix>

## programs.pay-respects.package

The pay-respects package to use. Type: package Default: pkgs.pay-respects Declared by: <nixpkgs/nixos/modules/programs/pay-respects.nix>

## programs.pay-respects.aiIntegration

Whether to enable pay-respects’ LLM integration. When there is no rule for a given error, pay-respects can query an OpenAI-compatible API endpoint for command corrections. If this is set to false, all LLM-related features are disabled. If this is set to true, the default OpenAI endpoint will be used, using upstream’s API key. This default API key may be rate-limited. You can also set a custom API endpoint, large language model and locale for command corrections. Simply access the aiIntegration.url, aiIntegration.model and aiIntegration.locale options, as described in the example. Take a look at the services.ollama NixOS module if you wish to host a local large language model for pay-respects. For all of these methods, you can set a custom secret API key by using the _PR_AI_API_KEY environment variable. Type: boolean or (submodule) Default: false Example: { locale = "nl-be"; model = "llama3"; url = "http://127.0.0.1:11434/v1/chat/completions"; } Declared by: <nixpkgs/nixos/modules/programs/pay-respects.nix>

## programs.pay-respects.alias

pay-respects needs an alias to be configured. The default value is f, but you can use anything else as well. Type: string Default: "f" Declared by: <nixpkgs/nixos/modules/programs/pay-respects.nix>

## programs.pay-respects.runtimeRules

List of rules to be added to /etc/xdg/pay-respects/rules. pay-respects will read the contents of these generated rules to recommend command corrections. Each rule module should start with the command attribute that specifies the command name. See the upstream documentation for more information. Type: list of (TOML value) Default: [ ] Example: [ { command = "xl"; match_err = [ { pattern = [ "Permission denied" ]; suggest = [ '' #[executable(sudo), !cmd_contains(sudo), err_contains(libxl: error:)] sudo {{command}} '' ]; } ]; } ]; Declared by: <nixpkgs/nixos/modules/programs/pay-respects.nix>
