import React from 'react';

// Create a Context Ojbect
//  A context object as the name states is a data type of an ojbect that can be used to store information that can be shared to other components within the app.
// The context object is a different approach to passing information between components and allows easier acces by avoiding the use of prop-drililng.
const UserContext = React.createContext();

// The "Provider component allows other components to consume/use the context ojbect and supply the necessary information needed to the context object"
export const UserProvider = UserContext.Provider;

export default UserContext;