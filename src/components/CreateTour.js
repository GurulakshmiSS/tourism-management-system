import React, { useState ,useEffect} from 'react';
import Header from './Header';
import Footer from './Footer';
import './CreateTour.css';
import axios from 'axios';
import service1 from './img/service/services1.jpg';
function CreateTour() {
  const errorStyle = {
        fontSize: '24px',
        color: 'red',
      };
  const successStyle = {
        fontSize: '24px',
        color: 'green',
      };
  const [success,setSuccess] = useState("");
  const [error,setError] = useState("");
  const [packages,setPackage] = useState([]);
  const [tourData, setTourData] = useState({
    tourName: '',
    description: '',
    price: 0,
    location: '',
    startDate: '',
    endDate: '',
    guideName: '',
    guideEmail: '',
    capacity: 0,
  });
  const displayPackage = async () => {
    try {
      const response = await axios.post('http://localhost/php-react/tourist/api/display_packages.php');
      setPackage(response.data);
      // Handle a successful response
      console.log('successful', response.data);
  
    } catch (error) {
      setError('Failed');
    }
  };
 useEffect(() => {
      displayPackage();
}, []);
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setTourData({ ...tourData, [name]: value });
  };

  const handleSubmit =async(event) => {
    event.preventDefault();
    // Send the tourData to your backend for processing and storage
    // You may use Axios or another library to make an HTTP POST request to your API.
    // Example: axios.post('/api/createTour', tourData);
    
       const sendData ={
           tourName :tourData.tourName,
           description :tourData.description,
           price:tourData.price,
           location :tourData.location,
           startDate:tourData.startDate,
           endDate :tourData.endDate,
           guideName :tourData.guideName,
           guideEmail:tourData.guideEmail,
           capacity :tourData.capacity
       }
       console.log("hi");
       console.log(sendData);
       await axios.post("http://localhost/php-react/tourist/api/create_tour.php",sendData)
        .then((result)=>{
            console.log(result)
            if(result.data.status === "Invalid")
            {
                setError("Error ! Can't create Package");
               
             } else{
               
                setSuccess("Package Created Successfully");
                setTourData ({
                tourName: '',
                description: '',
                location: '',
                startDate: '',
                endDate: '',
                guideName:'',
                guideEmail:'',
                price:0,
                capacity:0
            });
            }
       })
  };

  return (
    <div >
        <Header/>
        <p style={errorStyle}>{error}</p> <p style={successStyle}>{success}</p> 
        <div className="event-management">
        
          <form onSubmit={handleSubmit}>
            <div className="row">
                <div className="col-md-12 text-center"><h2>Create Tour Package</h2></div>
            </div>
            <div className="row">
                <div className="col-md-5">Tour Name</div>
                <div className="col-md-7">
                    
                    <input
                        type="text"
                        name="tourName"
                        value={tourData.tourName}
                        onChange={handleInputChange}
                        className="form-control"
                        required
                    />
                </div>
            </div>
            <div className="row">
                <div className="col-md-5">Description</div>
                <div className="col-md-7">
                <textarea
                    name="description"
                    value={tourData.description}
                    onChange={handleInputChange}
                    className="form-control"
                    required
                />
                </div>
            </div>
            <div className="row">
                <div className="col-md-5">Price</div>
                <div className="col-md-7">
                <input
                    type="number"
                    name="price"
                    value={tourData.price}
                    onChange={handleInputChange}
                    className="form-control"
                    required
                />
                </div>
            </div>
            <br/>
            <div className="row">
                <div className="col-md-5">Location</div>
                <div className="col-md-7">       
                <input
                    type="text"
                    name="location"
                    value={tourData.location}
                    onChange={handleInputChange}
                    className="form-control"
                    required
                />
                </div>
            </div>
            <div className="row">
                <div className="col-md-5">Start Date</div>
                <div className="col-md-7">       
                <input
                    type="date"
                    name="startDate"
                    value={tourData.startDate}
                    onChange={handleInputChange}
                    className="form-control"
                    required
                />
                </div>
            </div>
            <div className="row">
                <div className="col-md-5">End Date</div>
                <div className="col-md-7">       
                <input
                    type="date"
                    name="endDate"
                    value={tourData.endDate}
                    onChange={handleInputChange}
                    className="form-control"
                    required
                />
                </div>
            </div>
            <div className="row">
                <div className="col-md-5">Guide name</div>
                <div className="col-md-7">       
                <input
                    type="text"
                    name="guideName"
                    value={tourData.guideName}
                    onChange={handleInputChange}
                    className="form-control"
                />
                </div>
            </div>
            <div className="row">
                <div className="col-md-5">Guide Email</div>
                <div className="col-md-7">       
                <input
                    type="text"
                    name="guideEmail"
                    value={tourData.guideEmail}
                    onChange={handleInputChange}
                    className="form-control"
                />
                </div>
            </div>
            <div className="row">
                <div className="col-md-5">Capacity</div>
                <div className="col-md-7">
                <input
                    type="number"
                    name="capacity"
                    value={tourData.capacity}
                    onChange={handleInputChange}
                    className="form-control"
                    required
                />
                </div>
            </div>
            <br/>
            <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-10">
                    <input type="submit" name="submit" value="Create" className="btn btn-success"/>
                </div>
            </div>
         </form>
         <div className="row">
                <div className="col-md-12 text-center"><h2>Available Tour Packages</h2></div>
            </div>
         <div className="event-list">
        {packages.map((package1) => (
          <div key={package1.id} className="event-card">
            <h3>{package1.tour_name}</h3>
            <div class="place-img">
                               <img src={service1} />
                            </div>
            <p>Description: {package1.description}</p>
            <p>Price: {package1.price}</p>
            <p>Location: {package1.location}</p>
            <p>Start Date: {package1.start_date} - End Date: {package1.end_date}</p>
            <button>Edit</button>
            <button >Delete</button>
          </div>
        ))}
      </div> 
     {/*  <div class="col-xl-4 col-lg-4 col-md-6">
                        <div class="single-place mb-30">
                            <div class="place-img">
                               <img src={service1} />
                            </div>
                            <div class="place-cap">
                                <div class="place-cap-top">
                                    <span><i class="fas fa-star"></i><span>8.0 Superb</span> </span>
                                    <h3><a href="#">The Dark Forest Adventure</a></h3>
                                    <p class="dolor">$1870 <span>/ Per Person</span></p>
                                </div>
                                <div class="place-cap-bottom">
                                    <ul>
                                        <li><i class="far fa-clock"></i>3 Days</li>
                                        <li><i class="fas fa-map-marker-alt"></i>Los Angeles</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>  */}
      </div>  
      {/* Event List */}
      
      
    <Footer/>
    </div>
  );
}

export default CreateTour;
