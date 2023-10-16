import { useEffect } from "react";

export function useHideList(id, handler) {
  useEffect(() => {
    function handleScroll() {
      handler();
      document.removeEventListener("wheel", handleScroll);
    }

    if (id) document.addEventListener("wheel", handleScroll);

    return () => document.removeEventListener("wheel", handleScroll);
  }, [id, handler]);
}
