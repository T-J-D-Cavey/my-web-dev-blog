---
title: 'State Management with SPAs'
date: '2023-11-03'
image: state-management-with-SPAs-globe.jpg
excerpt: SPAs gained immense popularity in the mid-2010s, and this shift towards client-side state management led to innovative solutions.. 
isFeatured: true
---

In response to the increasing complexity and interactivity of modern web applications (web pages evolved into web apps, one might say), single-page applications (SPAs) helped avoid the need to fetch every new section of a site from the server, at the cost of a second or two.

An SPA's server could respond to a request to their domain with a single, bare-bones HTML page and a very large bundled package of JavaScript. This script ran in the browser and created the Document Object Model (DOM) needed by the browser. With this setup, everything was readily available for rendering on the DOM, eliminating the need for further server requests. The content to be rendered depended on the state of the app.

[Angular](https://angularjs.org/) was the first popular SPA JavaScript library, followed by [React](https://react.dev/) and [Vue](https://vuejs.org/). I chose to learn React. For those unfamiliar with what React is 'under the hood,' I would recommend [this talk by Tejas Kumar](https://youtu.be/f2mMOiCSj5c?si=Lrg_G-d06Zz3u9Sa).


## Conditional Rendering

With everything residing on the client-side, both local and global states largely determined what would be rendered. For example:

```js

function MyComponent() {
    const [someBooleanState, setSomeBoolean] = useState(false);

    // Fetch some data and if successful, change the state

    if (!someBooleanState) {
        return <div>Some loading spinner</div>
    }

    return <div>Main content</div>
}
```

The snippet above is an example of a component's local state. This state is relevant only to this component and perhaps its children, but unrelated components don't need to know the state created here.

## Global State and State Management Libraries

There will be many instances where distant components need access to the same state. A global state managed in a central location and provided to the root component via a Provider is an elegant way to grant app-wide access to state. Although I haven't used global state in this example, the notification banner a user receives when they sign up for my newsletter or send me a message would be a good use case.

React's createContext function and useContext hook are a common approach. My course introduced me to [Redux](https://redux.js.org/), a third-party library serving the same purpose. I'd like to show you a few examples of the @reduxjs/toolkit package, which most of my own projects have used.

## A Redux Slice and a Redux Store

To manage state, you need a way to access and change that state. State and state changes should be consistent and lead to predictable outcomes that your app can rely on. For complex apps, it makes sense to separate bits of state into their own sections or slices. The 'createSlice' function allows us to do just that:

```js

const exampleSlice = createSlice({
    name: 'example',
    // Here we define our slice's default state:
    initialState: {
        someList: [],
    },
    // These are the functions that allow for predictable state changes:
    reducers: {
        changeSomeList: (state, action) => {
            state.someList = action.payload;
        },
    // extraReducers would go here for asynchronous operations:
    },
})
```

You can define functions that provide access to this state and other functions that allow state changes:

```js

const listSelector = (state) => {
    return state.posts.list;
}
// Our list:
const theList = useSelector(listSelector);
console.log(theList);

const { changeSomeList } = exampleSlice.actions;

const dispatch = useDispatch();
// Changing our list:
dispatch(changeSomeList([...theList, 'a list item']));

const exampleReducer = exampleSlice.reducer;
```

Exporting these functions and importing them, along with their corresponding hooks, into your components allows app-wide state changes. Well... almost.

```js
// This is the store that will host ALL state: 
const store = configureStore({
    reducer: {
        example: exampleReducer
    }
   
})
// and is passed to the root component via a Provider:
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);
```

Once the configuration code is complete, it's easy and quick to access and change your app's state. However, be cautious of the way React schedules re-renders and state changes. If you change the state and rely on the new state within the same function, it's best to place that logic within a useEffect hook with that state as a dependency.

## There's Always Another Way

I've primarily used Redux and this toolkit package for larger apps where global state is advantageous. However, as mentioned, React's-out-the-box Context functions offer another, perhaps more intuitive way. I plan to use this approach more often, if for no other reason than it being a fresh approach.

Regardless of the approach you choose, you'll be able to avoid 'prop drilling' and repetitive code with a well-implemented global state system.






