import {
  useCallback,
  useState,
  createContext,
  useContext as useNativeContext,
} from "react"

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

export const Context = createContext()
export const useContext = () => useNativeContext(Context)

const ContextProvider = (props) => {
  const [lists, setLists] = useState(initialList)
  const [tasks, setTasks] = useState(initialList)
  const [Id, setId] = useState(2)

  const getId = useCallback(() => {
    setId(Id + 1)

    return Id
  }, [Id])

  const addList = useCallback((list) => {
    setLists((lists) => [...lists, { id: getId(), ...list }])
  })

  const updateList = useCallback((updatedList) => {
    setLists((lists) =>
      lists.map((list) => (list.id === updatedList.id ? updatedList : list))
    )
  }, [])

  const deleteList = useCallback(
    (listId) => setLists((lists) => lists.filter(({ id }) => id !== listId)),
    []
  )

  const addTasks = useCallback((tasks) => {
    setTasks((tasks) =>
      tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task))
    )
  })
  const updateTasks = useCallback((updateTasks) => {
    setTasks((tasks) =>
      tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task))
    )
  })
  const deleteTasks = useCallback((taskId) => {
    ;(taskId) => setTasks((tasks) => tasks.filter(({ id }) => id !== taskId)),
      []
  })

  return (
    <div>
      {...props}
      value:
      {{
        lists,
        addList,
        updateList,
        deleteList,
        addTasks,
        updateTasks,
        deleteTasks,
      }}
    </div>
  )
}
export default ContextProvider
