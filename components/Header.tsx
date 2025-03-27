import { Text, View } from "react-native"
import ProfileIcon from "./ProfileIcon"
import ButtonIcon from "./ButtonIcon"

const Header = () => {
    return (
        <View className="bg-nubank text-white">
            <View className="flex-row justify-between items-center px-4">
                <ProfileIcon />
                <View className="flex-row">
                    <ButtonIcon icon="eye-slash" onPress={() => {}}/>
                    <ButtonIcon icon="circle-question" onPress={() => {}}/>
                    <ButtonIcon icon="message" onPress={() => {}}/>
                </View>
            </View>
            <View className="px-4 py-7">
                <Text className="text-white font-bold text-xl">
                    Olá, Gabriela
                </Text>
            </View>
        </View>
    )
}

export default Header