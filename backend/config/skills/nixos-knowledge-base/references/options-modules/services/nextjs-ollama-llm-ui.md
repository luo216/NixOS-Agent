---
module: services.nextjs-ollama-llm-ui
option_count: 5
source: options.html
---

# services.nextjs-ollama-llm-ui

## services.nextjs-ollama-llm-ui.enable

Whether to enable Simple Ollama web UI service; an easy to use web frontend for a Ollama backend service. Run state-of-the-art AI large language models (LLM) similar to ChatGPT locally with privacy on your personal computer. This service is stateless and doesn’t store any data on the server; all data is kept locally in your web browser. See https://github.com/jakobhoeg/nextjs-ollama-llm-ui. Required: You need the Ollama backend service running by having “services.nextjs-ollama-llm-ui.ollamaUrl” point to the correct url. You can host such a backend service with NixOS through “services.ollama”. . Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/nextjs-ollama-llm-ui.nix>

## services.nextjs-ollama-llm-ui.package

The nextjs-ollama-llm-ui package to use. Type: package Default: pkgs.nextjs-ollama-llm-ui Declared by: <nixpkgs/nixos/modules/services/web-apps/nextjs-ollama-llm-ui.nix>

## services.nextjs-ollama-llm-ui.hostname

The hostname under which the Ollama UI interface should be accessible. By default it uses localhost/127.0.0.1 to be accessible only from the local machine. Change to “0.0.0.0” to make it directly accessible from the local network. Note: You should keep it at 127.0.0.1 and only serve to the local network or internet from a (home) server behind a reverse-proxy and secured encryption. See https://wiki.nixos.org/wiki/Nginx for instructions on how to set up a reverse-proxy. Type: string Default: "127.0.0.1" Example: "ui.example.org" Declared by: <nixpkgs/nixos/modules/services/web-apps/nextjs-ollama-llm-ui.nix>

## services.nextjs-ollama-llm-ui.ollamaUrl

The address (including host and port) under which we can access the Ollama backend server. !Note that if the the UI service is running under a domain “https://ui.example.org”, the Ollama backend service must allow “CORS” requests from this domain, e.g. by adding “services.ollama.environment.OLLAMA_ORIGINS = [ … “https://ui.example.org” ];”! Type: string Default: "http://127.0.0.1:11434" Example: "https://ollama.example.org" Declared by: <nixpkgs/nixos/modules/services/web-apps/nextjs-ollama-llm-ui.nix>

## services.nextjs-ollama-llm-ui.port

The port under which the Ollama UI interface should be accessible. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 3000 Example: 3000 Declared by: <nixpkgs/nixos/modules/services/web-apps/nextjs-ollama-llm-ui.nix>
