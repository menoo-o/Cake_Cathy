import Image from 'next/image';
import './sketch.css';

export default function Sketch() {
  return (
    <>
      <div className="sketch-container">
        <Image 
          src="/footer.jpeg" 
          alt="Sketch Image" 
          width={700} 
          height={500} 

        />
      </div>
    </>
  );
}
