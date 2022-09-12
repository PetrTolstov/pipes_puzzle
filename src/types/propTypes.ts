//Props types for components

type PropsTModal = {
    isShown : boolean,
    text: string,
    closeModal: Function
}


type PropsMainCanvas = {
    thisMap : string[][]
}

export type {PropsMainCanvas, PropsTModal}