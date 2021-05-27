import React from 'react'
import "./Header.css";
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';
import IconButton from '@material-ui/core/IconButton';

function Header() {
    return (
        <div className="header">
            <IconButton className="swipeButtons_person">
                <PersonIcon fontSize="large"/>
            </IconButton>
            <img className="header_logo" src="https://i.ibb.co/ysFXdD1/removal-ai-tmp-60a4fb4b4737b.png" alt="" />
            <IconButton className="swipeButtons_forum">
                <ForumIcon fontSize="large"  />
            </IconButton>
        </div>
    )
}

export default Header
