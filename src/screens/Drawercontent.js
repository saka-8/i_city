import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useTheme, Avatar, Title, Caption, Paragraph, Drawer, Text, TouchableRipple, Switch } from 'react-native-paper';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { AuthContext } from '../components/context';

export function DrawerContent(props) {

    const paperTheme = useTheme();

    // const [isDarkTheme, setIsDarkTheme] = React.useState(false);

    const { signOut, toggleTheme } = React.useContext(AuthContext);
    //const { signOut, toggleTheme } = React.useContext(AuthContext);
    // const toggleTheme = () => { setIsDarkTheme(!isDarkTheme); }
    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{ flexDirection: 'row', marginTop: 15 }}>
                            <Avatar.Image
                                source={{
                                    uri: 'https://www.google.com/url?sa=i&url=https://images.app.goo.gl/sG8KyihsqQ35BK6x7%3A%2F%2Fwww.picmonkey.com%2Fblog%2Flinkedin-profile-pic-maker&psig=AOvVaw19-BrwmIiVZXUscfFWoKv2&ust=1610535275766000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCLjVzJSelu4CFQAAAAAdAAAAABAP'
                                }}
                                size={50}
                            />
                            <View style={{ marginLeft: 15, flexDirection: 'column' }}>
                                <Title style={styles.title}>Pyrox Automatation</Title>
                                <Caption style={styles.caption}>@username</Caption>
                            </View>
                        </View>
                        <View style={styles.row}>
                            <View style={styles.section}>
                                <Paragraph style={[styles.paragraph, styles.caption]}>80</Paragraph>
                                <Caption style={styles.caption}>Kwh</Caption>
                            </View>
                            <View style={styles.section}>
                                <Paragraph style={[styles.paragraph, styles.caption]}>100</Paragraph>
                                <Caption style={styles.caption}>Volts</Caption>
                            </View>
                        </View>
                    </View>
                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="home"
                                    color={color}
                                    size={size} />
                            )}
                            label="Home"
                            onPress={() => { props.navigation.navigate('Home') }} />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="bell"
                                    color={color}
                                    size={size} />
                            )}
                            label="Notification"
                            onPress={() => { props.navigation.navigate('Notificationscreen') }} />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="update"
                                    color={color}
                                    size={size} />
                            )}
                            label="Update"
                            onPress={() => { props.navigation.navigate('Supportscreen') }} />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="tools"
                                    color={color}
                                    size={size} />
                            )}
                            label="Settings"
                            onPress={() => { props.navigation.navigate('Settingscreen') }} />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="face-profile"
                                    color={color}
                                    size={size} />
                            )}
                            label="Profile"
                            onPress={() => { props.navigation.navigate('Profile') }} />
                    </Drawer.Section>
                    <Drawer.Section title="Preferences">
                        <TouchableRipple onPress={() => { toggleTheme() }}>
                            <View style={styles.preference}>
                                <Text>Dark Theme</Text>
                                <View pointerEvents="none">
                                    <Switch value={paperTheme.dark} />
                                </View>
                            </View>
                        </TouchableRipple>
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem
                    icon={({ color, size }) => (
                        <Icon
                            name="exit-to-app"
                            color={color}
                            size={size}
                        />
                    )}
                    label="Sign Out"
                    onPress={() => { signOut() }}
                />
            </Drawer.Section>
        </View>
    );
}

const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
    },
    userInfoSection: {
        paddingLeft: 20,
    },
    title: {
        fontSize: 16,
        marginTop: 3,
        fontWeight: 'bold',
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
    },
    row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
    },
    paragraph: {
        fontWeight: 'bold',
        marginRight: 3,
    },
    drawerSection: {
        marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
    },
});