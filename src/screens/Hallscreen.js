import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Hallscreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Switch
                trackColor={{ false: '#767577', true: '#81b0ff' }}
                thumbColor={isEnabled_ki_l ? '#f5dd4b' : '#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
            //   onValueChange={toggleSwitch_ki_l}
            //   value={isEnabled_ki_l}
            />
            {/* <Text>Support Screen</Text>
            <Button
                title="Click Here"
                onPress={() => alert('Button Clicked!')}
            /> */}
        </View>
    );
};

export default Hallscreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
});