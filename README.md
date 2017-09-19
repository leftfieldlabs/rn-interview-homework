# React Native Interview Homework
The goal of the developer exercise is to take a quick dive into a React Native + Expo project and build a two screen contact manager app. Left Field Labs will be evaluating the code and will schedule a walkthrough call with the developer candidate to discuss design choices.

## Timelines and Contact
Expected time of completion is around 2-4 hours of development, fitting the minimum requirements. If there are any questions or troubles, developer candidates may reach out to Matt S, matt@leftfieldlabs.com to get assistance.

## Setup and Running
We have spun up a basic Expo (http://expo.io) app, which is a very handy toolset built on top of React Native. You can write your entire app as you would with any React Native - Expo adds more tooling around native features and plugins as well as a great build system.

### Fork and Clone

All work must be completed on your own fork of the repository. To fork the repository, click the fork button on the top right of the github page.

### Install Expo and Mobile Client
Once you setup your expo dev environment with the setup below

- Install [Expo XDE](https://docs.expo.io/versions/latest/introduction/installation.html) (GUI) or `exp` (Command Line - `npm install -g exp`)

- Install Expo Mobile ([Android](https://play.google.com/store/apps/details?id=host.exp.exponent) or [iOS](https://itunes.com/apps/exponent)

- Run `npm install` in the project directory

- Open the app in Expo-XDE or `exp r --lan` - scan the project barcode on your mobile device

- Develop!

### Turning In
Once you are satisfied in your progress, please return a link to your forked codebase to Jesse and Matt (or the contact that had assigned this homework). Also, please publish your app to expo (see [How To Publish](https://docs.expo.io/versions/latest/guides/publishing.html#how-to-publish)) and send the link to the published app with your repository link. These links are required for evaluation.

-------------------

## Project Script/Setting
Here is our fake setting for the exercise:

We are building a new application around managing contacts in a user’s phone. The goal of the assignment is to get a contact list display and drill-in page for a selected contact. This will be the base of further development, so the code must be ready for additions and changes. At this time, we do not need the favorite contact to persist after app is closed.

### Data
Please source the contacts from the User's phonebook. Since we are using expo, this should be very straightforward - see [Contacts Documentation](https://docs.expo.io/versions/latest/sdk/contacts.html) - please retrieve phone numbers, emails, and URLs for each contact. We have also placed two icons in the `./assets/icons` to be used for favorited and unfavorited states on the contact page.

### Screens

#### Contacts list
This screen should minimally show a scrollable sorted list of up to 500 contacts (alphabetically by first name) and a single favorited contact (displayed above the list and in the normal sort-order). Users should be able to scroll through the list of contacts and tap any contact to view their full contact info page.

#### Contact Details
The detailed contact information page should show the information of the chosen contact: emails, phone numbers, and anything else given in the contact data. The only interaction a user needs to perform at this time is to favorite the contact (There can only be one favorite - please make sure the interactions for overwriting current favorite are there). There should be a button to return to the contacts list.

### Extra Credit
#### Contacts list
- Contacts are searchable (type in name or number and see list filter)
- Contacts are in header-sorted list - like native iOS

#### Detailed Contact Info
- Favorite Contact select persists on app re-launch
- Ability to interact with contact data - call, email, visit website, open maps with any addresses
- Have fallbacks for contacts with missing details (first/last name, emails, phone numbers) or contacts that are deemed a company
- Images/Thumbnails for the contact with a placeholder for contacts without any