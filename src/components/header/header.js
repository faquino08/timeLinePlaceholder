import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import styles from "./header.module.css"
import { Navbar} from "react-bootstrap"

const Header = () => (
    <Navbar 
        className={styles.navpurp}
        expand="md"
        collapseOnSelect="true"
        sticky="top"
    >
        <div>
            <p> Brittney's Birthday Gift </p>
        </div>
    </Navbar>
)

export default Header;