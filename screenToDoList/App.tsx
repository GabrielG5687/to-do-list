import React, { useState, useEffect } from 'react';
import { View, Text, Alert } from 'react-native';
import TaskInput from './src/screens/home/taskInput';
import TaskList from './src/screens/home/taskList';
import { styles } from './src/screens/home/styles';
import { SaveTask } from './src/screens/home/types';
import EditTaskModal from './src/screens/home/editTaskModel'
import DeleteTaskModal from './src/screens/home/deleteTaskModel';


// const api = process.env.API_URL

export default function App() {
  const [tasks, setTasks] = useState<SaveTask[]>([]);


  useEffect(() => {
    getTask()

  }, [])

  async function getTask() {
    try {
      const res = await fetch('http://192.168.0.247:3333/tasks', {

        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await res.json(); // Converta a resposta para JSON
      setTasks(data); // Defina o estado com os dados
    } catch (err) {
      console.log(err); // Capture erros de rede ou JSON
    }
  }



  async function createTask(title: string, description: string) {
    try {
      const res = await fetch('http://192.168.0.247:3333/tasks', {
        method: 'POST',

        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          description
        }),
      });

      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await res.json(); // Converta a resposta para JSON
      setTasks([]) // Defina o estado com os dados
      await getTask()
    } catch (err) {
      console.log(err); // Capture erros de rede ou JSON
    }

  }



  async function deletFuction(id: number) {
    try {
      const res = await fetch(`http://192.168.0.247:3333/tasks/${id}`, {
        method: 'DELETE',

        headers: {
          "Content-Type": "application/json",
        },


      });

      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await res.json(); // Converta a resposta para JSON
      setTasks([]) // Defina o estado com os dados
      await getTask()
    } catch (err) {
      console.log(err); // Capture erros de rede ou JSON
    }

  }



  async function updateStatus(id: number, status: boolean) {
    try {
      const res = await fetch(`http://192.168.0.247:3333/tasks/${id}`, {
        method: 'PUT',

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          status
        }),
      });



      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await res.json(); // Converta a resposta para JSON
      setTasks([]) // Defina o estado com os dados
      await getTask()
    } catch (err) {
      console.log(err); // Capture erros de rede ou JSON
    }

  }

  async function updateTasksFuction(id: number, title: string, description: string) {
    try {
      const res = await fetch(`http://192.168.0.247:3333/tasks/${id}`, {
        method: 'PUT',

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          title,
          description
        }),
      });



      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await res.json(); // Converta a resposta para JSON
      setTasks([]) // Defina o estado com os dados
      await getTask()
    } catch (err) {
      console.log(err); // Capture erros de rede ou JSON
    }

  }




  const addTask = (title: string, description: string) => {
    // const newTask: SaveTask = { title, description, completed: false };
    // setTasks([...tasks, newTask]);
    createTask(title, description)
  };

  const [isEditModalVisibleDelete, setEditModalVisibleDelete] = useState(false);
  const [selectTaskDelete, setSelectedTaskDelete] = useState<SaveTask | null>(null);
  const deleteTask = (objectDeleteTasks: SaveTask) => {
    setSelectedTaskDelete(objectDeleteTasks);
    setEditModalVisibleDelete(true);

  };
  const closeEditModalDelete = () => {
    setEditModalVisibleDelete(false);
    setSelectedTaskDelete(null);


  };


  const toggleTaskComplete = (id: number, status: boolean) => {
    updateStatus(id, status)

  };

  const [isEditModalVisible, setEditModalVisible] = useState(false);
  const [selectTask, setSelectedTask] = useState<SaveTask | null>(null);

  // Função para abrir o modal de edição
  const editTask = (objectEditTask: SaveTask) => {
    setSelectedTask(objectEditTask);
    setEditModalVisible(true);

  };

  const closeEditModal = () => {
    setEditModalVisible(false);
    setSelectedTask(null);


  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>To-Do List</Text>
      <TaskInput onAddTask={addTask} />
      <TaskList
        tasks={tasks}
        onDeleteTask={deleteTask}
        onToggleCompleteTask={toggleTaskComplete}
        onEditTask={editTask}
      />
      {selectTask && (
        <EditTaskModal
          visible={isEditModalVisible}
          task={selectTask}
          onClose={closeEditModal}
          onSave={(id, title, description) => {
            updateTasksFuction(id, title, description);
            closeEditModal();
          }}
        />
      )}

      {selectTaskDelete && (
        <DeleteTaskModal
          visible={isEditModalVisibleDelete}
          task={selectTaskDelete}
          onClose={closeEditModalDelete}
          onYes={(id) => {
            deletFuction(id);
            closeEditModalDelete();
          }}
        />
      )}
    </View>
  );
}
