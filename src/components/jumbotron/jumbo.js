import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import styles from "./jumbo.module.css"
import Jumbotron from "react-bootstrap/Jumbotron"

const BannerImage = (props) => (
    <Jumbotron className={styles.banner}>
        <div className={styles.dialogContainer}>
            <h1>
                <b className={styles.divider}>|</b>{props.title}
            </h1>
            <p>{props.message}</p>
        </div>
    </Jumbotron>
)

export default BannerImage;