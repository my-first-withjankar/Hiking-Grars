import React from 'react';

const Blogs = () => {
    return (
        <div
            style={{ fontFamily: '' }}
            className='container'>
            <div>
                <h2>Welcome to blog page</h2>
                <h5>1. Difference between javascript and nodejs ?</h5>
                <p>JavaScript is a programming language. It is running in any web browser with a proper browser engine.Mainly using for client-side activity for provide some dynamic changes in web pages without refreshing the page.it can run any engine like Spider monkey , javaScript Core (safari), V8  On the other hand , Nodejs is an interpreter and environment for JavaScript with some specific useful libraries which JavaScript programming can use separately.It is mostly used on the server-side.It allows Javascript code to run outside the browser. It comes with a lot of modules and mostly used in web development. It's only run in a V8 engine which mainly used by google chrome.</p>
            </div>
            <div>
                <h5>2.When should you use nodejs and when should you use mongodb ?</h5>
                <p>We can use node.js for constructing an API application with both relational and non-relational databases. It is suitable because of the Single thread with event loop.Always being processed asynchronously by internal threads without interrupting the main thread.Due to the event-driven and asynchronous nature, node.js is good at building real-time applications</p>
                <p>
                    MOngodb is very fast and efficient so I should use it when I have key value pair to store(json data) . one of the best advantage with MongoDB is I can store a collection inside another collection . it support more user at a time and also useful if I have large number of fields.
                </p>
            </div>
            <div>
                <h5>3.Differences between sql and nosql databases ?</h5>
                <p>SQL databases are primarily called as Relational Databases .These databases are not suited for hierarchical data storage. It is vertically scalable.SQL syntax and queries to analyze and get the data for further insights. They are used for OLAP systems.</p>
                <p>On the other hand , NoSQL databases are either key-value pairs, document-based, graph databases or wide-column stores. NoSQL database are primarily called as non-relational or distributed database. It is horizontally scalable.NoSQL database system consists of various kind of database technologies. These databases were developed in response to the demands presented for the development of the modern application.</p>
            </div>
            <div>
                <h5>4.What is the purpose of jwt and how does it work?</h5>
                <p>JWT is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.It has one characteristic in particular that makes it a good tool for sending a user’s identity to a backend service. We can trust the integrity of a JWT because JWTs are signed, making them tamper-proof.</p>
                <p>JWT is a string made up of three parts, separated by dots (.), and serialized using base64. In the most common serialization format, compact serialization, the JWT looks something like this: xxxxx.yyyyy.zzzzz.you will get two JSON strings:The header and the payload.header contains the type of token JWT in this case and the signing algorithm. Payload contains the claims. This is displayed as a JSON string, usually containing no more than a dozen fields to keep the JWT compact.</p>
            </div>
        </div>
    );
};

export default Blogs;