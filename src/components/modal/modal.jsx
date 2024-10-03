import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Form, Row, Col } from 'react-bootstrap';
import { useState } from 'react';

function Janela({ show, onClose }) {
  const [cep, setCep] = useState('');
  const [endereco, setEndereco] = useState(null);

  const handleCepChange = (event) => {
    setCep(event.target.value);
  };

  const buscarCep = async () => {
    if (cep.length === 8) {
      try {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const data = await response.json();

        if (data.erro) {
          alert('CEP não encontrado.');
          setEndereco(null);
        } else {
          setEndereco(data);
        }
      } catch (error) {
        console.error('Erro ao buscar CEP:', error);
        alert('Erro ao buscar CEP. Por favor, tente novamente.');
        setEndereco(null);
      }
    }
  };

  return (
    <>
      <Modal show={show} onHide={onClose}>
        <Modal.Header closeButton>
          <Modal.Title>Cadastre-se para doar</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formNomeCompleto">
              <Form.Label>Nome Completo</Form.Label>
              <Form.Control type="text" placeholder="Digite seu nome completo" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Digite seu email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formTelefone">
              <Form.Label>Telefone</Form.Label>
              <Form.Control type="tel" placeholder="Digite seu telefone" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formCEP">
              <Form.Label>CEP</Form.Label>
              <Form.Control
                type="text"
                placeholder="Digite seu CEP"
                value={cep}
                onChange={handleCepChange}
                onBlur={buscarCep} 
              />
            </Form.Group>

            {endereco && (
              <Form.Group>
                <Row>
                  <Col>
                    <Form.Label>Logradouro</Form.Label>
                    <Form.Control type="text" value={endereco.logradouro} readOnly />
                  </Col>
                  <Col>
                    <Form.Label>Número</Form.Label>
                    <Form.Control type="text" placeholder="Número" />
                  </Col>
                </Row>
                <Row className="mt-2">
                  <Col>
                    <Form.Label>Bairro</Form.Label>
                    <Form.Control type="text" value={endereco.bairro} readOnly />
                  </Col>
                  <Col>
                    <Form.Label>Cidade</Form.Label>
                    <Form.Control type="text" value={endereco.localidade} readOnly />
                  </Col>
                  <Col>
                    <Form.Label>UF</Form.Label>
                    <Form.Control type="text" value={endereco.uf} readOnly />
                  </Col>
                </Row>
              </Form.Group>
            )}

            <Button variant="primary" type="submit">
              Enviar
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onClose}>
            Fechar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Janela;