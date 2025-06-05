import './../styles/auth.css'
import './../util/util.css'
import { Link } from 'react-router';
import CompNav from './company_nav';

function Auth(){
    return(
        <div className="auth  flex flex-dir flex gap16">
            <CompNav/>
            <div className='form flex flex-dir gap16 pad16'>
                <h2 className=' headbluuw'>Open your account</h2>
                <div className='flex flex-dir gap8'>
                    <label className='label' >Email</label>
                    <input className='inp' placeholder='Email id' type='text'/>
                </div>
                <div className='flex flex-dir gap8'>
                    <label className='label' >Phone</label>
                    <input className='inp' placeholder='phone.' type='number'/>
                </div>
                <div className='flex flex-dir gap8'>
                    <label className='label' >Password</label>
                    <input className='inp' placeholder='Email id' type='Password'/>
                </div>
                <Link to='/main' className='hyper'>Already have account? Login now</Link>
                <button className='btn smallbtn'>Start your journey</button>
            </div>
        </div>
    )
}

export default Auth;