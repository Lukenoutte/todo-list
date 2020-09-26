import React from "react";
import './styles_item.css';

export default function itemToDo(props) {
    return(<div className="item-to-do"><p>
        {props.children}
    </p> <button onClick={() => props.deleteItemFunc(props.id)}>x</button></div>)
}