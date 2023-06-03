import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

  :root {

    --melon-color: #FEC5BB;
    --melon-sec-color: #FCAFA1;
    --licorice-color: #20000C;
    --dark-purple-color: #340919;

    --font-nunito: 'Nunito', sans-serif;
    --font-raleway: 'Raleway', sans-serif;
    --font-pacifico: 'Pacifico', cursive;
    --font-allura: 'Allura', cursive;
    --font-dancing-script: 'Dancing Script', cursive;
    --font-delius-swash-caps:'Delius Swash Caps', cursive;
    --font-meow-script: 'Meow Script', cursive;
    --font-mrs-saint-delafield: 'Mrs Saint Delafield', cursive;
    --font-parisienne: 'Parisienne', cursive;
    --font-qwitcher-grypen: 'Qwitcher Grypen', cursive;

  }

  body {
    background-color: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text};
    font-family: var(--font-delius-swash-caps);
  }

  @media screen and (min-width: 1024px) {
    .apenas-mobile {
      display: none;
    }
  }

  @media screen and (max-width: 1023px) {
    .apenas-desktop {
      display: none;
    }
  }
`