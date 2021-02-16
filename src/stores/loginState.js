import { atom } from "recoil";

export const loadingState = atom({
  key: "loadingState",
  default: false,
});

export const isLoggedinState = atom({
  key: "isLoggedinState",
  default: false,
});
