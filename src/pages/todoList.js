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
//import { signOut } from '../firebase';

/**
 * TodoList
 * @param {function} setUser - temp function to bypass user auth
 * @returns Screen that displays tasks
 */
const TodoList = ({ setUser }) => {
    const [ open, setOpen] = useState(false);
    const [ taskList, setTaskList ] = useState();
    const openModal = () => {
        setOpen(true);
    };
    const tasks = useSelector(state => state.tasks);

    /*
    Function to get a user's tasks from firebase and load them into redux
    function getAllTasks = () => {
        db.collection('tasks')/
        .orderBy('createdAt', 'desc')
        .get()
        .then((data) => {
            let tempTasks = [];
            data.forEach((task) => {
                tempTasks.push({
                    id: task.id,
                    title: task.title,
                    details: task.details,
                    imp: task.imp,
                    comp: task.comp,
                });
            });
            dispatch(fetchTasks(tempTasks));
        });
    }
    */
    
    return(
        <>
            <Flex direction="column" alignItems="center" style={{ margin: 10 }}>
                <Button onClick={() => setUser(false)}>Sign Out</Button>
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
                    <Divider margin={10} orientation="vertical"/>
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
                    <Divider margin={10} orientation="vertical"/>
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
                <IconButton style={{ width: '30%'}}onClick={openModal} icon={<AddIcon />}/>
            </Flex>
            <CreateTask open={open} setOpen={setOpen} />
        </>
    );
}

export default TodoList;