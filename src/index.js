import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail'
import ApprovalCard from './ApprovalCard'

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail author="Sam" timeAgo="Today at 6:00PM" comment="Blog comment 1" imgSrc="https://source.unsplash.com/random"/>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Vishal" timeAgo="Today at 5:00PM" comment="Blog comment 2" imgSrc="https://source.unsplash.com/random"/>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Alex"  timeAgo="Yesterday at 6:00PM" comment="Blog comment 3" imgSrc="https://source.unsplash.com/random"/>
            </ApprovalCard>
        </div>
        
    )   
};

ReactDOM.render(<App />, document.querySelector('#root'))