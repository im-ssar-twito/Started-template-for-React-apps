import React from 'react'
import SearchContact from '../../shared/components/SearchContact/SearchContact'
import ContactItem from '../../shared/components/ContactItem/ContactItem'

const HomePage = () => {
    return (
        <div>
            <SearchContact />
            <ContactItem />
        </div>
    )
}

export default HomePage