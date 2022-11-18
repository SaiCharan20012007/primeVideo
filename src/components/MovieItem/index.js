// Write your code here
import Popup from 'reactjs-popup'
import ReactPlayer from 'react-player'
import {IoMdClose} from 'react-icons/io'
import 'reactjs-popup/dist/index.css'

const MovieItem = props => {
  const {details} = props
  const {thumbnailUrl, videoUrl} = details

  return (
    <Popup
      modal
      trigger={
        <button type="button">
          <img src={thumbnailUrl} alt="thumbnail" />
        </button>
      }
      className="popup-content"
    >
      {close => (
        <>
          <div className="v-container">
            <button
              type="button"
              className="trigger-button"
              onClick={() => close()}
              testid="closeButton"
            >
              <IoMdClose />
            </button>
            <ReactPlayer url={videoUrl} />
          </div>
        </>
      )}
    </Popup>
  )
}
export default MovieItem
