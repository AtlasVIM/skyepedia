import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function SidebarItem(props) {
    
    const { name, icon , to} = props;

    const [isToggled, toggleSubNav] = useState(false)
    
    return (
            <div>
                {to && <Link className="nav-item" to={to} onClick={() => toggleSubNav(!isToggled)}>
                    <div className="nav-icon">
                        <img alt={Object.keys(icon)} src={icon}/>
                    </div>
                    {name}
                </Link>}
                {/* #DEPRECATED SUB NAVIGATION ITEMS, KEEPING IT IN CASE OF FUTURE NEED
                {!to && <a className="nav-item" onClick={() => toggleSubNav(!isToggled)}>
                    <div className="nav-icon">
                        <img src={icon}/>
                    </div>
                    {name}
                </a>}
                {subNavItems && subNavItems.length > 0 && isToggled ? (
                    <ul className="subnav">
                        {subNavItems.map((type) => (
                            <div>
                                {type.subNavType && <p>{type.subNavType}</p>}
                                {type.names.map((item, index) => (
                                    <li key={index}>
                                        <a>{item.name}</a>
                                    </li>
                                ))}
                            </div>
                        ))}
                    </ul>
            ) : null}*/}
            </div>
    )
}