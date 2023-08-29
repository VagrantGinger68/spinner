const spinnerFrames = ["|", "/", "-", "\\", "/", "-", "\\", "|"];
let time = 100;

for (let i = 0; i < spinnerFrames.length; i++) {
  setTimeout(() => {
    process.stdout.write(`\r${spinnerFrames[i]}    `);
    if (i === spinnerFrames.length - 1) {
      process.stdout.write('\n');
    }
  }, time);
  time += 200;
}