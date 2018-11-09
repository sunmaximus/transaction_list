import React from 'react';
import { Container, Header } from 'semantic-ui-react'

import NavBar from '../share/components/NavBar'
import './style/about.scss'

const About = () => {
  return (
    <div>
      <NavBar hasBackground={false} />
      <Container text className='about__container'>
        <Header as='h2'>The Group of Frogs</Header>
        <p>
          A group of frogs were traveling through the forest when two of them fell into a deep pit. When the other frogs saw how deep the pit was, they told the two frogs that there was no hope left for them.
        </p>
        <p>
          However, the two frogs ignored their comrades and proceeded to try to jump out of the pit. However, despite their efforts, the group of frogs at the top of the pit were still saying that they should just give up as they’d never make it out.
        </p>
        <p>
          Eventually, one of the frogs took heed of what the others were saying and he gave up, jumping even deeper to his death. The other frog continued to jump as hard as he could. Once again, the group of frogs yelled at him to stop the pain and to just die.
        </p>
        <p>
          He ignored them, and jumped even harder and finally made it out. When he got out, the other frogs said, “Did you not hear us?”
          The frog explained to them that he was deaf, and that he thought they were encouraging him the entire time.
        </p>
        <p>
          <strong>Moral of the story:</strong> People’s words can have a huge effect on the lives of others. Therefore, you should think about what you’re going to say before it comes out of your mouth – it might just be the difference between life and death.
        </p>
      </Container>
    </div>
  )
}

export default About;