import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1B1A17',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#F0E3CA',
    textAlign: 'center',
    marginBottom: 20,
  },
  inputSection: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 72,
  },
  sectionTextInput: {
    flexDirection: "column",
    marginRight: 8,
  },
  input: {
    borderWidth: 2,
    borderColor: '#FF8303',
    borderRadius: 5,
    paddingTop: 7,
    paddingBottom: 7,
    paddingLeft: 14,
    height: 32,
    width: 267,
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
    height: 32,
    width: 267,
    color: '#F7F7F7',
    backgroundColor: '#242320',
    textAlignVertical: 'top',
    
  },
  buttonInput: {
    borderWidth: 2,
    borderColor: '#FF8303',
    borderRadius: 5,
    height: 70,
    width: 70,

  },
  buttonText:{
    color: "#FF8303",
    textAlign: "center",
    margin: 15,
    fontSize: 23,
    
  },
  
  


  taskItem: {
    borderWidth: 2,
    borderColor: '#A35709',
    backgroundColor: '#242320',
    borderRadius: 8,
    padding: 15,
    paddingBottom: -5,
    flexDirection: 'row',
    marginBottom: 16,
    width: 347,
  },
  taskHeader: {
    marginRight: 16,
    flexDirection: 'column',
  },
  taskTitle: {
    color: '#F7F7F7',
    fontSize: 22,
    fontWeight: 'bold',
    width: 265,
    height: 30,
  },
  taskDescription: {
    width: 265,
    color: '#F7F7F7',
    marginTop: 4,
    marginBottom: 10,
    fontSize: 14,
  },

  deleteButton: {
    height: 32,
    width: 32,
    borderWidth: 2,
    borderColor: '#A35709',
    borderRadius: 5,
    backgroundColor: '#1B1A17',
    color: '#FF8303',

    paddingTop: 4,
    textAlign: 'center',
    
  },

  taskActions: {
    
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: -8,
    marginBottom: 16,
  },
  taskActionsStatus: {
    borderWidth: 2,
    borderColor: '#A35709',
    borderRadius: 5,
  },
  taskActionsEdit: {
    borderWidth: 2,
    borderColor: '#A35709',
    borderRadius: 5,

    marginRight: 10,
  },
});
