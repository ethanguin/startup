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
```
