import {Routes,Route} from 'react-router-dom'
import GithubUsersList from '../GithubUsers/GithubUsersList'
function CustomRoute() {
   return(
     <Routes>
        <Route path='/' element={<GithubUsersList/>}></Route>
     </Routes>
   )
}

export default CustomRoute
