# Fasanara single-page website assignment 

## Link to website
https://fasanara.vercel.app/

## Requirements

Build a mock single page website using any technology/framework you like.

## Technologies

Makes most sense to use **React**, **NextJS**, and **TailwindCSS**, for the frontend because:

 - They can work in combination. I built each part of the page using reusable components. When the logic/code in a particular section grew to a certain size, for example the unique Fasanara fund cards, I broke them into separate components inside a dedicated folder. 
 - If the page were to expand into a full-fledged website, as I've stubbed it out in the `NavBar` file, it would be straighforward to implement React's page routing, state management, data-binding, etc across the entire site.
 - NextJS as a framework for the React library enables a more performant user experience. For example, 1) it uses code splitting out of the box which reduces the size of the app’s first payload by serving components only when needed, 2) built-in image optimization, 3) the easy creation of API endpoints as a Node.js serverless function as the website grows. 
 - I wanted the website to be interactive for users even though it was static so I added a number of features including a typewriter effect for the hero section using a custom JavaScript implementation in the `useTypedWord` file.
 - The navigation bar can be toggled on/off smaller screens and mobile devices. This is achieved with React's `useState` hook and TailwindCSS styling. 
 - Some images grow when hovered hover using CSS timing functions.
 - I used Grid and Flexbox on the `companies` and `funds` sections to create a responsive layout.
- To make my code DRYER, I created a separate `index.js` file in the `components` folder and imported them as named imports into the `App` file.
- Where styles were being reused in multiple list items, for example, I created a separate component for them, passed props and mappped over the text. 
- I know that Fasanara Capital use React so it's a useful thing to use!

## Initial development strategy

 1. Scope out existing architectures available online for inspiration and the pros and cons of each approach.
 2. Decide which architecture approach to use.
 3. Assess layout configuration parameters the site may need in order to be fully responsive, interactive and showcase Fasanara as a place for attracting top crypto businesses to invest in.
 4. Get the structure of the app in place.
 5. Start development.
 6. Ways I might evolve the site to improve its appeal and utility.

## Installing and running client locally 

> Note that if you want to test out the app, then you don't need to run it locally. You can visit the deployed app here: https://fasanara.vercel.app/

To install locally you will need to have node installed on your computer.

```bash
git clone https://github.com/TylerWoolcott/fasanara.git
yarn install
yarn dev
```

Open `http://localhost:3000` in a browser. 

## Retrospective

How did this little mini project go?

I actually really enjoyed it but it took me quite a while because I had to research a variety of asset managment websites to get the right tone for the look and feel of the design. If I were to tackle a project of similar size then it would take me less than half the time. 

### What am I proud of?

I believe I have done a good job in my presentation, in terms of clear code and commits. I have not tidied/rebased my commit messages so you can get a good idea of my progress and thoughts throughout development.

I am pleased with the responsive and intuitive site which works nicely at different resolutions and on mobile.

## Would could I have done better?

I would have liked to have done TDD. TDD does take a little longer but I believe it results in a more robust product. 

Other than TDD, there are some obvious features missing from the project, such as adding a custom search feature. In anticipation of pulling data about Fasanara's funds, I also think a loading animation would have been good for times when Fasanara's server might be slow. I would have also liked to add the Intersection Observer API to the `Funds` component to make the cards appear when they are in view, as well as a way to filter the cards by the type of fund they are. It would also have been nice to perhaps embed one of the podcasts from the Fasanara team to add context. 

I think it's good to have deployed the app so it can be easily tested on multiple devices. 

### Development tools

Development was on a Mac running M1. Used Git CLI for commit messages. Visual Studio Code was used for editing source.