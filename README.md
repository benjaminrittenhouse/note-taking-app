# Noted - A Note Taking App
Utilizing React Native in combination with Firestore from Google Firebase, this note taking app allows users to create accounts and log in, giving them access to notes stored in the cloud. Users can edit notes, create new ones, and delete notes that are no longer needed.
(See video for demo of app. During the deleting portion, an off screen notification occurs which is why it appeared there was a delay. This is in web view, an alert pops up in iOS / android explaining to the user the note was deleted.)

# onChange
The React Native feature "onChange" was very useful when creating this project. Every time someone edits the text input on a note, Firebase stores this change immediately. This way, if there is any sort of crash or the user accidentally exits a note while still trying to edit, the most recent edit will have been saved. Even if you don't click the "check mark" at the bottom of the createNote screen.

# firebase
Firebase has a very understandable way of storing data using "documents" and "collections", or multiple documents. The methods setDoc and addDoc give the coder easy access to either name the document something specific or allow firebase to give it a random documnet id (ex. DJF428fhdsa82h). I chose to create my own ID for this project, as we need to access notes by their ID while users live edit a note, as well as save or delete a note.

# state 
The state feature of React Native is used in this app by updating the current note we are on, but more importantly, populating all of the notes on the main "allNotes" pages. We first fetch the user information snapshot via firebase methods. Then, once it has been fetched, we go through all the users notes and add them to an array, which is then passed to our set state function. Consistent calls of setting the state creates a very fluid and up to date user experience.

# file structure
Outside of src folder, we have configuration files and our reference to Firebase. This is so the databse is easily accessible to all other files that need to reference it, which is a lot of them. Within src we have our app navigation to list out our screens, our screens folder with our home screen; note screen; createnote screen etc; , as well as our headers. Custom headers were created because some of them needed to offer an option to click "back" to the previous screen, while others needed to be a little more basic. The title of these headers can be filled with props if needed. 

Navigation is passed to all screens to allow them to navigate to one another.