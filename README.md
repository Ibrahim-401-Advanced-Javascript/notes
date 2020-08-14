## Notesy : Class-03
### Author : Cas Ibrahim

---


#### Overview
Notesy is a Command Line Application (CLI) that allows the user to:
  * input text as a note
  * add a category to the note
  * save the note to a database
  * list all saved notes 
  * list all saved notes by category
  * delete notes from the database

#### Setup
* Clone the app
* Run npm i
  * This will install the following dependencies:
    * minimist
    * jest
    * mongoose

#### Running the app
* Within the directory, enter either: 
  * `node . --add 'YOUR MESSAGE'` or
  * `node . -a 'YOUR MESSAGE'`, 
    * Before running, replace `'YOUR MESSAGE'` with whatever note you would like to input
<br>

* You can also add a category to your note (so that you can list all notes from the same category later). To do so, enter either:
  * `node . --add 'YOUR MESSAGE' --category 'CATEGORY'` or
  * `node . -a 'YOUR MESSAGE' --category 'CATEGORY'`
    * Before running, replace `'CATEGORY'` with a category name of your choice.
* If you do not wish to add a category, simply omit this from your submission.
<br>

* Upon submitting, You should receive a confirmation message of `Note Saved: 'YOUR MESSAGE' `
<br>

* To list all notes, enter `node . --list`.
* To list all notes from a specific category, enter `node . --list 'CATEGORY'`
  * Before running, replace `'CATEGORY'` with a category name of your choice.
<br>

* A list of your notes should populate in the following format:
  * `'YOUR MESSAGE'`
  * `Category: 'CATEGORY'  ID: [alphanumeric id]`
<br>

* If you would like to remove a note from your database, enter `node . --delete 'ID'`
    * Before running, replace `'ID'` with the mongodb-generated alphanumeric id shown to you in your listed note.

#### Tests
* Unit Tests: `npm run test`

<!-- #### UML -->
