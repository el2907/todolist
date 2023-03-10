import Head from "next/head"
import { Formik, Form } from "Formik"
import * as yup from "yup"
import { useCallback } from "react"
import { updatedList } from "./components/ContextProvider"

const validationSchema = yup.object().shape({
  name: yup.string().required().label("Name"),
})

const EditList = (props) => {
  const handleSubmit = useCallback(
    (value) => {
      updatedList(values)
    },
    [updatedList]
  )

  return (
    <div>
      <Head>
        <title>Todo List - Edit List</title>
        <meta name="todo list" content="todo list" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/todolist.ico" />
      </Head>

      <header>
        <h1 className="text-4xl font-semibold mb-4">Edit list</h1>
        <div className="overflow-x-auto flex border-b pt-2 w-full"></div>
      </header>
      <main>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form>
            <input
              name="list"
              label="Description"
              className="px-4 py-2 rounded-lg"
              type="text"
              placeholder="Edit a list name"
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
            Save
          </button>
        </div>
      </main>
    </div>
  )
}

export default EditList
