import React from "react";
import ReactPaginate from "react-paginate";
import s from "./Pagination.module.scss";

type PaginationProps = {
  currentPage:number;
  onChangePage:any;
}

const Pagination:React.FC<PaginationProps> = ({ onChangePage, currentPage }) => {
  return (
    <ReactPaginate
      className={s.root}
      breakLabel="..."
      nextLabel=" >"
      previousLabel="< "
      onPageChange={(e) => onChangePage(e.selected + 1)}
      forcePage={currentPage - 1}
      pageRangeDisplayed={8}
      pageCount={3}
    />
  );
};

export default Pagination;
