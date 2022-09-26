import React from 'react'
import * as S from './style'
import { Pexels } from '../../images'
function About() {
  return (
    <S.Container>
      <S.Image>
         <img src={Pexels} alt="Pexels" />
      </S.Image>
      <S.Text>
        <h1>ABOUT</h1>
        <div></div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt, tortor nec rhoncus dictum, lorem massa tempus sem, eu tincidunt libero velit sit amet velit. Nunc in euismod urna. Duis dapibus, elit eu eleifend tincidunt, nulla ipsum consectetur lorem, quis tempor lorem justo quis nisi. Nam interdum, nisi nec mollis sagittis, enim risus euismod nisi, quis rutrum quam augue id mauris. Pellentesque mattis hendrerit semper. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut vestibulum nisl ante, et ultricies sapien facilisis aliquam. </p>
      </S.Text>
    </S.Container>
  )
}

export default About