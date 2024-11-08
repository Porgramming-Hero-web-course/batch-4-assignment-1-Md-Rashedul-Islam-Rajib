{
  const removeDuplicates = (numArray: number[]): number[] => {
    const uniArray: number[] = [];
    numArray.forEach((num) => {
      if (!uniArray.includes(num)) {
        uniArray.push(num);
      }
    });
    return uniArray;
  };
}
