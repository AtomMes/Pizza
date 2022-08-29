import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"; //import enq anum redux toolkitic es 2 y

export const fetchPizzas = createAsyncThunk(
  //create enq anum asynxronni thunk vor sranov zapros anenq,
  "pizza/fetchPizzasStatus",
  async (params) => {
    //yndunuma parametrer, yani propser
    const { category, sortBy, order, currentPage } = params;
    const { data } = await axios.get(
      `https://62f5fea50612c13062b44104a.mockapi.io/items?page=${currentPage}&limit=8&${category}&sortBy=${sortBy}&order=${order}`
    );
    return data; //u return enq anum
  }
);

const initialState = {
  //initial state, et nuyn state-n a prosty skzbnakan
  items: [], //skzbum itemner chunenq
  status: "loading", // loading , success, error
};

const pizzaSlice = createSlice({
  //create enq anum slice
  name: "pizza", //talis enq partadir name
  initialState, //aysinq state-n havasara initialState-i
  reducers: {
    //stex arden dispatchum kanchvox funkcianern en, reducernery
    setItems(state, action) {
      state.items = action.payload; //asum enq vor es funkcian kanchi itemnery action.payload-in havasaracni
    },
  },
  extraReducers: {
    //sranq extra reducernern en vor loadingi, succesi kam errori jamanak asenq incher anen
    [fetchPizzas.pending]: (state) => {
      //fetchPizzas(mer asyncthunki anuny) asum enq ete pendinga(loadinga) state-i status loading sarqi
      state.status = "loading";
      state.items = [];
    },
    [fetchPizzas.fulfilled]: (state, action) => {
      //ete success a itemnery actioni payload sarqi
      state.items = action.payload;
      state.status = "success"; //meke status success
    },
    [fetchPizzas.rejected]: (state, action) => {
      //ere errora status error
      state.status = "error";
      state.items = [];
    },
  },
});

export const { setItems } = pizzaSlice.actions; //export enq anum reducerneri meji funkcianery vor dispatchov kanchenq

export const selectPizzaData = (state) => state.pizza; //selector enq sarqum vor ete mi qanitexa petq gali es danninery voch te esqany grenq ayl prosty grenq selectPizzaData,
//orinak const {items} = useSelector(selectPizzaData)

export const selectPizzaById = (id) => (state) =>
  state.pizza.items.find((obj) => obj.id === id.id); //ete nenc reducera vor iran inch vor parametr en tali(orinak id) et jamanak funkcian sarqum enq es dzevov, vor karena ham state vercni hame id, urish dzevel kar bayc chem hishm + sirun cher

export default pizzaSlice.reducer; //default enq export anum vor store-um import anenq
