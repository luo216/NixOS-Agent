---
module: environment.memoryAllocator
option_count: 1
source: options.html
---

# environment.memoryAllocator

## environment.memoryAllocator.provider

The system-wide memory allocator. Briefly, the system-wide memory allocator providers are: libc: the standard allocator provided by libc graphene-hardened: Hardened memory allocator coming from GrapheneOS project. The default configuration template has all normal optional security features enabled and is quite aggressive in terms of sacrificing performance and memory usage for security. graphene-hardened-light: Hardened memory allocator coming from GrapheneOS project. The light configuration template disables the slab quarantines, write after free check, slot randomization and raises the guard slab interval from 1 to 8 but leaves zero-on-free and slab canaries enabled. The light configuration has solid performance and memory usage while still being far more secure than mainstream allocators with much better security properties. jemalloc: A general purpose allocator that emphasizes fragmentation avoidance and scalable concurrency support. mimalloc: A compact and fast general purpose allocator, which may optionally be built with mitigations against various heap vulnerabilities. scudo: A user-mode allocator based on LLVM Sanitizer’s CombinedAllocator, which aims at providing additional mitigations against heap based vulnerabilities, while maintaining good performance. Warning Selecting an alternative allocator (i.e., anything other than libc) may result in instability, data loss, and/or service failure. Type: one of “libc”, “graphene-hardened”, “graphene-hardened-light”, “jemalloc”, “mimalloc”, “scudo” Default: "libc" Declared by: <nixpkgs/nixos/modules/config/malloc.nix>
