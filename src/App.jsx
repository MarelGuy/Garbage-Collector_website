import { Button, Container, Image, Row, Col, Card } from 'react-bootstrap'
import './App.css'

const scrollToComponent = (ref) => {
  document.getElementById(ref).scrollIntoView({
    behavior: 'smooth'
  });
}

function App() {
  return (
    <Container>
      <Image fluid={true} src="../Assets/logomenu.png" className="bg_img" />

      <p>
        Il mondo è in rovina, per anni, decenni la terra è stata maltrattata venendo inquinata
        e diventando una grande discarica a cielo aperto.
        <br />
        L’unico eroe che può rimediare
        al problema è il sintetico
        pulitore Garbage Collector,
        Con la sua bagshooter4000.
      </p>

      <Button id="scroll_button" onClick={() => {
        scrollToComponent("scrollTo");
      }}>Scopri di più</Button>

      <p style={{ "marginTop": "61vh" }} id="scrollTo"><br /></p>
      <h2>Le mappe</h2>

      <Row className="center_div">
        <Col className='map'><Image fluid={true} src="https://maranatha.camp/wp-content/uploads/2016/03/placeholder-1280-600.png" /></Col>
        <Col className='map'><Image fluid={true} src="https://maranatha.camp/wp-content/uploads/2016/03/placeholder-1280-600.png" /></Col>
      </Row>

      <h2 style={{ "marginTop": "100vh" }}>Gli oggetti</h2>

      <div className="center_div">
        <Row>
          <Col>
            <Card className="card_body center_div armor">
              <Image className="center_div" fluid={true} src="../Assets/powerup/armor.png" width="200vw" />
              <Card.Body>
                <Card.Title>Armatura</Card.Title>
                <hr />
                <Card.Text className="armor">
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
                <Card.Text className="scarpe">
                  Le Scarpe, ti permettono per un breve tempo di essere più agile
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </Container>
  )
}

export default App
