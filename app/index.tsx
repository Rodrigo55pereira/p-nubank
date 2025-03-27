import { View, Text, ScrollView } from "react-native";
import Header from "../components/Header"
import ButtonCard from "../components/ButtonCard"
import ButtonAction from "../components/ButtonAction"

const Screen = () => {
    return (
        <ScrollView className="h-screen bg-white">
            <Header />
            <ButtonCard title="Conta" onPress={() => {}}>
                <Text className="text-2xl font-semibold">R$: 1.000,00</Text>
            </ButtonCard>
            <ScrollView horizontal className="pl-3" showsHorizontalScrollIndicator={false}>
                <ButtonAction icon="pix" label="Pix" onPress={() => {}} />
                <ButtonAction icon="barcode" label="Pagar" onPress={() => {}} />
                <ButtonAction badge="R$: 12.300"icon="hand-holding-dollar" label="Pegar emprestado" onPress={() => {}} />
                <ButtonAction icon="money-bill-transfer" label="Transferir" onPress={() => {}} />
                <ButtonAction icon="receipt" label="Dinheiro" onPress={() => {}} />
            </ScrollView>
        </ScrollView>
    )
}

export default Screen;