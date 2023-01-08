const Task = (props) => {
  const { task, ...otherProps } = props

  return (
    <div
      className="first:border-l border-r border-t rounded-t-lg"
      {...otherProps}
    ></div>
  )
}

export default Task
