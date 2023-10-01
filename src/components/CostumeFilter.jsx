import React from 'react';
import Input from "./UI/Input/Input";
import Select from "./UI/Select/Select";

const CostumeFilter = ({filter, setFilter}) => {
    return (
        <div>
            <Input
                value={filter.query}
                onChange={e => setFilter({...filter, query: e.target.value})}
                placeholder="Поиск..."
            />

            <Select value={filter.sort}
                    onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
                    defaultValue="Сортировка" options={[
                {value: 'title', name: 'По названию'},
                {value: 'category', name: 'По категориям'},
                {value: 'price', name: 'По цене'}
            ]}>
            </Select>
        </div>
    );
};

export default CostumeFilter;