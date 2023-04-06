const a =
  " HELLO MORNINGSTAR, Notez que le code JavaScript utilise setTimeout pour simuler l'effet de la fonction Sleep de Windows.h. De plus, il utilise process.stdout.write plutôt que console.log pour permettre l'impression des caractères sur la même ligne. ";
const n = a.length;

for (let i = 0; i < n; i++) {
  setTimeout(() => {
    process.stdout.write(a[i]);
  }, i * 100);
}
