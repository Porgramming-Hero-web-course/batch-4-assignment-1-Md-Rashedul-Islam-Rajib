{
  const getProperty = <T extends object>(obj: T, key: keyof T) => {
    return obj[key];
  };
}
