let user = {
    name: "Andrew",
    age: 27,
    isAdmin: true
};

let user = {
    age: 28
};

user["city of residence"] = "Volgograd";

delete user["city of residence"];

let info = prompt("Какую информацию хотите узнать о пользователе?");
alert(user[info]);
