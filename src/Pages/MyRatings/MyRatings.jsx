import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../../Contexts/AuthContext";
import { FaStar } from "react-icons/fa6";

const MyRatings = () => {
  const { user } = use(AuthContext);
  const [myRatings, setMyRatings] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/my-ratings?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setMyRatings(data));
  }, [user]);
  return (
    <div className="w-11/12 mx-auto py-14">
      <h1 className="text-4xl font-bold text-center mb-10">
        My <span className="text-[#FF5A3C]">Ratings & Reviews</span>
      </h1>
      {myRatings.length === 0 && (
        <p className="text-center text-gray-500 text-lg">
          You haven't rated any property yet.
        </p>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {myRatings.map((r, index) => (
          <div
            key={index}
            className="bg-white shadow-xl border border-gray-100 rounded-xl p-5 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
          >
            <div className="w-full h-44 rounded-lg overflow-hidden mb-4">
              <img
                src={r.propertyImage}
                alt="image"
                className="w-full h-full object-cover hover:scale-110 transition duration-300"
              />
            </div>
            <h2 className="text-xl font-bold text-[#1f1f1f]">
              {r.propertyName}
            </h2>
            <div className="flex items-center gap-2 mt-2 text-yellow-500">
              {[...Array(parseInt(r.rating))].map((_, i) => (
                <FaStar key={i} />
              ))}
              <span className="text-black font-medium text-xl">
                {r.rating}/5
              </span>
            </div>
            <p className="text-gray-700 mt-3 italic">"{r.review.slice(0,100)+("...")}"</p>

            <div className="flex items-center gap-3 mt-4">
              <img
                src={r.userPhoto}
                className="w-10 h-10 rounded-full border"
              />
              <div>
                <p className="font-medium">{r.userName}</p>
                <p className="text-xs text-gray-500">
                  {new Date(r.date).toLocaleDateString()}
                </p>
              </div>
            </div>
            <span className="inline-block mt-4 px-4 py-1 text-sm font-medium rounded-full bg-[#FF5A3C]/10 text-[#FF5A3C]">
              Reviewed Property
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyRatings;
