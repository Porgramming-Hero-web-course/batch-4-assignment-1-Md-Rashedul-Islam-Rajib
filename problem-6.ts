{
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
}
