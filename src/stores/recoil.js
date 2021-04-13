import { atom, selector } from "recoil";

export const loginState = atom({
  key: "loginState",
  default: false,
});

export const loggedIn = selector({
  key: "loggedIn",
  get: ({ get }) => {
    const login = get(loginState);
    console.log("sadsa");
    return !login;
  },
});
