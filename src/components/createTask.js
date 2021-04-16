import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    Input,
    Button,
    Textarea,
    Text,
    Flex,
    Checkbox,
} from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { taskAdded } from '../redux/tasksSlice';

const CreateTask = ({ open, setOpen }) => {
    const [ taskName, setTaskName ] = useState('');
    const [ taskDetails, setTaskDetails ] = useState('');
    const [ imp, setImp ] = useState(false);
    const dispatch = useDispatch();
    const handleClose = () => {
        setOpen(false);
    }
    const saveName = (val) => {
        setTaskName(val);
    }
    const saveDetails = (val) => {
        setTaskDetails(val);
    }
    const toggleImp = (val) => {
        setImp(val);
    }
    const handleSubmit = () => {
        if(taskName && taskDetails){
            let taskInfo = {
                id: nanoid(),
                name: taskName,
                details: taskDetails,
                imp: imp,
                comp: false,
            };
            dispatch(taskAdded(taskInfo));
            console.log(taskInfo);
            setTaskName('');
            setTaskDetails('');
            setOpen(false);
        }else{
            console.log("Empty task");
        }
    }
    return(
        <Modal isOpen={open} onClose={handleClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>
                    <Text>Create Task</Text>
                </ModalHeader>
                <ModalBody>
                    <Flex direction="column">
                    <Input onChange={(e) => saveName(e.target.value)}/>
                    <Textarea onChange={(e) => saveDetails(e.target.value)}/>
                    <Checkbox onChange={(e) => toggleImp(e.target.checked)}>Label Important</Checkbox>
                    </Flex>
                </ModalBody>
                <ModalFooter>
                    <Button onClick={handleSubmit}>Add Task</Button>
                    <Button onClick={handleClose}>Cancel</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
}

CreateTask.propTypes = {
    ...Modal.propTypes,
    open: PropTypes.bool,
    setOpen: PropTypes.func,
};

export default CreateTask;