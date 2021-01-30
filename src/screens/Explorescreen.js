import React from 'react';
import { View, Text, Button, StyleSheet, StatusBar } from 'react-native';
//import { useTheme } from '@react-navigation/native';

const Explorescreen = ({ navigation }) => {

    // const { colors } = useTheme();

    // const theme = useTheme();

    return (
        <View style={styles.container}>
            {/* <StatusBar barStyle={theme.dark ? "light-content" : "dark-content"} /> */}
            {/* <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}> */}
            <Text>
                Home Screen
      </Text>
            <Button title="Goto details" onPress={() => navigation.navigate("Details")} />
        </View>
        // </View>
    );
};

export default Explorescreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
});