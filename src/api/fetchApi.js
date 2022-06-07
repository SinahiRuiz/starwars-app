import { baseUrl } from "./constants"


export async function getFetchData(search){
let url=`${baseUrl}/${search}`
const res=await fetch(url);
const json=await res.json()
return json
}