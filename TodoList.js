import React, { useContext } from 'react';
import { Text, ScrollView, Button, StyleSheet, View } from 'react-native';
import { todoContext } from './App';

const TodoList = () => {
    const { state, dispatch } = useContext(todoContext);
    return (
        <ScrollView style={styles.root}>
            {state.map(item =>
                <View key={item.id} style={styles.item}>
                    <Text style={styles.text}>{item.content}</Text>
                    <Button color="red" onPress={() => {
                        dispatch({ type: 'REMOVE_TODO', id: item.id })
                        alert("delete successfully")
                    }} title="X" />
                </View>
            )}
        </ScrollView>

    )
}

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        marginTop: 10
    },
    text: {
        width: '90%',
        backgroundColor: 'rgba(57,78,102,0.1)'
    }
})

export default TodoList;