export default async function CreateUserInfo(token: string, data: any) {
    const response = await fetch('http://localhost:3003/user', {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    if (!response.ok) throw new Error('Erro ao buscar usuário');

    return await response.json(); 
}
