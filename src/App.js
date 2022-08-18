import './App.css';

import { useEffect, useState } from 'react';

import CalendarBlock from './CalendarBlock';
import DateBlock from './DateBlock';


function App() {
  let [columnNumber, setColumnNumber] = useState(3)

  const getHours = () => {
    const currentHours = new Date().getHours()
    return currentHours
  }
  let items=[[1, 2, 3], [4, 5, 6]];

  setTimeout(() => {const hours = getHours(); console.log(hours);}, 3000);

  return (
    <div className="container">
      <DateBlock/>
      {items.map((item,index)=>{
          item.forEach(element => {
            return <CalendarBlock/>
          });
          return <CalendarBlock/>
      })}
    </div>
  );
}

export default App;
