import axios from 'axios'

async function fetchData() {
    const res = await axios.get('https://random-data-api.com/api/cannabis/random_cannabis?size=10')
    return res.data
}


export const cannabisService = {
    fetchData
}