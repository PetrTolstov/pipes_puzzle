import {PropsTModal} from "../types/propTypes";

export function Modal({isShown, text, closeModal} : PropsTModal){
    if(isShown){
        // @ts-ignore
        return <div className={"modal"}><p>{text.slice(7)}</p><button className={"button"} onClick={closeModal}>Close</button></div>
    } else{
        return <></>
    }
}