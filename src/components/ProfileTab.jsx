import me from "../assets/me.jpg";

const ProfileTab = () => {
  //   const handleclick = () => {
  //     alert("span clicked");
  //   };
  return (
    <div>
      <span className="span-style"> welcome to Profile page</span>
      <div className="profile-style">
        <div>
          <img src={me} style={{ width: "200px" }}></img>
        </div>
        <div>
          <h3> Nagendra Bypina</h3>
          <h4> Front end engineer</h4>
        </div>
      </div>
    </div>
  );
};

export default ProfileTab;
