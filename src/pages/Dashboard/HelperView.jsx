import React,{useState, useEffect} from 'react';
import { ref, getDownloadURL } from "firebase/storage";
import { firestore, storage } from "../../utils/firebase";
import { doc, getDoc } from "firebase/firestore";
import { Link } from 'react-router-dom';

const FirebaseImage = ({ id }) => {
    const [imageUrl, setImageUrl] = useState(null);
    const [error, setError] = useState(null);
    // const [name, setName] = useState(null);
  
    useEffect(() => {
      const fetchImageUrl = async () => {
        try {
          const imagePath = `images/employer/${id}`;
          const imageRef = ref(storage, imagePath);
          const url = await getDownloadURL(imageRef);
          setImageUrl(url);
        } catch (error) {
          console.error("Error fetching image URL:", error);
          setError(error);
        }
      };
    //   const fetchName = async () => {
    //     const docRef = doc(firestore, "documents", id+"_employer");
    //     const docSnap = await getDoc(docRef);
    //     if (docSnap.exists()) {
    //         const combinedName = docSnap.data().professionalInfoHelper.first_name + " " + docSnap.data().professionalInfoHelper.last_name;
    //         setName(combinedName);
    //     } else {
    //       console.log("No such document!");
    //     }
    //   }
  
      fetchImageUrl();
    //   fetchName();
    }, [id]);
  
    if (error) {
      return <div>Error loading image</div>;
    }
  
    return (
      <div>
        {imageUrl ? <img src={imageUrl} alt={`Image for ID: ${id}`} className="w-32 h-32 object-cover border-black border-4 rounded-full" /> : <p>Loading...</p>}
      </div>
    );
};
  
const maxApplications = 10;
const CircleProgress = ({ applicationsCount }) => {
    const fillPercentage = (applicationsCount / maxApplications) * 100;
    const strokeDasharray = 283; // Approximate circumference of the circle (2 * Math.PI * 45)
    const strokeDashoffset = strokeDasharray - (fillPercentage * strokeDasharray) / 100;

    return (
        <svg className="transform -rotate-90" width="100" height="100">
                    <circle
                        className="text-gray-300"
                        strokeWidth="10"
                        stroke="currentColor"
                        fill="transparent"
                        r="45"
                        cx="50"
                        cy="50"
                    />
                    <circle
                        className="text-blue-500"
                        strokeWidth="10"
                        strokeDasharray={strokeDasharray}
                        strokeDashoffset={strokeDashoffset}
                        strokeLinecap="round"
                        stroke="currentColor"
                        fill="transparent"
                        r="45"
                        cx="50"
                        cy="50"
                    />
                    <text
                        x="50%"
                        y="50%"
                        dominantBaseline="middle"
                        textAnchor="middle"
                        fontSize="20"
                        stroke="white"
                        fill='white'
                        transform='rotate(90, 50, 50)'
                    >
                        {applicationsCount}/{maxApplications}
                    </text>
                </svg>
    );
};

const HelperView = ({ name, applications, applied}) => {
    return (
        <div className='mx-8'>
        <div>
            <h2 className="text-2xl mb-4 font-bold">Welcome, {name} </h2>
            {/* <h3 className="text-lg mb-2">You have signed up as a Helper</h3> */}
        </div>
        <div className='flex flex-col gap-4 mdnav:gap-32 w-full mx-auto text-center mdnav:flex-row'>
            <div className="bg-[#376B8E] text-white p-6 rounded-lg mdnav:w-1/2 h-fit">
                <h3 className="text-2xl mb-2 font-bold">Applicants</h3>
                <ul className=' flex flex-col'>
                    {applied.length > 0 ? (
                        applied.map(id => (
                      <li key={id} className="mb-2 flex items-center justify-center">
                        <Link to={`/employer-details/${id}_employer`} className="hover:text-blue-200 flex items-center">
                        <FirebaseImage id={id} />    
                        <p className="ml-4 text-white font-bold">View Profile</p>            
                        </Link>
                    </li>
                    ))
                ) : (
                    <p className='text-lg'>No on has reached out to you yet</p>
                )}
                </ul>
            </div>
            <div className="bg-[#376B8E] text-white p-6 rounded-lg mdnav:w-1/2">
                <h3 className="text-2xl mb-2 font-bold">Your Applications</h3>
                <ul className=' flex flex-col'>
                    {applications.length > 0 ? (
                        applications.map(id => (
                      <li key={id} className="mb-2 flex items-center justify-center">
                        <Link to={`/employer-details/${id}_employer`} className="hover:text-blue-200 flex items-center">
                        <FirebaseImage id={id} />    
                        <p className="ml-4 text-white font-bold">View Profile</p>            
                        </Link>
                    </li>
                        ))
                    ) : (
                        <p className='text-lg'>You have not applied for any applications yet.</p>
                    )}
                </ul>
            </div>
        </div>
        <div className='p-6 text-center'>
            <h2 className="text-2xl mb-4">View more Employers</h2>
            <a href="/employers" className="block mb-4">
            <button className="px-4 py-2 bg-[#123750] text-white rounded-xl hover:bg-blue-600 transition duration-300 app:w-[150px]"> 
                More Employers
            </button>
            </a>
        </div>
    </div>
    );
};

export default HelperView;
