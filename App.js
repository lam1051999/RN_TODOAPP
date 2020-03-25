import React, { useReducer, createContext } from 'react';
import TodoList from './TodoList';
import AddTodo from './AddTodo';
import { StatusBar, StyleSheet, Text } from 'react-native';
import uuid from 'react-native-uuid';

const initialState = [];
const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, { content: action.content, id: uuid.v4() }];
    case 'REMOVE_TODO':
      return state.filter(item => item.id !== action.id);
    default:
      return state;
  }
};

export const todoContext = createContext();

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <>
      <StatusBar barStyle="light-content" />
      <Text style={styles.title}>TODO LIST</Text>
      <todoContext.Provider value={{ state, dispatch }}>
        <AddTodo />
        <TodoList />
      </todoContext.Provider>
    </>
  )
};

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    fontSize: 30,
    fontWeight: 'bold',
    color: 'red',
    backgroundColor: 'rgba(152,1,13,0.1)',
    borderRadius: 10,
    width: '50%',
    alignSelf: 'center'
  }
})
export default App;
