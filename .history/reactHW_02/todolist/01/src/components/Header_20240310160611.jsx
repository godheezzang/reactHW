import { useState } from "react";

function Header(){
  useState(()=>{
    console.log('++++ Header 마운트/업데이트');
    const timer = setInterval(()=>{
      console.log('++++ Header 마운트/업데이트');
    }4000)
    return ()=>{
      console.log('---- Header 언마운트');
      clearInterval(timer)
    }
  })
  return (
    <header>
      <h1>Todo List - React</h1>
    </header>
  );
}

export default Header;