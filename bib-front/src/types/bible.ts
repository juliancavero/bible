import { Saint } from "./saints";

export type BibleContextType = {
  bibleBooks: BibleBookType[];
  oldBooks: BibleBookType[];
  newBooks: BibleBookType[];
};

export type FavouriteChapterContextType = {
  favChapters: FavouriteChapterType[];
  addToFav: (chapter: FavouriteChapterType) => void;
  removeFromFav: (chapter: FavouriteChapterType) => void;
  isChapterFav: (book: BibleBookType, chapter: number) => boolean;

  favSaints: Saint[];
  addToFavSaint: (saint: Saint) => void;
  removeFromFavSaint: (saint: Saint) => void;
  isSaintFav: (saint: Saint) => boolean;
};

export type BibleBookType = {
  name: string;
  chapters: number;
  order: number;
  segment: Segments;
  path: string;
};

export enum Segments {
  Old = "old",
  New = "new",
}

export type FavouriteChapterType = {
  bibleBook: BibleBookType;
  chapter: number;
};

export type FavouriteSaintType = {
  saint: Saint;
};

export type Chapter = {
  id: number;
  book: string;
  chapter: number;
  text: string;
  createdAt: number;
};

export type Teaching = {
  id: number;
  book: string;
  chapter: number;
  text: string;
  createdAt: number;
};
