import React from "react";
import ReactDOM from "react-dom";
import './new-text-post.css';


export default class NewTextPost extends React.Component {
  render(){
    return(
      <div className="new-textpost">
        <div className="date-time">
          <div className="date">{this.props.postDate}</div>
            <div className="time">{this.props.postTime} </div>
        </div>
        <div className="text-title">{this.props.postTitle}</div>
        <div className="text-post"><p>{this.props.postText}</p></div>
        <div className="text-post-two"><p>{this.props.postTextTwo}</p></div>
          <div className="text-post-three"><p>{this.props.postTextThree}</p></div>
      </div>
    );
  }
}


ReactDOM.render(<NewTextPost/>, root);
