import {useState} from 'react';
import {View, Text, ScrollView, SafeAreaView } from 'react-native';
import { Stack, useRouter} from 'expo-router';
import {COLORS, icons, images, SIZES} from '../constants';
import {Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome} from '../components';

const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn iconUrl={icons.menu} dimensions="60%" />
          ),
          headerRight: () => (
            <ScreenHeaderBtn iconUrl={icons.profile} dimensions="100%" />
          ),
          headerTitle: "",
        }}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{
            flex: 1,
            padding: SIZES.medium
        }}>
          <Welcome />
          <Popularjobs />
          <Nearbyjobs />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Home;

// import React from "react";
// import { Text, View, StyleSheet } from "react-native";
// import * as Font from "expo-font";

// let customFonts = {
//   // "Inter-Black": require("./assets/fonts/Inter-Black.otf"),
//   "Inter-SemiBoldItalic":
//     "https://rsms.me/inter/font-files/Inter-SemiBoldItalic.otf?v=3.12",
// };

// export default class App extends React.Component {
//   state = {
//     fontsLoaded: false,
//   };

//   async _loadFontsAsync() {
//     await Font.loadAsync(customFonts);
//     this.setState({ fontsLoaded: true });
//   }

//   componentDidMount() {
//     this._loadFontsAsync();
//   }

//   render() {
//     if (!this.state.fontsLoaded) {
//       return null;
//     }

//     return (
//       <View style={styles.container}>
//         <Text style={{ fontFamily: "Inter-SemiBoldItalic", fontSize: 30 }}>
//           Inter SemiBoldItalic
//         </Text>
//         <Text style={{ fontSize: 30 }}>Platform Default</Text>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
// });
