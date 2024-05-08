import React, { useState } from "react";

export default function SidebarItem(props) {
    
    const { name, icon ,  subMenus} = props;

    const [isToggled, toggleSubNav] = useState(false)
    
    return (
        <li>
            <li>
                <a className="nav-item" onClick={() => toggleSubNav(!isToggled)}>
                    <div className="nav-icon">
                        <img src={icon}/>
                    </div>
                    {name}
                </a>
                {subMenus && subMenus.length > 0 && isToggled ? (
                    <ul className="subnav">
                        {subMenus.map((type) => (
                            <div>
                                {type.subMenusType&& <p>{type.subMenusType}</p>}
                                {type.names.map((item, index) => (
                                    <li key={index}>
                                        <a>{item.name}</a>
                                    </li>
                                ))}
                            </div>
                        ))}
                    </ul>
            ) : null}
            </li>
        </li>
    )
}