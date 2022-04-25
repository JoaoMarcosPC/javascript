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

-> '\d' -- any digit, [0-9] -- /[0-9]{11}/g == /\d{11}/g
-> '\w' -- any word character, (a-z, A-Z, 0-9 and _'s)
-> '\s' -- match a whitespace character (spaces, tabs)
-> '\t' -- match a tab character only
*/


/*---Special characters

-> '+' -- one-or-more quantifier -- I want that char to appear one or more times
-> '*' -- 0-or-more quantifier
-> '?' -- zero-or-one quantifier -- makes a preceding char optional -- /hello?/g -> 'hello' and 'hell' are both valid
-> '\' -- escape character -- ignores the functionality of the next char
-> '[]' -- character set
-> '[^]' -- negate symbol in a char set
-> '.' -- Any char whatsoever (except the newline char) -- /.+/g -> The string can be anything but must have ate least one char
*/


/*---Starting and Ending patterns

-> /^[a-z]{5}/g -- this pattern must be at the start of the string and must be 5 char long, varying from a to z
-> /[a-z]{5}$/g -- this pattern must be at the end of the string and must be 5 char long, varying from a to z
-> /^[a-z]{5}$/g -- The string must be 5 char long, varying from a to z
*/


/*---Alternate Characters

-> /(p|t)yre/g -- 'pyre' and 'tyre' are both valid
-> /(pet|toy|crazy)? rabbit/g -- 'pet rabbit', 'toy rabbit', 'crazy rabbit' and ' rabbit' are valid
*/


//--- Practical Examples/Uses

function validateRegex(pattern, regex) {
  console.log(regex.test(pattern))
}

function testAllRegex(tests, regex) {
  const len = tests.length

  for (i = 0; i < len; i++) {
    validateRegex(tests[i], regex)
  }
}

// Telephone Validation
const phone_regex = /^\d{11}$/
const phone_tests = [
  '12345678901',
  'dd12345678901',
  '123456H8901'
]
testAllRegex(phone_tests, phone_regex)
console.log('\n')

// Password Validation
const pass_regex = /^[\w@-]{8,20}$/i
const pass_tests = [
  '1234567',
  '12345678',
  '++vbadbvfbvo',
  'dbcqibdohcboiqwbvpibpiuq wvpiubr',
  'HelloThusUsPasswordo'
]
testAllRegex(pass_tests, pass_regex)
console.log('\n')

// Email Validation
const email_regex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/
const email_tests = [
  'test_email.com',
  'bacvibvb@qnivubv.com.uk',
  'a@a.com.us',
  'normal-email@gmail.com'
]
testAllRegex(email_tests, email_regex)
