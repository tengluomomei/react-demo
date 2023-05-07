import {
    MenuFoldOutlined,
    UserOutlined,
    VideoCameraOutlined,
  } from '@ant-design/icons';

//路由表
import Dashboard from "@/pages/dashboard/index"
import GoodList from "@/pages/goods/goodList"
import GoodForm from "@/pages/goods/goodForm"
import User from "@/pages/user/index"

// 37: 管理员
// 327:普通用户
export const asyncRoutes = [
    {
        key: 1001,
        path: "/dashboard",
        label: "首页大屏",
        icon: <MenuFoldOutlined />,
        element: <Dashboard />,
        meta:{
            roles: ['37','327']
        }
    },
    {
        key: 1002,
        icon: <VideoCameraOutlined />,
        label: "商品管理",
        meta:{
            roles: ['37','327']
        },
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
        label: "用户管理",
        meta:{
            roles: ['37']
        }
    }
];