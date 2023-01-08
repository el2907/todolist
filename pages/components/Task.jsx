const Task = (props) => {
  const { task, ...otherProps } = props

  return (
    <div className="overflow-x-auto flex border-b pt-2 w-full" {...otherProps}>
      <input type="checkbox" />
    </div>
  )
}

export default Task
