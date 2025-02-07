import { Link, useNavigate } from "react-router-dom";


const User = ({user}) => {
    const {id, name, email, phone}= user;
    
    const navigate = useNavigate()
    const handleShowDetail = ()=>{
        navigate(`/user/${id}`)
    }
    return (
        <div>
            <h2>{name}</h2>
            <p>{email}</p>
            <p>{phone}</p>
            <Link to={`/user/${id}`}>Show Details</Link>
            <Link to={`/user/${id}`}>
            <button>Click Me</button>
            </Link>
            <button onClick={handleShowDetail}>Click to See Details</button>
        </div>
    );
};

export default User;