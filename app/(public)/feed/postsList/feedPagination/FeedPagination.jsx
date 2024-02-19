"use client";

import { useCallback } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import Pagination from "@mui/material/Pagination";

export default function FeedPagination({ pagesCount }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (name, value) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  const goToPage = (e, page) => {
    router.push(pathname + "?" + createQueryString("page", page));
  };

  return <Pagination count={pagesCount} color="primary" onChange={goToPage} />;
}
