import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./email-list.css";

export function EmailList(props) {
  const emails = props.emailList.map((email, i) => (
    <li key={i} className="email-list-email">
      <div className="email-list-email-from">{email.from}</div>
      <div className="email-list-email-title">
        <Link to={`/${props.folderId}/${i}`}>{email.title} </Link>
      </div>
    </li>
  ));

  return (
    <div className="folder">
      <h2>{props.folderName}</h2>
      <ul className="email-list">{emails}</ul>
    </div>
  );
}

const mapStateToProps = (state, props) => {
  console.log(props);
  const folder = state[props.match.params.folderId];
  return {
    folderId: props.match.params.folderId,
    folderName: folder.name,
    emailList: Object.keys(folder.emails).map(emailId => folder.emails[emailId])
  };
};

export default connect(mapStateToProps)(EmailList);
