---
title: "Store Object Info - Nix 2.28.6 Reference Manual"
source: protocols/json/store-object-info.html
---

# Store Object Info - Nix 2.28.6 Reference Manual

Auto Light Rust Coal Navy Ayu

## Store object info JSON format

Warning This JSON format is currently experimental and subject to change. Info about a [store object]. path: Store path to the given store object. narHash: Hash of the file system object part of the store object when serialized as a Nix Archive. narSize: Size of the file system object part of the store object when serialized as a Nix Archive. references: An array of store paths, possibly including this one. ca: If the store object is content-addressed, this is the content address of this store object's file system object, used to compute its store path. Otherwise (i.e. if it is input-addressed), this is null.

### Impure fields

These are not intrinsic properties of the store object. In other words, the same store object residing in different store could have different values for these properties. deriver: If known, the path to the store derivation from which this store object was produced. Otherwise null. registrationTime (optional): If known, when this derivation was added to the store. Otherwise null. ultimate: Whether this store object is trusted because we built it ourselves, rather than substituted a build product from elsewhere. signatures: Signatures claiming that this store object is what it claims to be. Not relevant for content-addressed store objects, but useful for input-addressed store objects.

#### .narinfo extra fields

This meta data is specific to the "binary cache" family of Nix store types. This information is not intrinsic to the store object, but about how it is stored. url: Where to download a compressed archive of the file system objects of this store object. compression: The compression format that the archive is in. fileHash: A digest for the compressed archive itself, as opposed to the data contained within. fileSize: The size of the compressed archive itself.

### Computed closure fields

These fields are not stored at all, but computed by traversing the other fields across all the store objects in a closure. closureSize: The total size of the compressed archive itself for this object, and the compressed archive of every object in this object's closure.

#### .narinfo extra fields

closureSize: The total size of this store object and every other object in its closure.
