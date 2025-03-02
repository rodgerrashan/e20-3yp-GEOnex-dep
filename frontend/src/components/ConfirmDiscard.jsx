import React, { useContext } from "react";
import { Context } from "../context/Context";
import { assets } from "../assets/assets";
import { toast } from "react-toastify";

const ConfirmDiscard = ({ projectId }) => {
  const { setShowConfirmDiscard, points, deletePoint } = useContext(Context);

  const handleDiscard = async () => {
    if (points.length === 0) {
      toast.error("No recorded point to discard.");
      setShowConfirmDiscard(false);
      return;
    }
    // Get the last recorded point
    const lastPoint = points[points.length - 1];
    await deletePoint(projectId, lastPoint._id);
    setShowConfirmDiscard(false);
  };

  return (
    <div>
      <div className="bg-white p-2 rounded-2xl shadow-lg w-[280px] text-center">
        <h2 className="text-lg font-bold text-red-500">Confirm Action</h2>

        {/* Divider */}
        <div className="border-t border-black my-3"></div>

        <p className="text-gray-700 text-sm mt-2">
          Do you want to discard the last point data? This action cannot be
          undone.
        </p>

        {/* Displayed Point Name */}
        <div className="mt-3 font-bold text-lg flex items-center justify-center gap-2">
          <img src={assets.device} alt="" className="w-5 h-5" />
          <span className="text-black">
            {points.length > 0 ? points[points.length - 1].Name : "No Point"}
          </span>
        </div>

        {/* Buttons */}
        <div className="mt-4 px-4 flex flex-col gap-2">
          {/* Yes, Discard */}
          <button
            className="border border-red-500 text-red-500 p-1 rounded-xl hover:bg-red-500 hover:text-white transition text-sm"
            onClick={handleDiscard}
          >
            Yes, Discard
          </button>

          {/* No, Keep It */}
          <button
            className="border border-black p-1 rounded-xl bg-black text-white mb-2 text-sm"
            onClick={() => setShowConfirmDiscard(false)}
          >
            No, Keep It
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDiscard;
