import React from 'react'
import {Link} from 'react-router-dom'


export default class Posts extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            postsData : []
        } 
    }

    componentDidMount(){
        const posts = this.props.location.state.post1;
        const url  = "https://jsonplaceholder.typicode.com/posts?userId=" + posts.id;
        console.log(posts);
        fetch(url)
        .then(response => response.json())
        .then( data =>{
            this.setState({
                postsData: data
            });
        }); 
    }
    render(){
        const lengthDet = this.state.postsData.length;
        const { fromPath }  = this.props.location.state;
        const postDetails = this.state.postsData.map(Det => {
            return <tbody>
                   <tr key={Det.id}>
                    <td>{Det.title}</td>
                    <td>{Det.body}</td>
                
                    <td><Link to={
                        {
                            pathname: '/view_comments',
                            state: { comment1: {id: Det.id} , frompath: '/posts'}
                    } 
                }>View Comments </Link></td>
                    </tr>          
                    </tbody>
        });
        return(
            <div className="container">
            <div className="card">
                <div className="card-header">User Details</div>
                <div className="card-body">
                    <p align="right"><strong>Total:{lengthDet}</strong></p>
                    <table className="table">
                        {postDetails}
                    </table>
                </div>
                <div className="card-footer">
                <Link className="btn btn-primary" to={fromPath}>Go Back</Link>
            </div>
            </div>
            
            </div>
        )
    }
}
