import { useState } from "react"
const initialList = [
  {
    id: 1,
    name: "Homeworks",
  },
  {
    id: 2,
    name: "list 2",
  },
]

const List = (props) => {
  const { list, ...otherProps } = props
  const [lists, setLists] = useState(initialList)

  return (
    <div className="overflow-x-auto flex border-b pt-2 w-full">
      {lists.map((list) => (
        <div key={list.id}>
          <p className=" first:border-l border-r border-t rounded-t-lg">
            {list.name}
          </p>
        </div>
      ))}
    </div>
  )
}

export default List
