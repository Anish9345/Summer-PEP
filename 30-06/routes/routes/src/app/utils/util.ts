export interface User {
    id: number;
    name: string;
    email: string;
    password: string;
}

export const users: User[] = [
    {
        id: 1,
        name: 'John Doe',
        email: 'john.doe@example.com',
        password: 'password123'
    },
    {
        id: 2,
        name: 'Jane Smith',
        email: 'jane.smith@example.com',
        password: 'password456'
    },
    {
        id: 3,
        name: 'Alice Johnson',
        email: 'alice.johnson@example.com',
        password: 'password789'
    },
    {
        id: 4,
        name: 'Bob Brown',
        email: 'bob.brown@example.com',
        password: 'password012'
    }
];

export const buttonSizes = {
  SM : 'h-[35px] w-50 text-sm',
  MD : 'h-[40px] w-60 text-md',
  LG : 'h-[45px] w-70 text-lg',
  XL : 'h-[50px] w-80 text-xl'
};

const buttonTypes = {
  PRIMARY: 'bg-blue-500 hover:bg-blue-700 text-white',
  SUCCESS: 'bg-green-500 hover:bg-green-700 text-white',
  WARNING: 'bg-yellow-500 hover:bg-yellow-700 text-white',
  DANGER: 'bg-red-500 hover:bg-red-700 text-white',
};

export const buttonConfig = {
  sizes: buttonSizes,
  types: buttonTypes,
};