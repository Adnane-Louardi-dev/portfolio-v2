import { useEffect, useState } from "react";
import Head from "next/head";
import styled from "styled-components";
import VisibilitySensor from "react-visibility-sensor";

import { FaGithub, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import { HiOutlineExternalLink } from "react-icons/hi";

export default function Home(props) {
  const [visible, setVisible] = useState({
    skills: false,
    experience: false,
    projects: false,
  });

  const [windowHeight, setWindowHeight] = useState(0);

  useEffect(() => {
    setWindowHeight(window.innerHeight);
  }, []);

  const ToggleTheme = () => {
    if (props.theme === "light") props.setTheme("dark");
    else props.setTheme("light");
  };

  return (
    <Page>
      <Head>
        <title>Snehil</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        <Left visibility={visible}>
          <section class="sidebar">
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
                01&nbsp;&nbsp;&nbsp;&nbsp;───────&nbsp;&nbsp;&nbsp;SKILLS
              </a>
              <a id="link-experience" href="#experience">
                02&nbsp;&nbsp;&nbsp;───&nbsp;&nbsp;&nbsp;EXPERIENCE
              </a>
              <a id="link-projects" href="#projects">
                03&nbsp;&nbsp;&nbsp;────&nbsp;&nbsp;&nbsp;PROJECTS
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
          SKILLS
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
            <section id="skills">
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
          EXP
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
            <section id="experience">
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
          PROJECTS
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
            <section id="projects">
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

const Main = styled.main`
  display: grid;
  max-width: 64rem;
  margin: 0 auto;
  grid-template-columns: repeat(auto-fit, minmax(22rem, 1fr));
  color: ${({ theme }) => theme.fontPrimary};
  min-height: 100vh;
  padding: 0 1rem;
`;

const Page = styled.div`
  background-color: ${({ theme }) => theme.backgroundPrimary};
  transition: background-color 0.5s ease, color 0.5s ease;

  a {
    color: ${({ theme }) => theme.fontPrimary};
    text-decoration: underline;
  }
`;

const Link = styled.a`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-right: 2.75rem;
  margin-bottom: 1rem;
  text-decoration: none !important;

  span {
    margin-left: 1rem;
    margin-right: 0.5rem;
  }
`;

const Left = styled.div`
  section {
    margin: 0 1rem;
    position: sticky;
    top: 0rem;
    padding-top: 4rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;

    @media screen and (min-width: 47rem) {
      height: 100vh;
    }

    &::-webkit-scrollbar {
      display: none;
    }

    @media screen and (max-width: 47rem) {
      padding-top: 6rem;
    }
  }
  h1 {
    font-size: 36pt;
    margin: 0 0 2rem 0;
    line-height: 36pt;
  }

  .bio {
    margin: 0 2.5rem 2rem 0;
    color: ${({ theme }) => theme.fontSecondary};
    font-size: 11pt;
  }
  .headings {
    margin-bottom: 1rem;
    font-size: 11pt;
    a {
      display: block;
      margin-bottom: 1rem;
      text-decoration: none;
    }

    @media screen and (max-width: 47rem) {
      display: none;
    }
  }

  .profile {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 2rem;
    font-size: 11pt;

    img {
      height: 3.75rem;
      width: 3.75rem;
      object-fit: cover;
      border-radius: 50%;
      margin-right: 1.5rem;
    }

    a {
      color: ${({ theme }) => theme.fontSecondary};
      text-decoration: none;
      transition: color 300ms ease;
      &:hover {
        color: ${({ theme }) => theme.fontPrimary};
      }
    }
  }

  .details {
    font-weight: 300;
    font-size: 11pt;
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap;
  }
  #link-skills {
    color: ${({ theme, visibility }) =>
      visibility.skills ? theme.fontPrimary : theme.fontSecondary};
  }

  #link-experience {
    color: ${({ theme, visibility }) =>
      visibility.experience ? theme.fontPrimary : theme.fontSecondary};
  }

  #link-projects {
    color: ${({ theme, visibility }) =>
      visibility.projects ? theme.fontPrimary : theme.fontSecondary};
  }
`;

const Right = styled.div`
  /* background-color: red; */
  margin-top: 4rem;

  section {
  }
`;
