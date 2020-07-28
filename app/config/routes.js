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
    }
}

class Main extends React.Component {
    render() {
    }
}
