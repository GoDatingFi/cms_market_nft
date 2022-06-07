import { useMemo, useCallback } from "react";
import Styled from "./index.style";
import ChevLeftSvg from "assets/images/icons/chevLeft.svg";
import ChevRightSvg from "assets/images/icons/chevRight.svg";

interface Props {
  page: number;
  totalPage: number;
  click: (selectPage: number) => void;
  className?: string;
}

const Pagination = ({ page, totalPage, click, className }: Props) => {
  const renderNumbers = useMemo(() => {
    let pages: (string | number)[] = [];
    for (let i = 1; i <= totalPage; i++) {
      let offset = (i == 1 || totalPage) && 1;
      if (
        i == 1 ||
        (page - offset <= i && page + offset >= i) ||
        i == page ||
        i == totalPage
      ) {
        pages.push(i);
      } else if (i == page - (offset + 1) || i == page + (offset + 1)) {
        pages.push("...");
      }
    }
    return pages.map((p, index) => {
      if (typeof p === "string") {
        return <span key={p + index}>{p}</span>;
      }
      return (
        <Styled.NumberBox
          key={p}
          isActive={page === p}
          onClick={() => click(p)}
        >
          {p}
        </Styled.NumberBox>
      );
    });
  }, [click, page, totalPage]);

  const handlePrev = useCallback(() => {
    if (page > 1) {
      click(page - 1);
    }
  }, [click, page]);

  const handleNext = useCallback(() => {
    if (page < totalPage) {
      click(page + 1);
    }
  }, [click, page, totalPage]);

  return (
    <Styled.Container className={className}>
      <Styled.Navigate onClick={handlePrev} disabled={!totalPage || page === 1}>
        <ChevLeftSvg width={24} height={24} />
      </Styled.Navigate>
      {renderNumbers}
      <Styled.Navigate
        onClick={handleNext}
        disabled={!totalPage || page === totalPage}
      >
        <ChevRightSvg width={24} height={24} />
      </Styled.Navigate>
    </Styled.Container>
  );
};

export default Pagination;
