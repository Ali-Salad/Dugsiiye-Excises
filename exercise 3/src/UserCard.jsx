const UserCard = (props) =>{
  
    return (
        <>
        <h1> hello {props.CurrentUser}</h1>
        <span>your  role is :{props.role}</span>
        <span>your Email is :{props.Email}</span>
        </>
    )
}

export default UserCard;