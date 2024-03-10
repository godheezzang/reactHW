import PropTypes from 'prop-types';
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

function Todo({addItem, itemList, toggleDone, deleteItem}){
  return (
    <div id="main">
      <div id="container">
        <ul>
          <li>
            <h2>쇼핑 목록</h2>
            <TodoInput addItem={ addItem } />
            <TodoList itemList={ itemList } toggleDone={ toggleDone } deleteItem={ deleteItem }/>
          </li>
        </ul>
      </div>
    </div>
  );
}

// 컴포넌트 validation
// PropTypes.어떤 타입인지.필수인지의 여부(필수라면 isRequired, 아니면 안적어도 됨)
Todo.propTypes = {
  itemList: PropTypes.array.isRequired,
  addItem: PropTypes.func.isRequired,
  toggleDone: PropTypes.func.isRequired,
  deleteItem: PropTypes.func.isRequired
};

export default Todo;