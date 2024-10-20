import "./Profile.css";

function Profile(props) {
    return (
        <div class="profile">
            <img class="image" src={props.gif} alt={props.alt}></img>
            <p><strong>{props.name}</strong> {props.role}</p>
            <p>Email: {props.email}</p>
            <p>Github: <a href={props.github} target="_blank">{props.github}</a></p>
        </div>
    )
}

export default Profile;