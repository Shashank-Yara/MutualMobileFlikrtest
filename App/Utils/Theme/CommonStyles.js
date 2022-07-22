import { StyleSheet } from 'react-native';
import COLORS from './Colors';
import LAYOUT from './Layout';
import METRICS from './Metrics';

export default StyleSheet.create({
    widthHeight: {
        width: "100%",
        height: "100%"
    },
    borderStyle: {
        borderWidth: 1,
        borderColor: COLORS.WHITE
    },
    alignJustifyCenter: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    container: {
        flex: 1
    },
    paddingBottomSmall: {
        paddingBottom: METRICS.sm_3
    },
    paddingBottomMedium: {
        paddingBottom: METRICS.md_2
    },
    paddingBottomLarge: {
        paddingBottom: METRICS.lg_1
    },
    fontSize8: {
        fontSize: METRICS.sm_3 /  LAYOUT.SCREEN_FONTSCALE
    },
    fontSize16: {
        fontSize: METRICS.md_2 /  LAYOUT.SCREEN_FONTSCALE
    },
    fontSize24: {
        fontSize: METRICS.lg_1 /  LAYOUT.SCREEN_FONTSCALE
    },
    fontSize32: {
        fontSize: METRICS.lg_3 /  LAYOUT.SCREEN_FONTSCALE
    }

})