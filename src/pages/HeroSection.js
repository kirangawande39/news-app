import React from 'react'

export default function HeroSection() {
    let image = {
        height: '50vh',

    }
    return (
        <div>
            <div>
                <div id="carouselExampleFade" className="carousel slide carousel-fade " style={{ marginTop: '50px', opacity: '0.9' }}>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img style={image} src='https://th.bing.com/th/id/OIP.rlKJjXPDAOGMcqRhgYQjVwHaEK?rs=1&pid=ImgDetMain' className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img style={image} src="https://th.bing.com/th/id/R.e3fad822071487176f84cb1b784eef1e?rik=ObDUE5iycZnT4A&riu=http%3a%2f%2fak6.picdn.net%2fshutterstock%2fvideos%2f6137654%2fthumb%2f1.jpg&ehk=fNGfUDtwr0y2Yx7IiEWQQWBOUm4klYG4%2fFl6sJJxB%2bk%3d&risl=&pid=ImgRaw&r=0" className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img style={image} src="https://th.bing.com/th/id/OIP.QDfLG9rHT_CSH43It6MiwwHaEA?w=1020&h=553&rs=1&pid=ImgDetMain" className="d-block w-100" alt="..." />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>
    )
}
