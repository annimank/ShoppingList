import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#DBCABC',
        justifyContent: 'space-between',
        paddingTop: 20,
        paddingBottom: 20,
    },
    pic: {
        alignItems: 'center',
        marginTop: 0,
    },
    headerText: {
        fontFamily: 'Phudu-regular',
        fontSize: 20,
        textAlign: 'center',
        color: '#BD601E',
    },
    textInput: {
        paddingHorizontal: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#957761',
    },
    textInputField: {
        width: 300,
        height: 40,
        textAlign: 'center',
        fontSize: 17,
        color: '#957761',
        fontFamily: 'Phudu-regular',
    },
    buttonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        marginBottom: 20,
        marginTop: 10,
    },
    button: {
        backgroundColor: '#957761',
        padding: 10,
        borderRadius: 1,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontFamily: 'Phudu-regular',
    },
    buttonSpacer: {
        width: 10,
    },
    clearButton: {
        backgroundColor: '#A74B0A',
        padding: 10,
        borderRadius: 1,
        marginTop: 10,
    },
    clearButtonText: {
        color: 'white',
        fontSize: 16,
        fontFamily: 'Phudu-regular',
    },
    historyContainer: {
        marginTop: 20,
        alignItems: 'center',
        padding: 20,
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    checkbox: {
        width: 20,
        height: 20,
        borderWidth: 1,
        borderColor: '#957761',
        marginRight: 10,
        borderRadius: 3,
    },
    listItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 8,
        backgroundColor: '#DBCABC',
        borderBottomWidth: 1,
        borderBottomColor: '#DBCABC',
        fontFamily: 'Phudu-regular',
    },
    listItemText: {
        flex: 1,
        fontSize: 16,
        color: '#957761',
    },
    listItemCheckbox: {
        width: 20,
        height: 20,
        borderWidth: 1,
        borderColor: '#957761',
        marginRight: 10,
        borderRadius: 3,
        alignItems: 'center',
        justifyContent: 'center',
    },
    checkedCheckbox: {
        backgroundColor: '#957761',
    },
    checkboxIcon: {
        width: 14,
        height: 14,
        tintColor: 'white',
    },
    footer: {
        backgroundColor: '#BD601E',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    footerText: {
        color: 'white',
        fontSize: 12,
        fontFamily: 'Phudu-regular',
    },
});

export default styles;
