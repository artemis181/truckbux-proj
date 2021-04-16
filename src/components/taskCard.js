import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
    Text,
    IconButton,
    Checkbox,
    Box,
    ListItem,
} from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';
import { useDispatch } from 'react-redux';
import { makeTaskImportant, makeTaskComplete, deleteTask } from '../redux/tasksSlice';

const TaskCard = ({ task }) => {
    const dispatch = useDispatch();
    const handleImpChecked = (impVal) => {
        dispatch(makeTaskImportant({
            id: task.id,
            imp: impVal
        }));
        console.log('task importance toggled');
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

    useEffect(() => {
        console.log(task);
    }, []);
    return(
        <ListItem>
            <Box shadow="base">
                <Text>{task.name}</Text>
                <Text>{task.details}</Text>
                <Checkbox defaultIsChecked={task.imp} onChange={(e) => handleImpChecked(e.target.checked)}>Important</Checkbox>
                <Checkbox isDisabled={task.comp} defaultIsChecked={task.comp} onChange={(e) => handleCompChecked(e.target.checked)}>Completed</Checkbox>
                <IconButton onClick={remTask} icon={<DeleteIcon />}></IconButton>
            </Box>
        </ListItem>
    );
};

TaskCard.propTypes = {
    task: PropTypes.object,
};

export default TaskCard;