import React, { useState } from 'react';
import { View, Button, StyleSheet,Text } from 'react-native';
import Modal from 'react-native-modal';
import Calendars from './Calender';

export default function Test() {
  const [modalVisible, setModalVisible] = useState(false);

  const handleOpenModal = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <Button title="Open Modal" onPress={handleOpenModal} />

      <Modal
        isVisible={modalVisible}
        onBackdropPress={handleCloseModal}
        backdropOpacity={0.5}
        animationIn="slideInUp"
        animationOut="slideOutDown"
        style={styles.modal}
      >
        <View style={styles.modalContent}>
          <Calendars/>
          <Button title="Close" onPress={handleCloseModal} />
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  modal: {
    justifyContent: 'flex-first',
    marginTop: 60,
  },
  modalContent: {
    height:700,
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 20,
  },
});
