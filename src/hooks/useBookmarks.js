import { useEffect, useState } from "react";

function useBookmarks() {
  const [bookmarks, setBookmarks] = useState(() => {
    const saved = localStorage.getItem("bookmarks");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  }, [bookmarks]);

  const toggleBookmark = (id) => {
    if (bookmarks.includes(id)) {
      setBookmarks(bookmarks.filter((item) => item !== id));
    } else {
      setBookmarks([...bookmarks, id]);
    }
  };

  return {
    bookmarks,
    toggleBookmark,
  };
}

export default useBookmarks;