import React from 'react'
import AplikasiKiri from '../assets/appKiri.JPG';
import appstore from '../assets/appstore.png';
import googleplay from '../assets/googleplay.png';

const Aplikasi = () => {
  return (
    <div className='aplikasi'>
      <div className='image'>
        <img src={AplikasiKiri} alt="logo kiri" />
      </div>
      <div className='bagian-Kanan'>
        <h2 className='judulAplikasi'>Speed Up The Loan Process</h2>
        <p>Manage your worload anytime, anywhere
           Download our Borrow4Less app, for iOS or Android, and TAKE
           your investments with you whenever you go.</p>
        <div className='logoApk'>
        <img src={appstore} alt="logo kiri" />
        <img src={googleplay} alt="logo kiri" />
        </div>
      </div>
    </div>
  )
}

export default Aplikasi
