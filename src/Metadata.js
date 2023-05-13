import photo1 from './photos/atyxima.jpg'
import photo2 from './photos/atyxima2.jpg'
import photo3 from './photos/istanbul3.jpg'
import photo4 from './photos/war.jpg'
import photo5 from './photos/Tsitsipas.jpg'
import photo6 from './photos/tempi.webp'


const photos = [
    {
      id: 1,
      image: photo1,
      alt: 'Accident with bus in Thessaloniki',
      metadata: {
        date: 'April 21, 2023',
        location: 'Thessaloniki',
        creator: 'Dionisis Papadakis',
        signature: 'C2PA',
        coordinates1: '40.617656',
        coordinates2: '22.962838',
        mapsSrc: 'https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3028.554316580786!2d22.95796708586139!3d40.6176558976856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDDCsDM3JzAzLjYiTiAyMsKwNTcnNDYuMiJF!5e0!3m2!1sel!2sgr!4v1684005317661!5m2!1sel!2sgr'     
      }
    },
    {
      id: 2,
      image: photo2,
      alt: 'Car accident in Athens',
      metadata: {
        date: 'May 14, 2023',
        location: 'Athens, Greece',
        creator: 'Jane Smith',
        signature: 'C2PA',
        coordinates1: '38.043412',
        coordinates2: '23.775031',
        mapsSrc: 'https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3142.157686498233!2d23.772456075886705!3d38.04341197191895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzjCsDAyJzM2LjMiTiAyM8KwNDYnMzAuMSJF!5e0!3m2!1sel!2sgr!4v1684005474453!5m2!1sel!2sgr'
      }
    },
    {
        id: 3,
        image: photo3,
        alt: 'Erdogans speech in Instanbul',
        metadata: {
          date: 'May 14, 2023',
          location: 'Instambul, Turkey',
          creator: 'Mesut Ozil',
          signature: 'C2PA',
          coordinates1: '41.025511',
          coordinates2: '28.973197',
          mapsSrc: 'https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3009.988343149051!2d28.97062207603233!3d41.025510971348126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDHCsDAxJzMxLjgiTiAyOMKwNTgnMjMuNSJF!5e0!3m2!1sel!2sgr!4v1684005445686!5m2!1sel!2sgr'
        }
      },
      {
        id: 4,
        image: photo4,
        alt: "Lawmakers seek emergency powers for Pentagon's Ukraine war contracting",
        metadata: {
          date: 'Oct 18, 2022',
          location: 'Ukraine',
          creator: 'Jack Reed',
          signature: 'C2PA',
          coordinates1: '47.877991',
          coordinates2: '34.383178',
          mapsSrc: 'https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2676.017368229984!2d34.38060307640024!3d47.87799097121598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDfCsDUyJzQwLjgiTiAzNMKwMjInNTkuNCJF!5e0!3m2!1sel!2sgr!4v1684005398999!5m2!1sel!2sgr'
        }
      },
      {
        id: 5,
        image: photo5,
        alt: "Tsitsipas' game had to be postoponed because of the rain. ",
        metadata: {
          date: 'May 13, 2023',
          location: 'Rome, Italia',
          creator: 'Bob, Photographer',
          signature: 'C2PA',
          coordinates1: '41.929272',
          coordinates2: '12.455483',
          mapsSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d566.73643572792!2d12.455360216732911!3d41.929314900450706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f6095dd531f59%3A0x41213d2365ce50f5!2sStadio%20Nicola%20Pietrangeli!5e0!3m2!1sel!2sgr!4v1684006501356!5m2!1sel!2sgr'
        }
      },
      {
        id: 6,
        image: photo6,
        alt: "Train crash in Tempi, Greece",
        metadata: {
          date: 'Feb 28, 2023',
          location: 'Tempi, Greece',
          creator: 'BBC',
          signature: 'C2PA',
          coordinates1: '39.939248',
          coordinates2: '22.659620',
          mapsSrc: 'https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3059.095748308373!2d22.654749085633522!3d39.939247898087764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMznCsDU2JzIxLjMiTiAyMsKwMzknMzQuNiJF!5e0!3m2!1sel!2sgr!4v1684007081627!5m2!1sel!2sgr'
        }
      },
  ];

  export default photos;