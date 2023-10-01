import React from 'react';
import CostumeItem from "./CostumeItem";
import {CSSTransition, TransitionGroup} from "react-transition-group";

const CostumeList = ({costumes, listTitle, removeCostumeFunction}) => {
    if (!costumes.length){
        return (
          <h1 style={{textAlign:'center'}}>
              Костюмы не найдены
          </h1>
        );
    }

    return (
        <div>
            <h1 style={{textAlign:"center"}}>{listTitle}</h1>

            <TransitionGroup>
                {costumes.map((costume, index) =>
                    <CSSTransition
                        key={costume.id}
                        timeout={500}
                        classNames={"costumeItem"}
                    >
                        <CostumeItem removeCostume={removeCostumeFunction} number={index + 1} costume={costume}/>
                    </CSSTransition>
                )}
            </TransitionGroup>
        </div>
    );
};

export default CostumeList;