import Styled from "./index.style";
import { ReactNode, useCallback, useEffect, useMemo, useState } from "react";
import cx from "classnames";
import { Cell, SortTable, TableSort } from "utils/interfaces";
import SortUpSvg from "assets/images/icons/sortUp.svg";
import SortDownSvg from "assets/images/icons/sortDown.svg";

interface Props {
  columns: Cell[];
  data: any[];
  className?: string;
  emptyText?: ReactNode;
  onSort?: (sort: TableSort) => void;
  sort?: string;
  loading?: boolean;
  onScroll?: (e: any) => void;
}

const sortOrder: SortTable[] = ["", "asc", "desc"];

const Table = ({
  columns,
  data,
  className,
  emptyText,
  onSort,
  sort,
  loading,
  onScroll,
}: Props) => {
  const [sortState, setSortState] = useState<TableSort>({
    field: "",
    value: "",
  });

  useEffect(() => {
    if (sort) {
      const [field, value] = sort?.split(":");
      setSortState({
        field,
        value: value as SortTable,
      });
    }
  }, [sort]);

  const handleSort = useCallback(
    (field: string) => {
      let value: SortTable;
      if (sortState.field !== field) {
        value = "asc";
      } else {
        let nextSortTypeIndex: number;
        const sortTypeIndex = sortOrder.indexOf(sortState.value);
        if (sortTypeIndex === sortOrder.length - 1) {
          nextSortTypeIndex = 0;
        } else {
          nextSortTypeIndex = sortTypeIndex + 1;
        }
        value = sortOrder[nextSortTypeIndex];
      }

      setSortState({ field, value });
      onSort?.({ field, value });
    },
    [onSort, sortState],
  );

  const renderHeader = useMemo(() => {
    const rowHead = columns.map((col) => {
      return (
        <Styled.HeaderCell className="table-header-cell" key={col.field}>
          {col.isSort ? (
            <Styled.HeaderCellInner onClick={() => handleSort(col.field)}>
              {col.headerName}
              <Styled.SortWrap
                sort={col.field === sortState.field ? sortState.value : ""}
              >
                <SortUpSvg className="sort-desc" width={11} height={6} />
                <SortDownSvg className="sort-asc" width={11} height={6} />
              </Styled.SortWrap>
            </Styled.HeaderCellInner>
          ) : (
            col.headerName
          )}
        </Styled.HeaderCell>
      );
    });
    return <tr>{rowHead}</tr>;
  }, [columns, handleSort, sortState.field, sortState.value]);

  const renderRow = useCallback(
    (data: any, index: number) => {
      return columns.map((col) => {
        return (
          <Styled.BodyCell
            key={col.field}
            className="table-body-cell"
            alignContent={col.align}
          >
            {col.renderCell({ value: data?.[col.field] }, data, index)}
          </Styled.BodyCell>
        );
      });
    },
    [columns],
  );

  const renderBody = useMemo(() => {
    if (data?.length) {
      return data.map((dt, index) => (
        <Styled.BodyRow key={index} className="table-body-row">
          {renderRow(dt, index)}
        </Styled.BodyRow>
      ));
    }
    return (
      <tr>
        <td colSpan={9999}>{emptyText}</td>
      </tr>
    );
  }, [data, emptyText, renderRow]);

  return (
    <Styled.Container className={cx("table-container", className)}>
      <Styled.TableHeaderOverlay className="table-header-overlay" />
      <Styled.Wrap className="table-wrap" onScroll={onScroll}>
        <Styled.Table className="table">
          <thead className="table-header">{renderHeader}</thead>
          <tbody className="table-body">
            {renderBody}
            {loading && (
              <tr>
                <Styled.SpinnerRow colSpan={9999}>
                  <Styled.DotSpinner width={40} height={40} />
                </Styled.SpinnerRow>
              </tr>
            )}
          </tbody>
        </Styled.Table>
      </Styled.Wrap>
    </Styled.Container>
  );
};

export default Table;
