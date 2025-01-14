import React from 'react'
import { Link } from 'react-router-dom'

export default function AdminNavbar() {
  return (
    <div className='flex flex-row gap-10 text-xl justify-center'>
        <Link to='/admin/dashboard' className='text-xl text-purple-700 hover:underline hover:text-purple-400 cursor-pointer transition-colors'>Dashboard</Link>
        <Link to='/admin/reports' className='text-xl text-purple-700 hover:underline hover:text-purple-400 cursor-pointer transition-colors'>Daily Report</Link>
        <Link to='/admin/add-blogs' className='text-xl text-purple-700 hover:underline hover:text-purple-400 cursor-pointer transition-colors'>Add Blogs</Link>
    </div>
  )
}
