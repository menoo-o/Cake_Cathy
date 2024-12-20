import Image from 'next/image';
import './offering.css';

export default function Offering() {
  const offerings = [

    {
    //   ready to go cakes
        id: 1,
        src: '/offerings/ready_cake.jpg',
        title: 'Ready to go cakes',
        description: 'Try our ready-to-go cakes',
    },

    {
        // custom cakes
        id: 2,
        src: '/offerings/cake_pops.jpg',
        title: 'Delicious Treats',
        description: 'Bite-sized bliss! Explore our variety of sweet treats',
    },

    {
        // cupcakes
        id: 3,
        src: '/offerings/custom.webp',
        title: 'Custom Cakes',
        description: "Dream it, we'll bake it!",
    },


  ];

  return (
    <>
      <main className="offering-container">
        <div className="heading">Our Offerings</div>
        <div className="inside-container">
          {offerings.map((offering) => (
            <div key={offering.id} className="card">
              <Image 
                src={offering.src}
                alt={offering.title}
                width={400}
                height={400}
              />
              <h3>{offering.title}</h3>
              <p>{offering.description}</p>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
