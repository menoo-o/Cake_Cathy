import './location.css'
import Link from 'next/link';
import Image from 'next/image';

export default function Location() {
    return (
      <>
       <main>
       <div className="location-container">
        {/* for desktop- this will appear in the left block */}
         <div className='left-part'>
            <h3>Looking for us?</h3> <br />
            {/* add a more to this */}
            <p>
            Pink cake shop in the heart of Aigburth. <br />
            <strong>Wednesday to Friday:</strong> 9am - 3pm <br />
            <strong>Weekends:</strong> 9am - 2pm
          </p> 
            <h4>
                <Link href='https://www.google.com/maps/uv?pb=!1s0x487b21030308fe9b%3A0x7acf423480c6de62!3m1!7e115!4s%2Fmaps%2Fplace%2Fcatherine%2Bbraidy%2Bliverpool%2F%4053.375535%2C-2.9403034%2C3a%2C75y%2C226.19h%2C90t%2Fdata%3D*213m4*211e1*213m2*211swE2qkaRvaL9urjSxMGyETQ*212e0*214m2*213m1*211s0x487b21030308fe9b%3A0x7acf423480c6de62%3Fsa%3DX%26ved%3D2ahUKEwjTkOvl4bWKAxWezwIHHYVqDUwQpx96BAgUEAA!5scatherine%20braidy%20liverpool%20-%20Google%20Search!15sCgIgAQ&imagekey=!1e2!2swE2qkaRvaL9urjSxMGyETQ&cr=le_a7&hl=en&ved=1t%3A206134&ictx=111' target='_blank'>Visit our Shop</Link>
            </h4>
         </div>
            {/* this will appear in the right block */}
          <div className='right-part'>
            <Image src='/shop.jpg'
                    alt='shop imgage'
                    width={550}
                    height={450}
                    className='shop-img'
            />      
          </div>
         
        </div>
       </main>
      </>
    );
  }
  