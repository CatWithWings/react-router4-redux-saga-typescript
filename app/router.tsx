import * as React from 'react';
import {
  HashRouter,
  Route,
  Switch,
  Redirect,
  Link
} from 'react-router-dom';

import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import createHistory from 'history/createHashHistory';
import asyncComponent from './utils/asyncComponent';

import store from './store/store';
import App from './app.compontent';

const asyncNoMatch = asyncComponent(() => import(
    /* webpackChunkName: "asyncNoMatch" */'./routes/error/noMatch.component'
))
const asyncHomeApp = asyncComponent(() => import(
    /* webpackChunkName: "asyncHomeApp" */'./containers/home.container'
))
const asyncOthers = asyncComponent(() => import(
    /* webpackChunkName: "asyncOthers" */'./routes/others/others.component'
))
const asyncOthersOne = asyncComponent(() => import(
    /* webpackChunkName: "asyncOthersOne" */'./routes/others/others.one.component'
))
const asyncOthersTwo = asyncComponent(() => import(
    /* webpackChunkName: "asyncOthersTwo" */'./routes/others/others.two.component'
))

const history = createHistory();

const routes = [
    {
        path: '/home',
        component: asyncHomeApp,
    },
    {
        path: '/others',
        component: asyncOthers,
        homepage : '/others/one', // not nessesary (default: false， if has index)
        hideInMenu : false, // not nessesary (default: false, if not show on the menu)
        noMatch: asyncNoMatch,  // not nessesary (default: false, if has 404 page)
        children : [
            {
                path: '/others/one',
                component: asyncOthersOne,
            },
            {
                path: '/others/two',
                component: asyncOthersTwo,
            },
        ]
    }
];

const getRoutes = (menus:any) => { 
        return( 
        menus.map((item:any, i:number)=>{
            if(item.children){
                return (
                    <Route path={item.path} key={item.path+i} render={()=>(
                        <item.component>
                            <Switch>
                                { (!item.homepage) ? 
                                    "" : 
                                    <Route exact path={item.path} render={() => <Redirect to={item.homepage} />} />  
                                }
                                { getRoutes(item.children) }
                                {
                                    (!item.noMatch) ? 
                                        "" :
                                        <Route component={item.noMatch}/>                                     
                                }
                            </Switch>
                        </item.component>
                    )} />
                )
            }else{
                return (
                    <Route exact key={item.path+i} 
                        path={item.path} 
                        component={item.component} />
                )
            }
        })
    )
}

const RouterConfig = () => (
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <div>
                <Route path='/' render={()=>(
                    <App>
                        <Switch>
                        <Route exact path="/" render={() => <Redirect to="/home"/>} />
                        { getRoutes(routes) }
                        <Route component={asyncNoMatch}/>
                        </Switch>
                    </App>
                )} />
            </div>
        </ConnectedRouter>
    </Provider>
);

export default RouterConfig;