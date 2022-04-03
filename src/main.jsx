import React from 'react'
import { render } from 'react-dom'
import { Button, Container, Image, Row, Col, Card } from 'react-bootstrap'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const scrollToComponent = (ref) => {
  document.getElementById(ref).scrollIntoView({
    behavior: 'smooth'
  });
}

render(
  <React.StrictMode>
    <Container>
      <section>
        <Image fluid={true} src="../Assets/logomenu.png" className="bg_img center_div" />

        <p>
          Il mondo è in rovina, per anni, decenni la terra è stata maltrattata venendo inquinata
          e diventando una grande discarica a cielo aperto<a href="https://www.youtube.com/watch?v=OSFJL7nWykU" target="_blank" rel="noopener noreferrer">.</a>
          <br />
          L’unico eroe che può rimediare
          al problema è il sintetico
          pulitore Garbage Collector,
          con la sua bagshooter4000.
        </p>

        <Button id="scroll_button" className="center_div" onClick={() => {
          scrollToComponent("scrollTo");
        }}>Scopri di più</Button>
      </section>
      <section>
        <p style={{ "marginTop": "61vh" }} id="scrollTo"><br /></p>
        <h2>Le mappe</h2>

        <Row className="center_div">
          <Col className='map'><Image fluid={true} src="../Assets/maps/city.png" /></Col>
          <Col className='map'><Image fluid={true} src="../Assets/maps/stage2.png" /></Col>
        </Row>
      </section>
      <section>
        <h2 style={{ "marginTop": "10vh" }}>Il personaggio</h2>

        <Row>
          <Col className="center_div">
            <p>Il Garbage-Collector è un Sintetico Addetto alla pulizia creato dalla razza umana come ultima speranza
              contro la sempre più grande minaccia dell'inquinamento<a href="">,</a> grazie alla sua spara-buste biodegradabili.</p>
          </Col>
          <Col>
            <Image className="center_div" fluid={true} src="../Assets/garbage collector.png" />
          </Col>
        </Row>
      </section>
      {/* <section>
        <h2 style={{ "marginTop": "10vh" }}>Gli oggetti</h2>

        <div className="center_div">
          <Row>
            <Col>
              <Card className="card_body center_div armor">
                <Image className="center_div" fluid={true} src="../Assets/powerup/armor.png" width="200vw" />
                <Card.Body>
                  <Card.Title>Armatura</Card.Title>
                  <hr />
                  <Card.Text >
                    L'Armatura permette al Garbage Collector di resistere ad un danno dei minions.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="card_body center_div">
                <Image className="center_div" fluid={true} src="../Assets/powerup/booster.png" width="200vw" />
                <Card.Body>
                  <Card.Title>Booster</Card.Title>
                  <hr />
                  <Card.Text>
                    Hai finito le munizioni? Nessun problema! Grazie al booster il tuo caricatore diventerà come nuovo.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="card_body center_div scarpe">
                <Image className="center_div" fluid={true} src="../Assets/powerup/scarpe.png" width="200vw" />
                <Card.Body>
                  <Card.Title>Scarpe</Card.Title>
                  <hr />
                  <Card.Text>
                    Le Scarpe, ti permettono per un breve tempo di essere più agile
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </section> */}
      <section>
        <h2 style={{ "marginTop": "10vh" }}>Work in progress</h2>

        <Row>
          <Col>
            <Image fluid={true} className="center_div" src="../Assets/WIP/Things/WIP_thing1.png" />
          </Col>
          <Col>
            <Image fluid={true} className="center_div" src="../Assets/WIP/Things/WIP_thing2.png" />
          </Col>
        </Row>
        <Row style={{ "paddingTop": "2.5vh" }}>
          <Col>
            <Image fluid={true} className="center_div" src="../Assets/WIP/Maps/WIP_map1.jpg" />
          </Col>
          <Col>
            <Image fluid={true} className="center_div" src="../Assets/WIP/Maps/WIP_map2.jpg" />
          </Col>
        </Row>
      </section>
      <section style={{ "marginTop": "3vh" }}>
        <footer>
          <p className="text-center">Loris Cuntreri © {new Date().getFullYear()}</p>
        </footer>
      </section>
    </Container>
  </React.StrictMode >,
  document.getElementById('root')
)
