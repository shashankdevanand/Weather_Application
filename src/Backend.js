import axios from "axios"

const URL="https://api.openweathermap.org/data/2.5/weather"
const API_KEY="268ce6a91a67800bdf092ccd91c2cf62"

const Backend=async (query)=>{
 let {data}= await axios.get(URL,{
        params:{
            q:query,
            APPID:API_KEY,
            units:"metric"
        }
    })
    return data
}
export default Backend;