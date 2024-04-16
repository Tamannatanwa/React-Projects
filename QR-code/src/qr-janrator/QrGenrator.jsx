import React from 'react';
import QRCode from "react-qr-code";

const QrGenrator = () => {
  const [qrCode,setQrCode] = React.useState('');
  const [input,setInput] = React.useState('');
  const handleGenrateQrCode = ()=>{
    setQrCode(input);
    setInput("");
  }
  return (
    <div>
      <h1>
      QR Code Genrator
      </h1>
      <div>
        <input onChange={(e)=>setInput(e.target.value)} type="text" name="qr-code" placeholder="Enter your value here" value={input}/>
        <button disabled={input && input.trim()!==""?false:true } onClick={handleGenrateQrCode}>Generate</button>
      </div>
      <div>
        <QRCode id="qr-code-value" value={qrCode} size={400} bgColor="#fff"/>
      </div>
    </div>
  )
}

export default QrGenrator;
