import Main from "../Layouts/Main"
import React from 'react'
import { Route, Switch } from "react-router-dom"
import routers from "./router"
import "./index.scss"
import { Card } from 'antd'
const {routes, singlePagesRoutes} = routers

const RouteWithSubRoutes = () => {
    const renderRoutes = ()=> {
        let newRoutes = []
        for (let i = 0; i < routes.length; i++) {
            let Component = routes[ i ].component
            newRoutes.push(
                <Route
                    key={i}
                    path={routes[ i ].key}
                    exact={routes[ i ].exact ? true : false}
                    render={props => {
                        return <Card
                            title={routes[ i ].title}
                            bordered={false}
                        >
                            <Component {...props}/>
                        </Card>
                    }}
                />
            )
            if (routes[ i ].routes) {
                for (let j = 0; j < routes[ i ].routes.length; j++) {
                    let SubComponent = routes[ i ].routes[ j ].component
                    newRoutes.push(
                        <Route
                            key={`${i}-${j}`}
                            path={routes[ i ].routes[ j ].key}
                            exact={routes[ i ].routes[ j ].exact ? true : false}
                            render={props => {
                                return <Card
                                    title={routes[ i ].routes[ j ].title}
                                    bordered={false}
                                >
                                    <SubComponent {...props}/>
                                </Card>
                            }}
                        />
                    )
                }
            }
        }
        return newRoutes
    }
    return <div>
        <Switch>
            {singlePagesRoutes.map((route, index)=> {
                return <Route
                    key={index}
                    path={route.key}
                    exact={route.exact ? true : false}
                    render={props => <route.component {...props}/>}
                />
            })}
            <Main>
                {renderRoutes()}
            </Main>
        </Switch>
    </div>
}
export default RouteWithSubRoutes()
