import { atom } from "recoil";

export const currentCategoryState = atom({
  key: "currentCategoryState",
  default: 1,
});

export const cardsState = atom({
  key: "cardsState",
  default: [],
});

export const selectedRecipeState = atom({
  key: "selectedRecipeState",
  default: 0,
});
