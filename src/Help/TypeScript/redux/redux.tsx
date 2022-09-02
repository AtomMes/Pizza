import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./reduxStore";

export enum SortPropertyEnum {//enum-y da voncor popoxakanneri xumba, vor ete mi or uzenq voch te title exni ayl name, ste poxenq u amen tex poxvi vorovhetev amen tex popoxakanna ogtagorcvum
    RATING_DESC = 'rating',
    RATING_ASC = '-rating',
    PRICE_DESC = 'price',
    PRICE_ASC = '-price',
    TITLE_DESC = 'title',
    TITLE_ASC = '-title',
  }

type i = {
    categoryId:number
}
interface j{//interface-ov elenq type stexcum bayc interfacen anpayman yndunuma {} obj, isk type-n amen inch orinak masiv
    categoryId:number
}//es u i-n nuyn bann en 


const initialState:j = {//initial state-in type enq talis, sovorakan dzevov
    categoryId:1
}



const someSlice:any = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setCategoryId(state, action: PayloadAction<number>) {//actionin partadir petqa tanq type PayloadAction, u te incha stanum, es pahin numbera payload actiony
      state.categoryId = action.payload;
    },
  },
});


export const selectPizzaData = (state: RootState) => state.slice;//selectorin type enq talis, inqy qani vor state vercnuma voch te mer moti staten ayl store-i staten, store-um stexcum enq rootState, heto et rootState,ic ste qashum enq mer slice-i typery typery, state => state.slice gracov vercnum enq sliceri typery


export default someSlice