import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { AppLoading } from 'expo';

import { Scene, Router, Stack } from 'react-native-router-flux';

export default class extends React.Component {
    state = {
        working: false
    };

    componentDidMount() {
        setTimeout(()=> this.setState({working: true}), 1000)
    }

    render() {
        let navTitleStyle = { fontSize: 10 , fontFamily: "Times New Roman", letterSpacing: 0.7 };

        if (!this.state.working)
            return <AppLoading/>

        return (
            <Router>
                <Stack key="root"
                       titleStyle={navTitleStyle}
                    <Scene key="Main" component={Main} title="Main" initial/>
                </Stack>
            </Router>
        )
    }
}

class Main extends React.Component {
    render() {
        return (
            <View>
                <Text>Test</Text>
            </View>
        );
    }
}
