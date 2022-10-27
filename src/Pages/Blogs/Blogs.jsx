import React from 'react';

const Blogs = () => {
    return (
        <div className='lg:w-[90%] w-full mx-auto py-10 bg-primary rounded'>
            {/* First question section */}
            <div className='bg-base-100 mx-4 rounded p-5 mb-5'>
                <h2 className='text-3xl text-white mb-6'>What is cors?</h2>
                <p>
                Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.

                An example of a cross-origin request: the front-end JavaScript code served from https://domain-a.com uses XMLHttpRequest to make a request for https://domain-b.com/data.json.

                For security reasons, browsers restrict cross-origin HTTP requests initiated from scripts. For example, XMLHttpRequest and the Fetch API follow the same-origin policy. This means that a web application using those APIs can only request resources from the same origin the application was loaded from unless the response from other origins includes the right CORS headers.
                </p>
            </div>
            

            {/* Second question section */}
            <div className='bg-base-100 mx-4 rounded p-5 mb-5'>
            
                <h2 className='text-3xl text-white mb-6'>Why are you using `firebase`? What other options do you have to implement authentication?</h2>
                <p>
                    <p>
                        We are using firebase because it is vary secure and handle by google company. 
                    </p>
                    <p className='my-3'>Fire base alternative</p>
                    <ul className='list-disc'>
                        <li>
                        Auth0. A set of unified APIs and tools that instantly enables Single Sign On and user management to all your applications.
                        </li>
                        <li>MongoDB. MongoDB stores data in JSON-like documents that can vary in structure, offering</li>
                        <li>Okta</li>
                        <li>Amazon Cognito</li>
                        <li>JSON Web Token</li>
                    </ul>
                </p>
            </div>
            

            {/* Third question section */}
            <div className='bg-base-100 mx-4 rounded p-5 mb-5'>
          
                <h2 className='text-3xl text-white mb-6'>How does the private route work?</h2>
                <p>
                The react private route component renders child components (children) if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property.

The current logged in user (authUser) is retrieved from Redux state with a call to the useSelector() hook. Redux is used in this example however it is not required to implement a Private Route component in React Router 6. You could use a different state management library or any approach you prefer to get the logged in status of the user.
                </p>
            </div>
            

            {/* Forth question section */}
            <div className='bg-base-100 mx-4 rounded p-5 mb-5'>
                <h2 className='text-3xl text-white mb-6'> What is Node? How does Node work?</h2>
                <p>
                Javascript has existed since 1995 and has since taken over as the dominant language for web development. For much of its life, JavaScript was used mainly for client-side scripting inside {`<script>`} tags executing in web browsers. This limitation meant that developers were often working in many different languages and frameworks between the front-end (client-side) and backend (server-side) aspects of a web application.

Although there were other projects to bring JavaScript to server-side applications, the functionality took off with the launch of Node.js in 2009. Node allows developers to write JavaScript code that runs directly in a computer process itself instead of in a browser. Node can, therefore, be used to write server-side applications with access to the operating system, file system, and everything else required to build fully-functional applications.

Node.js is written in C, C++, and JavaScript, and it is built on the open-source V8 JavaScript engine which also powers JS in browsers such as Google Chrome. As V8 supports new features in JavaScript, they are incorporated into Node.
                </p>
                <p className='mt-4'>
                Working of Node.js: Node.js accepts the request from the clients and sends the response, while working with the request node.js handles them with a single thread. To operate I/O operations or requests node.js use the concept of threads. Thread is a sequence of instructions that the server needs to perform. It runs parallel on the server to provide the information to multiple clients. Node.js is an event loop single-threaded language. It can handle concurrent requests with a single thread without blocking it for one request.
                </p>
            </div>
            
            

        </div>
    );
};

export default Blogs;