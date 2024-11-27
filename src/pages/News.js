import React, { useEffect, useState } from 'react'
import NewsItems from './NewsItems'
import Spinnar from './Spinnar'
import '../App'
// import Data from '../Data'

export default function News(props) {

    let [data, setData] = useState([])
    let [loading, setLoading] = useState()
    let [page, setPage] = useState(1)
    let [totalResults,settResutl]=useState()
    

    const fetchData = async () => {
        props.setProgress(40)
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=5394c3d0131942a8b6d56d400563313f&page=${page}&pageSize=${props.pageSize}`;
        setLoading(true)

        const response = await fetch(url);
        const parsedData = await response.json();

        props.setProgress(70)
        setLoading(false)
        
        setData(parsedData.articles)
        settResutl(parsedData.totalResults)
        props.setProgress(100)
 
    }
    
    useEffect(() => {
        fetchData();
    }, []);

    const handleNextBtn =async () => {
        setPage(page + 1)
        fetchData();
    }

    const handlePrivesBtn =async () => {
        setPage(page - 1)
        fetchData();
    }




    return (
        <div className='container ' style={{marginTop:'100px'}}>

            <h1 className='text-center'>Kal-Tak {props.catagery}</h1>
            {loading && <Spinnar />}
            <div className='row'>
                {data.map((item, i) => {
                    return <div className='col-md-4 my-3' key={i}>
                        <NewsItems element={item} />
                    </div>
                })}
            </div>
            <div className='container d-flex justify-content-between'>
                <button disabled={page <= 1} type="button" onClick={handlePrivesBtn} className="btn btn-primary">&larr;Prives</button>
                <button disabled={page + 1 > Math.ceil(totalResults / props.pageSize)}  type="button" onClick={handleNextBtn} className="btn btn-primary">Next&rarr;</button>
            </div>
        </div>
    )
}
