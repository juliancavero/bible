import useGetMissingChapterDates from "@/api/Chapters/useGetMissingSaintDates";
import useGetMissingSaintDates from "@/api/Saints/useGetMissingSaintDates";
import useGetStats from "@/api/Stats/useGetStats";
import { BibleContext } from "@/context/custom/bible";
import useNav from "@/hooks/useNav";
import { daysPerMonth, months } from "@/utils/calendar";
import { useContext, useMemo, useState } from "react";

const useHome = () => {
  const { navigate } = useNav();
  const { bibleBooks } = useContext(BibleContext);
  const { data: saintDates } = useGetMissingSaintDates();
  const { data: chapterDates } = useGetMissingChapterDates();
  const { data: stats } = useGetStats();
  const todaysMonth = new Date().getMonth() + 1;
  const [renderMonth, setRenderMonth] = useState(todaysMonth);
  const [renderBook, setRenderBook] = useState(bibleBooks[0].path);

  const handlePreviousMonth = () => {
    setRenderMonth((prev) => (prev === 1 ? 12 : prev - 1));
  };

  const handleNextMonth = () => {
    setRenderMonth((prev) => (prev === 12 ? 1 : prev + 1));
  };

  const handlePreviousBook = () => {
    const index = bibleBooks.findIndex((book) => book.path === renderBook);
    if (index <= 0) {
      setRenderBook(bibleBooks[bibleBooks.length - 1].path);
    } else {
      setRenderBook(bibleBooks[index - 1].path);
    }
  };

  const handleNextBook = () => {
    const index = bibleBooks.findIndex((book) => book.path === renderBook);
    if (index >= bibleBooks.length - 1) {
      setRenderBook(bibleBooks[0].path);
    } else {
      setRenderBook(bibleBooks[index + 1].path);
    }
  };

  const onSaintsDayClick = (day: number) => {
    navigate(`/create-saint?day=${day}&month=${renderMonth}`);
  };

  const onCalendarChapterClick = (numb: number) => {
    navigate(`/create-chapter?book=${renderBook}&chapter=${numb}`);
  };

  const monthDays = useMemo(() => {
    return (
      daysPerMonth.find((month) => Number(month.month) === renderMonth)?.days ||
      1
    );
  }, [renderMonth]);

  const bookChapters = useMemo(() => {
    return bibleBooks.find((book) => book.path === renderBook)?.chapters || 1;
  }, [renderBook]);

  const missingDates = useMemo(() => {
    if (!saintDates) return [];
    return saintDates
      .filter((date) => date.month === renderMonth)
      .map((date) => date.day);
  }, [renderMonth, saintDates]);

  const missingChapters = useMemo(() => {
    if (!chapterDates) return [];
    return (
      chapterDates.find((date) => date.book === renderBook)?.chapters || []
    );
  }, [renderBook, chapterDates]);

  const todaysMonthName = useMemo(() => {
    return months.find((month) => Number(month.value) === renderMonth)?.label;
  }, [renderMonth]);

  const bookName = useMemo(() => {
    return bibleBooks.find((book) => book.path === renderBook)?.name;
  }, [renderBook]);

  return {
    handlePreviousMonth,
    handleNextMonth,
    onSaintsDayClick,
    monthDays,
    missingDates,
    todaysMonthName,
    renderBook,
    bookChapters,
    bookName,
    stats,
    missingChapters,
    handlePreviousBook,
    handleNextBook,
    onCalendarChapterClick,
  };
};

export default useHome;
