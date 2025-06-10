import { useNavigate } from 'react-router-dom';

const Properties =  () => {
    const navigate = useNavigate();
    return (
        <div>
           <button onClick={() => navigate('/property-details')}>
            details
           </button>
        </div>
    )
}

export default Properties;