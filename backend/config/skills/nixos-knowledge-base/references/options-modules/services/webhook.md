---
module: services.webhook
option_count: 14
source: options.html
---

# services.webhook

## services.webhook.enable

Whether to enable Webhook, a server written in Go that allows you to create HTTP endpoints (hooks), which execute configured commands for any person or service that knows the URL . Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/webhook.nix>

## services.webhook.enableTemplates

Enable the generated hooks file to be parsed as a Go template. See the documentation for more information. Type: boolean Default: hooksTemplated != {} Declared by: <nixpkgs/nixos/modules/services/networking/webhook.nix>

## services.webhook.package

The webhook package to use. Type: package Default: pkgs.webhook Declared by: <nixpkgs/nixos/modules/services/networking/webhook.nix>

## services.webhook.environment

Extra environment variables passed to webhook. Type: attribute set of string Default: { } Declared by: <nixpkgs/nixos/modules/services/networking/webhook.nix>

## services.webhook.extraArgs

These are arguments passed to the webhook command in the systemd service. You can find the available arguments and options in the documentation. Type: list of string Default: [ ] Example: [ "-secure" ] Declared by: <nixpkgs/nixos/modules/services/networking/webhook.nix>

## services.webhook.group

Webhook will be run under this group. If set, you must create this group yourself! Type: string Default: "webhook" Declared by: <nixpkgs/nixos/modules/services/networking/webhook.nix>

## services.webhook.hooks

The actual configuration of which hooks will be served. Read more on the project homepage and on the hook definition page. At least one hook needs to be configured. Type: attribute set of (open submodule of (JSON value)) Default: { } Example: { echo = { execute-command = "echo"; response-message = "Webhook is reachable!"; }; redeploy-webhook = { command-working-directory = "/var/webhook"; execute-command = "/var/scripts/redeploy.sh"; }; } Declared by: <nixpkgs/nixos/modules/services/networking/webhook.nix>

## services.webhook.hooksTemplated

Same as hooks, but these hooks are specified as literal strings instead of Nix values, and hence can include template syntax which might not be representable as JSON. Template syntax requires the enableTemplates option to be set to true, which is done by default if this option is set. Type: attribute set of string Default: { } Example: { echo-template = '' { "id": "echo-template", "execute-command": "echo", "response-message": "{{ getenv "MESSAGE" }}" } ''; } Declared by: <nixpkgs/nixos/modules/services/networking/webhook.nix>

## services.webhook.ip

The IP webhook should serve hooks on. The default means it can be reached on any interface if openFirewall = true. Type: string Default: "0.0.0.0" Declared by: <nixpkgs/nixos/modules/services/networking/webhook.nix>

## services.webhook.openFirewall

Open the configured port in the firewall for external ingress traffic. Preferably the Webhook server is instead put behind a reverse proxy. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/webhook.nix>

## services.webhook.port

The port webhook should be reachable from. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 9000 Declared by: <nixpkgs/nixos/modules/services/networking/webhook.nix>

## services.webhook.urlPrefix

The URL path prefix to use for served hooks (protocol://yourserver:port/${prefix}/hook-id). Type: string Default: "hooks" Declared by: <nixpkgs/nixos/modules/services/networking/webhook.nix>

## services.webhook.user

Webhook will be run under this user. If set, you must create this user yourself! Type: string Default: "webhook" Declared by: <nixpkgs/nixos/modules/services/networking/webhook.nix>

## services.webhook.verbose

Whether to show verbose output. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/networking/webhook.nix>
