// На вход программе подается строка текста. Напишите программу, которая 
// проверяет, что строка заканчивается подстрокой .com или .ru.

const str = prompt().toLowerCase().trim();
if (str.endsWith(".ru") || str.endsWith(".com")) {
    console.log("YES");
} else {
    console.log("NO");
}