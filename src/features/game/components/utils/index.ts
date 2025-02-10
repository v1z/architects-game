export const generateArrayOfArrays = (size: number) => {
  const result = [];
  let counter = 0;

  for (let i = 0; i < size; i++) {
      const innerArray = [];

      for (let j = 0; j < size; j++) {
          innerArray.push(counter);
          counter++;
      }

      result.push(innerArray);
  }

  return result;
}
