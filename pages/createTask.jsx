import Head from "next/head"
import { Formik, Form } from "Formik"
import * as yup from "yup"
import { useCallback } from "react"
import { addTask } from "./components/ContextProvider"

const initialValues = {
  task: "",
}
const validationSchema = yup.object().shape({
  task: yup.string().required().label("Please enter a task"),
})

const CreateTask = () => {
  const handleSubmit = useCallback(
    (values) => {
      addTask(values)
      console.log(values)
    },
    [addTask]
  )
  return (
    <div>
      <Head>
        <title>Todo List - Create Task</title>
        <meta name="todo list" content="todo list" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/todolist.ico" />
      </Head>
      <main>
        <header>
          <h1 className="text-4xl font-semibold mb-4">Create Todo</h1>
          <div className="overflow-x-auto flex border-b pt-2 w-full"></div>
        </header>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form>
            <input
              name="task"
              label="Description"
              className="px-4 py-2 rounded-lg"
              type="text"
              placeholder="Enter a task"
            />
          </Form>
        </Formik>
        <div className="flex gap-4 justify-end">
          <button className="bg-white active:bg-slate-50 text-black px-4 py-2 text-lg rounded-lg">
            Cancel
          </button>
          <button
            className="bg-blue-600 active:bg-blue-900 text-white rounded px-4 py-2 text-lg"
            type="submit"
          >
            Create
          </button>
        </div>
      </main>
    </div>
  )
}

export default CreateTask
