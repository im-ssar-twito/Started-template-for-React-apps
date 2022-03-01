import React from 'react'
import Dropdown from 'react-bootstrap/esm/Dropdown';
import { AiOutlineSearch } from "react-icons/ai";
import { BiMicrophone } from "react-icons/bi";
import { FiMoreVertical } from "react-icons/fi";
import { UI_STRINGS } from '../../UIstrings';
import './SearchContact.scss'

const PageOne: React.FC = () => {
    return (
        <div className="search-contact-container">
            <div className="search-contact">
                <AiOutlineSearch className="icon" />
                <input autoFocus type="text" placeholder={UI_STRINGS.SEARCH_CONTACTS} />
                <BiMicrophone className="icon" />

                <Dropdown>
                    <Dropdown.Toggle>
                        <FiMoreVertical className="icon" />
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">{UI_STRINGS.CALL_HISTORY}</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">{UI_STRINGS.SETTINGS}</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">{UI_STRINGS.HELP_AND_FEEDBACK}</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

            </div>
        </div>
    )
}

export default PageOne