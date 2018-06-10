import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "subheader h2": {
        "fontSize": 1.75
    },
    "subheader hr": {
        "height": 2,
        "backgroundColor": "black",
        "marginTop": "30px !important"
    },
    "text": {
        "fontFamily": "'HelveitcaNeue', Helvetica, Arial, sans-serif",
        "textAlign": "left",
        "fontSize": 1.25
    },
    "top": {
        "color": "#555",
        "backgroundColor": "#555",
        "height": 2.75
    },
    "name": {
        "textAlign": "center"
    },
    "name h1": {
        "fontSize": 4,
        "fontWeight": "bold",
        "fontFamily": "'PT Sans', Arial, sans-serif"
    },
    "name-rule": {
        "height": 12,
        "border": 0,
        "boxShadow": "inset 0 12px 12px -12px rgba(0,0,0,1)"
    },
    "contacts a": {
        "fontSize": 1.5,
        "display": "inline-block",
        "color": "inherit"
    },
    "contacts i": {
        "fontSize": 2,
        "paddingTop": 0,
        "paddingRight": 5,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "skills ul": {
        "listStyleType": "square"
    }
});