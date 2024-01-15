const messages = [
    "To make something special, first you've got to believe it is special.", 
    "Mental Work means to put the right face even though you're not feeling that way.",
    "Things are meant to be -you decide if you want a curse or a blessing.",
    "You only live once",
];

function generateRandomMessage () {
    const randomIndex = Math.floor(Math.random() * messages.length);
    return messages[randomIndex];
}