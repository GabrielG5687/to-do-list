import React, { useState } from 'react';
import { View, TextInput, Button, TouchableOpacity, Text } from 'react-native';
import { styles } from './styles';

interface TaskInputProps {
  onAddTask: (title: string, description: string) => void;
}

const TaskInput: React.FC<TaskInputProps> = ({ onAddTask }) => {
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');

  const handleAddTask = () => {
    if (title.trim() !== '' && description.trim() !== '') {
      onAddTask(title, description);
      setTitle('');
      setDescription('');
    }
  };

  return (
    <View style={styles.inputSection}>
      <View style={styles.sectionTextInput}>
        <TextInput
          style={styles.input}
          placeholder="Titulo..."
          placeholderTextColor="#F0E3CA"
          value={title}
          onChangeText={setTitle}
        />
        <TextInput
          style={styles.textarea}
          placeholder="Descrição..."
          placeholderTextColor="#F0E3CA"
          value={description}
          onChangeText={setDescription}
          multiline
        />
      </View>
      <TouchableOpacity style={styles.buttonInput} onPress={handleAddTask}>
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TaskInput;
