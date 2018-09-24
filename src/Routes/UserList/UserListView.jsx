import React from 'react';
import { Table, Button, Card, Divider } from 'antd';
import { Link } from 'react-router-dom';
import "./Style.scss"
const data = [ {
    key : '1',
    name : 'John Brown',
    phone : 18898989890,
    remark : 'New York No. 1 Lake Park',
}, {
    key : '2',
    name : 'Jim Green',
    phone : 18898989890,
    remark : 'London No. 1 Lake Park',
}, {
    key : '3',
    name : 'Joe Black',
    phone : 18898989890,
    remark : 'Sidney No. 1 Lake Park',
}, {
    key : '4',
    name : 'Jim Red',
    phone : 18898989890,
    remark : 'London No. 2 Lake Park',
} ];

class SortTable extends React.Component {
    render () {
        const columns = [ {
            title : '姓名',
            dataIndex : 'name',
            key : 'name',
            
        }, {
            title : '电话',
            dataIndex : 'phone',
            key : 'phone',
        }, {
            title : '备注',
            dataIndex : 'remark',
            key : 'remark'
        },
            {
                title : '操作',
                key : 'action',
                render : (text, record) => (
                    <span>
                        <a href="javascript:;">编辑</a>
                        <Divider type="vertical"/>
                        <a href="javascript:;">删除</a>
                        <Divider type="vertical"/>
                         <Link to='/user/transaction/list'>
                           账单详情
                        </Link>
                    </span>
                ),
            } ];
        return (
            <div className="user-list-view-container">
                <Card title="用户列表" bordered={false}>
                    <Table columns={columns} dataSource={data}/>
                </Card>
            </div>
        );
    }
}

export default SortTable;
