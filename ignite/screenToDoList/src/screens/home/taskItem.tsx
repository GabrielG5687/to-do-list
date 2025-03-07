import React, { useEffect, useState } from 'react';
import { View, Text, Button, TouchableOpacity, Image } from 'react-native';
import { styles } from './styles';
import { SaveTask } from './types';

interface TaskItemProps {
  title: string;
  description: string;
  status: boolean;
  onDelete: () => void;
  onToggleComplete: () => void;
  onEdit: () => void;

}


const TaskItem: React.FC<TaskItemProps> = ({ title, description, status, onDelete, onToggleComplete, onEdit }) => {

  const [selectedTask, setSelectedTask] = useState(false); // Estado para controlar se a tarefa foi selecionada
  const [isDescriptionVisible, setDescriptionVisible] = useState(false); // Para controle de texto da descrição



  const maxDescriptionLength = 5
  // Função para alternar a seleção da tarefa
  const handleSelectTask = () => {
    setSelectedTask(!selectedTask); // Alterna o estado
    setDescriptionVisible(!isDescriptionVisible); // Altera o estado da descricação
  }


  return (
    <><View style={styles.taskItem}>
      <TouchableOpacity style={styles.taskHeader} onPress={handleSelectTask}>
        <Text style={styles.taskTitle}>{title}</Text>


        <Text style={styles.taskDescription}>{isDescriptionVisible 
          ? description 
          : `${description.substring(0, maxDescriptionLength)}${description.length > maxDescriptionLength ? '...' : ''}`
        }</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={onDelete}>
        <Text style={styles.deleteButton}>x</Text>
      </TouchableOpacity>


    </View>

      {selectedTask && ( // Só exibe as actions se selectedTask for true
        <View style={styles.taskActions}>
          <View style={styles.taskActionsStatus}>
            <Button
              title={status ? "Finalizado" : "Pendente"}
              onPress={onToggleComplete}
              color="#242320"
            />
          </View>

          <View style={styles.taskActionsEdit}>
            <Button title="Edit" onPress={onEdit} color="#242320" />
          </View>
        </View>
      )}
    </>
  );
};

export default TaskItem;
