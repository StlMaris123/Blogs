import React from 'react';
import { fetchPosts } from '../actions';


class PostList extends React.Component {
    componentDidMount(){
        this.props.fetchPosts();
    }
    render(){
    return (
        <div> I am a Post</div>
    )
}
}
export default connect(null, {fetchPosts})(PostList);