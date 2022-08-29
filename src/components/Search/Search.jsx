import React from "react";
import s from "./Search.module.scss";
import { SearchContext } from "../../App";
import debounce from "lodash.debounce";

export default function Search() {
  
  const [value, setValue] = React.useState('')
  const { searchValue, setSearchValue } = React.useContext(SearchContext);

  
  const onChangeInput = event => {
    setValue(event.target.value)
    updateSearchValue(event.target.value)
  }
  
  const updateSearchValue = React.useCallback(
    debounce((str) => {
      setSearchValue(str);
    }, 250),
    []
  );
  
  return (
    <input
      value={value}
      onChange={onChangeInput}
      className={s.root}
      placeholder="Find a pizza"
    />
  );
}
