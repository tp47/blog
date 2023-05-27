import { ReactNode } from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";

import styles from "./Layout.module.css";

interface LayoutProps {
  headerSlot: ReactNode;
  bottomSlot?: ReactNode;
}

function Layout({ headerSlot, bottomSlot }: LayoutProps) {
  return (
    <div className={styles.root}>
      {headerSlot}
      <div className={styles.container}>
        <div className={styles.content}>
          <Outlet />
        </div>
      </div>
      <footer className={styles.footer}></footer>
      {bottomSlot}
      <ScrollRestoration />
    </div>
  );
}

export {Layout}
