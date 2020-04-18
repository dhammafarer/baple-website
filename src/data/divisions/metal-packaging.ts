import { DivisionData } from "../../types"

export const frontmatter: { division: DivisionData } = {
  division: {
    name: "metalPackaging",
    title: "Baple Metal Packaging",
    logo: {
      text: "../../images/logos/baple-plastics-logo.png",
      notext: "../../images/logos/baple-plastics-logo.png",
    },
    home: "/metal-packaging/",
    navLinks: [
      {
        label: "Inicio",
        to: "/metal-packaging",
      },
      {
        label: "Soluciones",
        to: "/metal-packaging/solutions",
        links: [
          {
            label: "Botes de Aerosol",
            to: "/metal-packaging/botes-de-aerosol",
          },
          {
            label: "Válvulas de Aerosol",
            to: "/metal-packaging/valvulas-de-aerosol",
          },
          {
            label: "Tapas",
            to: "/metal-packaging/tapas",
          },
        ],
      },
      {
        label: "Sobre Nosotros",
        to: "/metal-packaging/about",
      },
      {
        label: "Contacto",
        to: "/metal-packaging/contact",
        links: [],
      },
    ],
  },
}
