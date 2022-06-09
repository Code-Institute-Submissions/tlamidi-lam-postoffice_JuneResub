![CI logo](https://codeinstitute.s3.amazonaws.com/fullstack/ci_logo_small.png)

Welcome tlamidi,

This is the Code Institute student template for Gitpod. We have preinstalled all of the tools you need to get started. It's perfectly ok to use this template as the basis for your project submissions.

You can safely delete this README.md file, or change it for your own project. Please do read it at least once, though! It contains some important information about Gitpod and the extensions we use. Some of this information has been updated since the video content was created. The last update to this file was: **September 1, 2021**

## Gitpod Reminders

To run a frontend (HTML, CSS, Javascript only) application in Gitpod, in the terminal, type:

`python3 -m http.server`

A blue button should appear to click: _Make Public_,

Another blue button should appear to click: _Open Browser_.

To run a backend Python file, type `python3 app.py`, if your Python file is named `app.py` of course.

A blue button should appear to click: _Make Public_,

Another blue button should appear to click: _Open Browser_.

In Gitpod you have superuser security privileges by default. Therefore you do not need to use the `sudo` (superuser do) command in the bash terminal in any of the lessons.

To log into the Heroku toolbelt CLI:

1. Log in to your Heroku account and go to *Account Settings* in the menu under your avatar.
2. Scroll down to the *API Key* and click *Reveal*
3. Copy the key
4. In Gitpod, from the terminal, run `heroku_config`
5. Paste in your API key when asked

You can now use the `heroku` CLI program - try running `heroku apps` to confirm it works. This API key is unique and private to you so do not share it. If you accidentally make it public then you can create a new one with _Regenerate API Key_.

------

## Release History

We continually tweak and adjust this template to help give you the best experience. Here is the version history:

**September 1 2021:** Remove `PGHOSTADDR` environment variable.

**July 19 2021:** Remove `font_fix` script now that the terminal font issue is fixed.

**July 2 2021:** Remove extensions that are not available in Open VSX.

**June 30 2021:** Combined the P4 and P5 templates into one file, added the uptime script. See the FAQ at the end of this file.

**June 10 2021:** Added: `font_fix` script and alias to fix the Terminal font issue

**May 10 2021:** Added `heroku_config` script to allow Heroku API key to be stored as an environment variable.

**April 7 2021:** Upgraded the template for VS Code instead of Theia.

**October 21 2020:** Versions of the HTMLHint, Prettier, Bootstrap4 CDN and Auto Close extensions updated. The Python extension needs to stay the same version for now.

**October 08 2020:** Additional large Gitpod files (`core.mongo*` and `core.python*`) are now hidden in the Explorer, and have been added to the `.gitignore` by default.

**September 22 2020:** Gitpod occasionally creates large `core.Microsoft` files. These are now hidden in the Explorer. A `.gitignore` file has been created to make sure these files will not be committed, along with other common files.

**April 16 2020:** The template now automatically installs MySQL instead of relying on the Gitpod MySQL image. The message about a Python linter not being installed has been dealt with, and the set-up files are now hidden in the Gitpod file explorer.

**April 13 2020:** Added the _Prettier_ code beautifier extension instead of the code formatter built-in to Gitpod.

**February 2020:** The initialisation files now _do not_ auto-delete. They will remain in your project. You can safely ignore them. They just make sure that your workspace is configured correctly each time you open it. It will also prevent the Gitpod configuration popup from appearing.

**December 2019:** Added Eventyret's Bootstrap 4 extension. Type `!bscdn` in a HTML file to add the Bootstrap boilerplate. Check out the <a href="https://github.com/Eventyret/vscode-bcdn" target="_blank">README.md file at the official repo</a> for more options.

------

## FAQ about the uptime script

**Why have you added this script?**

It will help us to calculate how many running workspaces there are at any one time, which greatly helps us with cost and capacity planning. It will help us decide on the future direction of our cloud-based IDE strategy.

**How will this affect me?**

For everyday usage of Gitpod, it doesn’t have any effect at all. The script only captures the following data:

- An ID that is randomly generated each time the workspace is started.
- The current date and time
- The workspace status of “started” or “running”, which is sent every 5 minutes.

It is not possible for us or anyone else to trace the random ID back to an individual, and no personal data is being captured. It will not slow down the workspace or affect your work.

**So….?**

We want to tell you this so that we are being completely transparent about the data we collect and what we do with it.

**Can I opt out?**

Yes, you can. Since no personally identifiable information is being captured, we'd appreciate it if you let the script run; however if you are unhappy with the idea, simply run the following commands from the terminal window after creating the workspace, and this will remove the uptime script:

```
pkill uptime.sh
rm .vscode/uptime.sh
```

**Anything more?**

Yes! We'd strongly encourage you to look at the source code of the `uptime.sh` file so that you know what it's doing. As future software developers, it will be great practice to see how these shell scripts work.

---

Happy coding!


Tony Lamidi

This project is about a simple design of a Digital Clock. It is a simple project, with the display in digital form , of the hour, minute and second. The display also include if the period is AM or PM. The project targets individuals. Those individual who would need an extra, or a very handy time display. Its simplicity makes it user friendly. Another amusing feature incorporated into it was, the background color of the project that changes as the case maybe. This is a feature that add some fun to the project. There are many sophisticated digital clock project out there, but this project simplicity would attract beautifully, bigger audience. It also included uncomplicated coding in all the 3 languages, javascript,html, and css that were deployed in the project.

There is a function 'ShowTime'. The function was defined at the beginning of the js file. It encompassed all the major operations in js witthin the project. There are couple of if statements to determine time if AM or PM. There are variables with an assigned value, that shows the format of the display of the clock in hours, minutes, and seconds. The function ShowTime was called by the end of the function final curly bracket.

In the css file, the codes are simply to center the clock display, and the titles on the page. In the html file, the div element contained a number of class, ids and onclick funcfion. These are there in the html file, in order to be called up for execution in the js file.
In the html file, just before the closing html element tag </html> there is a script element opening and close tag , and in between them there is a discription of the path where js file situated in the project data  directory.

TESTING

HTML file when tested, no errors were found when passing through the official W3C Validator.

CSS file was tested. No errors were found when passing through the official JIGSAW Validator.

JavaScript file tested. No errors were found when passing through the official JSHINT Validator.
  
   The folowing metrics were returned;
      There are 4 functions in this file.

      Function with the largest signature take 0 arguments, while the median is 0.

      Largest function has 17 statements in it, while the median is 2.5.

      The most complex function has a cyclomatic complexity value of 6 while the median is 1.5.

Unfix bugs

      There are few errors in form of warnings in the Javascript file. This warning did not change the outcome result. Html and Css were without any errors.

Deployment;      

This is Tony Lamidi's readme in respect of my project 2. The title of my project ic Digital clock

This is a single page project.

The clock display the current time in hour, minute, and second, in a digital form.

Html, css, and Javascript were deployed in the project. There are essentialy three files. Namely,
index.html, index.js, and style.css.

The basic programme for the project started from the Html file. The css file has got simple coding where to essentially position both the clock and the header of the project.

The h1 element is placed inside the header anchored in an 'a' element. This is to make the h1 bolder. The h2 sub-header is also placed inside the header element but not wrapped inside any navigational or boldened element.

The both h1 and h2 are coded in the css file to be positioned in the center of the page. 

The div element in the Html file that is directly connected to the attributes and settings in respect of the digital clock is also been coded in the css file to position the clock at the center of the page.

Onclick with a function is added to the div in html file to connect to an "if" statement added in js file. This is simply to change background color between two colors orange, and green, when the body is clicked.  

