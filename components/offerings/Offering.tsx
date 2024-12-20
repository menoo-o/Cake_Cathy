import Image from 'next/image';
import './offering.css';

export default function Offering() {
  const offerings = [

    {
    //   ready to go cakes
        id: 1,
        src: '/cakes.png',
        title: 'Ready to go cakes',
        description: 'Try our ready-to-go cakes',
    },

    {
        // custom cakes
        id: 2,
        src: '/cake1.png',
        title: 'Custom Cakes',
        description: 'Explore our Made For You range to create a memory with us through a custom cake.',
    },

    {
        // cupcakes
        id: 3,
        src: '/cupcakes.png',
        title: 'Cupcakes',
        description: 'Delicious cupcakes in various flavors',
    },

    {
        // brownies
        id: 4,
        src: '/Deli.png',
        title: 'Cupcakes',
        description: 'Delicious cupcakes in various flavors',
      },

    {
        // cakepops
        id: 5,
        src: '/cupcakes.png',
        title: 'Cupcakes',
        description: 'Delicious cupcakes in various flavors',
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
                width={300}
                height={300}
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
