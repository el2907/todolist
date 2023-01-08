const List = (props) => {
  const { list, ...otherProps } = props

  return (
    <div
      className="first:border-l border-r border-t rounded-t-lg"
      {...otherProps}
    >
      {list.map((listName, listId) => {
        return <div key={listId}>{listName}</div>
      })}
    </div>
  )
}

export default List
