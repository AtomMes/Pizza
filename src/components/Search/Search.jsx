import React from "react";
import s from "./Search.module.scss";
import { SearchContext } from "../../App.tsx";
import debounce from "lodash.debounce";
import { useDispatch } from "react-redux";
import { setSearchValue } from "./../../redux/slices/filterSlice";

export default function Search() {

  const dispatch = useDispatch()
  const [value, setValue] = React.useState("");

  const onChangeInput = (event) => {
    setValue(event.target.value);
    updateSearchValue(event.target.value);
  };

  const updateSearchValue = React.useCallback(
    debounce((str) => {
      dispatch(setSearchValue(str));
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
