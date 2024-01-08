import styled from "styled-components"
import Section from "./Section"
import Me from "../images/me.png"

const AboutSection = () => {
  const tiles = [
    {
      title: "Bio",
      link: "",
      image: { Me },
      excerpt: "I've been coding for ** years now. Click here for a little bit more about me."
    },
    {
      title: "Resume",
      link: "",
      image: {},
      excerpt: "After graduating with an Architecture degree, I decided that a career in Tech was more suited for me."
    }
  ]

  console.log(tiles);

  return (
    <Section>
      <HeaderContainer>
        <h2>About Me</h2>
      </HeaderContainer>
      <div className="tiles-container">
        {tiles.map((tile, i) => (
          <Tile key={`tile${i}`}>
            <div className="tile-top">
              <img src={tile.image.Me} alt={`${tile.title} Image`} />
            </div>
            <div className="tile-bottom">
              <h3>{tile.title}</h3>
              <p>{tile.excerpt}</p>
            </div>
          </Tile>
        ))}
      </div>
    </Section>
  )
}

const HeaderContainer = styled.div`
  margin: 24px;

  h2 {
    margin: 0;
  }
`

const Tile = styled.div`
  background-color: var(--surface-container);
  border-radius: var(--tile-border-radius);

  .tile-top{
    width: 100%;
    height: 200px;
    background-color: pink;
    border-radius: var(--tile-border-radius);
    overflow: hidden;

    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }
`

export default AboutSection