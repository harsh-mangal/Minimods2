import Button from "react-bootstrap/Button";
import { Helmet } from "react-helmet-async";
import { Form, Link as RouterLink, useLocation } from "react-router-dom";
import Container from "react-bootstrap/Container";
export default function SignInScreen(){
    
    const {search} = useLocation();
    const redirectInUrl = new URLSearchParams(search).get('redirect');
    const redirect = redirectInUrl ? redirectInUrl : '/';
    return (
        <Container className="small-container">
            <Helmet>
                <title>Sign in</title>
            </Helmet>
            <h1 className="my-3">Sign in</h1>
            <Form>
                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>
                        Email
                    </Form.Label>
                    <Form.Control type="email" required></Form.Control>
                </Form.Group>
                <Form.Group className="mb-3" controlId="password">
                    <Form.Label>
                        Password
                    </Form.Label>
                    <Form.Control type="password" required></Form.Control>
                </Form.Group>
                <div className="mb-3">
                    <Button type="submit">Sign in</Button>
                </div>
                <div className="mb-3">
                   New Customer?{' '}
                   <RouterLink to={`/signup?redirect=${redirect}`}>Create your account</RouterLink>
                </div>
            </Form>
        </Container>
    )
}