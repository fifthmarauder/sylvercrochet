import { useState, useMemo } from "react";

export const usePagination = <T>(items: T[], pageSize: number) => {
  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(items.length / pageSize);

  const paginated = useMemo(() => {
    const start = (page - 1) * pageSize;
    return items.slice(start, start + pageSize);
  }, [items, page, pageSize]);

  const goTo = (p: number) => setPage(Math.min(Math.max(1, p), totalPages));
  const reset = () => setPage(1);

  return { page, totalPages, paginated, goTo, reset };
};
