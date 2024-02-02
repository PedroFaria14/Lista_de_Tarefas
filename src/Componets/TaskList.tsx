import React from 'react'

//Interface
import { ITask } from '../Interfaces/Task'

//css
import styles from "./TaskList.module.css"


interface Props{
    taskList: ITask[]
    handleDelete(id: number): void 
    handleEdit(task:ITask): void
}


const TaskList = ({taskList,handleDelete,handleEdit}: Props) => {



  return (
    <>
        {taskList.length > 0  ? (
            taskList.map((task) => (
                <div key={task.id} className={styles.task_container}> 
                 
                    <div className={styles.task_title}>
                        <h4>{task.title}</h4>
                    <p>Dificuldade: {task.difficulty}</p>
                    </div>

                    <div className={styles.task_actions}>
                     
                        <i className='bi bi-pencil pencil'
                        onClick={() => handleEdit(task) }
                        ></i>
                            <i className=' bi bi-trash ' 
                            onClick={() => 
                            {handleDelete(task.id)}}>

                            </i>

                       
                        
                    </div>



                </div>
            ))
            )
        :(
            <p>Não há tarefas Cadastradas</p>
        ) }
    </>
  )
}

export default TaskList
