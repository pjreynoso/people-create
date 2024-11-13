import { Card, Form, Button, Row, Col, InputGroup } from "react-bootstrap";
import { AGES, GENERS } from "../../../../constants";
import { Filters } from "../../../../types";

interface PanelFiltersProps {
  setFilters: (filters: Filters) => void;
}

export const PanelFilters = ({ setFilters }: PanelFiltersProps) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const filters: Filters = {
      age: Number(formData.get("age")) as number,
      gender: (formData.get("gender") as string) || "",
    };

    setFilters(filters);
  };

  return (
    <Col sm={12} className="mt-4 filtros-content">
      <Card className="border-0 shadow-sm">
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            <Row className="py-3">
              <Col sm={12} lg={4}>
                <Form.Group controlId="age">
                  <InputGroup>
                    <Form.Select name="age" size="sm" className="single-select select-bs">
                      <optgroup label="EDAD">
                        {AGES.map((age) => (
                          <option key={age.value} value={age.value}>
                            {age.label}
                          </option>
                        ))}
                      </optgroup>
                    </Form.Select>
                  </InputGroup>
                </Form.Group>
              </Col>

              <Col sm={12} lg={4}>
                <Form.Group controlId="gender">
                  <InputGroup>
                    <Form.Select name="gender" size="sm" className="single-select select-bs">
                      <optgroup label="GENERO">
                        {GENERS.map((gener) => (
                          <option key={gener.value} value={gener.value}>
                            {gener.label}
                          </option>
                        ))}
                      </optgroup>
                    </Form.Select>
                  </InputGroup>
                </Form.Group>
              </Col>

              <Col sm={12} lg={4} className="text-end">
                <Button
                  type="submit"
                  variant="primary"
                  size="sm"
                  className="btn-search px-4"
                >
                  <i className="bi bi-search me-2"></i> Buscar
                </Button>
              </Col>
            </Row>
          </Form>
        </Card.Body>
      </Card>
    </Col>
  );
};
