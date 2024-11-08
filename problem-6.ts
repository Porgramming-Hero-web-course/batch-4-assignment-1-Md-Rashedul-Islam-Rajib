{
  // Define an interface Profile with properties name, age, and email. Create a function updateProfile that accepts an object of type Profile and an object of type Partial representing the updates. The function should return the updated profile.

  interface Profile {
    name: string;
    age: number;
    email: string;
  }

  const updateProfile = (
    profile: Profile,
    update: Partial<Profile>
  ): Profile => {
    return { ...profile, ...update };
  };

  const myProfile: Profile = {
    name: "Alice",
    age: 25,
    email: "alice@example.com",
  };

  const updatedProfile = updateProfile(myProfile, { age: 26 });
  console.log(updatedProfile);
  // Expected output: { name: "Alice", age: 26, email: "alice@example.com" }

  const anotherUpdate = updateProfile(myProfile, {
    email: "alice.new@example.com",
  });
  console.log(anotherUpdate);
  // Expected output: { name: "Alice", age: 25, email: "alice.new@example.com" }
}