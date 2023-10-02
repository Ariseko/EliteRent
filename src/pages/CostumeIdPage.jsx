import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useFetching} from "../components/hooks/useFetching";
import CostumeService from "../API/CostumeService";
import Loader from "../components/UI/Loader/Loader";
import '../styles/CostumeIdPage.css'
import Button from "../components/UI/button/Button";

const CostumeIdPage = () => {
    const params = useParams();
    const [costume, setCostume] = useState({});

    const [fetchById, isLoading, error] = useFetching( async ()=> {
        const response = await CostumeService.getOneCostume(params.id);
        setCostume(response.data)
    });


    useEffect(() => {
        fetchById()
    }, []);

    return (
        <div>

            {
                isLoading ? <Loader/> :
                    <div className={"cos"}>
                        <div className={"cosDescription"}>
                            <div><h1>{costume.name}</h1></div>
                            <div><p>{costume.description}</p></div>
                            <div><p>{costume.category.name}</p></div>
                            <Button style={{marginTop: 50}}>В корзину</Button>
                        </div>
                        <div className={"cosPic"}>
                            <img
                                src="https://ivdt37.ru/wa-data/public/shop/products/02/11/1102/images/5422/5422.970x0.jpg"
                                alt="pic"/>
                        </div>
                    </div>
            }
        </div>
    );
};

export default CostumeIdPage;