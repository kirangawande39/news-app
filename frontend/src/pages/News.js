import React, { useEffect, useState } from 'react';
import NewsItems from './NewsItems';
import Spinnar from './Spinnar';

export default function News(props) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);

    const fetchData = async (pageNumber) => {
        try {
            props.setProgress(40);
            const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=5394c3d0131942a8b6d56d400563313f&page=${pageNumber}&pageSize=${props.pageSize}`;
            setLoading(true);

            const response = await fetch(url);
            const parsedData = await response.json();

            props.setProgress(70);

            setData(parsedData.articles || []);
            setTotalResults(parsedData.totalResults || 0);
            setLoading(false);

            props.setProgress(100);
        } catch (error) {
            console.error('Error fetching data:', error);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData(page);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page]);

    const handleNextBtn = () => {
        if (page + 1 <= Math.ceil(totalResults / props.pageSize)) {
            setPage(page + 1);
        }
    };

    const handlePrevBtn = () => {
        if (page > 1) {
            setPage(page - 1);
        }
    };

    return (
        <div className="container" style={{ marginTop: '100px' }}>
            <h1 className="text-center">Kal-Tak {props.category}</h1>
            {loading && <Spinnar />}
            <div className="row">
                {!loading &&
                    data.map((item, i) => (
                        <div className="col-md-4 my-3" key={i}>
                            <NewsItems element={item} />
                        </div>
                    ))}
            </div>
            <div className="container d-flex justify-content-between my-3">
                <button
                    disabled={page <= 1}
                    onClick={handlePrevBtn}
                    className="btn btn-primary"
                >
                    &larr; Previous
                </button>
                <button
                    disabled={page + 1 > Math.ceil(totalResults / props.pageSize)}
                    onClick={handleNextBtn}
                    className="btn btn-primary"
                >
                    Next &rarr;
                </button>
            </div>
        </div>
    );
}
