
import "../css/donate.css";

export default function donate() {
  const email = "teamparagon571@att.net";
  const subject = encodeURIComponent("Donation to Paragon Robotics Team 571");
  const mailto = `mailto:${email}?subject=${subject}`;

  return (
    <>
      <div className="donateContainer">
        <div className="donateCard">
          <h1 className="startHeader">Donate to Paragon Robotics Team 571</h1>
          <p>Your support helps us build robots, attend competitions, and inspire the next generation of engineers.</p>

          <p>
            To donate by email, click the button below to open your email client, or copy the address: <a className="donateEmail" href={`mailto:${email}`}>{email}</a>
          </p>

          <center><a className="donateButton" href={mailto}>
            Email Us to Donate
          </a>
          </center>
        </div>
      </div>
    </>
  );
}