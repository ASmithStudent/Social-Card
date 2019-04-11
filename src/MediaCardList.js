import React from 'react';
import MediaCard from './MediaCard';
import { Container, Row, Col } from 'reactstrap';
import moment from 'moment';

const MediaCardList = () => {

    let timestamp = [];
    for(var i=0; i<=6; i++) {
        timestamp.push(moment().subtract(i, "hours").startOf("hour").fromNow())
    }


    const lorem1 = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias eum culpa architecto, voluptates quidem consequatur fugiat sit aliquam eius et, quod laudantium eos adipisci libero exercitationem corporis quo voluptate sint.";
    const lorem2 = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut iste dolorum, tempore hic aspernatur itaque debitis vitae vel corporis quisquam repellat possimus deleniti inventore adipisci. Minima voluptatem perspiciatis accusantium sapiente."
    const lorem3 = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi veritatis, quod voluptas harum, aliquam, sit asperiores eligendi excepturi non provident odio nobis velit exercitationem quidem. Quibusdam eaque maxime velit. Dolorum!"
    return (
        <React.Fragment>
            <Container id="cardList">
                <Row>
                    <Col>
                        <MediaCard username="Adrian Smith" handle="@adriansmith" timestamp={timestamp[0]} body={lorem3} />
                        <MediaCard username="Lebron James" handle="@lbj" timestamp={timestamp[1]} body={lorem1} />
                        <MediaCard username="Jamal" handle="@jamal" timestamp={timestamp[2]} body={lorem2} />
                        <MediaCard username="Daquan" handle="@daquan" timestamp={timestamp[3]} body={lorem3} />
                        <MediaCard username="TSM Myth" handle="@tsmmyth" timestamp={timestamp[4]} body={lorem1} />
                        <MediaCard username="Ninja" handle="@therealninja" timestamp={timestamp[5]} body={lorem2} />
                    </Col>
                </Row>
            </Container>
            
        </React.Fragment>
    )
}

export default MediaCardList;