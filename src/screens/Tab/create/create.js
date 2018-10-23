import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity, StatusBar} from 'react-native';
import styles from './style';

export default class Create extends Component {
    handleClick = (renderFrom) => {
        console.log(renderFrom);
        this.props.navigation.navigate('CreateIssue',{page: renderFrom});
    }
    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                    barStyle = "dark-content" 
                    hidden = {false} 
                    backgroundColor = "#fff" 
                />
                <Text style={styles.headline}>Create !</Text>
                <View style={styles.cardContainer}>
                    <TouchableOpacity 
                        style={styles.eachCard}
                        onPress={ () =>this.handleClick('idea')}
                    >
                        <Image 
                            source={require('../../../assets/idea.png')}
                            style={styles.image}
                        />
                        <Text style={styles.title}>Idea</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={styles.eachCard}
                        onPress={() => this.handleClick('issue')}    
                    >
                        <Image 
                            source={require('../../../assets/issue.png')}
                            style={styles.image}
                        />
                        <Text style={styles.title}>Issue</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}