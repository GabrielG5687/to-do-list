import React from 'react';
import { FlatList, Text, View } from 'react-native';
import TaskItem from './taskItem';
import { SaveTask } from './types';

interface TaskListProps {
  tasks: SaveTask[];
  onDeleteTask: (objectEditTask: SaveTask) => void;
  onToggleCompleteTask: (id: number, status: boolean) => void;
  onEditTask: (objectEditTask: SaveTask) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onDeleteTask, onToggleCompleteTask, onEditTask }) => {


  return tasks.length === 0 ? (
    <><Text style={{
      borderTopWidth: 4, borderTopColor: '#FF8303', width: 64, marginRight: 'auto', marginLeft: 'auto',
      marginBottom:-13
    }}></Text>

      <Text style={{ textAlign: 'center', color: '#FFF', fontSize: 24, }}>No Task</Text>

      <Text style={{
        borderTopWidth: 4, borderTopColor: '#FF8303', width: 64, marginRight: 'auto', marginLeft: 'auto',
        marginTop: 12
      }}></Text>
    </>


  ) : (
    <FlatList
      data={tasks}
      renderItem={({ item }) => (
        <TaskItem
          title={item.title}
          description={item.description}
          status={item.status}
          onDelete={() => onDeleteTask(item)}
          onToggleComplete={() => onToggleCompleteTask(item.id, !item.status)}
          onEdit={() => onEditTask(item)}
        />
      )}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

export default TaskList;
