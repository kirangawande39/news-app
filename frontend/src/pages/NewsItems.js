import React from 'react'
// import News from './News'

export default function NewsItems(props) {
    return (
        <div>
            <div className="container " style={{ width: '20rem'}}>
                <div className="card" style={{border:'2px solid red',height:'500px',overflow:'hidden'}}>
                    <div style={{
                        display: 'flex',
                        justifyContent: "flex-end",
                        position: 'absolute',
                        right: '-4vw',
                        

                    }}>
                        <span className="translate-middle badge rounded-pill bg-danger">
                           {props.element.source.name}
                        </span>
                    </div>
                    <img src={props.element.urlToImage ? props.element.urlToImage : "https://www.yeahhub.com/wp-content/uploads/2021/04/coder.jpg"} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{props.element.title}</h5>
                        <p className="card-text">{props.element.description}</p>
                        <p className="card-text"><small className="text-body-secondary"><b>Author</b> {props.element.author ? props.element.author : "Unkonwn"} <b>on</b> {new Date(props.element.publishedAt).toLocaleDateString()}</small></p>
                        <a href={props.element.url} className="btn btn-dark btn-sm" >Lern More</a>
                    </div>
                </div>

            </div>
        </div>
    )
}
