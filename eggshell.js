const NOT_FOUND = "esh: command not found: ";
const promptMesssage = "akshaykumar@Akshays-MacBook-Pro shell %";

const echo = function (args) {
  console.log(args.join(" "));
};

function runCommand([command, ...args]) {
  switch (command) {
    case "echo":
      return echo(args);
    default:
      return NOT_FOUND + command;
  }
}


function eggshell() {
  while (true) {
    const commandString = prompt(promptMesssage);
    const resultAfterRunning = runCommand(commandString.split(" "));

    if (resultAfterRunning !== undefined) {
      console.log(resultAfterRunning);
    }
  }
}
eggshell();