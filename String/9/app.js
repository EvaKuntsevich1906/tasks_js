// Дана строка 'aaa bbb ccc'. Вырежите из нее слово 
// 'bbb' тремя разными способами (через substr, substring, slice).

let str = "aaa bbb ccc";

let strSubstr = str.substr(4,3);
alert(strSubstr);

let strSubstring = str.substring(4,7);
alert(strSubstring);

let strSlice = str.slice(4,7);
alert(strSlice);

