import React from 'react'
import ReactDom from 'react-dom/client'

//ete es ignoren grum enq taki toxi typescript errory ignora anum, shat em ogtagorcelu ste
// @ts-ignore comment.

type gad = {
    name?: string; //harcakany aysinqn kara exni kara chexni, bayc ete exni partadir string, (partadir chi type-i mej, amen texel tenca ts greluc)
  };
  
  const dfd: string | number = 1 || 1; // ts-um kam-y grum enq i uxix gcov, verjaketic havasare- ts a , heto eli js dra hamar heto eli 2 gcov
  
  //! npm-i type
  
  //ete orinak asdf enq npm ov install are u ira typery ts-y chi chanachum, porcum enq grel npm install @types/asdf , inqy ete typer unena et npm-y qashuma , ete chunena ignore petqa anenq kam urish ogtagorcenq
  
  //! assets.d.ts fayl
  
  declare module "*.tsx" {
    const content: any; // @ts-ignore comment.
    export default content;
  } //ete inch vor ban enq import anum u asuma vor chi jogum inch fayla  stexcum enq assets.d.ts u mejy ssranic stexcum, uxxaki tsx-i texy en inchy vor chi jogum et,(orinak json, js, html...)
  
  //! config , assets.d.ts import
  const config = {
    // amen ts ogtagorcox saytum petqa exni, configuraciaya vor normal ashxati ts-y, chgitem vory incha nshanakum der, const config grel em vor ashibka chta
    compilerOptions: {
      target: "es5",
      lib: ["dom", "dom.iterable", "esnext"],
      allowJs: true,
      skipLibCheck: true,
      esModuleInterop: true,
      allowSyntheticDefaultImports: true,
      strict: true,
      forceConsistentCasingInFileNames: true,
      noFallthroughCasesInSwitch: true,
      module: "esnext",
      moduleResolution: "node",
      resolveJsonModule: true,
      isolatedModules: true,
      noEmit: true,
      jsx: "react-jsx",
    },
    include: ["src", "src/@types"], //stex en assets.d.ts-n enq import arel(2rdy)
  };
  
  //! index js
  
  const root = document.getElementById("someId");
  // @ts-ignore comment.
  ReactDOM.createRoot(root); //ete senc enq grum ashibkaya tali vorovhetev asuma someId element chka u folsa rooty, isk inqy chi kara fols createRoot ani
  
  const rootElem = document.getElementById("someId");
  if (rootElem) {
    const root = ReactDom.createRoot(rootElem); //senc ashibka chi tali vorovhetev asumenq ete ka et jamanak create ara, aysinqn chi kara chlini, ete verevy hover anenq asuma kam nula kam htmlelement(ashibken et nilica) is ste ete hover enq anum asuma hastat html elementa vorovhetev if i meja
  }
  
  //! popoxakan, variable,
  let items;
  
  const aaa: number = 5; //type enq talis popoxakanin
  const fuje = (id: number, name: string) => {}; //yndunvox parametri type
  