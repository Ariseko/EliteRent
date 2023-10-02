import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useFetching} from "../components/hooks/useFetching";
import CostumeService from "../API/CostumeService";
import Loader from "../components/UI/Loader/Loader";

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
            <h1>Страница костюма с ID {params.id}</h1>
            {
                isLoading ? <Loader/> : <div>{costume.id}. {costume.name}</div>
            }

        </div>
    );
};

export default CostumeIdPage;