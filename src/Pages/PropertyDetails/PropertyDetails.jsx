import React, { use, useEffect, useState } from "react";
import { useParams } from "react-router";
import { AuthContext } from "../../Contexts/AuthContext";
import Swal from "sweetalert2";

const PropertyDetails = () => {
  const { id } = useParams();
  const { user } = use(AuthContext);
  const [property, setProperty] = useState({});
  const [rating, setRating] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/properties/${id}`)
      .then((res) => res.json())
      .then((data) => setProperty(data));

    fetch(`http://localhost:3000/ratings/${id}`)
      .then((res) => res.json())
      .then((data) => setRating(data));
  }, [id]);

  const handleAddRating = (e) => {
    e.preventDefault();
    const ratingInfo = {
      propertyId:id,
      propertyName: property.propertyName,
      propertyImage: property.image,
      userEmail: user?.email,
      userName: user?.displayName,
      userPhoto: user?.photoURL,
      rating: e.target.rating.value,
      review: e.target.review.value,
      date: new Date().toISOString(),
    };
    fetch("http://localhost:3000/ratings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(ratingInfo),
    })
      .then((res) => res.json())
      .then(() => {
        setRating([...rating,ratingInfo])
        Swal.fire("Review Added ✅", "Thanks for your feedback!", "success");
        e.target.reset();
      });
  };
  return (
    <div className="max-w-5xl mx-auto py-10">
      <img
        src={property.image}
        alt=""
        className="w-full h-[450px] rounded-md object-cover"
      />
      <h1 className="text-4xl font-bold mt-6">{property.propertyName}</h1>
      <p className="text-gray-600 my-5 loading-7 font-medium">
        {property.description}
      </p>
      <div className="flex gap-10 text-lg font-semibold mt-4">
        <p> 📍 {property.location}</p>
        <p className="font-bold"> 💰 ${property.price}</p>
        <p> 🏷 Category : {property.category}</p>
        <p> Posted On : {new Date(property.postedDate).toLocaleDateString()}</p>
      </div>
      <div className="flex items-center gap-2 my-5">
        <div>
          <img
            className="w-15 h-15 rounded-full"
            src={property.postedBy?.photo}
            alt="user photo"
          />
        </div>
        <div className="">
          <p className="text-lg font-medium text-gray-600">
            {property.postedBy?.name}
          </p>
          <p className="text-sm text-gray-600">{property.postedBy?.email}</p>
        </div>
      </div>
        <h3 className="text-3xl font-bold mb-4 text-center">Ratings & Reviews</h3>

        {
          rating.length===0 ? (
            <p className="text-xl text-gray-600">No reviews yet.</p>
          ):(
            <div className="space-y-4">
           {
            rating.slice(0,3).map((r,index)=>(
              <div key={index} className="border p-4 rounded-lg bg-white shadow-md flex gap-4 items-start">
               <div>
                <img src={r.userPhoto} alt={r.userName} 
                 className="w-12 h-12 rounded-full"
                />
               </div>
               <div>
               <p className="font-semibold">{r.userName}</p>
               <p className="text-[#FF5A3C] font-bold"> ⭐ {r.rating}/5</p>
               <p className="text-gray-700">
                   {r.review.slice(0,70)+("...")}
               </p>
               <p className="text-sm text-gray-500">
                 Date :  {new Date(r.date).toLocaleDateString()}
               </p>
               </div>
              </div>
            ))
           }
            </div>
          )
        }
        
      <div className="mt-12 bg-white rounded-lg shadow-xl border-2 border-gray-300 p-10">
        <form onSubmit={handleAddRating} className="space-y-5">
          <h3 className="text-2xl font-bold mb-4 text-center">Rate This Propert</h3>
            <label className="text-xl font-semibold">Choose Rating</label>
          <select
            name="rating"
            className="select select-bordered w-full my-3"
            required
          >
            <option value="">Choose Rating</option>
            <option value="5">⭐ 5 (Excellent)</option>
            <option value="4">⭐ 4 (Good)</option>
            <option value="3">⭐ 3 (Avarage)</option>
            <option value="2">⭐ 2 (Poor)</option>
            <option value="1">⭐ 1 (Vary Bad)</option>
          </select>
          <label className="text-xl font-semibold">Review Now</label>
          <textarea
            name="review"
            className="textarea textarea-bordered w-full mt-4"
            placeholder="write a short review ..."
            required
          ></textarea>

          <button className="btn bg-[#FF5A3C] hover:bg-[#e24a30] text-white w-full ">Submit Review</button>
        </form>
      </div>
    </div>
  );
};

export default PropertyDetails;
