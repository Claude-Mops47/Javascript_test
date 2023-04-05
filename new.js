const a = " HELLO MORNINGSTAR ";
const n = a.length;

for (let i = 0; i < n; i++) {
  setTimeout(() => {
    process.stdout.write(a[i]);
  }, i * 200);
}
