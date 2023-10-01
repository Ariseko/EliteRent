import React from 'react';
import Button from "./UI/button/Button";
import {useNavigate} from "react-router-dom";

const CostumeItem = (props) => {
    const router = useNavigate();

    return (
        <div className="costume">
            <div className="costume__content">
                <strong>{props.costume.id}. {props.costume.name}</strong>
                <h4> Каегория: {props.costume.category.name}</h4>
                <div>Описание: {props.costume.description}</div>
                <div> от {props.costume.price} руб.</div>
            </div>
            <div className="costume__btns">
                <Button onClick={() => router(`/products/${props.costume.id}`)}>Подробнее</Button>
                <Button onClick={() => props.removeCostume(props.costume)}>Удалить</Button>
            </div>
        </div>
    );
};

export default CostumeItem;