import './rightbar.css';
import {Users} from '../../dummyData'
import Online from '../online/Online';

export default function Rightbar({profile}) {
  const HomeRightbar=()=>{
    return(
      <>
        <div className="birthdayContainer">
            <img className='birthdayImg' src="/assest/gift.jpg" alt="" />
            <span className="birthdayText">
              <b>Pola Foster</b> and <b>3 other friends</b> have a birthday today
            </span>
          </div>
          <img className='rightbarAd' src="/assest/post/post4.jpg" alt="" />
          <h4 className="rightbarTitle">Online Friends</h4>
          <ul className="rightbarFriendList">
            {Users.map((u) => (
              <Online key={u.id} user={u}/>
            ))}
          </ul>
      </>
    )
  }

  const ProfileRightbar=()=>{
    return(
      <>
        <h4 className='rightbarTitle'>User Information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">New York</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">Madrid</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship:</span>
            <span className="rightbarInfoValue">Single</span>
          </div>
        </div>
        <h4 className='rightbarTitle'>User Friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img src="/assest/person/1.jpg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img src="/assest/person/2.jpg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img src="/assest/person/3.jpg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img src="/assest/person/4.jpg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img src="/assest/person/5.jpg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img src="/assest/person/6.jpg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img src="/assest/person/1.jpg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img src="/assest/person/2.jpg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
        </div>
      </>
    )
  }
  return (
    <div className='rightbar'>
        <div className="rightbarWrapper">
          {profile ? <ProfileRightbar/> : <HomeRightbar/>}
        </div>
    </div>
  )
}
