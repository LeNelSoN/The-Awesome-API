const DataBaseService = require("../../Services/DataBaseService");

const hikkerResolver = {
    type: (require("../TypeDefs/HikkerType")),
    resolve({hikkerId}){
        console.log(hikkerId)
        if(!hikkerId){
            return null;
        }
        const row =  DataBaseService.selectOne('hikkers', hikkerId).then(data => {return data})
        return row
        
    }
}