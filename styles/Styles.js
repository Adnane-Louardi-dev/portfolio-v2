import styled from "styled-components";

export const ExperienceCard = styled.article`
  padding: 2rem;
  margin-bottom: 0.5rem;
  position: relative;
  background-color: ${({ theme }) => theme.backgroundSecondary};
  border-radius: 0.5rem;
  box-shadow: 0 0.125em 0.3125em rgba(0, 0, 0, 0.25),
    0 0.02125em 0.06125em rgba(0, 0, 0, 0.25);

  header {
    text-transform: uppercase;
    margin-bottom: 0.5rem;
    font-size: 10pt;
  }
  .date {
    color: ${({ theme }) => theme.fontSecondary};
    text-transform: initial;
  }
  div {
    margin-bottom: 0.5rem;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;

    img {
      height: 28pt;
    }
  }

  h2 {
    margin: 0 0 0 0.5rem;
    line-height: 28pt;
    font-weight: 500;
    font-size: 18pt;
  }

  ul {
    /* list-style: none; */
    padding-left: 1rem;
    margin: 0;
    font-size: 11pt;
    color: ${({ theme }) => theme.fontSecondary};
  }

  ul li {
    margin-bottom: 0.5rem;

    &:last-child {
      margin-bottom: 0;
    }
  }

  a {
    position: absolute;
    right: 0;
    top: 0;
    line-height: 18px;
    margin: 2rem 2rem 0 0;
  }

  /* ul li::before {
    content: "-";
    display: inline-block;
    width: 1em;
    margin-left: -1em;
  } */
`;

export const Skills = styled.section`
  position: relative;
  width: 100%;

  &::after {
    content: "";
    padding-bottom: 100%;
    display: block;
  }
  canvas {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

export const Right = styled.div`
  flex: 1;
  @media screen and (max-width: 750px) {
    flex: initial;
  }
  h1 {
    padding: 4rem 0 1.5rem 0;
    font-weight: 300;
    margin: 0;
    font-size: 26pt;
    line-height: 26pt;
  }
`;

export const Main = styled.main`
  display: flex;
  flex-direction: row;

  max-width: 64rem;
  margin: 0 auto;

  color: ${({ theme }) => theme.fontPrimary};
  min-height: 100vh;
  padding: 0 1rem;

  @media screen and (max-width: 750px) {
    flex-direction: column;
  }
`;

export const Page = styled.div`
  a {
    color: ${({ theme }) => theme.fontPrimary};
    text-decoration: underline;
  }
`;

export const Link = styled.a`
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

export const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 750px) {
    flex: initial;
  }
  section {
    margin: 0 1rem;
    position: sticky;
    top: 0rem;
    /* padding-top: 4rem; */
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

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
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    a {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-items: flex-start;
      margin-bottom: 1rem;
      text-decoration: none;

      .divider {
        margin: 0 1rem;
        transition: width 300ms ease;
        border-bottom: 1px solid;
      }
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
      object-fit: scale-down;
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
    .divider {
      width: ${({ visibility }) => (visibility.skills ? "3.5rem" : "2rem")};
    }
  }

  #link-experience {
    color: ${({ theme, visibility }) =>
      visibility.experience ? theme.fontPrimary : theme.fontSecondary};
    .divider {
      width: ${({ visibility }) => (visibility.experience ? "3.5rem" : "2rem")};
    }
  }

  #link-projects {
    color: ${({ theme, visibility }) =>
      visibility.projects ? theme.fontPrimary : theme.fontSecondary};

    .divider {
      width: ${({ visibility }) => (visibility.projects ? "3.5rem" : "2rem")};
    }
  }
`;
