# Online Boggle Startup (CS 260)
## 30 Second Pitch:
```
This startup application is a solution to the extremely common problem with the board game Boggle, where 
all players have to be in person. In this application, Boggle will be accessible to users across the 
world, all in real time based on the round they are in.
```
## Key Features:
- Online real-time with timer
- Everyone has the same board
- User login
- Voting screen (post-round to determine points)
- Stats Board
- 2 to 6 players

### NOTE: PAIR PROGRAMMING
> Ethan Bishop and Blake McGhie

![Boggle Login page](BoggleLoginPage.jpg)
![Boggle Home page](BoggleHomePage.jpg)
![Boggle Scores page](BoggleScorePage.jpg)

### Ethan's Notes:
```
IP Address: 3.131.64.245
ssh -i ~/.ssh/cs260.pem ubuntu@3.131.64.245

- SVG's are kind of a pain to work with, but I found out how to make them in illustrator (as I normally do) and export them as code
- The buttons for SIMON were suprisingly a lot, svg within a button within a cell, within a table, within a div
- I really wanted the pages to have a common header/footer that I could just have separately and import so I wouldn't have to do so much
copying and pasting. Needless to say, that was a rabbit hole I never really figured out, maybe someday as I get better at this web programming stuff
-Flexbox can be kind of a pain honestly...I don't know how I got stuck trying to center a div so that multiple elements could play nicely as the window is resized. It seems like it should be simple, but it wasn't
-I got flex to work! After some nice testing, I was finally able to get everything to play nicely and put together something. It finally clicked how things worked. Now I have a mess with the margins and padding causing some problems, but I think I can put together something nice for the startup now and make it look decent.
```
### Blake's Notes:
```
IP Address: 3.132.220.196
ssh -i (key) ubuntu@3.132.220.196

- For some reason I was having trouble with deploying my simon files to my server, a TA was able to 
help me fix it. We literally just restarted Caddy and it worked for some reason...

Simon:
-   I learned that I should probably be keeping track of certain commands for deployment and ssh in order
to not get confused when working in the terminal.

$ ./deployFiles.sh -k ../../../../keys/mcghiebadmin.pem -h mcghie-blake.click -s simon
$ sudo systemctl restart caddy

CSS Practice:
-   CSS is super powerful, I've always had a little bit of trouble with navbars, but this assignment I took a lot of time to practice it.
```
