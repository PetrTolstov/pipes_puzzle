import React, {useEffect} from "react";
import {PropsCanvas} from "../types/propTypes";
import {oneOfThree, twoOfThree, wholeNumber} from "../configurations/fieldConfig";



export function CanvasElement({element}: PropsCanvas) {

    return (
        <canvas className={element} width={'60px'} height={"60px"}>{element}</canvas>
    )
}