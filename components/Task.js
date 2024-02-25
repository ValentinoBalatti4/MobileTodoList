import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons"; // Make sure to install the FontAwesome package


const Task = (props) => {
    const [isDone, setIsDone] = useState(false);

    const handleIsDone = () => {
        setIsDone(!isDone);
    }

    return (
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <TouchableOpacity style={[styles.square, {backgroundColor: isDone ? 'green' : '#9F9F9F'}]} onPress={handleIsDone}>
                {isDone && (
                    <FontAwesome name="check" size={22} color="white" />
                )}
                </TouchableOpacity>
                <Text style={styles.itemText}>{props.text}</Text>
            </View>
            <View style={styles.circular}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        padding: 15,
        borderRadius: 10,
        marginBottom: 20
    },

    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: 15
    },

    square: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 30,
        height: 30,
        opacity: 0.4,
        borderRadius: 5
    },

    itemText: {
        maxWidth: '80%'
    },

    circular: {
        width: 12,
        height: 12,
        borderColor: '#55BCF6',
        borderWidth: 2,
        borderRadius: 5
    },
})


export default Task