import {TextStyle} from 'react-native';
import React from 'react';
import {Gesture, GestureDetector} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import {styles} from './styles.component';

type CustomViewProps = {children: any; style?: TextStyle | TextStyle[]};

const DraggableView: React.FC<CustomViewProps> = ({children, style}) => {
  const x = useSharedValue(0);
  const y = useSharedValue(0);
  const panGestureEvent = Gesture.Pan()
    .onStart(e => {
      e.x = x.value;
      e.y = y.value;
    })
    .onUpdate(e => {
      x.value = e.translationX;
      y.value = e.translationY;
    })
    .onEnd(() => {
      x.value = withSpring(0);
      y.value = withSpring(0);
    });

  const panStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateX: x.value}, {translateY: y.value}],
    };
  }, [x, y]);

  return (
    <GestureDetector gesture={panGestureEvent}>
      <Animated.View style={[styles.animatedView, panStyle, {...style}]}>
        {children}
      </Animated.View>
    </GestureDetector>
  );
};

export default DraggableView;
