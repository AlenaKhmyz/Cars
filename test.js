process.stdin.setEncoding('utf8');

let result = 0;
let i = 0;

process.stdin.on('readable', () => {
  let chunk;
  while ((chunk = process.stdin.read()) !== null) {
    const number = Number(chunk);
    if (number < -32000 || number > 32000) {
      process.exit(1)
    }
    result += number;
    i++;
    if (i === 2) {
      process.stdout.write(`${result}`);
      process.exit(0)
    }
  }
});