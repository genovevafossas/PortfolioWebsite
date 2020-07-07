# Personal/Portfolio Website

> Portfolio website created with Gastby and Bulma.

A project created to become more familiar with React, html, and css.

<a href="https://bulma.io">
<img src="https://bulma.io/images/made-with-bulma.png" alt="Made with Bulma" width="128" height="24">
</a>


### A small note
This website originally came from the [gatsby-bulma-quickstart](https://github.com/amandeepmittal/gatsby-bulma-quickstart) repository, made by [Aman Mittel](https://github.com/amandeepmittal). Only a few files remain from the original, and those can be viewed through the commit history. The respository was a great help to me, so I strongly encourage any other devs looking to create a Gatsby website with Bulma to start there.

## Overview
My primary motivation for making this website rewrite was primarily out of my desire to work with react more, but also to replace my last website. My last website seemed unnecessarily complicated, as it was a Jekyll website with a blog I wasn't using and several pages that could be condensed down into one. This website is much more simple, and thus is easier for a user to quickly get the information they would need.

### Dependencies
As mentioned above, this website was made with Gastby and Bulma. I chose **Gatsby** due to my familiarity with React, as well as my relatively simple needs for a portfolio website. Because I only expected this website to be a single page, a static site generator like Gatsby would be the simplest to use and yield the fastest website. I chose to use **Bulma** because I liked their styles, and I wanted to use some quick and easily editable styles instead reinventing the wheel that Bulma had already perfected.

Some smaller dependencies used include:
* `react-icons` for ease of using font-awesome icons
* `react-helmet` for easily maintaining the head tags
* `gh-pages` for deploying to github pages.


## How can I use this repository?

I'm honored you want to use this as your starting point. However, before you do, I suggest you use [Aman Mittel's gatsby-bulma-quickstart](https://github.com/amandeepmittal/gatsby-bulma-quickstart) repo instead. It's a cleaner slate, and offers a bunch of dependencies that I uninstalled due to a lack of use for them.

If you still want to use this, you can go ahead and pull down this repo with a `git clone` and run `gatsby develop` to run the website locally. Make sure to remove or alter the `CNAME` file under `static/`, as that file must hold your own custom domain (if you're using one) to work.