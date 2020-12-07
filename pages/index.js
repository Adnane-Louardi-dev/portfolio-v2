import { useEffect, useState } from "react";
import Head from "next/head";
import VisibilitySensor from "react-visibility-sensor";

import { FaGithub, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import { HiOutlineExternalLink } from "react-icons/hi";

import { Left, Right, Link, Main, Skills, Page } from "../styles/Styles";
import { themes } from "./_app";
import { getAllSkills } from "../lib/skills";

export default function Home(props) {
  const [visible, setVisible] = useState({
    skills: false,
    experience: false,
    projects: false,
  });

  const [windowHeight, setWindowHeight] = useState(0);

  if (typeof window !== "undefined") {
    useEffect(() => {
      setWindowHeight(window.innerHeight);
    }, [window.innerHeight]);

    useEffect(() => {
      eval(
        `try {TagCanvas.Start('myCanvas', '', {textColour: '${
          themes[props.theme].fontPrimary
        }',outlineColour: '#0000', imageMode: "both", imagePosition:"top", initial: [0.3,-0.1], fadeIn: 3000, wheelZoom: false, pinchZoom: true, shuffleTags: true, frontSelect: true, textHeight: 18, reverse: true, depth: 0.8,maxSpeed: 0.04, minSpeed: 0.02});} catch(e) {document.getElementById('myCanvasContainer').style.display = 'none';}`
      );
    }, [props.theme]);
  }

  const ToggleTheme = () => {
    if (props.theme === "light") props.setTheme("dark");
    else props.setTheme("light");
  };

  return (
    <Page>
      <Head>
        <title>Snehil</title>
        <link rel="icon" href="/favicon.ico" />
        <script src="/js/NotAtAllInteresting.js"></script>
      </Head>
      <Main>
        <Left visibility={visible}>
          <section>
            <h1 onClick={ToggleTheme}>Hello, World!</h1>
            <h1>I'm Snehil.</h1>
            <p className="bio">
              Electronics and Communication Engineering Undergraduate from{" "}
              <a href="https://www.srmist.edu.in/" target="_blank">
                SRMIST
              </a>
              , India. Currently learning the ins and outs of Web Development. I
              mostly do frontend development with React and related frameworks
              but I've also explored Internet of Things and Game Development in
              the past.
            </p>
            <div className="headings">
              <a id="link-skills" href="#skills">
                <span>01&nbsp;</span>
                <span className="divider"></span>
                <span>SKILLS</span>
              </a>
              <a id="link-experience" href="#experience">
                <span>02</span>
                <span className="divider"></span>
                <span>EXPERIENCE</span>
              </a>
              <a id="link-projects" href="#projects">
                <span>03</span>
                <span className="divider"></span>
                <span>PROJECTS</span>
              </a>
            </div>
            <div className="profile">
              <img src="/images/profile.jpg" />
              <a href="mailto:snehilwebber@gmail.com">snehilwebber@gmail.com</a>
            </div>
            <div className="details">
              <Link href="https://github.com/sneakysensei" target="_blank">
                <FaGithub size={18} />
                <span>GitHub</span>
                <HiOutlineExternalLink size={16} />
              </Link>
              <Link
                href="https://www.linkedin.com/in/snehilcodes/"
                target="_blank"
              >
                <FaLinkedin size={18} />
                <span>Linkedin</span>
                <HiOutlineExternalLink size={16} />
              </Link>
            </div>
            <div className="details">
              <Link href="https://twitter.com/snehilcodes" target="_blank">
                <FaTwitter size={18} />
                <span>Twitter</span>
                <HiOutlineExternalLink size={16} />
              </Link>
              <Link
                href="https://www.youtube.com/channel/UC2S8KvlxBnkwgWZyWDzFggA?view_as=subscriber"
                target="_blank"
              >
                <FaYoutube size={18} />
                <span>YouTube</span>
                <HiOutlineExternalLink size={16} />
              </Link>
            </div>
          </section>
        </Left>
        <Right>
          <h1 id="skills">Skills</h1>
          <VisibilitySensor
            partialVisibility
            onChange={(isVisible) => {
              setVisible((visible) => {
                return { ...visible, skills: isVisible };
              });
            }}
            offset={{
              top: windowHeight / 3,
              bottom: windowHeight / 3,
            }}
          >
            <Skills>
              <canvas width="720" height="720" id="myCanvas">
                <p>
                  Anything in here will be replaced on browsers that support the
                  canvas element
                </p>
                <ul>
                  {props.skills.map((skill) => (
                    <a
                      href="#"
                      id={skill.name}
                      onClick={(e) => {
                        e.preventDefault();
                        eval(
                          `TagCanvas.TagToFront("myCanvas", {id: "${skill.name}", active: 1});`
                        );
                      }}
                    >
                      <li>
                        <img
                          width="60"
                          height="60"
                          src={`/images/svg/${skill.image}${
                            props.theme === "light" ? "-light" : ""
                          }.svg`}
                        />
                        {skill.name}
                      </li>
                    </a>
                  ))}
                </ul>
              </canvas>
            </Skills>
          </VisibilitySensor>

          <h1 id="experience">Experience</h1>
          <VisibilitySensor
            partialVisibility
            onChange={(isVisible) => {
              setVisible((visible) => {
                return { ...visible, experience: isVisible };
              });
            }}
            offset={{
              top: windowHeight / 3,
              bottom: windowHeight / 3,
            }}
          >
            <section>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in
              lacinia ligula. Aliquam facilisis congue tortor eget cursus. Donec
              tempor ultrices nunc at egestas. Curabitur eu odio eget ex cursus
              sodales ac quis nunc. In auctor, metus ac vehicula tempor, nunc
              urna posuere eros, sit amet viverra ex mi in leo. Donec at magna
              purus. In sodales ipsum id risus euismod, lacinia blandit lectus
              commodo. Vivamus sodales et eros eget venenatis. Class aptent
              taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos. Nullam non lacus non justo sodales pharetra.
              Aliquam varius id dolor quis sollicitudin. Aliquam consequat velit
              vitae tellus efficitur, eget pellentesque erat volutpat. Nulla
              vehicula condimentum quam, id cursus metus. Sed nec enim quis diam
              ornare fermentum placerat ac turpis. Praesent tincidunt laoreet
              metus quis rutrum. Aenean efficitur sapien pharetra, faucibus
              sapien in, eleifend diam. Nam posuere tortor ligula, at tincidunt
              nulla cursus ut. Praesent condimentum, lorem eu pharetra pretium,
              arcu est tempus eros, pretium varius ante sem quis augue. Aliquam
              erat volutpat. Vivamus lorem mi, eleifend nec nibh et, consectetur
              dictum mauris. Interdum et malesuada fames ac ante ipsum primis in
              faucibus. Ut tempor felis sit amet ante dapibus imperdiet. Etiam
              odio turpis, tristique a ultrices eu, placerat id nulla. Nullam
              porta lorem eros, sit amet ultricies felis porta ut. Duis
              scelerisque purus rhoncus luctus pretium. Vestibulum lobortis,
              sapien eget congue consectetur, purus ipsum elementum dolor, at
              varius est purus sit amet leo. Integer ut scelerisque magna.
              Vivamus sollicitudin pharetra aliquam. In mattis metus non ex
              facilisis, a condimentum enim semper. Proin sodales turpis eu
              ipsum luctus scelerisque. Quisque dictum sodales dolor ac cursus.
              Maecenas a quam non tortor vehicula lacinia non vel nisi. Praesent
              non laoreet erat, nec bibendum nisl. Curabitur congue mollis est,
              et vehicula lacus dapibus vitae. Curabitur ut massa porttitor,
              dignissim lorem eget, auctor ex. Integer fringilla, leo ac mollis
              viverra, est diam consectetur elit, sed dapibus dui dui quis eros.
              Duis hendrerit leo vel nisl vehicula, quis interdum massa
              imperdiet. Mauris mi erat, facilisis at ultrices quis, eleifend
              sit amet ante. Etiam blandit viverra neque, in egestas metus.
              Maecenas vitae congue augue. Integer bibendum in massa et iaculis.
              Phasellus ut cursus ligula. Fusce erat arcu, luctus et sem non,
              rhoncus aliquam felis. Pellentesque nec tellus bibendum, fermentum
              urna et, volutpat nibh. Aliquam sagittis quam dictum ipsum
              imperdiet malesuada. Pellentesque sagittis ac lectus et
              sollicitudin.
            </section>
          </VisibilitySensor>

          <h1 id="projects">Projects</h1>
          <VisibilitySensor
            partialVisibility
            onChange={(isVisible) => {
              setVisible((visible) => {
                return { ...visible, projects: isVisible };
              });
            }}
            offset={{
              top: windowHeight / 3,
              bottom: windowHeight / 3,
            }}
          >
            <section>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in
              lacinia ligula. Aliquam facilisis congue tortor eget cursus. Donec
              tempor ultrices nunc at egestas. Curabitur eu odio eget ex cursus
              sodales ac quis nunc. In auctor, metus ac vehicula tempor, nunc
              urna posuere eros, sit amet viverra ex mi in leo. Donec at magna
              purus. In sodales ipsum id risus euismod, lacinia blandit lectus
              commodo. Vivamus sodales et eros eget venenatis. Class aptent
              taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos. Nullam non lacus non justo sodales pharetra.
              Aliquam varius id dolor quis sollicitudin. Aliquam consequat velit
              vitae tellus efficitur, eget pellentesque erat volutpat. Nulla
              vehicula condimentum quam, id cursus metus. Sed nec enim quis diam
              ornare fermentum placerat ac turpis. Praesent tincidunt laoreet
              metus quis rutrum. Aenean efficitur sapien pharetra, faucibus
              sapien in, eleifend diam. Nam posuere tortor ligula, at tincidunt
              nulla cursus ut. Praesent condimentum, lorem eu pharetra pretium,
              arcu est tempus eros, pretium varius ante sem quis augue. Aliquam
              erat volutpat. Vivamus lorem mi, eleifend nec nibh et, consectetur
              dictum mauris. Interdum et malesuada fames ac ante ipsum primis in
              faucibus. Ut tempor felis sit amet ante dapibus imperdiet. Etiam
              odio turpis, tristique a ultrices eu, placerat id nulla. Nullam
              porta lorem eros, sit amet ultricies felis porta ut. Duis
              scelerisque purus rhoncus luctus pretium. Vestibulum lobortis,
              sapien eget congue consectetur, purus ipsum elementum dolor, at
              varius est purus sit amet leo. Integer ut scelerisque magna.
              Vivamus sollicitudin pharetra aliquam. In mattis metus non ex
              facilisis, a condimentum enim semper. Proin sodales turpis eu
              ipsum luctus scelerisque. Quisque dictum sodales dolor ac cursus.
              Maecenas a quam non tortor vehicula lacinia non vel nisi. Praesent
              non laoreet erat, nec bibendum nisl. Curabitur congue mollis est,
              et vehicula lacus dapibus vitae. Curabitur ut massa porttitor,
              dignissim lorem eget, auctor ex. Integer fringilla, leo ac mollis
              viverra, est diam consectetur elit, sed dapibus dui dui quis eros.
              Duis hendrerit leo vel nisl vehicula, quis interdum massa
              imperdiet. Mauris mi erat, facilisis at ultrices quis, eleifend
              sit amet ante. Etiam blandit viverra neque, in egestas metus.
              Maecenas vitae congue augue. Integer bibendum in massa et iaculis.
              Phasellus ut cursus ligula. Fusce erat arcu, luctus et sem non,
              rhoncus aliquam felis. Pellentesque nec tellus bibendum, fermentum
              urna et, volutpat nibh. Aliquam sagittis quam dictum ipsum
              imperdiet malesuada. Pellentesque sagittis ac lectus et
              sollicitudin.
            </section>
          </VisibilitySensor>
        </Right>
      </Main>
    </Page>
  );
}

export async function getStaticProps() {
  const skills = getAllSkills();

  return {
    props: {
      skills: [...skills.skills],
    },
  };
}
