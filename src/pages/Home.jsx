import React from 'react'
import { Link } from 'react-router-dom'
import {FaQuestionCircle,FaTicketAlt} from 'react-icons/fa'

function Home() {
  return (
    <>
    <section className="heading">
        <h1>What do you need help with ?</h1>
        <p>Please choose from an option below</p>
    </section>

    <Link to='/new-ticket'>
        <button className='btn btn-reverse btn-block'>
            <FaQuestionCircle/>Create New Ticket
        </button>
    </Link>
    <Link to='/tickets'>
        <button className='btn  btn-block'>
            <FaTicketAlt/>view My Tickets
        </button>
    </Link>
    </>
  )
}

export default Home