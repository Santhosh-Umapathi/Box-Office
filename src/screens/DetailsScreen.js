import React, {useState, useRef} from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Button, Image, Flatlist, Animated } from 'react-native';

import BottomSheet from 'reanimated-bottom-sheet';


const DetailsScreen = (props) =>
{
    const [openBottomSheet, setOpenBottomSheet] = useState(false)

    const fadeAnim = useRef(new Animated.Value(0)).current;

    const fadeIn = () => {
        // Will change fadeAnim value to 1 in 5 seconds
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 100,
          useNativeDriver:true
        }).start();
      };
    
      const fadeOut = () => {
        // Will change fadeAnim value to 0 in 5 seconds
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 500,
          useNativeDriver:true

        }).start();
      };
    

    const sheetRef = useRef(null);

    const renderContent = () => 
    {
        return <Animated.View
        
          style={{
            backgroundColor: 'orange',
            padding: 16,
            height: 500,
            opacity:fadeAnim,
            // zIndex: 200
          }}
        >
          <Text>Swipe down to close</Text>
          <Button title = "Close" onPress = {() => sheetRef.current.snapTo(1)}/>
        </Animated.View>
    
        
    }

const {navigation} = props

    return (
        <View style={styles.containerView}>
            <Text>Jack</Text>
            <Text>Jack</Text>
            <Text>Jack</Text>
            <Text>Jack</Text>
            <Text>Jack</Text>
            <Text>Jack</Text>
            <Text>Jack</Text>
            <Text>Jack</Text>
            <Text>Jack</Text>

            {/* <BottomSheet
                ref={sheetRef}
                snapPoints={["60%","30%"]}
                borderRadius={10}
                renderContent={renderContent}
                initialSnap = {1}
                onCloseStart = {() => fadeOut()}
            /> */}
        </View>
        );
};

const styles = StyleSheet.create({
    containerView:
    {
        // flex: 1,
        // height:'30%',
        backgroundColor: 'orange',
        
    },
    
});

export default DetailsScreen;