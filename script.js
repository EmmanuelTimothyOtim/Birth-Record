const yearOfBirth = Number(prompt("Enter your year of birth"))
const year = new Date().getFullYear();
const age = year - yearOfBirth;
if (age < 18) {
    console.log("You are a minor");
} else if (age >= 18 && age <= 36) {
    console.log("You are a youth");
} else if (age > 36) {
    console.log("Elder");
}