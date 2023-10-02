import React, {useContext} from 'react';
import Button from "./UI/button/Button";
import {useNavigate} from "react-router-dom";
import {AuthContext} from "../context/context";

const CostumeItem = (props) => {
    const router = useNavigate();
    const {isAdmin} = useContext(AuthContext)
    console.log(isAdmin)

    return (
        <div className="costume">
            <img
                src="https://media.discordapp.net/attachments/957220153106501653/1158201639094734978/Product_image.png?ex=651b62d5&is=651a1155&hm=eb451d50f3bd622b4488a0f30d1109c158ed974b0438af37cf4c3eaccf93c305&=&width=321&height=188"
                alt="product pic"/>
            <div className={"costume__content"}>
                <h3 className={"costume_title"}>
                    {props.costume.name}
                </h3>

                <p>{props.costume.description}</p>

                <p>Категория: {props.costume.category.name}</p>
                <p>от {props.costume.price} руб</p>
            </div>
            <div className="costume__btns">
                <Button onClick={() => router(`/products/${props.costume.id}`)}>Подробнее</Button>
                {
                    isAdmin
                    ? <Button style={{marginTop: 30}} onClick={() => props.removeCostume(props.costume)}>Удалить</Button> : null
                }



            </div>


        </div>
    );
};

export default CostumeItem;