// recoilAtoms.js
import { atom } from 'recoil';

export const gatyaState = atom({
    key: 'gstate',
    default: [1,2,3],
});