let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arr.forEach((n, index) => {
  n % 2 === 0 ? (arr[index] = n * n) : (arr[index] = n);
});

console.log(arr);
