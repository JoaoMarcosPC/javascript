//----- REGEX -----

/*---What are Regular Expressions ?

-> Allows us to check a series of characters for 'matches'
-> Ex: it allows to check a form field to try an match a valid email address
*/

/*---Basics

-> /ninja/ -- the string must have the sequence of characters 'ninja'.
It searchs for the first instance of this pattern

-> /ninja/g -- Looks for all instances of ninja present in the string

-> /ninja/i -- Case insensitive (Ninja, ninja, nINja)

-> /ninja/gi -- All intances, non sensitive search
*/

/*---Character set

-> A way to match different characters in a single position

-> /[ng]inja/g -- MATCH: 'ninja' and 'ginja'

-> /[123abc]000/g -- MATCH: 'a000', '2000', 'c000'

-> /[^pr]9/g -- MATCH: 'w9', '59', '&9' | NOT MATCH: 'p9' and 'r9'

-> /[c-zA-Z]inja/g -- MATCH: 'zinja', 'linja', 'Winja', 'hinja', 'Ainja' | NOT MATCH: '%inja', 'ainja', 'binja', ')inja', 'GinJA'

-> /[0-9]+/g -- Any sized string will match, as long as it's characters are in range of 0 to 9.

-> /[0-9]{11}/g -- The string must have 11 characters ranging from 0 to 9

-> /[0-9]{5,8}/g -- The string can be have length from 5 to 8

-> /[0-9]{5,}/g -- The strign must have at least 5 characters
*/

/*---Metacharacters

-> '\d' -- any digit, [0-9]
-> '\w' -- any word character, (a-z, A-Z, 0-9 and _'s)
-> '\s' -- match a whitespace character (spaces, tabs)
-> '\t' -- match a tab character only
*/