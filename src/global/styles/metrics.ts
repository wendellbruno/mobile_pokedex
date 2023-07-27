import { Dimensions, PixelRatio } from "react-native";

const {width} = Dimensions.get('window');

const figmaWidth: number = 375;

export const px = (valuePx: number) => {
    const widthPercent: number = (valuePx / figmaWidth) * 100;

    const screenPixel = PixelRatio.roundToNearestPixel(
        (width * widthPercent) / 100
    );

    return screenPixel;
}

