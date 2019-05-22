import React, { Component } from "react";

import { View, Text, StyleSheet, FlatList, Image } from "react-native";

export default class App extends Component {
  render() {
    const data = [];
    const dataTemplate = {
      id: "598a678278fee204ee51cd2c",
      name:
        "Cream Tea Cream Tea Cream Tea Cream Tea Cream Tea Cream Tea Cream Tea Cream Tea",
      imageUrl:
        "https://cdn.dribbble.com/users/1236180/screenshots/4440250/shot.jpg",
      description:
        "This is a cup of cream tea cream tea cream tea cream tea cream tea"
    };

    for (var i = 0; i <= 30; i++) {
      data.push({ ...dataTemplate, id: i });
    }

    return (
      <View
        style={{
          flex: 1,
          margin: 15
        }}
      >
        <FlatList
          style={
            {
              // backgroundColor:'purple',
            }
          }
          data={data}
          ItemSeparatorComponent={() => (
            <View
              style={{
                height: 0.5,
                backgroundColor: "rgba(0,0,0,0.4)"
              }}
            />
          )}
          keyExtractor={(item, index) => item.id.toString()}
          renderItem={({ item, index }) => (
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                // backgroundColor: 'red',
                paddingVertical: 8
                // paddingBottom: 15
                // marginBottom: 10,
                // borderTopColor: 'red',
                // borderTopWidth: 1
              }}
            >
              <View
                style={{
                  justifyContent: "center",
                  backgroundColor: "green"
                }}
              >
                <Image
                  source={{ uri: item.imageUrl }}
                  style={{ width: 50, height: 50, margin: 5 }}
                />
              </View>

              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  backgroundColor: "yellow"
                }}
              >
                <Text numberOfLines={1}>{item.id}.{item.name}</Text>
                <Text numberOfLines={1}>{item.description}</Text>
              </View>

              <View
                style={{
                  justifyContent: "center",
                  backgroundColor: "blue"
                }}
              >
                <Text>Text</Text>
              </View>
            </View>
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({});
