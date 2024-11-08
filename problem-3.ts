{
  // Create a TypeScript function called countWordOccurrences that accepts a sentence (string) and a word (string). The function should return the number of times the word appears in the sentence, ignoring case. Use the simple sentence without punctuation as input.

  const countWordOccurrences = (
    mainString: string,
    subString: string
  ): number => {
    return mainString.split(subString).length - 1;
  };

  // Sample Input:
  console.log(countWordOccurrences("I love typescript", "typescript"));

  // Sample Output:
  1;


}