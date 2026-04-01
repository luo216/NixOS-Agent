---
module: services.fail2ban.bantime-increment
option_count: 7
source: options.html
---

# services.fail2ban.bantime-increment

## services.fail2ban.bantime-increment.enable

“bantime.increment” allows to use database for searching of previously banned ip’s to increase a default ban time using special formula, default it is banTime * 1, 2, 4, 8, 16, 32 … Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/security/fail2ban.nix>

## services.fail2ban.bantime-increment.factor

“bantime.factor” is a coefficient to calculate exponent growing of the formula or common multiplier, default value of factor is 1 and with default value of formula, the ban time grows by 1, 2, 4, 8, 16 … Type: null or string Default: null Example: "4" Declared by: <nixpkgs/nixos/modules/services/security/fail2ban.nix>

## services.fail2ban.bantime-increment.formula

“bantime.formula” used by default to calculate next value of ban time, default value below, the same ban time growing will be reached by multipliers 1, 2, 4, 8, 16, 32 … Type: null or string Default: null Example: "ban.Time * math.exp(float(ban.Count+1)*banFactor)/math.exp(1*banFactor)" Declared by: <nixpkgs/nixos/modules/services/security/fail2ban.nix>

## services.fail2ban.bantime-increment.maxtime

“bantime.maxtime” is the max number of seconds using the ban time can reach (don’t grows further) Type: null or string Default: null Example: "48h" Declared by: <nixpkgs/nixos/modules/services/security/fail2ban.nix>

## services.fail2ban.bantime-increment.multipliers

“bantime.multipliers” used to calculate next value of ban time instead of formula, corresponding previously ban count and given “bantime.factor” (for multipliers default is 1); following example grows ban time by 1, 2, 4, 8, 16 … and if last ban count greater as multipliers count, always used last multiplier (64 in example), for factor ‘1’ and original ban time 600 - 10.6 hours Type: null or string Default: null Example: "1 2 4 8 16 32 64" Declared by: <nixpkgs/nixos/modules/services/security/fail2ban.nix>

## services.fail2ban.bantime-increment.overalljails

“bantime.overalljails” (if true) specifies the search of IP in the database will be executed cross over all jails, if false (default), only current jail of the ban IP will be searched. Type: null or boolean Default: null Example: true Declared by: <nixpkgs/nixos/modules/services/security/fail2ban.nix>

## services.fail2ban.bantime-increment.rndtime

“bantime.rndtime” is the max number of seconds using for mixing with random time to prevent “clever” botnets calculate exact time IP can be unbanned again Type: null or string Default: null Example: "8m" Declared by: <nixpkgs/nixos/modules/services/security/fail2ban.nix>
