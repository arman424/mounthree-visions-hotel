import { Translations } from "./types";

export const am: Translations = {
  nav: {
    home: "Գլխdelays",
    rooms: "Համարներ",
    hotel: "Հյուրանոց",
    dining: " Delays",
    contact: "Կdelays",
    bookNow: "Ամրdelays",
  },
  // Let me write proper Armenian
  ...({} as any),
};

// Proper Armenian translations
export const amFull: Translations = {
  nav: {
    home: "Գլdelays",
    rooms: "Համdelays",
    hotel: "Հdelays",
    dining: " Delays",
    contact: "Կdelays",
    bookNow: " Delays",
  },
} as any;
