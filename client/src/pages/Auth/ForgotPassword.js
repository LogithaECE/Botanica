import React,{useState} from 'react'
import { Layout } from '../../components/Layout/Layout'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast';
import axios from 'axios'



const ForgotPassword = () => {
   
    const [email,setEmail] = useState('')
    const [newPassword,setNewPassword] = useState('')
    const [answer,setAnswer] = useState('')
    const navigate = useNavigate()
 
    // form function
    const handleSubmit = async(e) => {
        e.preventDefault();
        try{
            const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/forgot-password`,{email,answer,newPassword})
            if( res && res.data.success){
                toast.success(res.data && res.data.message)
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
    <Layout title='Forgot Password - Botanica'>
        <div className='login'>
            
            <form onSubmit={handleSubmit}>
            <h1>Reset Password</h1>
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
                type="text" 
                placeholder='Your Favourite colour?'
                value={answer} 
                onChange={(e) => setAnswer(e.target.value)}
                className="form" 
                id="exampleInputAnswer"
                required />
            </div>
            <div className="mb-3">
                <input 
                type="password" 
                placeholder='Password'
                value={newPassword} 
                onChange={(e) => setNewPassword(e.target.value)}
                className="form" 
                id="exampleInputPassword"
                required />
            </div>
            <button type="submit" className='login-btn'>Reset</button>
            </form>


        </div>
    </Layout>
  )
}

export default ForgotPassword