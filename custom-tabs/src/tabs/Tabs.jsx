import React from 'react';

const Tabs = ({ tabsContent = [], onChange = () => {} }) => {
  const [currentTab, setCurrentTab] = React.useState(0);

  const handleOnClick = (index) => {
    setCurrentTab(index);
    onChange(index);
  };


  if (!tabsContent || tabsContent.length === 0) {
    return <div className='wrapper'>No tabs to display</div>;
  }

  return (
    <div className='wrapper'>
      <div className='heading'>
        {tabsContent.map((tabItem, index) => (
          <div className= {`tab-item ${currentTab===index ? "active":""}`} onClick={() => handleOnClick(index)} key={index}>
            <span className='label'>{tabItem?.label}</span>
          </div>
        ))}
      </div>
      <div className='content' style={{color:"red"}}>
        {tabsContent[currentTab] && tabsContent[currentTab].content}
      </div>
    </div>
  );
};

export default Tabs;
