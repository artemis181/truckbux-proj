import React, { useState } from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import { Flex } from "@chakra-ui/react";
import TodoList from '../pages/todoList';
import SignIn from '../pages/signInScreen';

/**
 * AppRouter 
 * @returns Either the list or the signin page depending if the user has signed in or not
 */
const AppRouter = () => {
    const [ user, setUser ] = useState(false);

    return(
        <BrowserRouter>
            <Flex width={"100%"} minHeight={"100vh"} flexDirection={"column"}>
                <Route exact path="/">
                    {user ? <TodoList setUser={setUser} /> : <SignIn setUser={setUser} />}
                </Route>
            </Flex>
        </BrowserRouter>
    );
}

export default AppRouter;