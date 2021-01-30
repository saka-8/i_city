import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Splashscreen from './Splashscreen';
import Signinscreen from './Signinscreen';
import Signupscreen from './Signupscreen';

const RootStack = createStackNavigator();

const Rootstackscreen = ({ navigation }) => (
    <RootStack.Navigator headerMode='none'>
        <RootStack.Screen name="Splashscreen" component={Splashscreen} />
        <RootStack.Screen name="Signinscreen" component={Signinscreen} />
        <RootStack.Screen name="Signupscreen" component={Signupscreen} />
    </RootStack.Navigator>
);

export default Rootstackscreen;