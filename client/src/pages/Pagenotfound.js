import React from 'react'
import { Layout } from '../components/Layout/Layout'
import { Link } from 'react-router-dom'

const Pagenotfound = () => {
  return (
    <Layout title='404Error'>
      <center>
      <div className='pnf'>
        <h1 className='pnf-title'>404</h1>
        <h2 className='pnf-heading'>Oops! Looks like you've stumbled upon a broken branch.<br></br> No worries, try again.</h2>
        <Link to='/' className='pnf-btn'>Go Back</Link>
      </div>
      </center>
    </Layout>
  )
}

export default Pagenotfound