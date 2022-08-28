import React from "react";


//! vor urish tex sxmeluc popupy paki

React.useEffect(() => {
  const handleClickOutside = (event) => {
    if (!event.path.includes(sortRef.current)) {//asumenq ete event-i pathum sortRef-i currenty chka(sortRef - i currenty mer popupna, useRef ov)
      setOpen(false);//setOpeny false a anum aysinqn popupy pakuma
    }
  };
  document.body.addEventListener("click", handleClickOutside);//erb vor componenty rendera arvum araji angam et jamanak add ani 

  return () => {//return aysinqn componentWillUnmounti jamanak, vor  et jamanakel jnji listenery, teche 2rd renderi jamanak 2 eventListener kexni arden u tenc sharunak
    document.body.removeEventListener("click", handleClickOutside);
  };
}, []);
