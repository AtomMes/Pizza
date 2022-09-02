
import { configureStore } from "@reduxjs/toolkit";
import slice from './redux'


export const store = configureStore({
  reducer: { slice },
});

export type RootState = ReturnType<typeof store.getState>;//RootState-n veragrum enq stori sliceri typerin es kodov, aumenq typeof store.getState aysinq getStateic ekaci typen,
//heto slice-um selector sarqelu jamanak erb vor state vercnenq type talis enq RootState, heto inqy qani vor vercnuma state veradardznum state.slice(merSlicen eli), inqy avtomat vercnuma chisht type, mtnel store.js hovernerov stugel jogel 


// type AppDispatch = typeof store.dispatch 
// export const useAppDispatch = () => useDispatch<AppDispatch>()