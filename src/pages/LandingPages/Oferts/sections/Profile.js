/*
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKAvatar from "components/MKAvatar";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";

// Images
import profilePicture from "assets/images/oferta1.png";

function Profile() {
  return (
    <MKBox component="section" py={{ xs: 6, sm: 12 }}>
      <Container>
        <Grid container item xs={12} justifyContent="center" mx="auto">
          {/*<MKBox mt={{ xs: -16, md: -20 }} textAlign="center">
            <MKAvatar src={profilePicture} alt="Burce Mars" size="xxl" shadow="xl" />
           </MKBox>*/}
          <Grid container justifyContent="center" py={6}>
            <Grid item xs={12} md={7} mx={{ xs: "auto", sm: 6, md: 1 }}>
              <MKBox display="flex" justifyContent="space-between" alignItems="center" mb={1}>
                <MKTypography variant="h3">Frectaris</MKTypography>
                <MKButton variant="outlined" color="info" size="small">
                  Suscribirse
                </MKButton>
              </MKBox>
             {/* <Grid container spacing={3} mb={3}>
                <Grid item>
                  <MKTypography component="span" variant="body2" fontWeight="bold">
                    323&nbsp;
                  </MKTypography>
                  <MKTypography component="span" variant="body2" color="text">
                    Posts
                  </MKTypography>
                </Grid>
                <Grid item>
                  <MKTypography component="span" variant="body2" fontWeight="bold">
                    3.5k&nbsp;
                  </MKTypography>
                  <MKTypography component="span" variant="body2" color="text">
                    Followers
                  </MKTypography>
                </Grid>
                <Grid item>
                  <MKTypography component="span" variant="body2" fontWeight="bold">
                    260&nbsp;
                  </MKTypography>
                  <MKTypography component="span" variant="body2" color="text">
                    Following
                  </MKTypography>
                </Grid>
          </Grid>*/}
              <MKTypography variant="body1" fontWeight="light" color="text">
              Sector: <strong>Desarrollo web</strong>
              <br />
              <h4>Descripción de la oferta</h4>
              <p>Buscamos un estudiante entusiasta y apasionado por el desarrollo web para unirse a nuestro equipo como practicante. Esta es una oportunidad emocionante para aprender y contribuir a proyectos web reales.</p>
              <br />
              <h4>Requisitos</h4>
              <ul>
                <li>Estudiante de informática, ingeniería informática o disciplinas relacionadas.</li>
                <li>Conocimientos básicos de HTML, CSS y JavaScript.</li>
                <li>Interés por aprender nuevas tecnologías y metodologías de desarrollo.</li>
                <li>Capacidad para trabajar en equipo y comunicarse de manera efectiva.</li>
              </ul>
              <br />
              <h4>Beneficios</h4>
              <ul>
                <li>Mentoría por parte de profesionales con experiencia en desarrollo web.</li>
                <li>Participación en proyectos reales que impactan en el mundo digital.</li>
                <li>Posibilidad de expandir tu conocimiento y experiencia en el campo del desarrollo web.</li>
                <li>Oportunidades de networking y crecimiento profesional.</li>
              </ul>
              <br />
              <p>¡Únete a nuestro equipo y sumérgete en el emocionante mundo del desarrollo web!</p>
                <MKTypography
                  component="a"
                  href="#"
                  variant="body1"
                  fontWeight="light"
                  color="info"
                  mt={3}
                  sx={{
                    width: "max-content",
                    display: "flex",
                    alignItems: "center",

                    "& .material-icons-round": {
                      transform: `translateX(3px)`,
                      transition: "transform 0.2s cubic-bezier(0.34, 1.61, 0.7, 1.3)",
                    },

                    "&:hover .material-icons-round, &:focus .material-icons-round": {
                      transform: `translateX(6px)`,
                    },
                  }}
                >
                  Saber más sobre la oferta <Icon sx={{ fontWeight: "bold" }}>arrow_forward</Icon>
                </MKTypography>
              </MKTypography>
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <Container>
        <Grid container item xs={12} justifyContent="center" mx="auto">
          {/*<MKBox mt={{ xs: -16, md: -20 }} textAlign="center">
            <MKAvatar src={profilePicture} alt="Burce Mars" size="xxl" shadow="xl" />
           </MKBox>*/}
          <Grid container justifyContent="center" py={6}>
            <Grid item xs={12} md={7} mx={{ xs: "auto", sm: 6, md: 1 }}>
              <MKBox display="flex" justifyContent="space-between" alignItems="center" mb={1}>
                <MKTypography variant="h3">Digitus</MKTypography>
                <MKButton variant="outlined" color="info" size="small">
                  Suscribirse
                </MKButton>
              </MKBox>
             {/* <Grid container spacing={3} mb={3}>
                <Grid item>
                  <MKTypography component="span" variant="body2" fontWeight="bold">
                    323&nbsp;
                  </MKTypography>
                  <MKTypography component="span" variant="body2" color="text">
                    Posts
                  </MKTypography>
                </Grid>
                <Grid item>
                  <MKTypography component="span" variant="body2" fontWeight="bold">
                    3.5k&nbsp;
                  </MKTypography>
                  <MKTypography component="span" variant="body2" color="text">
                    Followers
                  </MKTypography>
                </Grid>
                <Grid item>
                  <MKTypography component="span" variant="body2" fontWeight="bold">
                    260&nbsp;
                  </MKTypography>
                  <MKTypography component="span" variant="body2" color="text">
                    Following
                  </MKTypography>
                </Grid>
          </Grid>*/}
              <MKTypography variant="body1" fontWeight="light" color="text">
              Sector: <strong>Marketing</strong>
              <br />
              <h4>Descripción de la oferta</h4>
              <p>Buscamos un estudiante o recién graduado interesado en adquirir experiencia en el campo del marketing digital. Serás parte de un equipo dinámico y colaborativo, donde tendrás la oportunidad de aprender sobre estrategias de marketing, gestión de redes sociales, análisis de datos y mucho más.</p>
              <br />
              <h4>Requisitos</h4>
              <ul>
                <li>Estudiante o recién graduado en Marketing, Publicidad, Comunicación o carreras afines.</li>
                <li>Interés por aprender y desarrollarse en el área de marketing digital.</li>
                <li>Excelentes habilidades de comunicación y trabajo en equipo.</li>
              </ul>
              <br />
              <h4>Ofrecemos</h4>
              <ul>
                <li>Prácticas remuneradas.</li>
                <li>Formación y mentoría por parte de profesionales del sector.</li>
                <li>Posibilidad de participar en proyectos reales y adquirir experiencia práctica.</li>
                <li>Ambiente de trabajo dinámico y motivador.</li>
              </ul>
              <br />
              <p>¡Si estás buscando una oportunidad para crecer y desarrollarte en el mundo del marketing digital, esta es tu oportunidad!</p>
                <MKTypography
                  component="a"
                  href="#"
                  variant="body1"
                  fontWeight="light"
                  color="info"
                  mt={3}
                  sx={{
                    width: "max-content",
                    display: "flex",
                    alignItems: "center",

                    "& .material-icons-round": {
                      transform: `translateX(3px)`,
                      transition: "transform 0.2s cubic-bezier(0.34, 1.61, 0.7, 1.3)",
                    },

                    "&:hover .material-icons-round, &:focus .material-icons-round": {
                      transform: `translateX(6px)`,
                    },
                  }}
                >
                  Saber más sobre la oferta <Icon sx={{ fontWeight: "bold" }}>arrow_forward</Icon>
                </MKTypography>
              </MKTypography>
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <Container>
        <Grid container item xs={12} justifyContent="center" mx="auto">
          {/*<MKBox mt={{ xs: -16, md: -20 }} textAlign="center">
            <MKAvatar src={profilePicture} alt="Burce Mars" size="xxl" shadow="xl" />
           </MKBox>*/}
          <Grid container justifyContent="center" py={6}>
            <Grid item xs={12} md={7} mx={{ xs: "auto", sm: 6, md: 1 }}>
              <MKBox display="flex" justifyContent="space-between" alignItems="center" mb={1}>
                <MKTypography variant="h3">Grespania</MKTypography>
                <MKButton variant="outlined" color="info" size="small">
                  Suscribirse
                </MKButton>
              </MKBox>
             {/* <Grid container spacing={3} mb={3}>
                <Grid item>
                  <MKTypography component="span" variant="body2" fontWeight="bold">
                    323&nbsp;
                  </MKTypography>
                  <MKTypography component="span" variant="body2" color="text">
                    Posts
                  </MKTypography>
                </Grid>
                <Grid item>
                  <MKTypography component="span" variant="body2" fontWeight="bold">
                    3.5k&nbsp;
                  </MKTypography>
                  <MKTypography component="span" variant="body2" color="text">
                    Followers
                  </MKTypography>
                </Grid>
                <Grid item>
                  <MKTypography component="span" variant="body2" fontWeight="bold">
                    260&nbsp;
                  </MKTypography>
                  <MKTypography component="span" variant="body2" color="text">
                    Following
                  </MKTypography>
                </Grid>
          </Grid>*/}
              <MKTypography variant="body1" fontWeight="light" color="text">
              Sector: <strong>Marketing</strong>
              <br />
              <h4>Descripción de la oferta</h4>
              <p>Estamos buscando un estudiante entusiasta y creativo para unirse a nuestro equipo como practicante en el área de cerámica. Esta es una oportunidad única para aprender y desarrollar habilidades en un entorno de trabajo profesional.</p>
              <br />
              <h4>Requisitos</h4>
              <ul>
                <li>Estudiante de cerámica o disciplinas relacionadas.</li>
                <li>Pasión por el arte y la creatividad.</li>
                <li>Disponibilidad para aprender y colaborar en proyectos.</li>
                <li>Habilidades básicas en el manejo de herramientas y equipos de cerámica.</li>
              </ul>
              <br />
              <h4>Beneficios</h4>
              <ul>
                <li>Mentoría por parte de profesionales experimentados.</li>
                <li>Experiencia práctica en un entorno de trabajo real.</li>
                <li>Oportunidad de expandir tu portafolio y habilidades.</li>
                <li>Posibilidad de establecer contactos en la industria cerámica.</li>
              </ul>
              <br />
              <p>¡Únete a nuestro equipo y explora tu pasión por la cerámica!</p>
                <MKTypography
                  component="a"
                  href="#"
                  variant="body1"
                  fontWeight="light"
                  color="info"
                  mt={3}
                  sx={{
                    width: "max-content",
                    display: "flex",
                    alignItems: "center",

                    "& .material-icons-round": {
                      transform: `translateX(3px)`,
                      transition: "transform 0.2s cubic-bezier(0.34, 1.61, 0.7, 1.3)",
                    },

                    "&:hover .material-icons-round, &:focus .material-icons-round": {
                      transform: `translateX(6px)`,
                    },
                  }}
                >
                  Saber más sobre la oferta <Icon sx={{ fontWeight: "bold" }}>arrow_forward</Icon>
                </MKTypography>
              </MKTypography>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Profile;
