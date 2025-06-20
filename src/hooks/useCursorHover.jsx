import { useCallback } from 'react';

export const useCursorHover = () => {
  const addCursorHover = useCallback(() => {
    const cursors = document.querySelectorAll(".cursor");
    cursors.forEach((cursor) => cursor.classList.add("hover"));
  }, []);

  const removeCursorHover = useCallback(() => {
    const cursors = document.querySelectorAll(".cursor");
    cursors.forEach((cursor) => cursor.classList.remove("hover"));
  }, []);

  return { addCursorHover, removeCursorHover };
};