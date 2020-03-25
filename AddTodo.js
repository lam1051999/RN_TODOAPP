import React, { useContext, useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { todoContext } from './App';

const AddTodo = () => {
    const { dispatch } = useContext(todoContext);
    const [text, setText] = useState("");
    return (
        <View style={styles.root}>
            <TextInput value={text} onChangeText={setText} style={styles.input} />
            <Button style={styles.button} color="green" onPress={() => {
                if (text) {
                    dispatch({ type: 'ADD_TODO', content: text })
                    setText("")
                }else{
                    alert("enter a todo")
                }
            }} title="ADD" />
        </View>
    )
}

const styles = StyleSheet.create({
    root : {
       flexDirection : 'row',
    },
    input:{
        width:'85%',
    },
})

export default AddTodo