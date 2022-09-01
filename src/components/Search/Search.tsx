import React from "react";
import s from "./Search.module.scss";
import debounce from "lodash.debounce";
import { useDispatch } from "react-redux";
import { setSearchValue } from "../../redux/filter/slice";

const Search:React.FC = () =>  {

  const dispatch = useDispatch()
  const [value, setValue] = React.useState("");

  const onChangeInput = (event:React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    updateSearchValue(event.target.value);
  };

  const updateSearchValue = React.useCallback(
    debounce((str:string) => {
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

export default Search
