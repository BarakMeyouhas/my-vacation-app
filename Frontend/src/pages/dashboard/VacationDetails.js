import { useParams } from "react-router-dom";

const VacationDetails = () => {
    console.log("hello world");
    const params = useParams();
    console.log(params);
    return (
        <div>hello</div>
    );
}

export default VacationDetails;
