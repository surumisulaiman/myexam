import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Users from "./users";
import Todo from "./todo";
import Posts from "./posts";



function Routing() {
  return (
    <Switch>
      <Route path="/" component={Users} exact />
      <Route path="/users"  component={Users} />
      <Route path="/posts" component={Posts}/>
      <Route path="/todo" component={Todo}/>
    </Switch>
  );
}

export default Routing;