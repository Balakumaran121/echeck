import React from 'react'

const ContactCard = ({contacts}) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {
        contacts.map((contact)=>(
            <div key={contact.id} className='px-4 py-3 rounded-2xl shadow-md hover:shadow-xl hover:cursor-pointer'>
                <h2 className="text-lg font-semibold">{contact.username}</h2>
                <p className=''>{contact.email}</p>
                <p>{contact.phone}</p>
            </div>
        ))
      }
    </div>
  )
}

export default ContactCard
