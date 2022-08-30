
//!CallBack

function myFunc(callback){//parametr yndunec (2)
    const a = [a,b,c]
    let element = document.querySelector('div')
    callback(element, a)//parametric ekac funkcian kanchuma urish parametrera tali (3)
}


function out(elem,arr){
    elem.innerHTML = arr.join('')
}//parametri funkcian  (4)


myFunction(out)//kanchum enq funkcian parametr talis urish funkcia (1)