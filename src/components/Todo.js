import styles from './style.module.css'

const Todo = ({ todoItem, todoList, setTodoList }) => {
    const deleteTodo = () => {
        setTodoList(
            todoList.filter(i => i.id !== todoItem.id)
        )
    }
    return (
        <div className={styles.todoItem}>
            <h3 className={styles.todoName}>{todoItem.name}</h3>
            <button className={styles.delete} onClick={deleteTodo}>Delete</button>
        </div>
    )
}
export default Todo