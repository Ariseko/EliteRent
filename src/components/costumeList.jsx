import React from 'react';
import CostumeItem from "./CostumeItem";

const CostumeList = ({costumes, listTitle, removeCostumeFunction}) => {
    return (
        <div>
            <h1 style={{textAlign:"center"}}>{listTitle}</h1>
            {costumes.map((costume, index) =>
                <CostumeItem removeCostume={removeCostumeFunction} number={index + 1} costume={costume} key={costume.id}/>
            )}
        </div>
    );
};

export default CostumeList;