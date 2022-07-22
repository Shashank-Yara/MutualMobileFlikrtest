import { StyleSheet } from "react-native";
import { COLORS, COMMONSTYLES, METRICS } from "../../Utils/Theme";

export default StyleSheet.create({
    flatlist: {
        width: '100%',
        backgroundColor: COLORS.BLACK,
      },
    titleStyleImageTile: {
            bottom: 0,
            paddingBottom: METRICS.sm_2,
            backgroundColor: COLORS.BLACK,
            ...COMMONSTYLES.fontSize16,
            color: '#fff'
    },
    styleImageTile: {
        ...COMMONSTYLES.paddingBottomMedium
    },
    backgroundBlack: {
        backgroundColor: '#000'
    }
})