import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const AUTH_URL = process.env.REACT_APP_AUTH_URL || 'http://localhost:5000'

const Home = ({ user, setUser }) => {

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        const inputUser = {
            id: document.getElementById('user-input').value,
            password: document.getElementById('password-input').value
        }       

        axios.post(AUTH_URL+'/login', inputUser, { validateStatus: status => true })
        .then(res => {
            const data = res.data
            if(data.user) {
                setUser({ id: data.user, token: data.token })
                navigate('/chat')
            } else console.log(data)

        })
        .catch(err => console.log(err))
    }

    return (
        <div>
            <form style={{width: 'min-content'}} onSubmit={handleSubmit}>
                <label htmlFor='user-input'>User
                    <input type='text' id='user-input' name='user-input' />
                </label>

                <label htmlFor='password-input'>Pass
                    <input type='text' id='password-input' name='password-input' />
                </label>
                
                <input type='submit' value='Log In'/>
                

            </form>
        </div>
    )
}

export default Home