---
module: services.ntfy-sh.settings
option_count: 1
source: options.html
---

# services.ntfy-sh.settings

## services.ntfy-sh.settings.base-url

Public facing base URL of the service This setting is required for any of the following features: attachments (to return a download URL) e-mail sending (for the topic URL in the email footer) iOS push notifications for self-hosted servers (to calculate the Firebase poll_request topic) Matrix Push Gateway (to validate that the pushkey is correct) Type: string Example: "https://ntfy.example" Declared by: <nixpkgs/nixos/modules/services/misc/ntfy-sh.nix>
