process.stdout.write('hello from spinner1.js... \rheyyy\n');
let writeArray = ['\r|   ', '\r/   ', '\r-   ','\r\\   ', '\r|   ','\r/   ', '\r-   ','\r\\   ','\r|   '];

let i = 100;
//while (i <= 1700) {
for (let element of writeArray) {
  setTimeout(() => {
    process.stdout.write(element);
  }, i);
  i += 200;
}
//}