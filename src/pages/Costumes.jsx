import React, {useEffect, useState} from "react";
import '../styles/App.css'
import CostumeList from "../components/costumeList";
import CostumeForm from "../components/CostumeForm";
import CostumeFilter from "../components/CostumeFilter";
import Modal from "../components/UI/Modal/Modal";
import Button from "../components/UI/button/Button";
import {useCostumes} from "../components/hooks/useCostume";
import CostumeService from "../API/CostumeService";
import Loader from "../components/UI/Loader/Loader";
import {useFetching} from "../components/hooks/useFetching";
import {getPagesCount} from "../utils/pages";
import Pagination from "../components/UI/pagination/pagination";

function Costumes() {
    const [totalPages, setTotalPages] = useState(0)
    const [limit, setLimit] = useState(10)
    const [page, setPage] = useState(1)
    const [costumes, setCostumes] = useState([]);
    const [filter, setFilter] = useState({sortString:'', query:''})
    const [modal, setModal] = useState(false)
    const [fetchCostumes, isCostumesLoading, costumeError] = useFetching(async () => {
        const response = await CostumeService.getAll()
        const responseNumber = await CostumeService.getNumberofAllCostumes()
        setCostumes(response.data)
        const totalCount = responseNumber.data
        setTotalPages(getPagesCount(totalCount, limit))
        console.log(totalPages)
    })

    const sortedAndSearchedCostumes = useCostumes(costumes, filter.sortString, filter.query)

    const createCostume = (newCostume) => {
        setCostumes([...costumes, newCostume])
        setModal(false)
    }

    const removeCostumeFromList = (costume) => {
        setCostumes(costumes.filter(p=> p.id !== costume.id))
    }

    useEffect(() => {
        fetchCostumes().then();
    }, [page]);

    const changePage = (page) => {
        setPage(page)
    }


    return (
        <div className="App">


            <Button onClick={fetchCostumes}>Получить костюмы</Button>
            <Button style={{marginTop: 30, marginRight: 10}} onClick={()=>setModal(true)}>
                Добавить костюм
            </Button>


            <Modal visible={modal} setVisible={setModal}>
                <CostumeForm createCostumeFunction={createCostume}/>
            </Modal>

            <hr style={{margin:"15px 0"}}/>
            <CostumeFilter filter={filter} setFilter={setFilter}/>

            {
                costumeError &&
                <div>
                    <h1>Ошибка</h1>
                    <p>{costumeError}</p>
                </div>
            }

            {
                isCostumesLoading
                    ? <Loader/>
                    : <CostumeList removeCostumeFunction={removeCostumeFromList} costumes={sortedAndSearchedCostumes} listTitle={"Базовый каталог"}/>

            }
            <Pagination page={page} totalPages={totalPages} changePage={changePage}/>

        </div>
    );
}

export default Costumes;
