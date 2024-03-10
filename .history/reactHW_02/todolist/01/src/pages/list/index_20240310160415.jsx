import Header from "../../components/Header";
import TodoContainer from "./TodoContainer";
import Footer from "../../components/Footer";
import { useEffect } from "react";

function ListPage(){
  useEffect(()=>{
    console.log('ListPage 마운트/업데이트');
  })

  return (
    <div id="todo">
      <Header />
      <TodoContainer />
      <Footer />
    </div>
  );
}

export default ListPage;