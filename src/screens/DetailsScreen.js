import react from "react";
import { View } from "react-native";
import AlunoCard from "./AlunoCard";

export default function DetailsScreen({ route }) {
    const { aluno } = route.params;
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <AlunoCard aluno={aluno} />
        </View>
    );
}