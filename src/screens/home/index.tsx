import { Text, View, TextInput } from "react-native";

import { styles } from "./style";

export function Home() {
    return (
        <View style={styles.container}>
            <Text style={styles.eventName}>
                Nome do evento
            </Text>

            <Text style={styles.eventDate}>
                Quinta, 13 de março de 2025.
            </Text>

            <TextInput
                style={styles.input}
                placeholder="Nome do participante"
                placeholderTextColor="#6b6b6b"
            />
        </View>
    )
}
