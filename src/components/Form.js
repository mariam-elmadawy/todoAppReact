import styles from './style.module.css'
import shortid from 'shortid'

const Form = ({ todo, setTodo, todoList, setTodoList }) => {
    const handleChange = (event) => {
        setTodo(event.target.value)
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        setTodoList([...todoList, { name: todo, id: shortid.generate() }])
        setTodo("")
        console.log(todoList);

    }
    return (
        <div className={styles.todoForm}>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="What are you going TODO?"
                    className={styles.inputForm}
                    value={todo} onChange={handleChange}
                ></input>
                <button type="submit" className={styles.submitBtn}>Add</button>
            </form>
        </div>
    )
}
export default Form