{
  // Write a generic function getProperty that takes an object and a property name as arguments and returns the property value. Add a constraint to ensure the property name exists on the object.

  const getProperty = <T extends object>(obj: Text, key: keyof T) => {
    return obj[key];
  };

  interface Profile {
    name: string;
    age: number;
    email: string;
  }

  const myProfile: Profile = {
    name: "Alice",
    age: 25,
    email: "alice@example.com",
  };

  console.log(getProperty(myProfile, "name")); // Expected output: "Alice"
  console.log(getProperty(myProfile, "age")); // Expected output: 25
  console.log(getProperty(myProfile, "email")); // Expected output: "alice@example.com"
}