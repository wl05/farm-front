import Main from "../Layouts/Main";
import React from 'react';
import { Route, Switch } from "react-router-dom";
import routers from "./router";
import "./index.scss";
const {routes, singlePagesRoutes} = routers;

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
                    render={props => <Component {...props}/>}
                />
            )
            if (routes[ i ].routes) {
                console.log(routes[ i ].routes.length)
                for (let j = 0; j < routes[ i ].routes.length; j++) {
                    let SubComponent = routes[ i ].routes[ j ].component
                    console.log(routes[ i ].routes[ j ].key)
                    newRoutes.push(
                        <Route
                            key={`${i}-${j}`}
                            path={routes[ i ].routes[ j ].key}
                            exact={routes[ i ].routes[ j ].exact ? true : false}
                            render={props => <SubComponent {...props}/>}
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
