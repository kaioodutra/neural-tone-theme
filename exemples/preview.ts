type ID = number | string;

interface User {
  id: ID;
  name?: string;
  age: number;
  createdAt: Date;
  role: Role;
  isActive: boolean;
  [key: string]: unknown; // Allow additional properties
}
enum Role {
  Admin,
  User,
}

class Service {
  constructor(private data: User[]) {}
  getNames = (): string[] => this.data.map((u) => u.name ?? "Anon");
}

const users: User[] = [
  {
    id: 1,
    name: "John Due",
    age: 30,
    createdAt: new Date(),
    role: Role.Admin,
    isActive: true,
  },
];
const service = new Service(users);

function getValue<T>(key: keyof User, u: User): T {
  return u[key] as T;
}

// Example usage
console.log(service.getNames(), getValue<string>("name", users[0]));
