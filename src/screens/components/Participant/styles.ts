import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        marginBottom: 10,
    },
    name: {
        flex: 1,
        backgroundColor: '#1F1E25',
        borderRadius: 5,
        color: 'white',
        padding: 16,
        fontSize: 16,
        height: 56,
        marginRight: 15,
    },
    button: {
        width: 56,
        height: 56,
        borderRadius: 50,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: '#FFF',
        fontSize: 24,
    },
})
