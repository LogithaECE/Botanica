import React,{useState} from 'react'
import { Layout } from '../../components/Layout/Layout'
import { useNavigate,useLocation } from 'react-router-dom'
import toast from 'react-hot-toast';
import axios from 'axios'
import { useAuth } from '../../context/auth';


const Login = () => {
   
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [auth,setAuth] = useAuth()
    const navigate = useNavigate()
    const location = useLocation()  
    // form function
    const handleSubmit = async(e) => {
        e.preventDefault();
        try{
            const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/login`,{email,password})
            if( res.data.success){
                toast.success(`Your Plants missed you, ${res.data.user.name}! `,{
                    duration:5000
                })
                setAuth({
                    ...auth,
                    user:res.data.user,
                    token:res.data.token
                })
                localStorage.setItem('auth',JSON.stringify(res.data))
                navigate(location.state ||'/')
            } else {
                toast.error(res.data.message)
            }
        } catch(error){
            console.log(error);
            toast.error('Something went Wrong')
        }
    }

  return (
    <Layout title='Login - Botanica'>
        <div className='login'>
            
            <form onSubmit={handleSubmit}>
            <h1>Welcome Back!</h1>
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
            <button type="submit" className='login-btn'>Login</button>
            
            <a href='/forgot-Password' style={{fontSize:"x-small",color:"white"}}>Forgot Password?</a>
            </form>


        </div>
    </Layout>
  )
}

export default Login