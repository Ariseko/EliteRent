import React from 'react';
import Button from "./UI/button/Button";

const CostumeItem = (props) => {
    return (
        <div className="costume">
            <div className="costume__content">
                <strong>{props.number}. {props.costume.name}</strong>
                <h4> Каегория: {props.costume.category}</h4>
                <div>Описание: {props.costume.description}</div>
                <div> от {props.costume.price} руб.</div>
            </div>
            <div className="costume__btns">
                <Button onClick={() => props.removeCostume(props.costume)}>Удалить</Button>
            </div>
        </div>
    );
};

export default CostumeItem;