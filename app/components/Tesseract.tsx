export default function Tesseract() {
  return (
    <div className="tesseract">
      <div className="tesseract-inner">
        {/* Outer cube */}
        <div className="face face-front"></div>
        <div className="face face-back"></div>
        <div className="face face-right"></div>
        <div className="face face-left"></div>
        <div className="face face-top"></div>
        <div className="face face-bottom"></div>
        
        {/* Inner cube */}
        <div className="face face-inner-front"></div>
        <div className="face face-inner-back"></div>
        <div className="face face-inner-right"></div>
        <div className="face face-inner-left"></div>
        <div className="face face-inner-top"></div>
        <div className="face face-inner-bottom"></div>
      </div>
    </div>
  );
} 