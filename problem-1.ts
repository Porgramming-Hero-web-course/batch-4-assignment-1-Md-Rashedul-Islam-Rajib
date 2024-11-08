{
  const sumArray = (numArray: number[]): number => {
    let count = 0;
    numArray.forEach((num) => (count += num));
    return count;
  };
}
