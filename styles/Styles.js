import styled from "styled-components";

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
  /* background-color: red; */

  h1 {
    padding: 4rem 0 1.5rem 0;
    font-weight: 300;
    margin: 0;
    font-size: 26pt;
    line-height: 26pt;
  }
`;

export const Main = styled.main`
  display: grid;
  max-width: 64rem;
  margin: 0 auto;
  grid-template-columns: repeat(auto-fit, minmax(22rem, 1fr));
  color: ${({ theme }) => theme.fontPrimary};
  min-height: 100vh;
  padding: 0 1rem;
`;

export const Page = styled.div`
  background-color: ${({ theme }) => theme.backgroundPrimary};
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
  display: flex;
  flex-direction: column;
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
