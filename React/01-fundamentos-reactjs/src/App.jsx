import {Post} from "./components/Post.jsx";
import {Header} from "./components/Header.jsx";
import './global.css'
import styles from './App.module.css'
import {Sidebar} from "./components/Sidebar.jsx";

export function App() {
    return (
        <div>
            <Header/>

            <div className={styles.wrapper}>
                <Sidebar />
                <main>
                    <Post
                        author="Lucas Nhimi"
                        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    />
                    <Post
                        author="Lucas Nhimi"
                        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    />
                </main>
            </div>
        </div>
    )
}
