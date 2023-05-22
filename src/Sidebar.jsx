import { useGlobalContext } from './Context';
import { FaTimes } from 'react-icons/fa';
import sublinks from './data'

const Sidebar = () => {
    const { isSidebarOpen, closeSidebar } = useGlobalContext()
    return (
        <article>
            <div className={isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}>
                <div className="sidebar-container">
                    <button className='close-btn' onClick={closeSidebar}><FaTimes /></button>
                    <div className="sidebar-links">
                        {sublinks.map((item) => {
                            const { page, pageId, links } = item;
                            return (
                                <article key={pageId}>
                                    <h4>{page}</h4>
                                    <div className="sidebar-sublinks">
                                        {
                                            links.map((item) => {
                                                const { id, label, icon, url } = item;
                                                return (
                                                    <a key={id} href={url}>{icon}{label}</a>
                                                )
                                            })
                                        }
                                    </div>
                                </article>
                            );
                        })}
                    </div>
                </div>
            </div>
        </article>
    )
}

export default Sidebar
