const jj = ['hello', 'jojo', 'thomas'];
function* mine(kk) {
  for (const i of kk) {
    yield i;
  }
}

for (const i of mine(jj)) {
  console.log(i);
}
