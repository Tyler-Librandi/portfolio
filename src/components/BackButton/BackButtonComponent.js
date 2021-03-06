import React from "react";
import styles from "./BackButtonComponent.module.css";
import { Link } from "react-router-dom";

function BackButtonComponent() {
  return (
    <div className={styles.link}>
      <Link className={styles.backBtn} to={"/"}>
        Back
      </Link>
    </div>
  );
}

export default BackButtonComponent;
