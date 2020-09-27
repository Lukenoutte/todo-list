import React from "react";
import './styles_item.css';
import { ReactComponent as DeleteIcon } from "../../../assets/icons/deleteIcon.svg";
export default function itemToDo(props) {
    return(<div className="item-to-do"><p>
        {props.children}
    </p> <button onClick={() => props.deleteItemFunc(props.id)}><DeleteIcon className="delete-icon"/></button></div>)
}