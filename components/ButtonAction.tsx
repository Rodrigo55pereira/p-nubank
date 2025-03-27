import { Pressable, Text, View } from "react-native";
import Icon from "@expo/vector-icons/FontAwesome6";

type ButtonActionProps = {
  icon: string;
  label: string;
  onPress: () => void;
  badge?: string;
};

const ButtonAction = ({ icon, label, onPress, badge }: ButtonActionProps) => {
  return(
    <Pressable onPress={onPress} className="w-24 mx-1">
        <View className="bg-gray-200 size-24 rounded-full items-center justify-center">
            <Icon name={icon} size={24} color="black"/>
        </View>
        {badge && 
            <View className="h-6 -mt-6 items-center justify-center bg-nubank rounded">
                <Text className="text-white text-center font-semibold">{badge}</Text>
            </View>
        }
        <Text className="mt-3 text-md text-center font-semibold">{label}</Text>
    </Pressable>
  );
};

export default ButtonAction;
