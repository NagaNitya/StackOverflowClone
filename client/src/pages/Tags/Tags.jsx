import React from 'react'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import TagsList from './TagsList'
import './Tags.css'

const Tags = () => {

    const tagsList = [{
        id: 1, 
        tagName: 'javascript',
        tagDesc: "For questions regarding programming in ECMAScript (JavaScript/JS) and its various dialects/implementations (excluding ActionScript)."
    }, {
        id: 2,
        tagName: 'Python',
        tagDesc: "Python is a multi-paradigm, dynamically typed, multipurpose programming language, designed to be quick (to learn, to use, and to understand), and to enforce a clean and uniform syntax."
    }, {
        id: 3, 
        tagName: 'c#',
        tagDesc: "C# (pronounced 'see sharp') is a multi-purpose computer programming language suitable for a wide variety of development needs."
    }, {
        id: 4,
        tagName: 'java',
        tagDesc: "Java is a high level, object-oriented programming language. Use this tag when you're having problems using or understanding the language itself."
    }, {
        id: 5,
        tagName: 'php',
        tagDesc: "PHP is a widely used, open source, general purpose, multi paradigm, dynamically typed and interpreted, scripting language originally designed for server-side web development."
    }, {
        id: 6, 
        tagName: "html",
        tagDesc: "HTML (HyperText Markup Language) is the most basic building block of the Web. It defines the meaning and structure of web content."
    }, {
        id: 7,
        tagName: "android",
        tagDesc: "Android is Google's mobile operating system, used for programming or developing digital devices (Smartphones, Tablets, Automobiles, TVs, Wear, Glass, IoT)."
    }, {
        id: 8, 
        tagName: "css",
        tagDesc: "CSS is a representation stylesheet language used for describing the presentation semantics (the look and formatting) of a document written in a markup language (such as HTML)."
    }, {
        id: 9,
        tagName: "Reactjs",
        tagDesc: "React is a JavaScript library for building user interfaces. It uses a declarative paradigm and aims to be both efficient and flexible."  
    }, {
        id: 10,
        tagName: "node.js",
        tagDesc: "Node.js is a server-side JavaScript runtime environment for writing networking and web server applications."
    }, {
        id: 11,
        tagName: "sql",
        tagDesc: "SQL (Structured Query Language) is a standardized language for defining and manipulating data in a relational database."
    }, {
        id: 12,
        tagName: "c++",
        tagDesc: "C++ is a general-purpose programming language. It was originally designed as an extension to C, and keeps a similar syntax, but is now a completely different language."
    }]
    return (
        <div className='home-container-1'>
            <LeftSidebar/>
            <div className="home-container-2" style={{display: 'block'}}>
                <h1 className='tags-h1'>Tags</h1>
                <p className='tags-p'>A tag is a keyword or label that categorizes your question with other, similar questions.</p>
                <p className='tags-p'>Using the right tags makes it easier for others to find and answer your questions.</p>
                <div className="tags-list-container">
                    {
                        tagsList.map((tag) => (
                            <TagsList tag={tag} key={tagsList.id}/>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Tags
