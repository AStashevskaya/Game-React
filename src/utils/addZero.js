export default function addZero(n) {
  const numb = +n.toFixed(0);
  const min = Math.floor(numb / 60);
  const sec = numb % 60;
  return `0${min}:${sec >= 10 ? sec : `0${sec}`}`;
}
