const sentence = "hello there from lighthouse labs";
/*
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, 1000* i) // <= 1s delay to make it noticeable. Can dial it down later.
  
  
}
*/
let i = 0;
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, 500 * i);
  i++;
  if (i === sentence.length) {
    setTimeout(() => {
      console.log('');
    }, 500 * (i - 1));
    break;
  }
  
}