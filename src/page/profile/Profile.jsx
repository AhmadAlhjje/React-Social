import Topbar from "../../components/topbar/Topbar";
import Sidebar from '../../components/sidebar/Sidebar';
import Feed from '../../components/feed/Feed';
import Rightbar from '../../components/rightbar/Rightbar';
import './profile.css'

export default function Profile() {
  return (
    <>
        <Topbar/>
        <div className="profile">
        <Sidebar/>
        <div className="profileRight">
            <div className="profileRightTop">
                <div className="profileCover">
                    <img className="profileCoverImg" src="/assest/post/post4.jpg" alt="" />
                    <img className="profileUserImg" src="/assest/person/7.jpg" alt="" />
                </div>
                <div className="profileInfo">
                    <h4 className="profileInfoName">Safak kocaoglu</h4>
                    <span className="profileInfoDesc">Hello my Friends</span>
                </div>
                
            </div>
            <div className="profileRightBottom">
                <Feed/>
                <Rightbar profile/>
            </div>
        </div>
        </div>
      </>
  )
}
