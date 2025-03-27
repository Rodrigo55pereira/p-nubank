import { Pressable, Text, View } from "react-native";
import Icon from "@expo/vector-icons/FontAwesome6";

type ButtonCardProps = {
    title: string;
    onPress: () => void;
    children: React.ReactNode;
}

const ButtonCard = ({ title, onPress, children }: ButtonCardProps) => {
  return (
      <Pressable onPress={onPress} className="px-4 py-6">
        <View className="mb-4 flex-row justify-between items-center">
            <Text className="text-2xl font-semibold">{title}</Text>
            <View className="mr-3">
                <Icon name="chevron-right" size={16} color="black" />
            </View>
        </View>
        {children}
      </Pressable>
);
};

export default ButtonCard;
