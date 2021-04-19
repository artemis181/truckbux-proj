import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
    Text,
    IconButton,
    Checkbox,
    Box,
    ListItem,
} from '@chakra-ui/react';
import { useToast } from "@chakra-ui/react"
import { DeleteIcon } from '@chakra-ui/icons';
import { useSelector, useDispatch } from 'react-redux';
import { makeTaskImportant, makeTaskComplete, deleteTask } from '../redux/tasksSlice';

/**
 * 
 * @param {object} task - details about the current task 
 * @returns a card that holds info about a task and allows the user to interact with the task
 */
const TaskCard = ({ task }) => {
    const dispatch = useDispatch();
    const toast = useToast();
    const tasks = useSelector(state => state.tasks);
    const handleImpChecked = (impVal) => {
        if(tasks.filter(task => task.comp == false).filter(task => task.impVal == true).length == 5 && impVal){
            toast({
                title: 'Error creating task',
                description: 'Too many important tasks',
                status: 'error',
                duration: 3000,
                isClosable: true
            });
        }else if(tasks.filter(task => task.comp == false).filter(task => task.impVal == false).length == 5 && !impVal){
            toast({
                title: 'Error creating task',
                description: 'Too many tasks',
                status: 'error',
                duration: 3000,
                isClosable: true
            });
        }else{
            dispatch(makeTaskImportant({
                id: task.id,
                imp: impVal
            }));
            console.log('task importance toggled');
        }
    };
    const handleCompChecked = (compVal) => {
        dispatch(makeTaskComplete({
            id: task.id,
            comp: compVal
        }));
        console.log('completed task');
    };
    const remTask = () => {
        dispatch(deleteTask({
            id: task.id,
        }));
    }

    return(
        <ListItem>
            <Box shadow="base" style={{ maxWidth: 300}} alignItems="center" justifyContent="center">
                <Text fontSize="2xl">{task.name}</Text>
                <Text>{task.details}</Text>
                <Checkbox defaultIsChecked={task.imp} onChange={(e) => handleImpChecked(e.target.checked)} style={{ marginRight: 5}}>Important</Checkbox>
                <Checkbox isDisabled={task.comp} defaultIsChecked={task.comp} onChange={(e) => handleCompChecked(e.target.checked)} style={{ marginRight: 5}}>Completed</Checkbox>
                <IconButton onClick={remTask} positionicon={<DeleteIcon />}></IconButton>
            </Box>
        </ListItem>
    );
};

TaskCard.propTypes = {
    task: PropTypes.object,
};

export default TaskCard;