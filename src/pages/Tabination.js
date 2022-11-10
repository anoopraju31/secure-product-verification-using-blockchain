import {useState} from 'react'
import AddProduct from './AddProduct'
import { styles } from '../variables/styles'

const Tabination = () => {
    const [selectedTab, setSelectedTab] = useState('tabs-add-tab')
    
    const selectTab = (e) => { setSelectedTab(e.target.id) }

    return (
        <div>
            <ul className={styles.ul}  id="tabs-tab" role="tablist">
                <li 
                    className="nav-item" 
                    role="presentation"
                    onClick={selectTab}
                >
                    <p 
                        className={ selectedTab === 'tabs-add-tab'? styles.tabLink + ' ' + styles.highLightTab : styles.tabLink }
                        id="tabs-add-tab" 
                    >
                        Add
                    </p>
                </li>

                <li className="nav-item" role="presentation" onClick={selectTab}>
                    <p  
                        className={ selectedTab === 'tabs-delete-tab'? styles.tabLink + ' ' + styles.highLightTab : styles.tabLink }
                        id="tabs-delete-tab" 
                    >
                        Delete
                    </p>
                </li>

                <li className="nav-item" role="presentation" onClick={selectTab}>
                    <p 
                        className={ selectedTab === 'tabs-modify-tab'? styles.tabLink + ' ' + styles.highLightTab : styles.tabLink }
                        id="tabs-modify-tab" 
                    >
                        Modify
                    </p>
                </li>
            </ul>

            <div className="tab-content" id="tabs-tabContent">
                <div className={`tab-pane fade ${selectedTab === 'tabs-add-tab'? 'block' : 'hidden' }`} id="tabs-add" role="tabpanel" aria-labelledby="tabs-add-tab">
                    <AddProduct />
                </div>
                <div className={`tab-pane fade ${selectedTab === 'tabs-delete-tab'? 'block' : 'hidden' }`} id="tabs-delete" role="tabpanel" aria-labelledby="tabs-delete-tab">
                    
                </div>
                <div className={`tab-pane fade ${selectedTab === 'tabs-modify-tab'? 'block' : 'hidden' }`} id="tabs-modify" role="tabpanel" aria-labelledby="tabs-modify-tab">
                    
                </div>
            </div>
        </div>
    )
}

export default Tabination