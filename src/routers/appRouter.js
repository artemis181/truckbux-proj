import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Flex } from "@chakra-ui/react";
import TodoList from '../pages/todoList';
import SignIn from '../pages/signInScreen';

const AppRouter = () => {
    const [ user, setUser] = useState(false);

    return(
        <BrowserRouter>
            <Flex width={"100%"} minHeight={"100vh"} flexDirection={"column"}>
                <Route exact path="/">
                    {user ? <TodoList /> : <SignIn />}
                </Route>
            </Flex>
        </BrowserRouter>
    );
}

export default AppRouter;