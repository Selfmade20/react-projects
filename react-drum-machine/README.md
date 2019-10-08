# Drum Machine

http://jamesriall.co.uk/react-drum-machine/

## The Project

An interactive drumkit/soundboard built using React allowing you to play a set of 9 sound effects. The app allows you to play various sounds on the board, adjust the volume, turn the game on and off, as well as change the sound set entirely from a piano set to a drum set.

![ScreenShot](http://res.cloudinary.com/jamesriall/image/upload/v1513605312/drum-machine-image_pf8xmv.png)

## The Logic

Application state is managed through a simple native object which is held in the top-level App.js file. The state controls the power on/off feature, which soundset to use, the volume (0-100), the display as well as the data needed for the individual sounds.

The application state is passed down to the various components (Controls and SoundButtonsContainer) which render the individual elements using this data. The sound buttons take the soundSet data to display the value of the button as well as using HTML5 audio tags to play the releveant sound when a user clicks on a button by executing the playSound functions which is passed down as props to all of the buttons. Users can control which soundset is active, the application volume, as well as toggle the power on and off by clicking on the various control buttons which all have their respective functions passed down to them as props. Application logic and functions for controlling the app live in the App.js folders. The other containers and components are 'dumb' and simply display the data and generate the action handlers used to trigger the functions which modify state and change the UI.

Project was originally created with Facebook's create-react-app and was deplayed through GitHub Pages through a process which is easily repeated with a custom deploy script I added to the package.json file.