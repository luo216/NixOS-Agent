## Accelerate Package Downloads via a Proxy Server {#accelerate-package-downloads-via-a-proxy-server}

> Referenced from Issue:
> [roaming laptop: network proxy configuration - NixOS/nixpkgs](https://github.com/NixOS/nixpkgs/issues/27535#issuecomment-1178444327)
> Although it's mentioned earlier that a transparent proxy running on your router or local
> machine can completely solve the issue of slow package downloads in NixOS, the
> configuration is rather cumbersome and often requires additional hardware.

Some users may prefer to directly speed up package downloads by using a HTTP/Socks5 proxy
running on their machine. Here's how to set it up. Using methods like
`export HTTPS_PROXY=http://127.0.0.1:7890` in the Terminal will not work because the
actual work is done by a background process called `nix-daemon`, not by commands directly
executed in the Terminal.

If you only need to use a proxy temporarily, you can set the proxy environment variables
with the following commands:

```bash
sudo mkdir -p /run/systemd/system/nix-daemon.service.d/
sudo tee /run/systemd/system/nix-daemon.service.d/override.conf <<EOF
[Service]
Environment="https_proxy=socks5h://localhost:7891"
EOF
sudo systemctl daemon-reload
sudo systemctl restart nix-daemon
```

After deploying this configuration, you can check if the environment variables have been
set by running `sudo cat /proc/$(pidof nix-daemon)/environ | tr '\0' '\n'`.

The settings in `/run/systemd/system/nix-daemon.service.d/override.conf` will be
automatically deleted when the system restarts, or you can manually delete it and restart
the nix-daemon service to restore the original settings.

If you want to permanently set the proxy, it is recommended to save the above commands as
a shell script and run it each time the system starts. Alternatively, you can use a
transparent proxy or TUN and other global proxy solutions.

> There are also people in the community who permanently set the proxy for nix-daemon in a
> declarative way using `systemd.services.nix-daemon.environment`. However, if the proxy
> encounters problems, it will be very troublesome. Nix-daemon will not work properly, and
> most Nix commands will not run correctly. Moreover, the configuration of systemd itself
> is set to read-only protection, making it difficult to modify or delete the proxy
> settings. So, it is not recommended to use this method.

> When using some commercial or public proxies, you might encounter HTTP 403 errors when
> downloading from GitHub (as described in
> [nixos-and-flakes-book/issues/74](https://github.com/ryan4yin/nixos-and-flakes-book/issues/74)).
> In such cases, you can try changing the proxy server or setting up
> [access-tokens](https://github.com/NixOS/nix/issues/6536) to resolve the issue.
