import React, {useState} from "react";
import './styles/App.css'
import CostumeList from "./components/costumeList";
import CostumeForm from "./components/CostumeForm";
import Select from "./components/UI/Select/Select";

function App() {
    const [costumes, setCostumes] = useState([
        {id:1,name:"Военный детский костюм",category:"Военный", description:'SMTH', price: 100},
        {id:2,name:"Карнавальный детский костюм",category:"Карнавальный", description:'SMTH', price: 100},
        {id:3,name:"Ебланский детский костюм",category:"Еблан", description:'SMTH', price: 100},
        {id:4,name:"Хуевый детский костюм",category:"Хуйня", description:'SMTH', price: 100},
        {id:5,name:"Ебаный детский костюм",category:"Ебан", description:'SMTH', price: 100},
    ]);

    const [selectedSort, setSelectedSort] = useState('')

    const createCostume = (newCostume) => {
        setCostumes([...costumes, newCostume])
    }

    const removeCostumeFromList = (costume) => {
        setCostumes(costumes.filter(p=> p.id !== costume.id))
    }
    
    const sortCostumes = (sort) => {
        setSelectedSort(sort);
        console.log(sort);
    }

    return (
        <div className="App">
            <CostumeForm createCostumeFunction={createCostume}/>
            <hr style={{margin:"15px 0"}}/>
            <div>
                <Select defaultValue={"Сортировка"} value={selectedSort} onChange={sortCostumes} options={[
                    {value: 'title', name: 'По названию'},
                    {value: 'category', name: 'По категориям'},
                    {value: 'price', name: 'По цене'}
                ]}>
                </Select>
            </div>

            {costumes.length
                ? <CostumeList removeCostumeFunction={removeCostumeFromList} costumes={costumes} listTitle={"Базовый каталог"}/>
                : <h1 style={{textAlign:"center"}}>Костюмов нет в наличии</h1>
            }

    </div>
  );
}

export default App;
