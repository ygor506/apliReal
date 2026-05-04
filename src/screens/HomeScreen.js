import { View, Text, Button, ScrollView } from "react-native";

export default function HomeScreen({ navigation }) {
    const aluno = [
        { id: 1, nome: "João", idade: 20, curso: "DES", cidade: "manoel ribas" },
        { id: 2, nome: "Maria", idade: 16, curso: "FormDocente", cidade: "manoel ribas" },
        { id: 3, nome: "Pedro", idade: 17, curso: "Robotica", cidade: "manoel ribas" },
        
    ];
    return (
        <>
            <ScrollView contentContainerStyle={{ padding: 20 }}>
                <Text style={{ fontSize: 20, marginBottom: 10 }}>
                    Lista de Alunos:
                </Text>

                {aluno.map((aluno) => (
                    <View style={{ marginBottom: 10 }} key={aluno.id}>
                        <Button
                            title={aluno.nome}
                            onPress={() => navigation.navigate("Detalhes", { aluno })}
                        ></Button>
                    </View>
                ))}
            </ScrollView>
        </>
    );
}