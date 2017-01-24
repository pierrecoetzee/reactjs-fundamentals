import React from 'react'
import Main from '../components/Main'
import Home from '../components/Home'
import { Route, IndexRoute } from 'react-router'
import UserProfileContainer from '../components/user/UserProfileContainer'
import UserListContainer from '../components/user/UserListContainer'
import Login from '../components/Login'
import WorkshopList from '../components/workshop/WorkshopList'

const Routes = (
  <Route>
    <Route path="/" component={Main}>
      <Route path="users" component={UserListContainer}>
        <Route path=":username" component={UserProfileContainer} />
      </Route>
      <Route path="workshops" component={WorkshopList} />
      <IndexRoute component={Home} />
    </Route>
    <Route path="login" component={Login}></Route>
  </Route>
)

export default Routes