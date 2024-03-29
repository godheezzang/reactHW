import { useState } from "react";
import Header from "../../components/Header";
import Todo from "./Todo";
import Footer from "../../components/Footer";
import { produce } from 'immer';


function ListPage(){
  // 샘플 목록
  const [itemList, setItemList] = useState([
    { _id: 1, title: '두부', done: true} ,
    { _id: 2, title: '계란', done: false },
    { _id: 3, title: '라면', done: true },
  ]);

  function addItem(item){
    // 데이터 갱신(상태 변경)
    const newItemList = [...itemList, item];
    setItemList(newItemList);

    console.log(itemList, newItemList);
  }

  function toggleDone(_id){

    // immer 
    const newItemList = produce(itemList, draft =>{
      const item = draft.find(item => item._id === _id);
      item.done = !item.done;
    })




    setItemList(newItemList);
    console.log(itemList, newItemList);

  }

  function deleteItem(_id){
    // 상태 변경
    const newItemList = itemList.filter(item => item._id !== _id);
    setItemList(newItemList);

    console.log(itemList, newItemList);
  }

  return (
    <div id="todo">
      <Header />
      <Todo itemList={ itemList } addItem={ addItem } toggleDone={ toggleDone } deleteItem={ deleteItem } />
      <Footer />
    </div>
  );
}

export default ListPage;