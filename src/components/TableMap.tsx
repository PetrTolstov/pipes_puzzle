import {PropsTable} from "../types/propTypes";
import {TableCell} from "./TableCell";
import {CanvasElement} from "./CanvasElement";
import React from "react";

export function TableMap({thisMap}: PropsTable) {
    return <table id={'tableMap'}>
        <tbody>
        {thisMap.map(
            (item, index) => (
                <tr>{item.map( (element, i) => (
                    <TableCell id={`${index}-${i}`}><CanvasElement element={element}/></TableCell>
                ))}</tr>))
        }
        </tbody>
    </table>
}