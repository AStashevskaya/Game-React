export default function getRandomArray(n, arr) {
  const randomArray = [];
  for (let i = 0; i < n / 2; i += 1) {
    const randomIdx = Math.round(Math.random() * arr.length);
    const item = arr[randomIdx];

    if (randomArray.includes(item)) {
      i -= 1;
    } else {
      randomArray.push(item);
    }
  }
  return randomArray;
}
