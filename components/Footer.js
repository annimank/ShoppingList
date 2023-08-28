import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import * as Font from 'expo-font';
import styles from '../assets/styles';

const Footer = () => {

  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    async function loadFonts() {
        await Font.loadAsync({
            'Phudu-regular': require('../assets/fonts/Phudu-VariableFont_wght.ttf'),
        });
        setFontLoaded(true);
    }
    loadFonts();
  }, []);

  if (!fontLoaded) {
    return null;
}

  return (
    <View style={styles.footer}>
      <Text style={styles.footerText}>© 2023 Bread & Milk Shopping List</Text>
    </View>
  );
};

export default Footer;
