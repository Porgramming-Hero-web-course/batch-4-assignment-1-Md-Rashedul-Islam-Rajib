{
  const countWordOccurrences = (
    mainString: string,
    subString: string
  ): number => {
    return mainString.split(subString).length - 1;
  };
}
