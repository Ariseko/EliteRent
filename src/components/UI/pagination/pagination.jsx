import React from 'react';
import {getPagesArray} from "../../../utils/pages";

const Pagination = ({totalPages, page, changePage}) => {
    let pagesArray = getPagesArray(totalPages)

    return (
        <div className={"page_counter__wrapper"}>
            {
                pagesArray.map(p=>
                    <span onClick={()=> changePage(p)} className={ page === p? 'page_counter page_current' : "page_counter"} key={p}>{p}</span>
                )
            }
        </div>
    );
};

export default Pagination;