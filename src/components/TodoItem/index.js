const Todo = props => {
  const {item} = props
  const {title, id} = item
  return (
    <li>
      <p>{title}</p>
    </li>
  )
}

export default Todo
