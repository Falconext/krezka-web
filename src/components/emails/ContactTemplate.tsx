import * as React from 'react';
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
    Tailwind,
} from '@react-email/components';
import { BRAND } from '@/lib/branding';

interface ContactTemplateProps {
    fullName: string;
    company?: string;
    email: string;
    phone?: string;
    services: string[];
    message: string;
}

export const ContactTemplate: React.FC<ContactTemplateProps> = ({
    fullName,
    company,
    email,
    phone,
    services,
    message,
}) => {
    const previewText = `Nuevo mensaje de ${fullName}`;

    return (
        <Html>
            <Head />
            <Preview>{previewText}</Preview>
            <Tailwind>
                <Body className="bg-white my-auto mx-auto font-sans">
                    <Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] w-[465px]">
                        <Section className="mt-[32px]">
                            {/* Logo placeholder or simple text */}
                            <Heading className="text-black text-[24px] font-normal text-center p-0 my-[30px] mx-0">
                                <strong>{BRAND.name}</strong> Contacto
                            </Heading>
                        </Section>

                        <Text className="text-black text-[14px] leading-[24px]">
                            Hola equipo,
                        </Text>
                        <Text className="text-black text-[14px] leading-[24px]">
                            Has recibido un nuevo mensaje a través del formulario web de <strong>{BRAND.website.replace('https://', '')}</strong>.
                        </Text>

                        <Hr className="border border-solid border-[#eaeaea] my-[26px] mx-0 w-full" />

                        <Section>
                            <Text className="text-[#666666] text-[12px] uppercase font-bold tracking-wider">
                                Información del Cliente
                            </Text>
                            <Text className="text-black text-[14px] leading-[24px] mt-2">
                                <strong>Nombre:</strong> {fullName}
                            </Text>
                            <Text className="text-black text-[14px] leading-[24px]">
                                <strong>Email:</strong> {email}
                            </Text>
                            <Text className="text-black text-[14px] leading-[24px]">
                                <strong>Empresa:</strong> {company || 'No especificado'}
                            </Text>
                            <Text className="text-black text-[14px] leading-[24px]">
                                <strong>Teléfono:</strong> {phone || 'No especificado'}
                            </Text>
                        </Section>

                        <Section className="mt-4">
                            <Text className="text-[#666666] text-[12px] uppercase font-bold tracking-wider">
                                Intereses
                            </Text>
                            <Text className="text-black text-[14px] leading-[24px] mt-2">
                                {services && services.length > 0 ? services.join(', ') : 'Ninguno seleccionado'}
                            </Text>
                        </Section>

                        <Section className="mt-4">
                            <Text className="text-[#666666] text-[12px] uppercase font-bold tracking-wider">
                                Mensaje
                            </Text>
                            <Text className="text-black text-[14px] leading-[24px] mt-2 bg-gray-50 p-4 rounded text-gray-800">
                                {message}
                            </Text>
                        </Section>

                        <Hr className="border border-solid border-[#eaeaea] my-[26px] mx-0 w-full" />

                        <Text className="text-[#666666] text-[12px] leading-[24px] text-center">
                            Este mensaje fue enviado desde el formulario de contacto de {BRAND.name}.
                        </Text>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    );
};

export default ContactTemplate;
