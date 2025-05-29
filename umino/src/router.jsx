import React from 'react'
import { createBrowserRouter } from 'react-router'
import Layout from './components/Layout'
import HomePage from './pages/Home'
import ShopPage from './pages/Shop'
import ProductPage from './pages/Product'
import SalePage from './pages/Sale'
import BuyPage from './pages/Buy'
import BlogPage from './pages/Blog'
import Page from './pages/Page'

export const Router = createBrowserRouter([
    {
        path:'/',
        element: <Layout/>,
        children:[
            {
                path:'/',
                element:<HomePage/>,
                index:true,

            },
             {
                path:'/shop',
                element:<ShopPage/>,
                index:true,

            },
             {
                path:'/product',
                element:<ProductPage/>,
                index:true,

            },
             {
                path:'/blog',
                element:<BlogPage/>,
                index:true,

            },
             {
                path:'/page',
                element:<Page/>,
                index:true,

            },
             {
                path:'/sale',
                element:<SalePage/>,
                index:true,

            },
             {
                path:'/buy',
                element:<BuyPage/>,
                index:true,

            }
        ]
    }
    ])


