import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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
          <Switch>
            {/* <SingleEmail folderId="inbox" emailId="1" /> */}
            <Route exact path="/:folderId" component={EmailList} />
            <Route exact path="/:folderId/:emailId" component={SingleEmail} />
          </Switch>
        </main>
      </div>
    </Router>
  );
}
