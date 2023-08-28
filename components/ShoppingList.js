import React, { useState, useEffect } from 'react';
import { StatusBar, Text, View, TextInput, TouchableOpacity, FlatList, KeyboardAvoidingView, Image, ScrollView, Keyboard } from 'react-native';
import * as Font from 'expo-font';
import styles from '../assets/styles';

const ShoppingList = () => {
    const [fontLoaded, setFontLoaded] = useState(false);
    const [addProduct, setAddProduct] = useState("");
    const [list, setList] = useState([]);

    const addButton = () => {
        Keyboard.dismiss();
        setList(prevList => [...prevList, { name: addProduct, purchased: false }]);
        setAddProduct("");
    };

    const togglePurchased = (index) => {
        const updatedList = list.map((item, i) => {
            if (i === index) {
                return { ...item, purchased: !item.purchased };
            }
            return item;
        });
        setList(updatedList);
    };

    const clearPurchasedItems = () => {
        const updatedList = list.filter(item => !item.purchased);
        setList(updatedList);
    };

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
        <KeyboardAvoidingView style={styles.container} behavior="padding">
            <ScrollView style={styles.scrollContainer}>
                <View style={styles.pic}>
                    <Image style={{ width: 250, height: 250 }} source={require('../assets/bnmLogo.png')} />
                </View>
                <View style={styles.textInput}>
                    <TextInput onChangeText={text => setAddProduct(text)} value={addProduct} placeholder="Add a product" style={styles.textInputField} />
                </View>
                <FlatList
                    data={list}
                    renderItem={({ item, index }) => (
                        <TouchableOpacity onPress={() => togglePurchased(index)}>
                            <View style={styles.listItem}>
                                <TouchableOpacity
                                    style={[styles.listItemCheckbox, item.purchased ? styles.checkedCheckbox : null]}
                                    onPress={() => togglePurchased(index)}
                                />
                                <Text style={[styles.listItemText, item.purchased ? styles.checkedText : null]}>{item.name}</Text>
                            </View>
                        </TouchableOpacity>
                    )}
                    keyExtractor={(item, index) => index.toString()}
                />
            </ScrollView>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={addButton}>
                    <Text style={styles.buttonText}>ADD</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => setList([])}>
                    <Text style={styles.clearButtonText}>Clear List</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={clearPurchasedItems}>
                    <Text style={styles.clearButtonText}>Clear purchased</Text>
                </TouchableOpacity>
            </View>
            <StatusBar style="auto" />
        </KeyboardAvoidingView>
    );
}

export default ShoppingList;
