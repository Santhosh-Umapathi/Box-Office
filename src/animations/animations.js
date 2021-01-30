
import {Animated} from 'react-native';


export const animate = (ref, toValue, duration) =>
{
    return Animated.timing(ref, 
    {
        toValue: toValue,
        duration: duration,
        useNativeDriver:true
    }).start();
}



