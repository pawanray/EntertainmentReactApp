import React, { useState } from 'react';

const Tabs = ({tabsData})=>{
   
    const [toggleTabs, setToggleTabs] = useState(0); 
    const toggleTabHanlder = (index)=>{
        setToggleTabs(index)
    }

    return (
        <>
        <h5>Tabs</h5>
        <div className='tabs'>
            <div className='tabs-header'>
                {tabsData?.length > 0 && tabsData.map((tab,index)=><div key={tab.id} className={`${toggleTabs === index ? 'tab-header-active' : ''} `}  onClick={()=>toggleTabHanlder(index)}>{tab.tabTitle}</div>)}
            </div>
            <div className='tabs-content'>
                {tabsData?.length > 0 &&  tabsData.map((tab,index)=><div key={tab.id} className={`${toggleTabs === index ? 'tab-active' : 'tab'} `}>{tab.tabContent}</div>)}
            </div>
        </div>
        </>
    )
}

export default Tabs