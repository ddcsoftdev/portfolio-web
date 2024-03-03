
import { createContext, useContext, useState } from 'react';
import PropTypes from "prop-types";

const ActiveTagsContext = createContext();

export const useActiveTags = () => useContext(ActiveTagsContext);

export const ProjectsWrapper = ({ children }) => {

    ProjectsWrapper.propTypes = {
        children: PropTypes.node
    };

    const [activeTags, setActiveTags] = useState({});

    // Any other state or functions related to activeTags
    const updateActiveTags = (tags) => {
        setActiveTags(tags);
    };

    return (
        <ActiveTagsContext.Provider value={{ activeTags, updateActiveTags }}>
            {children}
        </ActiveTagsContext.Provider>
    );
};