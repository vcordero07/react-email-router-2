import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Sidebar from "./sidebar";
import SingleEmail from "./single-email";
import EmailList from "./email-list";
import "./email.css";

export default function Email() {
  return (
    <Router>
      <div className="email">
        <Sidebar />
        <main>
          {/* <SingleEmail folderId="inbox" emailId="1" /> */}
          <Route exact path="/:emailId" component={EmailList} />
        </main>
      </div>
    </Router>
  );
}
