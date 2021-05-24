# Technical Questions

## What would you add to your solution if you had more time?

- Add more granular error handling mechanisms and give the user other forms of feedback about errors. This version only has an error boundary preventing errors in the OrderBook to break other parts of the site and displaying error information to the end-user
- Use an error monitoring service like [Sentry](https://sentry.io) to report errors instead of using `console.log`
- Close the web socket connection with the API when the user navigates away from the browser tab and open a new web socket connection again when the user comes back
- Increase test coverage - unit, integration and e2e
- Persist the last selected price group in LocalStorage to be the initial price group when the user visits the OrderBook again
- Make the OrderBook vertically responsive, as well
- Let the user select the OrderBook product from a dropdown. In this version we only show metrics for `XBT/USD`
- Consider [Socket.io](https://socket.io/) instead of native WebSocket in case we need to support older browsers
- Add a favicon

## What would you have done differently if you knew this page was going to get thousands of views per second vs per week?

Since this site is already served over a CDN in Netlify, I would evaluate how I would:

- Make the bundle size smaller by
  - Using [PReact](https://preactjs.com/) for production version
  - Create own light weight design system instead of using Material UI
- Already mentioned above, close the socket connection when the user navigates away from the browser tab and subscribe back when the user reopens the tab.
- Evaluate other ways to reduce the load on the server

It's also worth mentioning that this version of the OrderBook does not use images, but if it were to use images then I'd optimize them

## What was the most useful feature that was added to the latest version of your chosen language? Please include a snippet of code that shows how you've used it.

Typescript version 4.0 added support for **Labeled Tuple Elements**. I used it in this project in file the `src/OrderBook/types.ts` on line 33 to define the shape of price level deltas:

```
type PriceLevelDelta = [price: number, size: number];
```

The latest version of Typescript is 4.2, but I haven't used any feature from this version, nor the version before (4.1)

## How would you track down a performance issue in production?

- Monitor the site for performance issues with a service like Sentry
- Make sure the issue is not caused by the server
- Identify the kind of performance issue I'm facing (preferably with the help of Sentry in this case). Is it an issue with loading assets, executing scripts or rendering?
- If the issue is with loading assets for example, I'd check if the image, icon or font files are optimized. Make sure script and style files are properly minified and tree-shaked
- The Performance and Memory features in Chrome devtools to can help to trace down script execution and rendering issues

#### Have you ever had to do this?

- I had to optimize the bundle size of an [Interactive Video Player](https://leocristofani.com.br/projects/interactive-video-player)
- The [Analytics Dashboard](https://leocristofani.com.br/projects/analytics-dashboard) project I worked on presented some rendering challenges that I had to deal with
- Performance issue with executing scripts was a big part of this very project :). I used the Chrome devtools Performance and Memory features extensively to discover what parts of the code needed optimizations

## Can you describe common security concerns to consider for a frontend developer?

#### XSS (Cross-site scripting)

In which the attacker injects malicious scripts into a site. There are many ways to perform this attack. If the site is served over http for example, one can intercept a response from a server to a client with a man-in-the-middle software and inject a script. Other ways to perform this attack include:

- WYSIWYG and embedded content
- Form data that's not properly sanitized/escaped
- Give the user control over URLs (older browsers still execute scripts in URLs)
- Hidden content in images and PDFs

How to prevent?

- Always use https
- Sanitize user data on the way into the server/database and on the way into the UI
- Treat user data as value not as code
- Restrict the extensions of uploaded files
- CSP (Content Security Policy) to inform the browser where certain file types can be sourced from

#### CSRF (Cross-site Request Forgery)

In which the attacker tricks the user into clicking a link or submitting a form that performs a transaction in a system where the user is authenticated, usually with basic authentication of a cookie. To prevent this kind of attach we should:

- Not let the server change data with a GET http requests
- Use CSRF Token in forms
- Use restrictive CORS settings

#### Third Party Assets

We should be careful with the third party scripts that run inside our sites. Some things to take into consideration when using third party scripts:

- Evaluate NPM projects on Github for popularity, contributors, comments, questions, etc. It's always recommended to stick to LTS versions
- If we need to source scripts from a third party CDN, use the `integrity and crossorigin` attributes in the script tag
- CSP (Content Security Policy) to inform the browser where certain file types can be sourced from

#### Clickjacking

One example of clickjacking could be if the attacker hosts a malicious site with the domain `twiiter.com` (notice the subtle typo) in which (s)he embeds the real Twitter site with an iframe and overlays the login form with a hidden form to capture the user's credentials. One way to prevent this attack is to use the `x-frame-options: sameorigin/deny` header to inform the user the site can't be served via an iframe

#### Other

- Never store user's sensitive data in `localStorage` or `sessionStorage`
- Be a safe end-user as well:
  - Use strong passwords and 2-factor authentication where available
  - Be careful with browser extensions. If in doubt, use an incognito window

## How would you improve the XXX API that you just used?

Add an option to limit the number of delta messages. I had to implement a throttling solution in the frontend and thought it would be nice to pass in such an option to the API endpoint
