import {PropsMainCanvas} from "../types/propTypes";
import React, {useEffect, useRef} from "react";
import {canvasRender} from "../helpers/canvasRender";
import {wholeNumber} from "../configurations/fieldConfig";

export function Canvas({thisMap}: PropsMainCanvas) {
    //Creating reference for drawing on this canvas in other function
    const canvasRef = useRef<HTMLCanvasElement>(null)

    //Rendering elements from received state every time component rerenders
    useEffect(() => {
        thisMap.map(
            (item, y) => {
                item.map( (element, x) => {
                        canvasRender(canvasRef.current, element, x * wholeNumber, y * wholeNumber)
                    }
                )}

        )
    }, )

    return (
        <div id={"canvasFrame"} >
            <table id={"tableAboveCanvas"}>
                <tbody>
                { //Creating table above canvas for clicks
                    thisMap.map(
                    (item: any[], y: any) => (
                        <tr>{item.map( (element, x) => (
                    <td id={`${x}-${y}`} className={'puzzleToTouch'}>1</td>
                    ))}</tr>))
                }
                </tbody>
            </table>
            <canvas ref={canvasRef} id={'canvas'} height={`${wholeNumber * thisMap.length}px`} width={`${wholeNumber * thisMap[0].length }px`}>CANVAS</canvas>
        </div>
    )
}