// import React, { useState, useRef } from 'react';
// import './otp.css';  

// export default function OTPVerification() {
//   const [otp, setOtp] = useState(new Array(6).fill(''));
//   const [isResending, setIsResending] = useState(false);
//   const inputRefs = useRef([]);

//   const handleChange = (element, index) => {
//     const value = element.value;
//     if (isNaN(Number(value))) return false;

//     const newOtp = [...otp];
//     newOtp[index] = value;
//     setOtp(newOtp);

//     if (value && index < 5) {
//       inputRefs.current[index + 1]?.focus();
//     }
//   };

//   const handleKeyDown = (e, index) => {
//     if (e.key === 'Backspace' && !otp[index] && index > 0) {
//       inputRefs.current[index - 1]?.focus();
//     }
//   };

//   const handleResendOTP = async () => {
//     setIsResending(true);
//     await new Promise(resolve => setTimeout(resolve, 1000));
//     setIsResending(false);
//   };

//   const handleVerify = () => {
//     const otpValue = otp.join('');
//     if (otpValue.length === 6) {
//       console.log('Verifying OTP:', otpValue);
//     }
//   };

//   return (
//     <div className="container">
//       <div className="leftSide">
//         <div className="brandText">CRICAUCTION</div>
//       </div>
//       <div className="rightSide">
//         <div className="formContainer">
//           <h1 className="title">Enter OTP</h1>
//           <p className="subtitle">
//             An One time password (OTP) was sent to you via email
//           </p>
//           <div className="inputContainer">
//             {otp.map((digit, index) => (
//               <input
//                 key={index}
//                 ref={(ref) => inputRefs.current[index] = ref}
//                 className="input"
//                 style={{
//                   borderColor: digit ? '#3b82f6' : 'rgba(59, 130, 246, 0.3)',
//                 }}
//                 type="text"
//                 inputMode="numeric"
//                 maxLength={1}
//                 value={digit}
//                 onChange={(e) => handleChange(e.target, index)}
//                 onKeyDown={(e) => handleKeyDown(e, index)}
//                 aria-label={`OTP digit ${index + 1}`}
//               />
//             ))}
//           </div>
//           <button 
//             onClick={handleVerify}
//             className="verifyButton"
//             style={{
//               opacity: otp.some(digit => !digit) ? 0.7 : 1,
//             }}
//             disabled={otp.some(digit => !digit)}
//           >
//             Verify
//           </button>
//           <div className="resendContainer">
//             <span className="resendText">Did not receive an OTP?</span>
//             <button
//               onClick={handleResendOTP}
//               disabled={isResending}
//               className="resendButton"
//               style={{
//                 opacity: isResending ? 0.5 : 1,
//               }}
//             >
//               Resend OTP
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useState, useRef } from 'react';
import './otp.css';

export default function OTPVerification() {
  const [otp, setOtp] = useState(new Array(6).fill(''));
  const [isResending, setIsResending] = useState(false);
  const inputRefs = useRef([]);

  const handleChange = (element, index) => {
    const value = element.value;
    if (isNaN(Number(value))) return false;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleResendOTP = async () => {
    setIsResending(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsResending(false);
  };

  const handleVerify = () => {
    const otpValue = otp.join('');
    if (otpValue.length === 6) {
      console.log('Verifying OTP:', otpValue);
    }
  };

  return (
    <div className="container">
      <div className="leftSide">
        <div className="brandText">CRICAUCTION</div>
      </div>
      <div className="rightSide">
        <div className="formContainer">
          <h1 className="title">Enter OTP</h1>
          <p className="subtitle">
            An One time password (OTP) was sent to you via email
          </p>
          <div className="inputContainer">
            {otp.map((digit, index) => (
              <input
                key={index}
                ref={(ref) => inputRefs.current[index] = ref}
                className="input"
                style={{
                  borderColor: digit ? '#3b82f6' : 'rgba(59, 130, 246, 0.3)',
                }}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(e.target, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                aria-label={`OTP digit ${index + 1}`}
              />
            ))}
          </div>
          <button 
            onClick={handleVerify}
            className="verifyButton"
            style={{
              opacity: otp.some(digit => !digit) ? 0.7 : 1,
            }}
            disabled={otp.some(digit => !digit)}
          >
            Verify
          </button>
          <div className="resendContainer">
            <span className="resendText">Did not receive an OTP?</span>
            <button
              onClick={handleResendOTP}
              disabled={isResending}
              className="resendButton"
              style={{
                opacity: isResending ? 0.5 : 1,
              }}
            >
              Resend OTP
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

