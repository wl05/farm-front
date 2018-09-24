import Home from '../Containers/Home'
import Login from "../Containers/Login"
import UserList from "../Containers/UserList"
import UserTransactionHistoryList from "../Containers/UserTransactionHistoryList"
import UserTransactionHistoryListDetails from "../Containers/UserTransactionHistoryListDetails"
import TransactionHistory from "../Containers/TransactionHistory"
import TransactionDetails from "../Containers/TransactionDetails"
import React from 'react';
export default {
    routes : [
        {key : '/', title : '首页', icon : 'mobile', component : Home, exact : true},
        {
            key : '/user/list', title : '司机列表', icon : 'scan', component : UserList, exact : true,
            routes : [
                {
                    key : '/user/transaction/list', component : UserTransactionHistoryList, exact : true,
                },
                {
                    key : '/user/transaction/details', component : UserTransactionHistoryListDetails, exact : true,
                }
            ],
        },
        {
            key : '/transaction/list', title : '历史账单', icon : 'scan', component : TransactionHistory, exact : true,
            routes : [
                {
                    key : '/transaction/details', component : TransactionDetails, exact : true,
                }
            ]
        }
    ],
    singlePagesRoutes : [
        {key : '/login', component : Login, exact : true},
    ]
}
