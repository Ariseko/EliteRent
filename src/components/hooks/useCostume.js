import {useMemo} from "react";

export const useSortedCostume = (costumes, sortString) => {
    return useMemo(() => {
        if (sortString) {
            return [...costumes].sort((a, b) => a[sortString].localeCompare(b[sortString]))
        }
        return costumes;
    }, [sortString, costumes]);
}


export const useCostumes = (costumes, sort, query) => {
    const sortedCostumes = useSortedCostume(costumes, sort)
    return useMemo(() => {
        return sortedCostumes.filter(costume => costume.name.toLowerCase().includes(query))
    }, [query, sortedCostumes]);
}