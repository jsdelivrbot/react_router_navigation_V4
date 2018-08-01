import React, { Component } from 'react'
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import PostList from './containers/post_list';


import About from './components/about.js';
import Contact from './components/contact';
import Error from './components/error';
import Navigation from './components/Navigation';


class Routes extends Component {
    render () {
        return (
            <BrowserRouter>
                <div>
                    <Navigation/>
                    <Switch>
                    <Route path="/" component={PostList} exact/>
                    <Route path="/about" component={About}/>
                    <Route path="/contact" component={Contact}/>
                    <Route component={Error} />
                    </Switch> 
                </div>
            </BrowserRouter>        
        );
    }
}

export default Routes