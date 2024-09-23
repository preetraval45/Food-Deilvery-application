import { View, Text } from "react-native";
import React from "react";
import { COLORS, FONTS, SIZES } from "../constants";
import { TouchableOpacity } from "react-native-gesture-handler";

const Section = ({ title, onPress, children }) => {
  return (
    <View>
      {/* Header */}
      <View
        style={{
          flexDirection: "row",
          marginHorizontal: SIZES.padding,
          marginTop: 30,
          marginBottom: 20,
        }}
      >
        <Text
          style={{
            flex: 1,
            ...FONTS.h3,
          }}
        >
          {title}
        </Text>
        <TouchableOpacity onPress={onPress}>
          <Text style={{ color: COLORS.primary, ...FONTS.body3 }}>
            Show All
          </Text>
        </TouchableOpacity>
      </View>
      {/* Content Section */}
      {children}
    </View>
  );
};

export default Section;
