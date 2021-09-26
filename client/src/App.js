import React from 'react'
import { Container } from '@material-ui/core';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './components/Home/Home';

const App = () => {
    return (
        <Container>
            <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
            </Switch>
            </BrowserRouter>
        </Container>
    )
}

export default App;
