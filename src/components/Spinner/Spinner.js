import React from 'react';
import { View, ActivityIndicator} from 'react-native';

//Styles
import { spinnerStyle } from '../../styles/styles';


const Spinner = (props) => (
        <View style={spinnerStyle} {...props}>
            <ActivityIndicator size="large" color="#626262" />
        </View>
);


export default Spinner;