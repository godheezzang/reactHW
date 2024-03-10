import PropTypes from 'prop-types';

import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import { useEffect } from 'react';

function Todo({ itemList, addItem, toggleDone, deleteItem }){
  useEffect(()=>{
    console.log('++++ Todo 마운트/업데이트');
    return ()=> console.log('---- Todo 언마운트');
  })
  return (
    <div id="main">
      <div id="container">
        <ul>
          <li>
            <h2>쇼핑 목록</h2>
            <TodoInput addItem={ addItem } />
            <TodoList itemList={ itemList } toggleDone={ toggleDone } deleteItem={ deleteItem } />
          </li>
        </ul>
      </div>
    </div>
  );
}

Todo.propTypes = {
  itemList: PropTypes.array.isRequired,
  addItem: PropTypes.func.isRequired,
  toggleDone: PropTypes.func.isRequired,
  deleteItem: PropTypes.func.isRequired,
};

export default Todo;