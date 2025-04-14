const express = require('express');
const app = express();
const path = require('path');

const PORT = 3000;

app.use(express.static('public'));

const clientes = [
  {
    clienteId: "12345",
    nome: "João Silva",
    endereco: {
      rua: "Rua Exemplo",
      numero: "42",
      cidade: "Lisboa",
      codigoPostal: "1234-567"
    },
    consumo: [
      {
        mes: "Janeiro",
        ano: 2023,
        kWhConsumido: 250,
        custoTotal: 35.50,
        dataLeitura: "2023-01-31"
      }
    ],
    informacoesAdicionais: {
      tipoTarifa: "Residencial",
      fornecedorEnergia: "Empresa XYZ",
      contratoAtivo: true
    }
  },
  {
    clienteId: "67890",
    nome: "Maria Oliveira",
    endereco: {
      rua: "Rua Secundária",
      numero: "99",
      cidade: "Porto",
      codigoPostal: "4000-000"
    },
    consumo: [
      {
        mes: "Fevereiro",
        ano: 2023,
        kWhConsumido: 310,
        custoTotal: 45.00,
        dataLeitura: "2023-02-28"
      }
    ],
    informacoesAdicionais: {
      tipoTarifa: "Residencial",
      fornecedorEnergia: "Energia Plus",
      contratoAtivo: false
    }
  }
];

// Endpoint para consultar todos os clientes
app.get('/api/clientes', (req, res) => {
  res.json(clientes);
});

app.listen(PORT, () => {
  console.log(`Servidor a correr em http://localhost:${PORT}`);
});
