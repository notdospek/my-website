import styled from "styled-components"

interface TileProps {
  excerpt: string;
  image: string | undefined;
  key: string;
  title: string;
}

const Tile: React.FC<TileProps> = ({ excerpt, image, key, title }) => {
  return (
    <Surface key={key}>
      <div className="tile-top">
        <img src={image} alt={`${title} Image`} />
      </div>
      <div className="tile-bottom">
        <h3>{title}</h3>
        <p>{excerpt}</p>
      </div>
    </Surface>
  )
}

const Surface = styled.div`
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

export default Tile