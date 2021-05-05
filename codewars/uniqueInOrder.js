const uniqueInOrder = iterable => {
  const filteredArr = [];
  if (iterable.length) filteredArr.push(iterable[0]);
  for (let i = 1; i < iterable.length; i++) {
    if (iterable[i] !== iterable[i - 1]) {
      filteredArr.push(iterable[i]);
    }
  }
  return filteredArr;
}