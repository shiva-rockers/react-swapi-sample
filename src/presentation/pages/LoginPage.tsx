import React, { useState } from 'react';
import { useAuthStore } from '../../application/stores/authStore';
import { Container, Card, TextInput, PasswordInput, Button, Title, Text, Alert } from '@mantine/core';
import { Navigate, useNavigate } from 'react-router-dom';
import { PATHS } from '../../constants/path';
import { LABELS } from '../../constants/labels';

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { user, login, loading, error } = useAuthStore();
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            await login(username, password);
            navigate(PATHS.RESOURCE_LIST);
        } catch (error) {
            console.log(error);
        }
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            handleLogin();
        }
    };

    if (user) return <Navigate to={PATHS.RESOURCE_LIST} replace />;

    return (
        <Container size={420} my={40}>
            <Title
                align="center"
                style={{
                    fontFamily: 'Verdana, sans-serif',
                    fontWeight: 700,
                }}
            >
                {LABELS.WELCOME}
            </Title>
            <Text color="dimmed" size="sm" align="center" mt="sm">
                {LABELS.LOGIN_PAGE_TITLE}
            </Text>

            {error && (
                <Alert title="Error" color="red" mt="md">
                    {error}
                </Alert>
            )}

            <Card shadow="sm" p="lg" radius="md" withBorder mt="lg">
                <TextInput
                    label={LABELS.USERNAME_TITLE}
                    placeholder={LABELS.USERNAME_PLACEHOLDER}
                    value={username}
                    mt="md"
                    onChange={(e) => setUsername(e.currentTarget.value)}
                    onKeyDown={handleKeyDown}
                    required
                />
                <PasswordInput
                    label={LABELS.PASSWORD_TITLE}
                    placeholder={LABELS.PASSWORD_PLACEHOLDER}
                    value={password}
                    onChange={(e) => setPassword(e.currentTarget.value)}
                    mt="md"
                    onKeyDown={handleKeyDown}
                    required
                />
                <Button fullWidth mt="xl" onClick={handleLogin} loading={loading}>
                    {LABELS.LOGIN}
                </Button>
            </Card>
        </Container>
    );
};

export default LoginPage;
