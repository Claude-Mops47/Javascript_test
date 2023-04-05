// for (let index = 0; index < 5; index++) {
//   setTimeout(() => {
//     console.log(index);
//   }, 100);
// }

test("Prints numbers 0 to 4 with a delay of 100ms", (done) => {
  const expected = [0, 1, 2, 3, 4];
  const actual = [];

  for (let index = 0; index < 5; index++) {
    setTimeout(() => {
      actual.push(index);
      if (actual.length === 5) {
        expect(actual).toEqual(expected);
        done();
      }
    }, 100);
  }
});
