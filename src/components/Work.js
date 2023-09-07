import React from 'react'
import Kartuu1 from '../assets/kartuu1.JPG';
import Kartuu2 from '../assets/kartuu2.JPG';
import Kartuu3 from '../assets/kartuu3.JPG';
import { HighlightOutlined, CheckCircleOutlined, RiseOutlined } from '@ant-design/icons';

const Work = () => {
  return (
    <div className="work">
        <p className='atasss'>HOW IT WORKS</p>
        <h2><span className='biru'>3 simple steps</span> to set up </h2>
        <h2>your Borrow4Less Account</h2>
        {/* <div className='work-kartu'> */}
            <div className='kartuu'>
            <div className='adnih'>
            <HighlightOutlined style={{ fontSize: '46px', color: 'orange', marginBottom: '6px'}}/>
                <h2>Create An Account</h2>
                <p>Sign up with your legal names, set up a strong
                   password, and confirm email verification code</p>
                   </div>
                   <div className='gambarKecil'>
                        <img src={Kartuu1} alt="kartuunih"/>
                   </div>
            </div>
            <div className='kartuu'>
            <div className='adnih'>
            <CheckCircleOutlined style={{ fontSize: '46px', color: 'skyblue', marginBottom: '6px' }}/>
                <h2>Verify Your Account</h2>
                <p>Complete details such as your profile, bank
                   employment, and identity verification</p>
                   </div>
                   <div className='gambarKecil'>
                        <img src={Kartuu2} alt="kartuunih"/>
                   </div>
            </div>
            <div className='kartuu'>
            <div className='adnih'>
            <RiseOutlined style={{ fontSize: '46px', color: 'orange', marginBottom: '6px' }}/>
                <h2>Activate Your Lender or 
                Borrowers Account</h2>
                <p>At this stage, you are on your way to <span className='workBold'>Investing your money</span></p>
                </div>
                <div className='gambarKecil'>
                        <img src={Kartuu3} alt="kartuunih" className="terakhir"/>
                   </div>
            </div>
        {/* </div>     */}
       
    </div>
  )
} 

export default Work