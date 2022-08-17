import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, Button, FlatList, Modal, TextInput } from 'react-native';
import Axios from 'axios';

function WelcomeScreen(props) {
    const [event, setEvent] = useState([]);
    const [name, setName] = useState("");
    const [date, setDate] = useState("");
    const [image, setImage] = useState("");
    const [mOpen, setmOpen] = useState(false);
    const [refresh, setRefresh] = useState(false);

    useEffect(() => {
        Axios.get("http://192.168.178.38:5000/getEvent").then((response) => {
            setEvent(response.data)
        });

    }, []);

    const addEvent = () => {
        Axios.post("http://192.168.178.38:5000/createEvent", {
            name: name,
            date: date,
            image: image
        }
        ).then((response) => {
            alert("added")

        })

    }

    return (
        <SafeAreaView style={styles.container}>
            <Modal visible={mOpen}>
                <View style={styles.header}>
                    <TextInput placeholder="name" onChangeText={(val) => setName(val)} />
                    <TextInput placeholder="date" onChangeText={(val) => setDate(val)} />
                    <TextInput placeholder="image" onChangeText={(val) => setImage(val)} />
                    <Button title='Add' color='green' onPress={() => { addEvent() }} />
                    <Button title='Close' color='red' onPress={() => { setmOpen(!mOpen) }} />

                </View>
            </Modal>


            <View style={styles.headerContainer}>
                <Text style={styles.header}>Clik</Text>
            </View>
            <View style={styles.tableContent}>
                <FlatList
                    ListHeaderComponent={<Text style={styles.header}>Events</Text>}
                    ListEmptyComponent={<Text>No Entries, Try refreshing</Text>}
                    data={event}
                    renderItem={({ item }) => (
                        <View style={styles.card}>
                            <Text>{item.name}</Text>
                            <Text>{item.date}</Text>
                            <Image
                                source={{ uri: item.image }}
                                style={{ height: 80, width: 80 }} />
                        </View>
                    )}
                />
            </View>
            <View style={styles.btnCollection}>
                <Button title='Add Event' color='green' onPress={() => { setmOpen(!mOpen) }} />
                <Button title='Refresh' color='blue' onPress={() => { setRefresh(!refresh) }} />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 41,
        backgroundColor: 'white',
    },
    headerContainer: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#56d456',
        alignContent: 'center',
        justifyContent: 'center',
    },
    header: {
        fontSize: 36,
        color: 'black',
        alignSelf: 'center'
    },

    tableContent: {
        flex: 8,
    },
    btnCollection: {
        flex: 1,
        flexDirection: 'row',
        marginBottom: 20,
        justifyContent: 'space-around',
        alignItems: 'center'

    },
    card: {
        flexDirection: 'row',
        padding: 10,
        marginBottom: 10,
        backgroundColor: 'yellow',
        borderRadius: 10,
        elevation: 2

    }
});



export default WelcomeScreen;