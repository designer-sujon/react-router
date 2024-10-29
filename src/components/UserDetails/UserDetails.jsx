import { useLoaderData, useNavigate, useParams } from "react-router-dom";


const UserDetails = () => {
    const user = useLoaderData();
    const {name}= user;
    const {userId} = useParams()
    const navigate = useNavigate()

    console.log(userId);

    const handleGoBack= ()=>{
        navigate(-1)

    }
    return (
        <div>
        <h2>Details About User:{name}</h2>
        <button onClick={handleGoBack}>Go Back</button>
        </div>
    );
};

export default UserDetails;