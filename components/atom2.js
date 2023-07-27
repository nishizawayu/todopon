// recoilAtoms.js
import { atom } from 'recoil';

export const gatyaState = atom({
    key: 'gstate',
    default: 'Hello, Recoil!',
});