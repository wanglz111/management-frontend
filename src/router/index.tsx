import React, { lazy } from "react"
import Home from "@/views/Home"
import { Navigate } from "react-router-dom"
import Login from "@/views/Login"

const About = lazy(() => import('@/views/About'))
const User = lazy(() => import('@/views/User'))
const Page1 = lazy(() => import('@/views/Page1'))
const Page2 = lazy(() => import('@/views/Page2'))
const Page3 = lazy(() => import('@/views/Page3'))
const Page301 = lazy(() => import('@/views/Page301'))
const Page302 = lazy(() => import('@/views/Page302'))
const Page303 = lazy(() => import('@/views/Page303'))


const withLoading = (element: JSX.Element) => {
    return (
        <React.Suspense fallback={<div>loading...</div>}>
            {element}
        </React.Suspense>
    )
}


const routes = [
    {
        path: "/home",
        element: <Navigate to="/page1" />
    },
    {
        path: "/login",
        element: <Login/>
    },
    {
        path: "/",
        element: <Home />,
        children: [
            { path: "/page1", element: withLoading(<Page1 />) },
            { path: "/page2", element: withLoading(<Page2 />) },
            { path: "/page3", element: withLoading(<Page3 />) },
            {path: "/3/301", element: withLoading(<Page301 />)},
            {path: "/3/302", element: withLoading(<Page302 />)},
            {path: "/3/303", element: withLoading(<Page303 />)}

        ]
    },
    {
        path: "/about",
        element: withLoading(<About />)
    },
    {
        path: "/user",
        element: withLoading(<User />)
    },
    {
        path: "*",
        element: <Navigate to='/page1'></Navigate>
    }
]

export default routes