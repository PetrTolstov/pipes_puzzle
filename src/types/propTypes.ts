import React from "react";

type PropsTable = {
    thisMap : string[][]
}

type PropsCanvas = {
    element : string
}

type PropsTableCell = {
    id : string,
    children : React.ReactNode
}

export type {PropsTable, PropsCanvas, PropsTableCell}