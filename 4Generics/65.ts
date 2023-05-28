// Awaited
type FromPromise = Awaited<Promise<number>>;

interface User {
  name: string;
}

async function fetchUser(): Promise<User[]> {
  const users: User[] = [
    {
      name: "Alex",
    },
  ];

  return users;
}

const users = fetchUser();

type FetchUsersReturnType = Awaited<ReturnType<typeof fetchUser>>;

type UnwrappedPromise<T> = T extends Promise<infer Return> ? Return : T;
type FetchDataReturnType = UnwrappedPromise<ReturnType<typeof fetchUser>>;

export {};
