import { useState } from "react";

const OtpPanel = (props) => {
  const [otp, setOtp] = useState("");

  return (
    <div className="fixed inset-0 z-50 bg-white flex flex-col">
      {/* Header */}
      <header className="shrink-0 px-4 py-3 border-b">
        <h2 className="text-xl font-semibold text-center text-gray-900">
          Verify Ride OTP
        </h2>
        <p className="text-sm text-center text-gray-500 mt-1">
          Ask the rider for the 4-digit OTP to start the ride
        </p>
      </header>

      {/* Content */}
      <main className="flex-1 px-4 py-6 flex flex-col items-center justify-center">
        <div className="w-full max-w-md space-y-6">
          {/* Rider Info */}
          <div className="bg-gray-50 rounded-xl p-4 flex items-center gap-3">
            <div className="h-12 w-12 rounded-full bg-gray-300 flex items-center justify-center font-semibold text-gray-700">
              R
            </div>
            <div>
              <p className="font-medium text-gray-900">Rahul Verma</p>
              <p className="text-sm text-gray-500">Pickup OTP</p>
            </div>
          </div>

          {/* OTP Input */}
          <input
            type="text"
            inputMode="numeric"
            maxLength={4}
            value={otp}
            onChange={(e) =>
              setOtp(e.target.value.replace(/\D/g, ""))
            }
            placeholder="Enter 4-digit OTP"
            className="w-full text-center text-2xl tracking-widest py-4 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          {/* Helper text */}
          <p className="text-xs text-gray-500 text-center">
            Do not start the ride unless the OTP matches the rider’s app
          </p>
        </div>
      </main>

      {/* Bottom Action */}
      <footer className="shrink-0 px-4 py-3 border-t bg-white">
        <button onClick={()=>{
            props.setOtpPanel(false);
            props.setRideAcceptedPanel(true);
        }}
          disabled={otp.length !== 4}
          className={`w-full max-w-md mx-auto block py-4 rounded-2xl text-lg font-semibold transition-colors ${
            otp.length === 4
              ? "bg-green-600 text-white hover:bg-green-700"
              : "bg-gray-200 text-gray-400 cursor-not-allowed"
          }`}
        >
          Confirm & Start Ride
        </button>
      </footer>
    </div>
  );
};

export default OtpPanel;
