import React, { useState } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";

// colors
import { darkMode, colors } from "../utils/index";

export default function CoordsModal() {
  const [modalVisible, setModalVisible] = useState(false);

  const array = ["salut", "buna"];
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>salut</Text>

            <TouchableHighlight
              style={{
                ...styles.openButton,
                backgroundColor: "#2196F3",
                ...styles.closeButton,
              }}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>

      <TouchableHighlight
        style={{ ...styles.openButton, backgroundColor: "red" }}
        onPress={() => {
          setModalVisible(true);
        }}
      >
        <Text style={styles.textStyle}>Show Coords</Text>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  closeButton: {
    top: 50,
  },
  centeredView: {
    position: "absolute",
    bottom: "30%",
    right: 150,
  },
  modalView: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 60,
    shadowColor: "#000",
    bottom: 80,
    left: 60,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 10,
  },
  openButton: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    fontWeight: "900",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
