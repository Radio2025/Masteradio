
import React from "react";
import { shareOnMobile } from 'react-mobile-share';


const App = () =>{
  return (
  
      <button
       className="button",
        onClick={() =>
          shareOnMobile({
                title: "La Fronterísima",
                text: "Descarga la aplicación en este link",
                url: 'https://www.amazon.com/dp/B0BD2J85V4/ref=apps_sf_sta'
        
          })
        }
      >
    
      </button>
   
  );
}

export default App;








