import { useEffect, useState } from "react";

function useBookmarks() {
  const [bookmarks, setBookmarks] = useState(() => {
    const saved = localStorage.getItem("bookmarks");

    try {
      const parsedBookmarks = saved ? JSON.parse(saved) : [];

      return Array.isArray(parsedBookmarks) ? parsedBookmarks : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  }, [bookmarks]);

  const toggleBookmark = (id) => {
    setBookmarks((currentBookmarks) =>
      currentBookmarks.includes(id)
        ? currentBookmarks.filter((item) => item !== id)
        : [...currentBookmarks, id]
    );
  };

  return {
    bookmarks,
    toggleBookmark,
  };
}

export default useBookmarks;
