import React, { useState } from 'react';
import { Modal, View, Text, TextInput, Button, StyleSheet } from 'react-native';


interface EditTaskModalProps {
    visible: boolean;
    task: { id: number, title: string, description: string };
    onClose: () => void;
    onSave: (id: number, title: string, description: string) => void;
}

const EditTaskModal: React.FC<EditTaskModalProps> = ({ visible, task, onClose, onSave }) => {
    const [title, setTitle] = useState(task.title);
    const [description, setDescription] = useState(task.description);

    const handleSave = () => {
        onSave(task.id, title, description); // Chama a função de salvar com os novos valores
        onClose(); // Fecha o modal após salvar
    };

    return (
        <Modal
            visible={visible}
            animationType="slide"
            transparent={true}
            onRequestClose={onClose}
        >
            <View style={styles.modalOverlay}>
                <View style={styles.modalContent}>


                    <TextInput
                        style={styles.input}
                        value={title}
                        onChangeText={setTitle}
                        placeholder="Título"
                    />
                    <TextInput
                        style={styles.textarea}
                        value={description}
                        onChangeText={setDescription}
                        placeholder="Descrição"
                        multiline
                    />

                    <View style={styles.buttonContainer}>
                        <View style={styles.buttonCancela}>
                            <Button title="Cancelar" onPress={onClose} color= "#242320"/>

                        </View>
                        <View >
                            <View style={styles.buttonSave}>
                                <Button title="Salvar" onPress={handleSave} color= "#242320" />
                            </View>
                        </View  >

                    </View>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fundo semitransparente
    },
    modalContent: {
        marginTop: 230,
        width: 360,
        padding: 20,
        backgroundColor: '#1B1A17',
        borderRadius: 10,
    },
    input: {
        borderWidth: 2,
        borderColor: '#FF8303',
        borderRadius: 5,
        paddingTop: 7,
        paddingBottom: 7,
        paddingLeft: 14,
        height: 32,
        width: 324,
        color: '#F0E3CA',
        backgroundColor: '#242320',
        marginBottom: 6,
    },
    textarea: {
        borderWidth: 2,
        borderColor: '#FF8303',
        borderRadius: 5,
        paddingTop: 7,
        paddingBottom: 7,
        paddingLeft: 14,
        height: 415,
        width: 324,
        color: '#F7F7F7',
        backgroundColor: '#242320',
        textAlignVertical: 'top',

    },
    buttonContainer: {
        marginTop: 8,
        flexDirection: 'row',
        marginRight: 'auto',
        marginLeft: 'auto',
    },
    buttonSave: {
        marginLeft: 6,
        borderWidth: 2,
        borderColor: '#FF8303',
        borderRadius: 5,
    },
    buttonCancela: {
        marginRight: 6,
        borderWidth: 2,
        borderColor: '#FF8303',
        borderRadius: 5,
    },
});

export default EditTaskModal;
