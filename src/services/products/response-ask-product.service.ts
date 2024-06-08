import { responsesAsk } from "@/api/database-mock/responses-ask"


export function getAllResponseByAskId(askId: string){
    try{

        const listResponses = responsesAsk

        const response = listResponses.filter(r => r.askDadIdAddedResponse === askId)

        if(!response){
            throw new Error('Response not found');
        }

        return response

    }catch(err: any){
        //console.log('getAllProducts error function: ', err)
        return `error in getById response function: ${err}`
    }
}