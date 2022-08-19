/* Given a string, , matching the regular expression [A-Za-z !,?._'@]+, split the string into tokens. We define a token to be one or more consecutive English alphabetic letters. Then, print the number of tokens, followed by each token on a new line.

Note: You may find the String.split method helpful in completing this challenge.

Input Format

A single string, .

Constraints

 is composed of any of the following: English alphabetic letters, blank spaces, exclamation points (!), commas (,), question marks (?), periods (.), underscores (_), apostrophes ('), and at symbols (@).
Output Format

On the first line, print an integer, , denoting the number of tokens in string  (they do not need to be unique). Next, print each of the  tokens on a new line in the same order as they appear in input string .

Sample Input

He is a very very good boy, isn't he?

Sample Output:
10
He
is
a
very
very
good
boy
isn
t
he
 */

let s = "He is a very very good boy, isn't he?";
const StringTokens = (s) => {
  //replace charac
  let speChar = ["!", "@", "_", "?", ",", "'", ".", " "];
  let lettersOnly = " "
  let stringArr = s.split('');
  let letter = stringArr.map(element => {
    if (speChar.includes(element)) {
      return lettersOnly += " "
    } else {
      return lettersOnly += element;
    }
  });
  const tokens = lettersOnly.split(' ').filter(token => token !== "");
  console.log(tokens.length)
  return tokens.map(el => console.log(el)).join(" ");
}


console.log(StringTokens(s))

export default StringTokens;