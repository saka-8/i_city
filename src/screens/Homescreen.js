import React from 'react';
import { View, Text, Button, StyleSheet, StatusBar } from 'react-native';
import { Card } from 'react-native-elements';
//import { useTheme } from '@react-navigation/native';

const Homescreen = (props) => {

    // const { colors } = useTheme();

    // const theme = useTheme();

    return (
        <View style={styles.container}>
            {/* <Card>
                <Text>Hall</Text>
            </Card>
            <Card>
                <Text>Kitchen</Text>
            </Card>
            <Card>
                <Text>Bedroom</Text>
            </Card>
            <Card>
                <Text>Bathroom</Text>
            </Card>
            <Card>
                <Text>Dining are</Text>
            </Card>
            <Card>
                <Text>Balcony</Text>
            </Card> */}
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Button title="Hall" onPress={() => { props.navigation.navigate('Hallscreen') }} />
            </View>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Button title="Kitchen" onPress={() => navigation.navigate("Hallscreen")} />
            </View>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Button title="BedRoom" onPress={() => navigation.navigate("Details")} />
            </View>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Button title="Dining Area" onPress={() => navigation.navigate("Details")} />
            </View>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Button title="BathRoom" onPress={() => navigation.navigate("Details")} />
            </View>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Button title="Balcony" onPress={() => navigation.navigate("Details")} />
            </View>
        </View>
    );
};

export default Homescreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
});