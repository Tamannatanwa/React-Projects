import React from 'react';
import Tabs from './Tabs';
import "./tabs.css"

const RandomComponent = () => <h1>Some random content</h1>;

const tabsTest = () => {
    const tabs = [
        { label: 'Tab 1', content: <div>This is content for Tab 1</div> },
        { label: 'Tab 2', content: <div>This is content for Tab 2</div> },
        { label: 'Tab 3', content: <div>This is content for Tab 3</div> }
    ];

    const handleChange = (currentIndex) => {
        console.log(`Tab ${currentIndex + 1} selected`);
    };

    return (
        <Tabs tabsContent={tabs} onChange={handleChange} />
    );
};

export default tabsTest;
