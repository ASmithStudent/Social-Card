import React, { Component } from 'react';
import { Media} from 'reactstrap'
import moment from 'moment';

class MediaCard extends Component {

    constructor(props){
        super(props);
        this.state = {
            isTweetRetweet: false,
            isLiked: false,
            isCommented: false,
            isRetweeted: false
        }
    }

    commentPressed = e => {
        e.preventDefault();

    }

    // Change border of comment icon
    onCommentClick = e => {

        const { isCommented } = this.state;
        e.preventDefault();



    }


    render(){
        const { username, handle, timestamp, body } = this.props;

        return (
            <React.Fragment>
                <Media id="media-card">
                    <Media left href="#">
                        <Media id="avatar" object src="https://via.placeholder.com/75" alt="Generic placeholder image" />
                    </Media>
                    <Media body>
                        <Media heading>
                            {username} <span id="handle" className="text-muted">{handle} • {timestamp}</span>
                        </Media>
                        <p>{body}</p>
                        <Media bottom id="icons">
                            <a id="comment" href="#"><img src={process.env.PUBLIC_URL + 'img/comment-bubble.svg'} alt="comment" /> <span className="icon-num-labels text-muted">2</span></a>
                            <a id="retweet" href="#"><img src={process.env.PUBLIC_URL + 'img/retweet.svg'} alt="retweet" /> <span className="icon-num-labels text-muted">10</span></a>
                            <a id="like" href="#"><img src={process.env.PUBLIC_URL + 'img/like.svg'} alt="comment" /> <span className="icon-num-labels text-muted">200</span></a>
                        </Media>
                    </Media>
                    <hr />
                </Media>
                
            </React.Fragment>
        );
    }
    

}

export default MediaCard