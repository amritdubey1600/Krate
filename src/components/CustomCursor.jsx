import { useEffect } from 'react';

const CustomCursor = () => {
  useEffect(() => {
    const cursors = document.querySelectorAll(".cursor");

    const moveCursor = (e) => {
      const x = e.clientX;
      const y = e.clientY;

      cursors.forEach((cursor) => {
        cursor.style.left = `${x}px`;
        cursor.style.top = `${y}px`;
      });
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <>
      <div className="cursor outer"></div>
      <div className="cursor inner"></div>
    </>
  );
};

export default CustomCursor;