import React from "react";


import { useSelector, useDispatch } from "react-redux";
import { setCategoryId, setCurrentPage } from "../redux/slices/filterSlice";


import Categories from "../components/Categories";
import Sort from "../components/Sort";
import PizzaBlock from "../components/PizzaBlock/PizzaBlock";
import { Skeleton } from "../components/PizzaBlock/Skeleton";
import Pagination from "../components/Pagination/Pagination";


import { SearchContext } from "../App";
import axios from "axios";

export const Home = () => {
  const dispatch = useDispatch();

  const {categoryId, sort, currentPage} = useSelector((state) => state.filter);      

  // const categoryId = useSelector((state) => state.filter.categoryId);
  // const sortType = useSelector((state) => state.filter.sort.sortProperty);
  
  
  const onChangeCategory = (id) => {
    dispatch(setCategoryId(id))
  };

  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);


  

  React.useEffect(() => {
    setIsLoading(true);

    const order = sort.sortProperty.includes("-") ? "asc" : "desc";
    const sortBy = sort.sortProperty.replace("-", "");
    const category = categoryId > 0 && `category=${categoryId}`;

    axios.get(`https://62f5fe50612c13062b44104a.mockapi.io/items?page=${currentPage}&limit=8&${category}&sortBy=${sortBy}&order=${order}`).then(res => {
      setItems(res.data)
      setIsLoading(false)
    })  
    window.scrollTo(0, 0);
  }, [categoryId, sort.sortProperty, currentPage]);

  const { searchValue, setSearchValue } = React.useContext(SearchContext);

  const pizzas = items
    .filter((obj) => obj.name.toLowerCase().includes(searchValue.toLowerCase()))
    .map((obj) => <PizzaBlock key={obj.id} {...obj} />);
  const skeletons = [...new Array(8)].map((_, index) => (
    <Skeleton key={index} />
  ));

    const onChangePage = (number) => dispatch(setCurrentPage(number))

  return (
    <div className="container">
      <div className="content__top">
        <Categories value={categoryId} onChangeCategory={onChangeCategory} />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">{isLoading ? skeletons : pizzas}</div>
      <Pagination onChangePage={onChangePage} currentPage={currentPage} />
    </div>
  );
};
