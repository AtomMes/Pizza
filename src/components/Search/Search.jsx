import React from "react";
import s from "./Search.module.scss";
import { SearchContext } from "../../App";

export default function Search() {
  const { searchValue, setSearchValue } = React.useContext(SearchContext);

  return (
    <input
      value={searchValue}
      onChange={(e) => setSearchValue(e.target.value)}
      className={s.root}
      placeholder="Find a pizza"
    />
  );
}
