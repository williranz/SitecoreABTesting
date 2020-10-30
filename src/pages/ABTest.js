import React from 'react'
import cookie from "js-cookie";
import ContentA from "../components/contentA"
import ContentB from "../components/contentB"
import ContentC from "../components/contentC"
import CurrentState from "../components/state"

const ABTest = ({experience, sessionId}) => {   
    if(!cookie.get('UserId'))
    {
        cookie.set('UserId', sessionId);        
    }
    getServerSideProps();
    return (
      <div>
        <h1>Wellcome to AB testing</h1>
        <SwitchCase value={experience} />
      </div>
    ); 
}

function SwitchCase(props) {
    switch(props.experience) {
      case 0:
        return <ContentA/>;
      case 1:
        return <ContentB/>;
      case 2:
        return <ContentC/>;
      default:
        return <ContentA/>;
    }
}

function getServerSideProps() {
    let sessionId = cookie.get('UserId');
    let experiences = [0, 1, 2];

    if (sessionId === undefined) {
        sessionId = CurrentState.next('experience');
        console.log(`Next state: ${sessionId}`);
    }

    const experience = experiences[sessionId % experiences.length];

    return {
        props: {
            experience,
            sessionId
        }
    };
}

export default ABTest