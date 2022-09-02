import React from "react";
import ReactDOM from "react-dom/client";
//! function, funkcia, props, useState,

export type XType = {
    //type enq stexcum vor heto karenanq ham miangamic es type-n grenq voch te sra meji exacy(sirun chi), hamel vor karenanq nuyn typen tarber texer ogtagorcenq export importov
    name: string;
    id: number;
  };
  
  const x: React.FC<string> = (some) => {
    //funkciain type talu hamar verjaket enq dnum, grum inch tipia, bolor funkcionalni komponentnerin cankalia tal React.FC, et reacti stexcac type a, heto funckiain type taluc heto pakagcerum grum enq propseri typery, orinak ete grel em string iran chen kara heto ov vor kanchi urish dzevi arjeq ta(hoveri jamanak gruma vor stringa inqy)
  
    //karam ste xType-i texy grem ira meji exacy verevi, nuyn bany klini, sovorakan popoxakani nmana asxhatum
    const [item, setItem] = React.useState<XType>(); //asum enq vor item-i type-n objecta, vori mej kara lini name:string, u id:number, aysinqn menq ete setItem anenq partadir es typerin petqa hamapatasxanen iranq, bayc inqy der type yndunuma kap undefined kam mer tvacy dra hamar
    //xukeri vra ctrl + click aneluc karanq tenanq iranc masin info + type karan unenan te che, <>ete ka u mejy inch vor ban useState gracic heto, uremn type karanq tanq
  
    item; //hover anel
    if (!item) {
      //asum enq ete item chka uremn return ara loading
      return <>loading...</>; //stex chenq kara prosty texty grenq aranc chakertneri vorovhetev grel enq vor x-y React.FC a uremnt petqa misht veradardzni ReactELement, orinak div
    }
    item; //hover anel
    // inqy arden stex itemy el undefined chi kara exni vorovhetev ete undefined exni verevi returnic el ste chi hasni
    return (
      <>
        <div>{some}</div>
        <div>{item.name}</div>
        {/*u inqy ste el ashibka chi tali, ete en if-y hanenq talua,*/}
      </> //erb vor item. enq grum inqy typeric tenuma asuma inch kara exni(es pahin menak id u name) ete patahakan nenc ban greqn vor goyutyun chuni typeri mej(orinak age,) inqy ashibka kta kasi age chka qo tvac  type-i mej
    );
  };
  
  //? /////////////////////////////////////////
  
  type SortItem = {
    name: string;
    sortProperty: string;
  };
  
  export const sortList: SortItem[] = [
    //asuma sortlisti type-n sortItemneri massiva
    {
      name: "популярности (DESC)",
      sortProperty: " SortPropertyEnum.RATING_DESC",
    },
    { name: "популярности (ASC) ", sortProperty: "SortPropertyEnum.RATING_ASC" },
    { name: "цене (DESC)", sortProperty: "SortPropertyEnum.PRICE_DESC" },
    { name: "цене (ASC)", sortProperty: "SortPropertyEnum.PRICE_ASC" },
    { name: "алфавиту (DESC) ", sortProperty: "SortPropertyEnum.TITLE_DESC" },
    { name: "алфавиту (ASC) ", sortProperty: " SortPropertyEnum.TITLE_ASC" },
  ];
  
  //? /////////////////////////////////////////////////
  
  //! useRef ///
  
  const sortRef = React.useRef<HTMLDivElement>(null); //refy tipizacya aneluc hover enq anum en elementi vra vorin vor refy kpnuma, verjum graca te inch tipi elementa(shat jamanak html(tipi anuny)element)
  //hover anel divi vra
  const hef = () => <div ref={sortRef} />;
  
  //! funckianer function
  
  type PaginationProps = {
    //ete propsov funkcia enq yndunum
    onChangePage: (page: number) => void; //asum enq et funkcian incha yndunum,(page a yndunum vorpes number) u veradardznuma void, aysinqn inqy return mejy chuni, void = undefined
  };
  //! onChange, onClick
  
  const hsf = () => {
    const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
      //eventin petqa type tal, type-n talis enq ira vra hover anelov,(es pahin onChange-i vra)
      console.log(event.target.value);
    };
    const onClickDiv = (event: React.MouseEvent<HTMLDivElement>) => {
      //onClick-n el MouseEventa, nuyn dzeva sax
      console.log(event);
    };
  
    return (
      <>
        {/* hover anel onChange gracin*/}
        <input onChange={onChangeInput} />
        {/*onChange i vra graca React.ChangeEventHandler<HTMLInputElement> bayc menq type-n tvel enq aranc Handler graci qani vor handlery talis enq henc funkciayin, is menq type enq talis menak eventin*/}
        <div onClick={onClickDiv} />
      </>
    );
    const onChangeInput2: React.ChangeEventHandler<HTMLInputElement> = (
      event
    ) => {
      //eventin petqa type tal, type-n talis enq ira vra hover anelov,(es pahin onChange-i vra)
      console.log(event.target.value);
    }; //orinak ste handler enq grel qani vor voch te eventn enq tipizacya anum ayl henc funkcian
  };
  
  //! ////
  const [a, setOpen] = React.useState(true)
  
  const ahfjkds = () => {
    const handleClickOutside = (event: MouseEvent) => {//erb vor tarber tex tarber type a petq 
      const _event = event as MouseEvent & { path: Node[] };//ste asumenq vor nayev ka _event vory vor eli eventa, bayc iran type tvelenq path:Node[] avelacrac
      if (sortRef.current && !_event.path.includes(sortRef.current)) {//ste uzuma vor eventy Lini MouseEvent u path:Node[]
        setOpen(false);
      }
    };
  
    document.body.addEventListener("click", handleClickOutside);//ste uzuma vor eventy lini MouseEvent aranc path:Node[]
  
    return () => {
      document.body.removeEventListener("click", handleClickOutside);
    };
  };