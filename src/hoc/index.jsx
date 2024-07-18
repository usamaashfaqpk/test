import React, {useState } from "react";

const HOC = () => {
  const navData = [
    {
      "id": 0,
      "menu":"home",
      "count": 0
    },
    {
      "id": 2,
      "menu":"aboutus",
      "count": 0
    }
  ];

  return (
    <div className="mainNav">
      <ul className='listmain'>
        {navData.map((navItem, index) => (
          <NavItem key={index} navItem={navItem} />
        ))}
      </ul>
    </div>
  )
}

export default HOC;

const NavItem = ({ navItem }) => {
  const [counter, setCounter] = useState(0);
  return (
    
      <li className='item'  onClick={() => setCounter(counter + 1)}>
        {navItem.menu} {counter}
      </li>
  )
    
}