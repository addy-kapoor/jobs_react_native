import React from 'react'
import { 
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList
} from 'react-native';
import {useRouter} from 'expo-router';

import styles from './welcome.style'
import {icons, SIZES} from '../../../constants';

const Welcome = () => {
  return (
    <View>
      <View>
        <Text style={{ fontFamily: "DMRegular18pt" }}>
          Hello Adrian
        </Text>
        <Text style={styles.welcomeMessage}>Find your perfect job</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput style={styles.searchInput} />
        </View>
      </View>
    </View>
  );
}

export default Welcome