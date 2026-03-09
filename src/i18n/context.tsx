import { createContext, useContext, useState, ReactNode } from "react";
import { Lang, Translations } from "./types";
import { en } from "./en";
import { ru } from "./ru";
import { am } from "./am";

const translations: Record<Lang, Translations> = { en, ru, am };

interface I18nContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Translations;
}

const I18nContext = createContext<I18nContextType>({
  lang: "en",
  setLang: () => {},
  t: en,
});

export const I18nProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>(() => {
    const stored = localStorage.getItem("lang") as Lang | null;
    return stored && translations[stored] ? stored : "en";
  });

  const handleSetLang = (newLang: Lang) => {
    setLang(newLang);
    localStorage.setItem("lang", newLang);
  };

  return (
    <I18nContext.Provider value={{ lang, setLang: handleSetLang, t: translations[lang] }}>
      {children}
    </I18nContext.Provider>
  );
};

export const useI18n = () => useContext(I18nContext);
