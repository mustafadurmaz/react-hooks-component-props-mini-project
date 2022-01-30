import React from "react";


function About({image="https://via.placeholder.com/215",about}) {
    return (
        <div className="About">
            <aside>
                <img src={image} alt="blog logo"  />
                <p>{about}</p>
            </aside>

        </div>
    );
}

export default About;