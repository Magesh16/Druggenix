import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic} from "@fortawesome/free-solid-svg-icons";
import { MDBIcon } from 'mdb-react-ui-kit';
const Nav = ({ setLibraryStatus, libraryStatus }) => {
  return (
    <nav>
      <h1>𝖉𝖗𝖚𝖌𝖊𝖓𝖎𝖝</h1>
      <button onClick={() => setLibraryStatus(!libraryStatus)}>
        ʟɪʙʀᴀʀʏ
        <FontAwesomeIcon className="icon" icon={faMusic} />
      </button>
    </nav>
  );
};

export default Nav;

