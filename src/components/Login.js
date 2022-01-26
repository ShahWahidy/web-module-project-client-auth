import React, {useState} from "react"
import { useHistory } from "react-router-dom"
import axios from "axios"

const Login = () => {
    const { push } = useHistory()
    const [userInfo, setuserInfo] = useState({
        username: '',
        password: ''
    })

    const handleChange = (e) => {
        setuserInfo({
            ...userInfo,
            [e.target.name]: e.target.value
        })
    }
    //console.log(userInfo)


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("inside HandleSubmit")
        axios.post('http://localhost:9000/api/login', userInfo)
        .then((res) => {
          console.log(res)
            localStorage.setItem('token', res.data.token)
            push('/friends')
        })
        .catch(err => {
            console.log(err);
        })
    }
    return(<div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='username'>Username :</label>
          <input onChange={handleChange} name='username'id='username'/>
        </div>
        <div>
          <label htmlFor='password'>Password :</label>
          <input onChange={handleChange} name= 'password' id='password'/>
        </div>
        <button>Submit</button>
      </form>
     
      
     </div>)    
  }

  export default Login;