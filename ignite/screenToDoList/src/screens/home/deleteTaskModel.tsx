import React, { useState } from 'react';
import { Modal, View, Text, TextInput, Button, StyleSheet } from 'react-native';

interface EditTaskModalProps {
    visible: boolean;
    task: { id: number};
    onClose: () => void;
    onYes: (id: number) => void;
}

const DeleteTaskModal: React.FC<EditTaskModalProps> = ({ visible, task, onClose, onYes }) => {

    const handleYes = () => {
        onYes(task.id); // Chama a função de salvar com os novos valores
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


                    <Text style={styles.text}>Deseja deletar?</Text>

                    <View style={styles.buttonContainer}>
                        <View style={styles.buttonCancela}>
                            <Button title="Não" onPress={onClose} color= "#242320"/>

                        </View>
                        <View >
                            <View style={styles.buttonYes}>
                                <Button title="Sim" onPress={handleYes} color= "#242320" />
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
        borderTopWidth: 4, 
        borderTopColor: '#FF8303',
        width: 281,
        padding: 20,
        backgroundColor: '#1B1A17',
        borderRadius: 10,
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#FFFFFF',
        textAlign: 'center',
        marginBottom:41.63,
      },
    buttonContainer: {
        marginTop: 8,
        flexDirection: 'row',
        marginRight: 'auto',
        marginLeft: 'auto',
    },
    buttonYes: {
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

export default DeleteTaskModal;
