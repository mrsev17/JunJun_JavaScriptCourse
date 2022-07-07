//1
Boolean(Number(’10’)) + 1;
// Will return number 2, cause Boolean return true and true = 1. 1 + 1 = 2

//2
‘sub ’ + Number(false);
// Will return "Uncaught SyntaxError: Invalid or unexpected
// token" cause ‘sub ’ - not a string, for string we can
// use two types of quotes " " or ' '

//3
16  *  ‘      91    ‘
// Same error and reason which was on line 6

//4
true-70
// Will return -69 cause true = 1 so we get 1-(-70),
// so minus to minus return + and we will get -69

//5
Number(1 + String(1)) + 1
// Will return number 12 cause in first case
// we get 11 according to concatenation and after that plus one so 11 + 1 = 12