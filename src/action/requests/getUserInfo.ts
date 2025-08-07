export default async function GetUserInfo(token: string) {
  // Simulando verificação do token (poderia ser usada para autenticação)
  if (!token) {
    throw new Error("Token inválido");
  }

  // Simulando tempo de resposta de uma API
  await new Promise(resolve => setTimeout(resolve, 500));

  // Dados fictícios do usuário com carrinhos
  return {
    userId: "12345",
    name: "João Silva",
    email: "joao.silva@example.com",
    carts: [
      {
        cartId: "carrinho_001",
        createdAt: "2025-08-01T14:23:00Z",
        items: [
          {
            productId: "prod_001",
            name: "Tênis Esportivo",
            quantity: 2,
            price: 199.99
          },
          {
            productId: "prod_002",
            name: "Camiseta Dry Fit",
            quantity: 1,
            price: 89.90
          }
        ],
        total: 489.88
      },
      {
        cartId: "carrinho_002",
        createdAt: "2025-07-15T10:10:00Z",
        items: [
          {
            productId: "prod_003",
            name: "Mochila Reforçada",
            quantity: 1,
            price: 159.90
          }
        ],
        total: 159.90
      }
    ]
  };
}
