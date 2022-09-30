// Write your JS code here
import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

const LogoutButton = props => {
  const {history} = props
  const onRemoveCookies = () => {
    Cookies.remove('jwt_token')
    history.replace('/login')
  }
  return (
    <div>
      <button type="button" onClick={onRemoveCookies}>
        Logout
      </button>
    </div>
  )
}
export default withRouter(LogoutButton)
