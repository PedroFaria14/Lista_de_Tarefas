import { useState } from 'react'

import styles from './App.module.css'
// components 
import Header from "./Componets/Header"
import Footer from './Componets/Footer'
import TaskForm from './Componets/TaskForm'
import TaskList from './Componets/TaskList'
import Modal from './Componets/Modal'

// Interfaces
import { ITask } from './Interfaces/Task'





function App() {
  const [count, setCount] = useState(0)

  const [taskList,setTaskList]= useState<ITask[]>([])
  const [taskToUpdate , setTaskToUpdate] = useState<ITask | null>(null)

  const deleteTask = (id: Number) => {
    setTaskList(
      taskList.filter(task => {
        return task.id !== id})
    );
  }

  const hideOrShowModal= (display:boolean) => {
    const modal = document.querySelector("#modal")
    if(display){
      modal!.classList.remove("hide")
    }else{
      modal!.classList.add("hide")
    }
  }

  const editTask = (task:ITask):void => {
    hideOrShowModal(true);
    setTaskToUpdate(task);
  }

  const updateTask = (id: number,title: string,difficulty:number) => {
    const updateTask: ITask= {
      id,title,difficulty}

      const updateItems = taskList.map((task) => {
        return task.id === updateTask.id ? updateTask: task
      })
      setTaskList(updateItems);

      hideOrShowModal(false);
  }

  return (
    <>
      <div className="App">
        <Modal children=
        {<TaskForm btnText='Editar Tarefa' 
        taskList={taskList}
        task={taskToUpdate}
        handleUpdate={updateTask}
        />}/>
        <Header/>
      
     
          
        <main className={styles.main}>
      <div>
      <h2>O que você vai Fazer?</h2>
     <TaskForm 
     btnText='Criar Tarefa'
     taskList={taskList}
    
     setTaskList={setTaskList}/>
      </div>


      <div>
        <h2 className="title">Suas Tarefas: </h2>
       <TaskList
        taskList={taskList}
        handleDelete = {deleteTask}
       
        handleEdit = {editTask}
       />
      </div>

        </main>

      <Footer/>
      </div>
    </>
  )
}

export default App
