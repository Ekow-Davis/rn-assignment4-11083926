# rn-assignment4-11083926
Assignment 4 for DCIT 202

ID: 11083926

## Components Used
So the components used in this system are:

## React-Native Libary
### Text
This is the Component used to render text on react-native. It is what I used for all the text on the mobile app.

### View
Like a div component in web development, the View component also works in a similar sense and is mainly used to group and wrap around certain components or parts especially for giving specific parts stying or effects exclusive to them

### ScrollView
The ScrollView component provides a scrolling container that can host multiple components, allowing for vertical or horizontal scrolling. It is ideal for displaying content that may exceed the screen size, ensuring that users can scroll.

### Pressable
Pressable: This component is used to detect various touch interactions. It provides feedback for touch interactions and is customizable. It is used in this app to make the FilterImage and the Sign In button pressable.

Button: This component renders a standard button that users can press. It takes a title prop for the text label and an onPress prop for the click handler. However, it only supports text labels directly. Hence why it could not be used for the FilterImage and rather Pressable was used

### TextInput
The TextInput component allows users to enter text into the app. In this app, it is used for the search bar, enabling users to type in their queries.

### Stylesheet
The StyleSheet component is used to create and manage styles in React Native. It is essentially the CSS of react-native. This component ensures that the styles are written in a JavaScript object format and can be easily reused and maintained.

### FlatList
The FlatList component is optimized for rendering large lists of data. It supports efficient scrolling and only renders the components that are visible on the screen. In this app, it is used to render the list of popular jobs tasks as well as the featured jobs.


## Custom Components
### FeaturedJobCard
Custom made component that renders the block for the featured Job display, and takes several props to assign the values (label, location etc) inside the card, the image as well as the colour for the background and the text colour. It is reuable to avoid retyping the entire code block that make up the Featured job display

### PopularJobCard
Custom made component that renders the block for the popular Job display, and takes several props to assign the values (label, location etc) inside the card, the image as well as the colour for the background and the text colour. It is also a reuable component

### SignInputBox
This is a custom made input box that takes in an input and stores the user input. It also has a specific styling and takes the main prop of placeholder 