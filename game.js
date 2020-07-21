do {
    var name = prompt('Hi there! What is your name?')
    if (name == null) {
    alert("Hey, I'm so cute but you don't want to talk with me, I'm going to be angery.")
    }
} while(name == null);
var age = prompt('oh, ' + name + ', How old are you?');
if (age < 16) {
    alert('oh, I think drive is very dangerous for you, so, do this later. (Do you see my creepy smile?)');
} else if (age < 0) {
    alert('uh? Are you sure you are talking to me, and your age is lower than 0? (wtf?)');
} else {
    alert('I think you are a lier.');
}
alert("All right, thank you for your time, that's really a good time");