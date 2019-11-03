import React from 'react'
import {Link} from 'react-router-dom';

export default class view_comments extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            commentData : []
        }; 
    }
    componentDidMount(){
        const comment2 = this.props.location.state.comment1;
        const url  = "https://jsonplaceholder.typicode.com/comments?postId=" + comment2.id;
        fetch(url)
        .then(response => response.json())
        .then( data =>{
            this.setState({
                commentData: data
            });
        }); 
    }
    render() {
     const length3 = this.state.commentData.length;
     const commentDet = this.state.commentData.map(Det => {
         return <tbody>
                <tr key={Det.id}>
                <td>{Det.name}</td>
                <td>{Det.email}</td>
                              
            </tr>
         </tbody>
     });
     return(
         <div>
        <div className="container1">
        <div className="card">
            <div className="card-header">Users Details</div>
            <div className="card-body">
                <p align="right"><strong>Total:{length3}</strong></p>
                <table className="table">
                    {commentDet}
                </table>
            </div>
            
        </div>
        
        </div>
        </div>
    )
}
}
    
