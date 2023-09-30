import React, {useState} from 'react';
import Input from "./UI/Input/Input";
import Button from "./UI/button/Button";
import Select from "./UI/Select/Select";

const CostumeForm = ({createCostumeFunction}) => {
    const [costume, setCostume] = useState({name: '', category:'', description: '', price:''});
    const [selectedCategoryForCreation, setSelectedCategoryForCreation] = useState('')

    const addNewCostume = (e) => {
        e.preventDefault()
        const newCostume = {
            ...costume, id:Date.now()
        }
        createCostumeFunction(newCostume);
        setCostume({name: '', category:'', description: '', price:''})
    }

    return (
        <form action="">
            <Input value={costume.name} onChange={e=>setCostume({...costume, name: e.target.value})} type="text" placeholder={"Введите название..."}/>
            {/*<Input value={costume.category} onChange={e=>setCostume({...costume, category: e.target.value})} type="text" placeholder={"Введите категорию..."}/>*/}

            {/*<Select defaultValue={"Сортировка"} value={selectedCategoryForCreation} onChange={category => setSelectedCategoryForCreation(category)} options={[*/}
            {/*    {value: 'mil', name: 'mil'},*/}
            {/*    {value: 'car', name: 'car'},*/}
            {/*    {value: 'spring', name: 'spring'}*/}
            {/*]}>*/}
            {/*</Select>*/}


            {/*<select defaultValue={selectedCategoryForCreation}*/}
            {/*    onChange={event=>setSelectedCategoryForCreation(event.target.value)}*/}
            {/*>*/}
            {/*    <option value="military">Военные</option>*/}
            {/*    <option value="carnaval">Карнавал</option>*/}
            {/*    <option value="spring">Осень</option>*/}
            {/*</select>*/}

            <select
                onChange={event => setSelectedCategoryForCreation(event.target.value)}
                defaultValue={selectedCategoryForCreation}
            >
                <option value="react">React</option>
                <option value="js">JavaScript</option>
            </select>

            <Input value={costume.description} onChange={e=>setCostume({...costume, description: e.target.value})} type="text" placeholder={"Введите описание..."}/>
            <Input value={costume.price} onChange={e=>setCostume({...costume, price: e.target.value})} type="text" placeholder={"Введите цену..."}/>
            <Button onClick={addNewCostume}>Добавить костюм</Button>
        </form>
    );
};

export default CostumeForm;