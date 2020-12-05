import Head from "next/head";
import styled from "styled-components";

export default function Home(props) {
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
        <Left>
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
          </section>
        </Left>
        <Right>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in
          lacinia ligula. Aliquam facilisis congue tortor eget cursus. Donec
          tempor ultrices nunc at egestas. Curabitur eu odio eget ex cursus
          sodales ac quis nunc. In auctor, metus ac vehicula tempor, nunc urna
          posuere eros, sit amet viverra ex mi in leo. Donec at magna purus. In
          sodales ipsum id risus euismod, lacinia blandit lectus commodo.
          Vivamus sodales et eros eget venenatis. Class aptent taciti sociosqu
          ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam
          non lacus non justo sodales pharetra. Aliquam varius id dolor quis
          sollicitudin. Aliquam consequat velit vitae tellus efficitur, eget
          pellentesque erat volutpat. Nulla vehicula condimentum quam, id cursus
          metus. Sed nec enim quis diam ornare fermentum placerat ac turpis.
          Praesent tincidunt laoreet metus quis rutrum. Aenean efficitur sapien
          pharetra, faucibus sapien in, eleifend diam. Nam posuere tortor
          ligula, at tincidunt nulla cursus ut. Praesent condimentum, lorem eu
          pharetra pretium, arcu est tempus eros, pretium varius ante sem quis
          augue. Aliquam erat volutpat. Vivamus lorem mi, eleifend nec nibh et,
          consectetur dictum mauris. Interdum et malesuada fames ac ante ipsum
          primis in faucibus. Ut tempor felis sit amet ante dapibus imperdiet.
          Etiam odio turpis, tristique a ultrices eu, placerat id nulla. Nullam
          porta lorem eros, sit amet ultricies felis porta ut. Duis scelerisque
          purus rhoncus luctus pretium. Vestibulum lobortis, sapien eget congue
          consectetur, purus ipsum elementum dolor, at varius est purus sit amet
          leo. Integer ut scelerisque magna. Vivamus sollicitudin pharetra
          aliquam. In mattis metus non ex facilisis, a condimentum enim semper.
          Proin sodales turpis eu ipsum luctus scelerisque. Quisque dictum
          sodales dolor ac cursus. Maecenas a quam non tortor vehicula lacinia
          non vel nisi. Praesent non laoreet erat, nec bibendum nisl. Curabitur
          congue mollis est, et vehicula lacus dapibus vitae. Curabitur ut massa
          porttitor, dignissim lorem eget, auctor ex. Integer fringilla, leo ac
          mollis viverra, est diam consectetur elit, sed dapibus dui dui quis
          eros. Duis hendrerit leo vel nisl vehicula, quis interdum massa
          imperdiet. Mauris mi erat, facilisis at ultrices quis, eleifend sit
          amet ante. Etiam blandit viverra neque, in egestas metus. Maecenas
          vitae congue augue. Integer bibendum in massa et iaculis. Phasellus ut
          cursus ligula. Fusce erat arcu, luctus et sem non, rhoncus aliquam
          felis. Pellentesque nec tellus bibendum, fermentum urna et, volutpat
          nibh. Aliquam sagittis quam dictum ipsum imperdiet malesuada.
          Pellentesque sagittis ac lectus et sollicitudin. Sed mollis, orci sed
          egestas placerat, erat nulla vestibulum enim, in tristique odio urna
          quis velit. Donec vel mattis ex, id interdum ipsum. Sed ac dolor
          lectus. Orci varius natoque penatibus et magnis dis parturient montes,
          nascetur ridiculus mus. Fusce porta augue vel rhoncus pellentesque.
          Fusce faucibus efficitur iaculis. Proin mauris eros, dapibus et purus
          non, molestie ullamcorper neque. Donec elementum ipsum ut maximus
          dignissim. Maecenas auctor egestas est, et mollis mauris accumsan id.
          Nam varius metus in viverra bibendum. Quisque aliquet, nisi eget
          venenatis laoreet, ligula tellus varius mi, ut interdum dolor magna id
          lorem. Suspendisse diam ante, bibendum quis felis ut, scelerisque
          dapibus massa. Nullam egestas tortor et ligula iaculis, a dictum purus
          eleifend. Donec odio erat, ultrices id arcu eleifend, convallis
          viverra est. Sed consectetur mattis rutrum. Nulla non lectus laoreet,
          tincidunt ipsum vitae, dapibus odio. Aliquam gravida ornare nisl, ac
          ullamcorper enim luctus sit amet.
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

const Left = styled.div`
  section {
    margin: 0 1rem;
    position: sticky;
    top: 0rem;
    padding-top: 4rem;
    /* height: 100vh; */

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
    margin: 2.5rem 2.5rem 0 0;
    color: ${({ theme }) => theme.fontSecondary};
    font-size: 11pt;
  }
`;

const Right = styled.div`
  /* background-color: red; */
  margin-top: 4rem;
`;
