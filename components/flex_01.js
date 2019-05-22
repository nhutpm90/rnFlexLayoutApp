import React, { Component } from "react";
import { StyleSheet, View, Text, Dimensions } from "react-native";

export default class App extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          margin: 20,
          borderColor: "red",
          borderWidth: 1
        }}
      >
        <Text>Parent</Text>
        <View
          style={{
            flex: 1,
            marginHorizontal: 10,
            borderColor: "#f1c40f",
            borderWidth: 1
          }}
        >
          <Text>Child 01</Text>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: "column",
            margin: 10,
            borderColor: "green",
            borderWidth: 1
          }}
        >
          <Text>Child 02</Text>
          <View
            style={{
              flex: 1,
              backgroundColor: "#2196F3"
            }}
          >
            <Text>Child 02 - 01</Text>
          </View>
          <View
            style={{
              flex: 1,
              backgroundColor: "#8BC34A"
            }}
          >
            <Text>Child 02 - 02</Text>
          </View>
          <View
            style={{
              flex: 1,
              backgroundColor: "#e3aa1a"
            }}
          >
            <Text>Child 02 - 03</Text>
          </View>
        </View>
      </View>
    );
  }
}
