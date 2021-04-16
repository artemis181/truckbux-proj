import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody, 
    Text,
    Input,
    InputGroup,
    InputRightElement,
    Flex,
    Button,
} from '@chakra-ui/react';
import { auth } from '../firebase';

const SignUp = ({ open, setOpen }) => {
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ show, setShow ] = useState('');
    const handleClose = () => {
        setOpen(false);
    }
    const handleSubmit = () => {
        try{
            auth.createUserWithEmailAndPassword(email, password);
        }catch(error){
            console.error('Error with creating email and password');
        }
        setEmail('');
        setPassword('');
        handleClose();
    };

    return(
        <Modal isOpen={open} onClose={handleClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>
                    <Text>Sign Up</Text>
                </ModalHeader>

                <ModalBody>
                    <Input onChange={(e) => setEmail(e.target.value)} placeholder="email address"/>
                    <InputGroup>
                    <Input onChange={(e) => setPassword(e.target.value)} placeholder="password" type={show ? "text" : "password"}/>
                    <InputRightElement>
                        <Button onClick={() => setShow(!show)}>{show ? "Hide" : "Show"}</Button>
                    </InputRightElement>
                </InputGroup>
                </ModalBody>

                <ModalFooter>
                    <Button onClick={handleSubmit}>Sign Up</Button>
                    <Button onClick={handleClose}>Cancel</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
};

SignUp.propTypes = {
    open: PropTypes.bool,
    setOpen: PropTypes.func,
};

export default SignUp;