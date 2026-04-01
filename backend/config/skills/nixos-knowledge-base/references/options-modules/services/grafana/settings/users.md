---
module: services.grafana.settings.users
option_count: 14
source: options.html
---

# services.grafana.settings.users

## services.grafana.settings.users.allow_org_create

Set to false to prohibit users from creating new organizations. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/monitoring/grafana.nix>

## services.grafana.settings.users.allow_sign_up

Set to false to prohibit users from being able to sign up / create user accounts. The admin user can still create users. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/monitoring/grafana.nix>

## services.grafana.settings.users.auto_assign_org

Set to true to automatically add new users to the main organization (id 1). When set to false, new users automatically cause a new organization to be created for that new user. The organization will be created even if the allow_org_create setting is set to false. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/monitoring/grafana.nix>

## services.grafana.settings.users.auto_assign_org_id

Set this value to automatically add new users to the provided org. This requires auto_assign_org to be set to true. Please make sure that this organization already exists. Type: signed integer Default: 1 Declared by: <nixpkgs/nixos/modules/services/monitoring/grafana.nix>

## services.grafana.settings.users.auto_assign_org_role

The role new users will be assigned for the main organization (if the auto_assign_org setting is set to true). Type: one of “Viewer”, “Editor”, “Admin” Default: "Viewer" Declared by: <nixpkgs/nixos/modules/services/monitoring/grafana.nix>

## services.grafana.settings.users.default_language

This setting configures the default UI language, which must be a supported IETF language tag, such as en-US. Type: string Default: "en-US" Declared by: <nixpkgs/nixos/modules/services/monitoring/grafana.nix>

## services.grafana.settings.users.default_theme

Sets the default UI theme. system matches the user’s system theme. Type: one of “dark”, “light”, “system” Default: "dark" Declared by: <nixpkgs/nixos/modules/services/monitoring/grafana.nix>

## services.grafana.settings.users.hidden_users

This is a comma-separated list of usernames. Users specified here are hidden in the Grafana UI. They are still visible to Grafana administrators and to themselves. Type: string Default: "" Declared by: <nixpkgs/nixos/modules/services/monitoring/grafana.nix>

## services.grafana.settings.users.home_page

Path to a custom home page. Users are only redirected to this if the default home dashboard is used. It should match a frontend route and contain a leading slash. Type: string Default: "" Declared by: <nixpkgs/nixos/modules/services/monitoring/grafana.nix>

## services.grafana.settings.users.login_hint

Text used as placeholder text on login page for login/username input. Type: string Default: "email or username" Declared by: <nixpkgs/nixos/modules/services/monitoring/grafana.nix>

## services.grafana.settings.users.password_hint

Text used as placeholder text on login page for password input. Type: string Default: "password" Declared by: <nixpkgs/nixos/modules/services/monitoring/grafana.nix>

## services.grafana.settings.users.user_invite_max_lifetime_duration

The duration in time a user invitation remains valid before expiring. This setting should be expressed as a duration. Examples: 6h (hours), 2d (days), 1w (week). The minimum supported duration is 15m (15 minutes). Type: string Default: "24h" Declared by: <nixpkgs/nixos/modules/services/monitoring/grafana.nix>

## services.grafana.settings.users.verify_email_enabled

Require email validation before sign up completes. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/monitoring/grafana.nix>

## services.grafana.settings.users.viewers_can_edit

Viewers can access and use Explore and perform temporary edits on panels in dashboards they have access to. They cannot save their changes. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/monitoring/grafana.nix>
