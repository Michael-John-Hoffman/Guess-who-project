import React, { Component}  from 'react';
import Image from 'react-image-resizer';

import girl1 from "../photos/girl1.jpg"
import girl2 from "../photos/girl2.jpeg"
import girl3 from "../photos/girl3.jpeg"
import girl4 from "../photos/girl4.jpeg"
import girl5 from "../photos/girl5.jpeg"
import girl6 from "../photos/girl6.jpeg"
import girl7 from "../photos/girl7.jpeg"
import girl8 from "../photos/girl8.jpeg"
import guy1 from "../photos/guy1.jpeg"
import guy2 from "../photos/guy2.jpeg"
import guy3 from "../photos/guy3.jpeg"
import guy4 from "../photos/guy4.jpeg"
import guy5 from "../photos/guy5.jpeg"
import guy6 from "../photos/guy6.jpeg"
import guy7 from "../photos/guy7.jpeg"
import guy8 from "../photos/guy8.jpg"


export default   [
    {
    id: "1",
    img: <img src ={girl1} height={125} width={125}/>,
    hair: 'red',
    glasses: false,
    smile: false,
    hat: false
  },
  {
    id: "2",
    img: <img src ={girl2} height={125} width={125} />,
    hair: 'blonde',
    glasses: false,
    smile: true,
    hat: false
  },
  {
    id: "3",
    img: <img src ={girl3} height={125} width={125}/>,
    hair: 'brown',
    glasses: false,
    smile: true,
    hat: false
  },
  {
    id: "4",
    img: <img src ={girl4} height={125} width={125}/>,
    hair: 'blonde',
    glasses: false,
    smile: false,
    hat: false
  },
  {
    id: "5",
    img: <img src ={girl5} height={125} width={125}/>,
    hair: 'blonde',
    glasses: false,
    smile: true,
    hat: true
  },
  {
    id: "6",
    img: <img src ={girl6} height={125} width={125}/>,
    hair: 'blonde',
    glasses: false,
    smile: true,
    hat: true
  },
  {
    id: "7",
    img: <img src ={girl7} height={125} width={125}/>,
    hair: 'blonde',
    glasses: false,
    smile: true,
    hat: false
  },
  {
    id: "8",
    img: <img src ={girl8} height={125} width={125}/>,
    hair: 'black',
    glasses: true,
    smile: false,
    hat: false
  },
  {
    id: "9",
    img: <img src ={guy1} height={125} width={125}/>,
    hair: 'black',
    glasses: false,
    smile: false,
    hat: false
  },
  {
    id: "10",
    img: <img src ={guy2} height={125} width={125}/>,
    hair: 'brown',
    glasses: false,
    smile: true,
    hat: false
  },
  {
    id: "11",
    img: <img src ={guy3} height={125} width={125}/>,
    hair: 'black',
    glasses: true,
    smile: false,
    hat: true
  },
  {
    id: "12",
    img: <img src ={guy4} height={125} width={125}/>,
    hair: 'black',
    glasses: false,
    smile: false,
    hat: false
  },
  {
    id: "13",
    img: <img src ={guy5} height={125} width={125}/>,
    hair: 'black',
    glasses: false,
    smile: false,
    hat: true
  },
  {
    id: "14",
    img: <img src ={guy6} height={125} width={125}/>,
    hair: 'black',
    glasses: false,
    smile: true,
    hat: false
  },
  {
    id: "15",
    img: <img src ={guy7} height={125} width={125}/>,
    hair: 'black',
    glasses: true,
    smile: true,
    hat: true
  },
  {
    id: "16",
    img: <img src ={guy8} height={125} width={125}/>,
    hair: 'bald',
    glasses: false,
    smile: true,
    hat: false
  },
  ]

  //make a function that takes a type, then returns a filter based off of that.