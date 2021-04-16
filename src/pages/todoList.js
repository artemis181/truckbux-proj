import React, { useState, useEffect } from 'react';
import {
    Text,
    Input,
    Flex,
    Box,
    Button,
    Editable,
    IconButton,
    Spinner,
    Icon,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    Divider,
    Modal,
    List,
    ListItem
} from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons'
import CreateTask from '../components/createTask';
import TaskCard from '../components/taskCard';
import { useSelector, useDispatch } from 'react-redux';

const TodoList = () => {
    const [ open, setOpen] = useState(false);
    const openModal = () => {
        setOpen(true);
    };
    const tasks = useSelector(state => state.tasks);
    
    return(
        <>
            <Flex direction="column" alignItems="center">
                <Text>Todo List</Text>
                <Flex direction="row" height="500px">
                    <List>
                    <ListItem>
                        {tasks.filter(task => task.comp != true).filter(task => task.imp == true).length > 0 ? (
                            tasks.filter(task => task.comp != true).filter(task => task.imp == true).map(task => (
                                <TaskCard task={task}/>
                            ))
                        ) : (
                            <Text>No Tasks here!</Text>
                        )}
                        </ListItem>
                    </List>
                    <Divider orientation="vertical"/>
                    <List>
                        <ListItem>
                        {tasks.filter(task => task.comp != true).filter(task => task.imp == false).length > 0 ? (
                            tasks.filter(task => task.comp != true).filter(task => task.imp == false).map(task => (
                                <TaskCard task={task}/>
                            ))
                        ) : (
                            <Text>No Tasks here!</Text>
                        )}
                        </ListItem>
                    </List>
                    <Divider orientation="vertical"/>
                    <List>
                    <ListItem>
                        {tasks.filter(task => task.comp == true).length > 0 ? (
                            tasks.filter(task => task.comp == true).map(task => (
                                <TaskCard task={task}/>
                            ))
                        ) : (
                            <Text>No Tasks here!</Text>
                        )}
                        </ListItem>
                    </List>
                </Flex>
                <IconButton onClick={openModal} icon={<AddIcon />}/>
            </Flex>

            <CreateTask open={open} setOpen={setOpen} />
        </>
    );
}

export default TodoList;