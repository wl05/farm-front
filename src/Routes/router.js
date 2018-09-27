import Home from './Home'
import Login from "./Login"
import UserList from "./UserList"
import UserTransactionHistoryList from "./UserList/UserTransactionHistoryList"
import UserTransactionHistoryListDetails from "./UserList/UserTransactionHistoryListDetails"
import TransactionHistory from "./TransactionHistory"
import TransactionDetails from "./TransactionHistory/TransactionDetails"
import AddUserView from "./UserList/AddUserView"
import React from 'react'
export default {
    routes : [
        {key : '/', title : '首页', icon : 'mobile', component : Home, exact : true},
        {
            key : '/user/list', title : '用户列表', icon : 'scan', component : UserList, exact : true,
            routes : [
                {
                    key : '/user/transaction/list',
                    title : '交易记录',
                    component : UserTransactionHistoryList,
                    exact : true,
                },
                {
                    key : '/user/transaction/details',
                    title : '账单详情',
                    component : UserTransactionHistoryListDetails,
                    exact : true,
                },
                {
                    key : '/user/add', title : '添加用户', component : AddUserView, exact : true,
                }
            ],
        },
        {
            key : '/transaction/list', title : '历史账单', icon : 'scan', component : TransactionHistory, exact : true,
            routes : [
                {
                    key : '/transaction/details', title : '账单详情', component : TransactionDetails, exact : true,
                }
            ]
        }
    ],
    singlePagesRoutes : [
        {key : '/login', component : Login, exact : true},
    ]
}
