import BannerPrincipal from "./componentes/banner-principal/banner-principal";
import ContainerPS5 from "./componentes/container-ps5/container-ps5";
import TopAppBar from "./componentes/top-app-bar/top-app-bar";


function App() {
  // const theme = useTheme();
  // const isMobile = useMediaQuery(theme.breakpoints.down('xs'));

  return (
    <div>
      <header>
        <TopAppBar />
      </header>
      <main>
        <BannerPrincipal/>
        <ContainerPS5 />
      </main>
    </div>
  );
}

export default App;
