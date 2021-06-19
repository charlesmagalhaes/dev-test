import React from 'react';


export default function ButtonContainer() {

    return (
      <div className="center  padding 10px">
        <h1>My Todo list</h1>

        <div className="flex flex-row padding 10px">
          <button onChange="" id="year">2019</button>
          <button id="year">2020</button>
          <button id="year">2021</button>
        </div>

       <div className="flex flex-row padding 10px">
        <button id="month">JAN</button>
        <button id="month">FEV</button>
        <button id="month">MAR</button>
        <button id="month">ABR</button>
        <button id="month">MAI</button>
        <button id="month">JUN</button>
        <button id="month">JUL</button>
        <button id="month">AGO</button>
        <button id="month">SET</button>
        <button id="month">OUT</button>
        <button id="month">NOV</button>
        <button id="month">DEZ</button>
       </div>
       <div>
      
       </div>
      </div>
    )
}
