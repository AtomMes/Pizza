import react from "react"
import { fetchPizzas, setItems } from "./pizzaSliceTest"

import {useSelector,//nra hamara vor state-n qashenq(store-ic)
     useDispatch//dispatch anelu hamara
} from 'react-redux'

const b = () => {

    const dispatch = useDispatch()
    const { items, status } = useSelector((state) => state.pizza);//state-i pizzasiv(vor store um import enq arel) qashum enq items, u statusy 
    

    function a() {
        dispatch(fetchPizzas(params))//fetchPizzas-y kanchum enq, karanq parametrer tanq u ynde ogtagorcenq, iran parametr enq tali vorovhetev inqy asyncThunk a u dranov inch vor zaprosa stexcelu(zaprosi parametr enq tali)
        dispatch(setItems([1,2,3]))//setItems-y kanchum enq danniner enq tali(vor heto action.payload-ic qashenq) iran danniner enq tali vorovhetev inqy reducera u inqy et reducerov state-n poxelu a (action.payload)
    }




}