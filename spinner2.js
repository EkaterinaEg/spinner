process.stdout.write("hello from spinner1.js... \rheyyy\n");

const spinner2 = function() {
  const spinner = ["|", "/", "-", "\\", "/", "-", "\\"];
  let time = 0;
  const step = 200;

  for (let el of spinner) {
    setTimeout(() => process.stdout.write(`\r${el}`), time);
    time += step;
  }
};
spinner2();
