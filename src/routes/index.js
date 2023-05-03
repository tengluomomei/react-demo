import {
    MenuFoldOutlined,
    UserOutlined,
    VideoCameraOutlined,
  } from '@ant-design/icons';

//路由表
import Dashboard from "../pages/dashboard/index"
import GoodList from "../pages/goods/goodList"
import GoodForm from "../pages/goods/goodForm"
import User from "../pages/user/index"

export const asyncRoutes = [
    {
        key: 1001,
        path: "/dashboard",
        label: "首页大屏",
        icon: <MenuFoldOutlined />,
        element: <Dashboard />
    },
    {
        key: 1002,
        icon: <VideoCameraOutlined />,
        label: "商品管理",
        children: [
            {
                key: 100201,
                path: "/good/list",
                icon: null,
                label: "商品列表",
                element: <GoodList />
            },
            {
                key: 100202,
                path: "/good/add",
                icon: null,
                label: "商品新增",
                element: <GoodForm />
            },
            {
                key: 100203,
                path: "/good/edit",
                icon: null,
                label: "商品编辑",
                element: <GoodForm />,
				hidden: true
            }
        ]
    },
    {
        key: 1003,
        path: "/user",
        element: <User />,
        icon: <UserOutlined />,
        label: "用户管理"
    }
];