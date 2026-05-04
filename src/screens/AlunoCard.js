import react from "react-native";
import { Text, View, Button } from "react-native";
import { useState } from "react";

export default function AlunoCard({ aluno }) {
    const [dados, setDados] = useState(aluno);
    console.log(aluno);
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text style={{ fontSize: 25 }}>Nome: {dados.nome}</Text>
            <Text style={{ fontSize: 25 }}>Idade: {dados.idade}</Text>
            <Text style={{ fontSize: 25 }}>Curso: {dados.curso}</Text>
            <Text style={{ fontSize: 25 }}>Cidade: {dados.cidade}</Text>
            <Text style={{ fontWeight: "bold", fontSize: 30 }}>
                {" "}
                {dados.idade >= 18 ? "Maior de Idade" : "Menor de Idade"}
            </Text>

            {/* mudar Curso */}
            <Button
                style={{ padding: 70 }}
                title={"Mudar Curso para ADS"}
                onPress={() => setDados({ ...dados, curso: "ADS" })}
                color="#8b0000"
            />

            <Button
                style={{ padding: 70 }}
                title={"Mudar para Curso anterior"}
                onPress={() => setDados({ ...dados, curso: aluno.curso })}
                color="#8b0000"
            />
        </View>
    );
}