const promptMesssage = "akshay-kumar >";

function eggshell() {
  while (true) {
    const commandString = prompt(promptMesssage);
    console.log("you entered ", commandString);
  }
}

eggshell();