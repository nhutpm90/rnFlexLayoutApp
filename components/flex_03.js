import React, { Component } from 'react';
import { StyleSheet, View, Text, Dimensions, ScrollView } from 'react-native';

class Box02 extends Component {
  render() {
    return (
      <View style={{
        flex: 1,
        backgroundColor: '#8BC34A',
        flexDirection: 'row',
        height: 130,
        marginBottom: 15
      }}>
        <View style={{
          flex: 1,
          backgroundColor: '#e74c3c'
        }}>
          <Text>1/4</Text>
        </View>
        <View style={{
          flex: 3,
          flexDirection: 'column',
          backgroundColor: '#8e44ad',
        }}>
          <View style={{
            backgroundColor: '#3F51B5',
            // padding: 10
          }}>
            <View style={{
              flexDirection: 'row'
            }}>
              <View style={{
                flex: 1,
                backgroundColor: '#ffda79',
              }}>
                <Text>item 1</Text>
              </View>
              <Text style={{
                flex: 1,
                backgroundColor: '#c23616',
              }}>item 2 item 2 item 2 item 2 item 2 item 2 item 2</Text>
            </View>
          </View>
          <View style={{
            flex: 1,
            backgroundColor: '#67e6dc'
          }}>
            <Text>2/3</Text>
            <Text>2/3</Text>
            <Text>2/3</Text>
          </View>
        </View>
      </View>
    );
  }
}

export default class App extends Component {
  render() {
    return (
      <View style={{
        flex: 1,
        flexDirection: 'column'
      }}>
        <View style={[styles.box1]}>
          <Text>01</Text>
        </View>
        <View style={{
          flex: 4,
          backgroundColor: '#227093'
        }}>
          <ScrollView style={{
            // flex: 1,
          }}
          contentContainerStyle={{
            padding: 15
          }}>
              <Box02 />
              <Box02 />
              <Box02 />
              <Box02 />
              <Box02 />
              <Box02 />
              <Box02 />
              <Box02 />
              <Box02 />
              <Box02 />
          </ScrollView>
        </View>
        <View style={[styles.box3]}>
          <Text>033</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  box1: {
    flex: 1,
    backgroundColor: '#2196F3',
  },
  box3: {
    flex: 1,
    backgroundColor: '#e3aa1a',
  },
});
