import React from 'react';

const Blogs = () => {
    return (
        <div  >

            <div className="card w-1/2 bg-neutral text-neutral-content mx-auto mt-5 ">
                <div className="card-body items-center text-center ">
                    <h2 className="card-title font-bold text-error">Difference between SQL and NoSQL</h2>
                    <p>SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them). NoSQL is a class of DBMs that are non-relational and generally do not use SQL.</p>

                </div>
            </div>

            <div className="card w-1/2 bg-neutral text-neutral-content mt-10 mx-auto ">
                <div className="card-body items-center text-center">
                    <h2 className="card-title font-bold text-error">What is JWT, and how does it work?</h2>
                    <p> JWT or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.</p><br />

                      <p>  JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.

                        A JWT is a string made up of three parts, separated by dots (.), and serialized using base64. In the most common serialization format, compact serialization, the JWT looks something like this: xxxxx.yyyyy.zzzzz.</p>
                    

                </div>
            </div>
            <div className="card w-1/2 bg-neutral text-neutral-content mx-auto mt-10">
                <div className="card-body items-center text-center">
                    <h2 className="card-title font-bold text-error">What is the difference between javascript and NodeJS?</h2>
                    <p>JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language</p>

                </div>
            </div>
            <div className="card w-1/2 bg-neutral text-neutral-content mx-auto mt-10 mb-10">
                <div className="card-body items-center text-center">
                    <h2 className="card-title font-bold text-error">How does NodeJS handle multiple requests at the same time?</h2>
                    <p>How NodeJS handle multiple client requests? NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.</p>

                </div>
            </div>


        </div>
    );
};

export default Blogs;