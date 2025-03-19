import { Text, View, TextInput, TouchableOpacity } from "react-native";

import { Participant } from "../components/Participant";

import { styles } from "./styles";

export function Home() {
    function handleParticipantAdd() {
        console.log("Tu clicaste no botão de adicionar e não aconteceu nada pq ainda não implementnei")
    }

    function handleParticipantRemove(name: string) {
        console.log(`Remover participante ${name}`)
    }

    return (
        <View style={styles.container}>
            <Text style={styles.eventName}>
                Nome do evento
            </Text>

            <Text style={styles.eventDate}>
                Quinta, 13 de março de 2025.
            </Text>

            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder="Nome do participante"
                    placeholderTextColor="#6b6b6b"
                />

                <TouchableOpacity
                    style={styles.button}
                    onPress={handleParticipantAdd}
                >
                    <Text style={styles.buttonText}>
                        +
                    </Text>
                </TouchableOpacity>
            </View>
            <Participant
                name="Marco"
                onRemove={() => handleParticipantRemove("Marco")}
            />
        </View>
    )
}
