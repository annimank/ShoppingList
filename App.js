import React, { useState, useEffect } from 'react';
import { StyleSheet, KeyboardAvoidingView } from 'react-native';
import Footer from './components/Footer';
import ShoppingList from './components/ShoppingList';

export default function App() {
  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding" keyboardVerticalOffset={-500}>
      <ShoppingList />
      <Footer />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DBCABC',
    justifyContent: 'center', 
    paddingTop: 20, 
  },
});
