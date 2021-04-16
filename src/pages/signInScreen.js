import React, { useState } from 'react';
import {
    Text,
    Button,
    Input,
    InputGroup,
    InputRightElement,
    Flex,
} from '@chakra-ui/react';
import { useHistory } from 'react-router-dom';
import SignUp from '../components/signUp';
import { signInGoogle, auth, signInWithGoogle } from '../firebase';

const SignIn = () => {
    const [ open, setOpen ] = useState(false);
    const [ show, setShow ] = useState(false);
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const history = useHistory();
    const signUp = () => {
        setOpen(true);
    }

    const signInWithEmailHandler = () => {
        auth.signInWithEmailAndPassword(email, password).catch(error => {
            console.error("Error signing in with password and email", error);
        });
    };

    return(
        <>
            <Flex base="shadow" direction="column" alignItems="center" justifyContent="center">
                <Text>whoa you need to sign in</Text>
                <Button onClick={signInWithGoogle}>Sign in with Google</Button>
                <Input  onChange={(e) => setEmail(e.target.value)} width="30vw" placeholder="email address"/>
                <InputGroup width="30vw">
                    <Input onChange={(e) => setPassword(e.target.value)} placeholder="password" type={show ? "text" : "password"}/>
                    <InputRightElement>
                        <Button onClick={() => setShow(!show)}>{show ? "Hide" : "Show"}</Button>
                    </InputRightElement>
                </InputGroup>
                <Button onClick={() => signInWithEmailHandler} >Sign In</Button>
                <Button onClick={signUp}>Sign Up</Button>
                <SignUp open={open} setOpen={setOpen} />
            </Flex>
        </>
    );
}

export default SignIn;