import { VerticalArrow } from "@/components/Icons/Arrows";
import { Collapsible, CollapsibleContent } from "@/components/ui/collapsible";
import { BibleBookType } from "@/types/bible";
import { CollapsibleTrigger } from "@radix-ui/react-collapsible";
import { useState } from "react";

type BookType = {
  book: BibleBookType;
  colored: boolean;
  onChapterSelect: (book: string, chapter: number) => void;
};

const Book = ({ book, colored, onChapterSelect }: BookType) => {
  const [open, setOpen] = useState(false);

  return (
    <Collapsible
      open={open}
      onOpenChange={setOpen}
      className={`duration-100 ${
        open && "outline outline-black dark:outline-white p-3"
      }`}
    >
      <CollapsibleTrigger
        className={`flex flex-row items-center justify-between w-full p-1 ${
          colored
            ? "bg-indigo-100 dark:bg-gray-800"
            : "bg-white dark:bg-primary-darkforeground"
        }`}
      >
        <span
          className={`duration-300 ease-in-out ${open && "text-xl font-bold"}`}
        >
          {book.name}
        </span>
        {open ? <VerticalArrow dir="up" /> : <VerticalArrow dir="down" />}
      </CollapsibleTrigger>
      <CollapsibleContent>
        <div
          className={`grid grid-cols-5 md:grid-cols-10 gap-3 px-2 py-3 
            ${open ? "bg-white dark:bg-gray-800" : ""}
            `}
        >
          {Array.from({ length: book.chapters }, (_, index) => (
            <div
              key={index}
              onClick={() => onChapterSelect(book.path, index + 1)}
              className="p-2 text-center cursor-pointer bg-gray-200 
              dark:bg-primary-darkforeground dark:text-gray-200
              rounded-lg hover:bg-gray-400 dark:hover:bg-gray-900"
            >
              {index + 1}
            </div>
          ))}
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
};

export default Book;
