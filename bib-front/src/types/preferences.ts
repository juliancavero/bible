export type AppFontSizes = "default" | "medium" | "large";

export enum BibleVersions {
  nvi = "Nueva Versión Internacional",
  rv1909 = "Reina Valera 1909",
  torresAmat = "Biblia Torres Amat",
  freeWorld = "Santa Biblia Libre para el Mundo",
}

export enum BiblePadding {
  small = "Estrecho",
  default = "Automático",
}

export type PreferencesType = {
  fontSize: AppFontSizes;
  bibleVersion: BibleVersions;
  biblePadding: BiblePadding;
};
