import React, {useState} from 'react';
import Input from "../components/UI/Input/Input";
import Select from "../components/UI/Select/Select";
import Button from "../components/UI/button/Button";

const CreateCostume = () => {
    const [costume, setCostume] = useState({name: '', category:'', description: '', price:''});
    const [selectedCategoryForCreation, setSelectedCategoryForCreation] = useState('')

    const addNewCostume = (e) => {
        e.preventDefault()
        const newCostume = {
            ...costume, id:Date.now(), category: selectedCategoryForCreation
        }
        //createCostumeFunction(newCostume);
        setCostume({name: '', category:'', description: '', price:''})
    }

    return (
        <div>
            <form>
                <Input value={costume.name} onChange={e=>setCostume({...costume, name: e.target.value})} type="text" placeholder={"Введите название..."}/>
                <Input value={costume.description} onChange={e=>setCostume({...costume, description: e.target.value})} type="text" placeholder={"Введите описание..."}/>
                <Input value={costume.price} onChange={e=>setCostume({...costume, price: e.target.value})} type="text" placeholder={"Введите цену..."}/>
                {/*<Input value={costume.category} onChange={e=>setCostume({...costume, category: e.target.value})} type="text" placeholder={"Введите категорию..."}/>*/}

                <Select defaultValue={"Сортировка"} value={selectedCategoryForCreation} onChange={category => setSelectedCategoryForCreation(category)} options={[
                    {value: 'Военные', name: 'Военные'},
                    {value: 'Карнавальные', name: 'Карнавальные'},
                    {value: 'Осенние', name: 'Осенние'}
                ]}>
                </Select>
                <br/>
                <br/>
                <Button onClick={addNewCostume}>Добавить костюм</Button>
            </form>
        </div>
    );
};

export default CreateCostume;