const ThumbnailItem = props => {
  const {e, imm} = props
  const {thumbnailUrl, imageUrl, imageAltText, thumbnailAltText} = e
  const ch = () => {
    imm(imageUrl, imageAltText)
  }
  return (
    <li>
      <button type="button">
        <img src={thumbnailUrl} onClick={ch} alt={thumbnailAltText} />
      </button>
    </li>
  )
}

export default ThumbnailItem
