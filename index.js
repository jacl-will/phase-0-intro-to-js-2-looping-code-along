const name = ["Becki", "Cody", "Fred"];
//const event = ["Christmas"];
function writeCards(name, event) {
    let messages = [];
    for (let i = 0; i < name.length; i++) {
        messages.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`);
        debugger;
}
return messages;
}
//writeCards(names);

function countDown() {
    let countDown = 10;
    while (countDown >= 0) {
        console.log(countDown--);
    }
}