import { Pressable, View } from "react-native";
import Icon from "@expo/vector-icons/FontAwesome6";

type ButtonIconProps = {
  icon: string;
  onPress: () => void;
};

const ButtonIcon = ({ icon, onPress }: ButtonIconProps) => {
  return (
    <Pressable onPress={onPress} className="size-14 justify-center items-center rounded-full">
      <Icon name={icon} size={18} color="white" />
    </Pressable>
  );
};

export default ButtonIcon;
