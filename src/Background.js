import { useEffect, useState } from "react";
import Tabs from "./components/Tabs";
export default function Background() {
  const [hue, setHue] = useState(0);
  const [randomTime, setRandomTime] = useState(getRandom());

  useEffect(() => {
    const interval = setInterval(() => {
      setHue((hue) => hue + 10);

      setRandomTime((randomTime) => getNewHue());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  function getNewHue() {
    return getRandom();
  }
  function getRandom() {
    return Math.random() * 12000;
  }

  function getPortrait() {
    return portrait;
  }

  return (
    <div className="background-container">
      <div
        className="background"
        style={{ filter: "hue-rotate(" + hue + "deg)" }}
      ></div>
      <div className="main ">
        <div className="content">
          <Tabs>
            <div label="Home">
              <h1>lifeonourplanet</h1>
              <img
                id="image"
                src="https://s2.seedboxws.com/ddl/usr00198/public/fff-imageonline.co-6940927%20(1)-modified.png"
                className="nav--logo"
                alt=""
              />

              <div className="copy">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </div>
            </div>
            <div label="Publications">
              <h1>Publications</h1>
              <img
                id="image"
                src="marteka-profile.png"
                className="nav--logo"
                alt=""
              />
              <div className="copy">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum."
              </div>
            </div>
            <div label="Socials">
              <h1>Social</h1>

              <div className="copy">
                <ul>
                  <li>
                    email:
                    <a href="mailto:smartekafairmusic@gmail.com">
                      martekafairmusic@gmail.com
                    </a>
                  </li>
                  <li>
                    instagram:
                    <a href="https://www.instagram.com/marteka.fair/">
                      marteka.fair{" "}
                    </a>
                  </li>
                  <li> bandcamp</li>
                </ul>
              </div>
            </div>
            <div label="Contact"></div>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
