import PropTypes from 'prop-types';
import TodoItem from "./TodoItem";
import { useEffect } from 'react';

function TodoList({ itemList, toggleDone, deleteItem }){

  useEffect(()=>{
    console.log('+++++ TodoList 마운트/업데이트');
    return ()=>{
      console.log('----- TodoList djsakdnsxm');
    }
  })
  const list = itemList.map(item => <TodoItem key={ item._id } item={ item } toggleDone={ toggleDone } deleteItem={ deleteItem } /> );
  return (
    <ul className="todolist">
      { list }
    </ul>
  );
}

TodoList.propTypes = {
  itemList: PropTypes.array.isRequired,
  toggleDone: PropTypes.func.isRequired,
  deleteItem: PropTypes.func.isRequired
};

export default TodoList;