import React, { useEffect, useState } from 'react'
import Container from '@material-ui/core/Container'
import Masonry from 'react-masonry-css'
import NoteCard from '../components/TaskCard'
import axios from 'axios';
import TaskCard from '../components/TaskCard';

export default function Notes() {
  const [tasks, setTask] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:9090/card").then((res) => setTask(res.data));
  }, [])

  const handleDelete = async (id) => {
    await axios.post(`http://localhost:9090/card/${id}`);
    const newTasks = tasks.filter((task) => task.id !== id);
    setTask(newTasks);
  };

  const handleDone = async (id, status) => {
    const data = tasks.map(task => {
      if(task.id === id){
        task.finished = status
      }
      return task
    }).filter(task => task.id === id);

    await axios.put(`http://localhost:9090/card/${id}`, data[0]);
    const aux = tasks.findIndex((task) => task.id === id)
    const tempTask = tasks.map(res => res)
    tempTask[aux] = data[0]
    setTask(tempTask); 
  };

  const handleUpdate = async (id, title, details) => {
    const data = tasks.map(task => {
      if(task.id === id){
        task.title = title
        task.content = details
      }
      return task
    }).filter(task => task.id === id);

    await axios.post(`http://localhost:9090/card/${id}`, data[0]);
    const newTasks = tasks.filter((task) => task.id !== id)
    newTasks.push(data[0])
    setTask(newTasks); 
  };

  const breakpoints = {
    default: 3,
    1100: 2,
    700: 1
  };

  return (
    <Container>
      <Masonry
        breakpointCols={breakpoints}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column">
        {tasks.sort().map(task => (
          <div key={task.id}>
            <TaskCard task={task} handleDelete={handleDelete} handleDone={handleDone} handleUpdate={handleUpdate}/>
          </div>
        ))}
      </Masonry>
    </Container>
  )
}
