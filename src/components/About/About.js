import React from 'react';

const About = () => {
    const textStyle={
        width: '1000px',
        margin: '0 auto',
        textAlign: 'justify'
    }
    return (
        <div>
            <h3 style={{textAlign:'center', padding:'10px'}}>About page</h3>
            <p style={textStyle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius accusantium ullam, soluta facilis, sit inventore eum iure, quia delectus quaerat porro nulla natus provident suscipit. Omnis quia praesentium ipsa quisquam!
            Quo id officiis beatae, corporis dolores enim asperiores cupiditate tempora vel rem at eius, possimus odit quod inventore doloremque aspernatur vero expedita illum impedit officia eum reiciendis! Sint, dolorem tempora!</p>
        </div>
    );
};

export default About;