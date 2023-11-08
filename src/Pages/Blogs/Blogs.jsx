import { Helmet } from "react-helmet-async";


const Blogs = () => {
    return (
        <div>
            <Helmet>
                <title>DreamJob | Blogs</title>
            </Helmet>
            <h2 className="text-2xl text-teal-600 font-bold text-center mt-20 mb-5">Access Token and Refresh Token</h2>
            <hr />
            <p className="text-justify text-xl my-5">An access token and a refresh token are both used in authentication and authorization processes, especially in the context of token-based authentication such as OAuth. They serve different purposes in ensuring secure access to resources and improving the user experience. </p>
            <hr />
            <h2 className="text-2xl text-teal-600 font-bold text-center my-5">Access Token</h2>
            <hr />
            <ul className="list-disc list-inside text-xl text-justify my-5">
                <li>An access token is a credential that is used to access protected resources, such as APIs. It is typically short-lived and grants access to specific resources for a limited period.</li>
                <li>Access tokens are often included in the headers of HTTP requests to prove the identity of the client and grant access to certain resources.</li>
                <li>They are used to authenticate the identity of the user or client requesting access to a specific resource.</li>
            </ul>
            <hr />
            <h2 className="text-2xl text-teal-600 font-bold text-center my-5">Refresh Token</h2>
            <hr />
            <ul className="list-disc list-inside text-xl text-justify my-5">
                <li>A refresh token is a long-lived token that is used to obtain a new access token after the current access token expires. It is used to maintain persistent authentication without requiring the user to re-authenticate.</li>
                <li>Refresh tokens are used to request a new access token without prompting the user for their credentials again.</li>
                <li>They provide a way to maintain long-term authentication sessions and improve the user experience by preventing frequent re-authentication.</li>
            </ul>
            <hr />
            <h2 className="text-2xl text-teal-600 font-bold text-center my-5">Storing Them</h2>
            <hr />
            <p className="text-justify text-xl my-5">Storing access tokens and refresh tokens on the client-side should be done carefully to ensure security. Best practices for storing tokens on the client-side include:</p>
            <ul className="list-disc list-inside text-xl text-justify my-5">
                <li><span className="font-bold">Cookies:</span> Storing tokens in HTTP-only cookies can prevent client-side JavaScript from accessing them, thereby mitigating the risk of cross-site scripting attacks.</li>
                <li><span className="font-bold">Local Storage or Session Storage:</span> Storing tokens in the browser local storage or session storage can be convenient, but it poses security risks, as this data can be accessed by any script running on the same origin.</li>
                <li><span className="font-bold">IndexedDB:</span> Storing tokens in IndexedDB allows for more storage capacity and better security compared to local storage, but it requires more complex management.</li>
                <li><span className="font-bold">Memory:</span> Storing tokens in memory can provide better security but has limitations in maintaining the tokens persistence across browser sessions.</li>
            </ul>
            <hr />
            <h2 className="text-2xl text-teal-600 font-bold text-center my-5">ExpressJS</h2>
            <hr />
            <p className="text-justify text-xl my-5">Express.js is a minimal and flexible web application framework for Node.js. It provides a robust set of features to develop web and mobile applications. It is designed for building single-page, multi-page, and hybrid web applications. Express.js is one of the most popular and widely used frameworks for web development in the Node.js ecosystem.</p>
            <h2 className="text-2xl text-teal-600 font-bold text-center my-5">NextJS</h2>
            <hr />
            <p className="text-justify text-xl my-5">Next.js is a popular open-source React framework that enables server-side rendering (SSR), static site generation (SSG), and other powerful features for building modern web applications. It provides a robust development experience, supporting features such as automatic code splitting, hot module replacement, and route pre-fetching, which enhance performance and optimize user experience.</p>

            <hr />
            <h2 className="text-2xl text-teal-600 font-bold text-center my-5">Explanation of My Code</h2>
            <hr />
            <p className="text-justify text-xl my-5">As this a large a project it is very difficult to give line line by explanation of code. But i am working with this project with my own knowledge. Whenever I feel difficulty I am exploring google, youtube, courses video and I am taking help from chatGPT. But i am not copying any single code from any where.</p><br />
            <p className="text-justify text-xl my-5">I am using in this project react, tailwindCSS and react flowBite for frontend and using mongodb, firebase, express for back end. I have taken React Tab for home page by which I have made a tab system for my job by category sections. I have used Multiple flowBite component. I have made AllJobs page tabular and made single job details page as private page. I have made my Navbar conditionally. I have given logout button after clicking profile picture and name by hovering mouse. For search option I have used filter with include to filtering job from allJobs. I have kept a search option into my slider at home page without any functionality.  </p>
        </div>
    );
};

export default Blogs;