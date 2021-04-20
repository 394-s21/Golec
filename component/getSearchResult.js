import {useState, useEffect} from 'react';

const getSearchResult = (url) => {
    const [data, setData] = useState(null); 
    useEffect(() => {
        fetch(url)
        .then(res => {
            if(!res.ok){
                throw Error('Could not fetch the data for that resource...')
            }
            return res.json()
        })
        .then((data) => {
            setData(data);
        })
        .catch(err => {
            console.log(err)
        })
    }, [url])
    
    return data; 
}
 
export default getSearchResult;