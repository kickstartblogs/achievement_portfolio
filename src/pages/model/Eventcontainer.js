import React from "react";
import Eventmaker from "./Eventmaker";

let arr = [
  {
    Number: 1,
    Title: "National Softball Tournament",
    Desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut temporibus maxime deserunt, quam totam asperiores illum ipsum beatae, reprehenderit ipsa unde odit omnis voluptas esse minima! Deleniti nesciunt molestiae aliquid odit eius, sit, asperiores minima veniam sequi alias, consequuntur aliquam nostrum. Tempora perspiciatis necessitatibus nisi, aliquid officia molestiae fugit tenetur",
    img: "./certificates/2.png",
  },
  {
    Number: 2,
    Title: "Handball(National)",
    Desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut temporibus maxime deserunt, quam totam asperiores illum ipsum beatae, reprehenderit ipsa unde odit omnis voluptas esse minima! Deleniti nesciunt molestiae aliquid odit eius, sit, asperiores minima veniam sequi alias, consequuntur aliquam nostrum. Tempora perspiciatis necessitatibus nisi, aliquid officia molestiae fugit tenetur",
    img: "./certificates/3.png",
  },
  {
    Number: 3,
    Title: "Softball(States)",
    Desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut temporibus maxime deserunt, quam totam asperiores illum ipsum beatae, reprehenderit ipsa unde odit omnis voluptas esse minima! Deleniti nesciunt molestiae aliquid odit eius, sit, asperiores minima veniam sequi alias, consequuntur aliquam nostrum. Tempora perspiciatis necessitatibus nisi, aliquid officia molestiae fugit tenetur",
    img: "./certificates/1.png",
  },
  {
    Number: 4,
    Title: "Handball(States)",
    Desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut temporibus maxime deserunt, quam totam asperiores illum ipsum beatae, reprehenderit ipsa unde odit omnis voluptas esse minima! Deleniti nesciunt molestiae aliquid odit eius, sit, asperiores minima veniam sequi alias, consequuntur aliquam nostrum. Tempora perspiciatis necessitatibus nisi, aliquid officia molestiae fugit tenetur",
    img: "./certificates/6.png",
  },
  {
    Number: 11,
    Title: "TSMUN",
    Desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut temporibus maxime deserunt, quam totam asperiores illum ipsum beatae, reprehenderit ipsa unde odit omnis voluptas esse minima! Deleniti nesciunt molestiae aliquid odit eius, sit, asperiores minima veniam sequi alias, consequuntur aliquam nostrum. Tempora perspiciatis necessitatibus nisi, aliquid officia molestiae fugit tenetur",
    img: "./certificates/11.png",
  },
  {
    Number: 13,
    Title: "Bhopal Youth Summit",
    Desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut temporibus maxime deserunt, quam totam asperiores illum ipsum beatae, reprehenderit ipsa unde odit omnis voluptas esse minima! Deleniti nesciunt molestiae aliquid odit eius, sit, asperiores minima veniam sequi alias, consequuntur aliquam nostrum. Tempora perspiciatis necessitatibus nisi, aliquid officia molestiae fugit tenetur",
    img: "./certificates/13.png",
  },
  {
    Number: 18,
    Title: "Best Orator",
    Desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut temporibus maxime deserunt, quam totam asperiores illum ipsum beatae, reprehenderit ipsa unde odit omnis voluptas esse minima! Deleniti nesciunt molestiae aliquid odit eius, sit, asperiores minima veniam sequi alias, consequuntur aliquam nostrum. Tempora perspiciatis necessitatibus nisi, aliquid officia molestiae fugit tenetur",
    img: "./certificates/19.png",
  },
  {
    Number: 5,
    Title: "Inter School Compitition",
    Desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut temporibus maxime deserunt, quam totam asperiores illum ipsum beatae, reprehenderit ipsa unde odit omnis voluptas esse minima! Deleniti nesciunt molestiae aliquid odit eius, sit, asperiores minima veniam sequi alias, consequuntur aliquam nostrum. Tempora perspiciatis necessitatibus nisi, aliquid officia molestiae fugit tenetur",
    img: "./certificates/4.png",
  },
  {
    Number: 6,
    Title: "Wordsmith Certificate of Participation",
    Desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut temporibus maxime deserunt, quam totam asperiores illum ipsum beatae, reprehenderit ipsa unde odit omnis voluptas esse minima! Deleniti nesciunt molestiae aliquid odit eius, sit, asperiores minima veniam sequi alias, consequuntur aliquam nostrum. Tempora perspiciatis necessitatibus nisi, aliquid officia molestiae fugit tenetur",
    img: "./certificates/5.png",
  },
  {
    Number: 7,
    Title: "High Standard of Excellence in Sport",
    Desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut temporibus maxime deserunt, quam totam asperiores illum ipsum beatae, reprehenderit ipsa unde odit omnis voluptas esse minima! Deleniti nesciunt molestiae aliquid odit eius, sit, asperiores minima veniam sequi alias, consequuntur aliquam nostrum. Tempora perspiciatis necessitatibus nisi, aliquid officia molestiae fugit tenetur",
    img: "./certificates/7.png",
  },
  {
    Number: 8,
    Title: "Tech Fest(FIFA)",
    Desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut temporibus maxime deserunt, quam totam asperiores illum ipsum beatae, reprehenderit ipsa unde odit omnis voluptas esse minima! Deleniti nesciunt molestiae aliquid odit eius, sit, asperiores minima veniam sequi alias, consequuntur aliquam nostrum. Tempora perspiciatis necessitatibus nisi, aliquid officia molestiae fugit tenetur",
    img: "./certificates/8.png",
  },
  {
    Number: 9,
    Title: "Inter School Football Tournament",
    Desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut temporibus maxime deserunt, quam totam asperiores illum ipsum beatae, reprehenderit ipsa unde odit omnis voluptas esse minima! Deleniti nesciunt molestiae aliquid odit eius, sit, asperiores minima veniam sequi alias, consequuntur aliquam nostrum. Tempora perspiciatis necessitatibus nisi, aliquid officia molestiae fugit tenetur",
    img: "./certificates/9.png",
  },
  {
    Number: 10,
    Title: "Painting Compitition",
    Desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut temporibus maxime deserunt, quam totam asperiores illum ipsum beatae, reprehenderit ipsa unde odit omnis voluptas esse minima! Deleniti nesciunt molestiae aliquid odit eius, sit, asperiores minima veniam sequi alias, consequuntur aliquam nostrum. Tempora perspiciatis necessitatibus nisi, aliquid officia molestiae fugit tenetur",
    img: "./certificates/10.png",
  },
  {
    Number: 12,
    Title: "Spotania",
    Desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut temporibus maxime deserunt, quam totam asperiores illum ipsum beatae, reprehenderit ipsa unde odit omnis voluptas esse minima! Deleniti nesciunt molestiae aliquid odit eius, sit, asperiores minima veniam sequi alias, consequuntur aliquam nostrum. Tempora perspiciatis necessitatibus nisi, aliquid officia molestiae fugit tenetur",
    img: "./certificates/12.png",
  },
  {
    Number: 14,
    Title: "School Super League",
    Desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut temporibus maxime deserunt, quam totam asperiores illum ipsum beatae, reprehenderit ipsa unde odit omnis voluptas esse minima! Deleniti nesciunt molestiae aliquid odit eius, sit, asperiores minima veniam sequi alias, consequuntur aliquam nostrum. Tempora perspiciatis necessitatibus nisi, aliquid officia molestiae fugit tenetur",
    img: "./certificates/14.png",
  },
  {
    Number: 15,
    Title: "Sangarsh hi jeevan hai",
    Desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut temporibus maxime deserunt, quam totam asperiores illum ipsum beatae, reprehenderit ipsa unde odit omnis voluptas esse minima! Deleniti nesciunt molestiae aliquid odit eius, sit, asperiores minima veniam sequi alias, consequuntur aliquam nostrum. Tempora perspiciatis necessitatibus nisi, aliquid officia molestiae fugit tenetur",
    img: "./certificates/15.png",
  },
  {
    Number: 16,
    Title: "Speaker",
    Desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut temporibus maxime deserunt, quam totam asperiores illum ipsum beatae, reprehenderit ipsa unde odit omnis voluptas esse minima! Deleniti nesciunt molestiae aliquid odit eius, sit, asperiores minima veniam sequi alias, consequuntur aliquam nostrum. Tempora perspiciatis necessitatibus nisi, aliquid officia molestiae fugit tenetur",
    img: "./certificates/17.png",
  },
  {
    Number: 17,
    Title: "Singing",
    Desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut temporibus maxime deserunt, quam totam asperiores illum ipsum beatae, reprehenderit ipsa unde odit omnis voluptas esse minima! Deleniti nesciunt molestiae aliquid odit eius, sit, asperiores minima veniam sequi alias, consequuntur aliquam nostrum. Tempora perspiciatis necessitatibus nisi, aliquid officia molestiae fugit tenetur",
    img: "./certificates/18.png",
  },
  {
    Number: 19,
    Title: "Modeling",
    Desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut temporibus maxime deserunt, quam totam asperiores illum ipsum beatae, reprehenderit ipsa unde odit omnis voluptas esse minima! Deleniti nesciunt molestiae aliquid odit eius, sit, asperiores minima veniam sequi alias, consequuntur aliquam nostrum. Tempora perspiciatis necessitatibus nisi, aliquid officia molestiae fugit tenetur",
    img: "./certificates/20.png",
  },
  {
    Number: 20,
    Title: "Culture and Civilisation",
    Desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut temporibus maxime deserunt, quam totam asperiores illum ipsum beatae, reprehenderit ipsa unde odit omnis voluptas esse minima! Deleniti nesciunt molestiae aliquid odit eius, sit, asperiores minima veniam sequi alias, consequuntur aliquam nostrum. Tempora perspiciatis necessitatibus nisi, aliquid officia molestiae fugit tenetur",
    img: "./certificates/21.png",
  },
];

function Eventcontainer() {
  return (
    <div id="Main_Item_Container">
      {arr.map((element, i) => {
        return (
          <>
            <Eventmaker
              uniqueValue={i}
              img={element.img}
              title={element.Title}
              txt={element.Desc}
            />
          </>
        );
      })}
    </div>
  );
}

export default Eventcontainer;
