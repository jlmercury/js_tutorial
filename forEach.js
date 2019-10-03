let array = ["ant", "bat", "cat", 42];
let soliloquy = "To be, or not to be, that is the question:";

array.forEach( element => {
  console.log(element);
})

Array.from(soliloquy).forEach( character => {
  console.log(character);
})
