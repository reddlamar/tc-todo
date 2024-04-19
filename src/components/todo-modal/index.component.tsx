import {View, Alert, Modal} from 'react-native';
import React from 'react';
import {styles} from './style.component';
import {IconButton, MD2Colors, Text} from 'react-native-paper';
import {moderateScale} from 'react-native-size-matters';
import DraggableView from '../draggable-view/index.component';

const TodoModal = ({modalVisible, setModalVisible, children, title}: any) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
        setModalVisible(!modalVisible);
      }}>
      <DraggableView>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <IconButton
              onPress={() => setModalVisible(!modalVisible)}
              icon="close"
              size={moderateScale(18)}
              iconColor={MD2Colors.white}
              style={styles.iconButton}
              testID="close-btn"
            />
            <View style={styles.topContainer}>
              <Text style={styles.title}>{title}</Text>
            </View>
            {children}
          </View>
        </View>
      </DraggableView>
    </Modal>
  );
};

export default TodoModal;
