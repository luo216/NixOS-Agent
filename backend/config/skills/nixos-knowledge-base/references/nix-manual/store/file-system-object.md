---
title: "File System Object - Nix 2.28.6 Reference Manual"
source: store/file-system-object.html
---

# File System Object - Nix 2.28.6 Reference Manual

Auto Light Rust Coal Navy Ayu

## File System Object

Nix uses a simplified model of the file system, which consists of file system objects. Every file system object is one of the following: File A possibly empty sequence of bytes for contents A single boolean representing the executable permission Directory Mapping of names to child file system objects Symbolic link An arbitrary string. Nix does not assign any semantics to symbolic links. File system objects and their children form a tree. A bare file or symlink can be a root file system object. Nix does not encode any other file system notions such as hard links, permissions, timestamps, or other metadata.

### Examples of file system objects

A plain file: 50 B, executable: false An executable file: 122 KB, executable: true A symlink: -> /usr/bin/sh A directory with contents: ├── bin │ └── hello: 35 KB, executable: true └── share ├── info │ └── hello.info: 36 KB, executable: false └── man └── man1 └── hello.1.gz: 790 B, executable: false A directory that contains a symlink and other directories: ├── bin -> share/go/bin ├── nix-support/ └── share/
