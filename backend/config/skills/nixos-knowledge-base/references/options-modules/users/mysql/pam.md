---
module: users.mysql.pam
option_count: 10
source: options.html
---

# users.mysql.pam

## users.mysql.pam.cryptDefault

The default encryption method to use for passwordCrypt = 1. Type: null or one of “md5”, “sha256”, “sha512”, “blowfish” Default: null Example: "blowfish" Declared by: <nixpkgs/nixos/modules/config/mysql.nix>

## users.mysql.pam.disconnectEveryOperation

By default, pam_mysql keeps the connection to the MySQL database until the session is closed. If this option is set to true it disconnects every time the PAM operation has finished. This option may be useful in case the session lasts quite long. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/config/mysql.nix>

## users.mysql.pam.passwordColumn

The name of the column that contains a (encrypted) password string. Type: string Example: "password" Declared by: <nixpkgs/nixos/modules/config/mysql.nix>

## users.mysql.pam.passwordCrypt

The method to encrypt the user’s password: 0 (or "plain"): No encryption. Passwords are stored in plaintext. HIGHLY DISCOURAGED. 1 (or "Y"): Use crypt(3) function. 2 (or "mysql"): Use the MySQL PASSWORD() function. It is possible that the encryption function used by pam_mysql is different from that of the MySQL server, as pam_mysql uses the function defined in MySQL’s C-client API instead of using PASSWORD() SQL function in the query. 3 (or "md5"): Use plain hex MD5. 4 (or "sha1"): Use plain hex SHA1. 5 (or "drupal7"): Use Drupal7 salted passwords. 6 (or "joomla15"): Use Joomla15 salted passwords. 7 (or "ssha"): Use ssha hashed passwords. 8 (or "sha512"): Use sha512 hashed passwords. 9 (or "sha256"): Use sha256 hashed passwords. Type: one of “0”, “plain”, “1”, “Y”, “2”, “mysql”, “3”, “md5”, “4”, “sha1”, “5”, “drupal7”, “6”, “joomla15”, “7”, “ssha”, “8”, “sha512”, “9”, “sha256” Example: "2" Declared by: <nixpkgs/nixos/modules/config/mysql.nix>

## users.mysql.pam.statusColumn

The name of the column or an SQL expression that indicates the status of the user. The status is expressed by the combination of two bitfields shown below: bit 0 (0x01): if flagged, pam_mysql deems the account to be expired and returns PAM_ACCT_EXPIRED. That is, the account is supposed to no longer be available. Note this doesn’t mean that pam_mysql rejects further authentication operations. bit 1 (0x02): if flagged, pam_mysql deems the authentication token (password) to be expired and returns PAM_NEW_AUTHTOK_REQD. This ends up requiring that the user enter a new password. Type: null or string Default: null Example: "status" Declared by: <nixpkgs/nixos/modules/config/mysql.nix>

## users.mysql.pam.table

The name of table that maps unique login names to the passwords. Type: string Example: "users" Declared by: <nixpkgs/nixos/modules/config/mysql.nix>

## users.mysql.pam.updateTable

The name of the table used for password alteration. If not defined, the value of the table option will be used instead. Type: null or string Default: null Example: "users_updates" Declared by: <nixpkgs/nixos/modules/config/mysql.nix>

## users.mysql.pam.userColumn

The name of the column that contains a unix login name. Type: string Example: "username" Declared by: <nixpkgs/nixos/modules/config/mysql.nix>

## users.mysql.pam.verbose

If enabled, produces logs with detailed messages that describes what pam_mysql is doing. May be useful for debugging. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/config/mysql.nix>

## users.mysql.pam.where

Additional criteria for the query. Type: null or string Default: null Example: "host.name='web' AND user.active=1" Declared by: <nixpkgs/nixos/modules/config/mysql.nix>
