import {
    Text,
    View,
    TextInput,
    TouchableOpacity,
    FlatList
} from "react-native";

import { Participant } from "../components/Participant";

import { styles } from "./styles";

export function Home() {
    const participants = ['Eu', 'Tu', 'Ele', 'Nós', 'Vós', 'Eles', 'agente', 'não', 'é', 'a gente', 'então', 'escreve', 'direito']

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
            <FlatList
                data={participants}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <Participant
                        key={item}
                        name={item}
                        onRemove={() => handleParticipantRemove("Marco")}
                    />
                )}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={() => (
                    <Text style={styles.listEmptyText}>
                       Ninguém chegou ao evento ainda? Adicione participantes à sua lista de presença.
                    </Text>
                )}
            />
        </View>
    )
}
