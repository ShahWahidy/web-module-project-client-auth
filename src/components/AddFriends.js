import React,{useState} from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";


const AddFriends = () => {
    const { push } = useHistory();
    const [form, setForm] = useState({
        name: '',
        email: ''
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]:e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log("clicked");
        const token = localStorage.getItem('token')
        axios.post('http://localhost:9000/api/friends', form, {
            headers:{
                authorization: token
            } 
        })
        .then(res => {
            console.log(res);
            push('/friends')
        })
        .catch(err => {
            console.log(err);
        })

    }
    return(<div>
            <h2>AddFriends</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input onChange={handleChange} name='name' id="name" />
    
                    <label htmlFor="email">Email</label>
                    <input onChange={handleChange} name='email' id="email" />
                </div>
                <button>Submit</button>
            </form>        
        
        </div>)
  }


export default AddFriends;