import { STORAGEKEY } from "./KEY";

const Auth = localStorage.getItem(STORAGEKEY);
export const isLoggedIn = Auth !== null && Auth !== 'undefined';