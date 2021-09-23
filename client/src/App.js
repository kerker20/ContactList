import React from 'react'
import { Container } from '@material-ui/core';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Form from './components/Form/Form';
import TableData from './components/TableData/TableData'

const App = () => {
    return (
        <Container>
            <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Form} />
                <Route path="/tableData" exact component={TableData} />
            </Switch>
            </BrowserRouter>
        </Container>
    )
}

export default App;
