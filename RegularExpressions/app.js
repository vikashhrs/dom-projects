// let re;
// re = /hello/; // case sensitive
// re = /hello/i; // case insensitive
// re = /hello/g; // global search for all instances of occurences


// console.log(re);
// console.log(re.source);

// exec() - Return result in an array if there is a match else null for no match

// const result = re.exec('brad hello world');
// const result = re.exec('brad  world');
// console.log(result === null);
// console.log(result[0]);
// console.log(result.index);
// console.log(result.input);

// text() - Returns true or false if there is a match
// const result = re.test('hello world');
// console.log(result, typeof(result), typeof(typeof(result) === 'string'));

// match() - returns result array or null opposite of how exec works
// const str = 'Hello Three';
// const result = str.match(str);
// console.log(result) // same as result for re.exec()

// search() - returns index of first match and if not found returns -1

// const str = 'Hello there';
// const result = str.search(re);
// console.log(result);

// replace() - Returns a new string with some or all matches of a pattern
// const str = 'hello there';
// const newStr = str.replace(re, 'hi');
// console.log(newStr);


///-----------Patterns and met characters --------------///


let re;
// literal characters
re = /hello/;
re = /hello/i;

// meta charcters sysmbols
re = /^h/i; // must start with h
re = /d$/i; // must end with d
re = /orld$/i;
re = / world$/i;
re = /^hello$/i //must begin and end with hello only
re = /^h.ello$/i; //matches any one character . is wild card for any character matches hello/hsllo,h1llo now heello wont match as there are multiple characters

re = /^h*ello/i;
// this matches any character 0 or more times
//matches hllo hello heeeello

re = /gra?a?y/i; // optional character
// string to match
re = /gre?a?y\?/ // escape character


//********** character set */

// Brackets [] - character sets
re = /gr[ae]y/i // Must be in a or e
re = /[GF]ray/;
re = /[^GF]ray/i; // Match anything except G or F
re = /[A-Z]ray/; // Any uppercase letter
re = /[a-z]ray/; // Match any lowe case letter
re = /[A-Za-z]ray/; // Match any letter in upper or lower case

re = /[0-9]ray/; // Match any digit form 0 to 1
re = /[0-9][0-9]ray/;

//********* Braces {} - Quantifiers */

re = /Hello/i;
re = /Hel{2}o/i; // must occurs exactly {m} amount of times

re = /Hel{2,4}lo/; // must occur 2 or 3 or 4 mount of times

re = /he{2,}lo/; //must occur atleast 2 times


//** Parenthesis */
re = /([0-9]x){3}/; // matches 3x3x3x3x..
re = /^([0-9]x){3}/; // matches exactly 3x3x3x

//** Shorthand character classess */

re = /\w/; // Word character - alphanumeric or -
re = /\w+/; // + = one or more word character
re = /\W/; // non word characters
re = /\d/; // Match any digit
re = /\d+/; // Match one or more number of digit
re = /\D/; // Match any non digit character


re = /\s/; // match white space character
//let str = ' ';

re = /\S/; // match non white space character

re = /Hell\b/i; // word boundary matches for the occurence of the exact word

// Assertions
re = /x(?=y)/ // Match x only if followed by y
re = /x(?!y)/ // Match x not followed by y

//const str = 'hello world';
let str = 'gray';
//let str = 'grey'; matches
// let str = 'gry'; matches



const result = re.exec(str);
console.log(result);

function reTest(re, str) {
    if (re.test(str)) {
        console.log(`${str} matches ${re.source}`)
    } else {
        console.log(`${str} does not match ${re.source}`);
    }
}

reTest(re, str);