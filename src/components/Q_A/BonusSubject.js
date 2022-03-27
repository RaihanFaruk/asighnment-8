import React from "react";

const BonusSubject = () => {
  return (
    <div>
      <div>
        <h2> How React Work</h2>
        <p>
        React is a very popular JavaScript library. With over 5.5 million weekly downloads, React is enjoying great popularity. But not a lot of React developers know how React works under the hood.

In this post, I'll try to uncover some interesting things about React which you, as a React developer, might find fascinating. Let's start at the beginning.

But before we start, if you're a React developer, I have some exciting news for you! Once you complete this article, you'll get to develop something cool with React and win prizes on the way :)
        </p>
      </div>
      <div>
        <h2>Difference between props and state</h2>
        <p>
          <h3>State</h3>
          <li>The state is an updatable structure that is used to contain data or information about the component and can change over time. The change in state can happen as a response to user action or system event. It is the heart of the react component which determines the behavior of the component and how it will render. A state must be kept as simple as possible. It represents the component's local state or information. It can only be accessed or modified inside the component or by the component directly.</li>
        </p>
        <h3>Props</h3>
        <p><li>Props are read-only components. It is an object which stores the value of attributes of a tag and work similar to the HTML attributes. It allows passing data from one component to other components. It is similar to function arguments and can be passed to the component the same way as arguments passed in a function. Props are immutable so we cannot modify the props from inside the component</li></p>
      </div>
    </div>
  );
};

export default BonusSubject;