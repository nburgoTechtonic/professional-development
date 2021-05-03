const queensGambit = (x_1, y_1, x_2, y_2) => {
  const slope = (y_2 - y_1) / (x_2 - x_1);
  if (x_1 === x_2 || y_1 === y_2 || Math.abs(slope) === 1) return 'YES';
  return 'NO';
};

(function invoke() {
  console.log(queensGambit(4, 4, 6, 6));
})();