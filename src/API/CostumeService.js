import axios from "axios";

export default class CostumeService {
    static async getAll() {
        return  await axios.get('http://localhost:8081/products');
    }

    static async getNumberofAllCostumes(){
        return await axios.get('http://localhost:8081/products/count')
    }

    static async getOneCostume(id){
        return await axios.get(`http://localhost:8081/products/${id}`)
    }
}