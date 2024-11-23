import Avatar from "../Avatar/Avatar";
import * as SC from "./ProfileStyled"

const Profile: React.FC = () => {
  return (
    <SC.CardCon>
      <SC.CardHeader></SC.CardHeader>
      <SC.ContentCon>
        <div>
            <Avatar/>
          <div>
            <h3>Victor Crest</h3>
            <p>26</p>
          </div>
          <p>London</p>
        </div>
        <ul>
          <li>
            <h4>80K</h4>
            <p>Followers</p>
          </li>
          <li>
            <h4>803K</h4>
            <p>Likes</p>
          </li>
          <li>
            <h4>1.4K</h4>
            <p>Photos</p>
          </li>
        </ul>
      </SC.ContentCon>
    </SC.CardCon>
  );
};

export default Profile;
