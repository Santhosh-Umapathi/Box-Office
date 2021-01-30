import React from 'react';
import { View, ActivityIndicator, StyleSheet} from 'react-native';

const Spinner = (props) => (
        <View style={styles.spinner} {...props}>
            <ActivityIndicator size="large" color="#626262" />
        </View>
    );


const styles = StyleSheet.create({
    spinner:
    {
        flex: 1,
        justifyContent: 'center',
    },
    
});

export default Spinner;