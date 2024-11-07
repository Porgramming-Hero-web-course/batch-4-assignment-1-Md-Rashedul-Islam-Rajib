{
  // Create a function validateKeys(obj: T, keys: (keyof T)[]) that takes an object obj and an array of keys keys. The function should return true if all of the specified keys exist in the object; otherwise, it should return false.

  const validateKeys = <T extends object>(obj: T, keys: (keyof T)[]) => {
    for (let key of keys) {
      if (!(key in obj)) {
        return false;
      }
      }
      return true;
  };

  // Define test objects
  const user = {
    name: "Alice",
    age: 30,
    email: "alice@example.com",
  };

  const product = {
    id: 123,
    name: "Laptop",
    price: 1000,
  };

  // Test cases
  console.log(validateKeys(user, ["name", "age"])); // Expected: true (both "name" and "age" are present)
  console.log(validateKeys(user, ["name", "address"])); // Expected: false ("address" is missing)
  console.log(validateKeys(user, ["email"])); // Expected: true ("email" is present)
  console.log(validateKeys(user, ["age", "email", "name"])); // Expected: true (all keys are present)

  console.log(validateKeys(product, ["id", "name"])); // Expected: true (both "id" and "name" are present)
  console.log(validateKeys(product, ["id", "category"])); // Expected: false ("category" is missing)
  console.log(validateKeys(product, ["price"])); // Expected: true ("price" is present)
  console.log(validateKeys(product, ["name", "price", "id"])); // Expected: true (all keys are present)
}