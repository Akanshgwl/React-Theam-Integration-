import React, { Component }
from 'react';
class Dashboard extends Component {

    constructor() {
        super();
        this.state = {
            name: "Welcome to Dashboard"
        }
    }

    nameChange() {
        this.setState({
            name: "Dashboard"
        })
    }

    render() {

        const list = [
            {
                id: 1,
                name: "Akansh",
                work: "Web Developer",
            },
            {
                id: 2,
                name: "Shikha",
                work: "Web Developer",
            },
            {
                id: 3,
                name: "Shubham",
                work: "Web Developer",
            },
            {
                id: 5,
                name: "Amit",
                work: "Web Developer",
            },
            {
                id: 5,
                name: "Priya",
                work: "Web Developer",
            },
            {
                id: 5,
                name: "Akhil",
                work: "Web Developer",
            },
        ];
        return(
                <div className="content-wrapper" >
                    <section className="content-header">
                        <div className="container-fluid">
                            <div className="row mb-2">
                                <div className="col-sm-12">
                                    <h1>{this.state.name}</h1>
                                    <div>
                                        {
                                            list.map((lists, i) => (
                                        <div className="gallery" key={i}>
                                            <a href="#">
                                                <img src={`https://joeschmoe.io/api/v1/${lists.name}`} width="600" height="400"/>
                                            </a>
                                            <div className="desc">
                                                <h5>{lists.name}</h5>
                                                {lists.work}
                                            </div>
                                        </div>
                                                        ))}
                                    </div>
                                    <button onClick={() => this.nameChange()}>Click Me</button>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                )
    }
}

export default Dashboard