import { RouterProvider, createBrowserRouter, redirect } from "react-router-dom"
import { FilmsPage, MainLayout } from "components"
import './App.scss'


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    children: [
      {
        index: true,
        loader: async () => redirect('/films'),
      },
      {
        path: "films",
        element: <FilmsPage/>
      }
    ]
  }
])

function App() {
  return (
     <RouterProvider router={router} />
  )
}

export default App
