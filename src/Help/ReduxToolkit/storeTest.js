import { configureStore } from "@reduxjs/toolkit";
import pizza from ".pizzaSliceTest";//import enq anum pizzan 

export const store = configureStore({//store i mej enq qcum vor heto karenanq qashenq
  reducer: { pizza },
});


