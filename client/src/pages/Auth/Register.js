import React,{useState} from 'react'
import { Layout } from '../../components/Layout/Layout'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast';
import axios from 'axios'

const Register = () => {
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [phone,setPhone] = useState('')
    const [address,setAddress] = useState('')
    const [answer,setAnswer] = useState('')
    const navigate = useNavigate()
    
    // form function
    const handleSubmit = async(e) => {
        e.preventDefault();
        try{
            const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/register`,{name,email,password,phone,address,answer})
            if(res.data.success){
                toast.success(res.data.message)
                navigate('/login')
            } else {
                toast.error(res.data.message)
            }
        } catch(error){
            console.log(error);
            toast.error('Something went Wrong')
        }
    }

  return (
    <Layout title='Register - Botanica'>
        <div className='register'>
            
            <form onSubmit={handleSubmit} className='registerForm'>
            <h1>Let's Get Growing!</h1>
            <div className="mb-3">
                <input 
                type="text" 
                placeholder='Name'
                value={name} 
                onChange={(e) => setName(e.target.value)}
                className="form" 
                id="exampleInputName"
                required />
            </div>
            <div className="mb-3">
                <input 
                type="text" 
                placeholder='Email' 
                value={email} 
                onChange={(e) => setEmail(e.target.value)}
                className="form" 
                id="exampleInputEmail" 
                required/>
            </div>
            <div className="mb-3">
                <input 
                type="password" 
                placeholder='Password'
                value={password} 
                onChange={(e) => setPassword(e.target.value)}
                className="form" 
                id="exampleInputPassword1"
                required />
            </div>
            <div className="mb-3">
                <input 
                type="text" 
                placeholder='Phone Number'
                value={phone} 
                onChange={(e) => setPhone(e.target.value)}
                className="form" 
                id="exampleInputPhone" 
                required/>
            </div>
            <div className="mb-3">
                <input 
                type="text" 
                placeholder='Address' 
                value={address} 
                onChange={(e) => setAddress(e.target.value)}
                className="form" 
                id="exampleInputAddress" 
                required/>
            </div>
            <div className="mb-3">
                <input 
                type="text" 
                placeholder='Your Favourite colour?' 
                value={answer} 
                onChange={(e) => setAnswer(e.target.value)}
                className="form" 
                id="exampleInputAnswer" 
                required/>
            </div>
            <button type="submit" className='register-btn'>Register</button>
            </form>


        </div>
    </Layout>
  )
}

export default Register