import {CanvasElement} from "./CanvasElement";
import React from "react";
import {PropsTableCell} from "../types/propTypes";

export function TableCell({id, children} : PropsTableCell){
    return (
        <td id={id} className={"mapElement"}>{children}</td>
        )

}