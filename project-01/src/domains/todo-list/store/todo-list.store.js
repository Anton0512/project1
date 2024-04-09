import { atom } from 'jotai';

export const dataUser = atom([
  {
    id: 1,
    name: 'Mykola',
    surname: 'First',
    age: 30,
    role: 'admin',
    password: '12345678',
    email: 'test@test.com',
  },
  {
    id: 2,
    name: 'Nina',
    surname: 'Loy',
    age: 25,
    role: 'user',
    password: '1222345678',
    email: 'tes2t@test.com',
  },
  {
    id: 3,
    name: 'Jaison',
    surname: 'Born',
    age: 45,
    role: 'user',
    password: '1d222345678',
    email: 'tes3t@test.com',
  },
]);

export const modalActiveAtom = atom(false);
export const modalUserDataAtom = atom({});
export const modalIsEditDataAtom = atom(false);
