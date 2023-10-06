import {
    Body,
    Container,
    Head,
    Heading,
    Hr,
    Html,
    Preview,
    Section,
    Text,
} from "@react-email/components";

type ContactFormEmailProps = {
    message: string;
    senderEmail: string;
};

export default function ContactFormEmail({
    message,
    senderEmail,
}: ContactFormEmailProps) {
    return (
        <Html>
            <Head />
            <Preview>New message from your portfolio site</Preview>

            <Body
                style={{ backgroundColor: "rgb(243 244 246)", color: "black" }}
            >
                <Container>
                    <Section
                        style={{
                            marginTop: "40px",
                            marginBottom: "40px",
                            borderRadius: "0.375rem",
                            backgroundColor: "white",
                            padding: "2.5rem 1rem",
                            borderWidth: "1px",
                            borderColor: "black",
                        }}
                    >
                        <Heading style={{ lineHeight: 1.25 }}>
                            You received the following message from the contact
                            form
                        </Heading>
                        <Text>{message}</Text>
                        <Hr />
                        <Text>The sender&apos;s email is: {senderEmail}</Text>
                    </Section>
                </Container>
            </Body>
        </Html>
    );
}
