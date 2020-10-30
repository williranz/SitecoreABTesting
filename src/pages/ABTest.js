import React from 'react'
import ContentA from "../components/contentA"
import ContentB from "../components/contentB"
import ContentC from "../components/contentC"
import CookieManager from "../components/cookieManager"
import CurrentState from "../components/state"

const ABTest = () => {
    
    let sessionId = CookieManager.getCookie();
    let experiences = [0, 1, 2];
   
    if (sessionId === undefined) {
        sessionId = CurrentState.next('experience');
        console.log(`Next state: ${sessionId}`);
        CookieManager.setCookie(sessionId);
    }
    const experience = experiences[sessionId % experiences.length];
    return (
      <div>
        <h1>Wellcome to AB testing</h1>
        <SwitchCase value={experience} />
      </div>
    ); 
}

function SwitchCase(experience) {
    switch(experience) {
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

export async function getServerSideProps() {
    let sessionId = CookieManager.getCookie();
    alert(sessionId);
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