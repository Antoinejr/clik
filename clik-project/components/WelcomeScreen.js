import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, Button, FlatList } from 'react-native';

const animals = [
    {
        id: 1,
        name: 'Shark'
    },
    {
        id: 2,
        name: 'Dolphin'
    },
    {
        id: 3,
        name: 'Lion'
    },
    {
        id: 4,
        name: 'Cheetah'
    },
    {
        id: 5,
        name: 'Gorilla'
    }
];


function WelcomeScreen(props) {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.header}>Clik</Text>
            </View>
            <View style={styles.tableContent}>
                <FlatList
                    ListHeaderComponent={<Text style={styles.header}>Events</Text>}
                    ListEmptyComponent={<Text>No Entries, Try refreshing</Text>}
                    keyExtractor={(item) => item.id}
                    data={animals}
                    renderItem={({ item }) => (
                        <View style={styles.card}>
                            <Text>{item.name}</Text>
                        </View>
                    )}
                />
            </View>
            <View style={styles.btnCollection}>
                <Button title='Refresh' />
                <Button title='Add Event' color='green' />
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
        // backgroundColor: 'white',
    },
    btnCollection: {
        flex: 1,
        flexDirection: 'row',
        marginBottom: 20,
        justifyContent: 'space-around',
        alignItems: 'center'

    },
    card:{
        flexDirection:'row',
        padding:10,
        marginBottom:10,
        backgroundColor:'yellow',
        borderRadius: 10,
        elevation: 2

    }
});



export default WelcomeScreen;