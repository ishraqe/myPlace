import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Modal from "react-native-modal";

const ModalComponent = ({children, isVisible}) => {
    return (
        <Modal isVisible={isVisible}>
            {children}
        </Modal>
    )
}

export default ModalComponent;