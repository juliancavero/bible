export type BibleContextType = {
  bibleBooks: BibleBook[];
};

export type BibleBook = {
  name: string;
  chapters: number;
  order: number;
  segment: Segments;
  path: string;
};

export enum Segments {
  Old = "Old",
  New = "New",
}

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

export type MissingChapters = {
  book: string;
  chapters: number[];
};
