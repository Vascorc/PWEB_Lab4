document.addEventListener('DOMContentLoaded', function() {
    fetch('/api/clientes')  
      .then(res => res.json())
      .then(data => {
        const div = document.getElementById('clientes');
  
        if (data.length > 0) {
          data.forEach(cliente => {
            div.innerHTML += `
              <div class="cliente">
                <h2>Cliente: ${cliente.nome}</h2>
                <p><strong>ID:</strong> ${cliente.clienteId}</p>
                <p><strong>Endereço:</strong> ${cliente.endereco.rua}, ${cliente.endereco.numero}, ${cliente.endereco.cidade}, ${cliente.endereco.codigoPostal}</p>
                <p><strong>Consumo:</strong> ${cliente.consumo[0].kWhConsumido} kWh</p>
                <p><strong>Custo Total:</strong> €${cliente.consumo[0].custoTotal}</p>
                <p><strong>Data da Leitura:</strong> ${cliente.consumo[0].dataLeitura}</p>
                <p><strong>Tipo de Tarifa:</strong> ${cliente.informacoesAdicionais.tipoTarifa}</p>
                <p><strong>Fornecedor de Energia:</strong> ${cliente.informacoesAdicionais.fornecedorEnergia}</p>
                <p><strong>Contrato Ativo:</strong> ${cliente.informacoesAdicionais.contratoAtivo ? 'Sim' : 'Não'}</p>
                <hr />
              </div>
            `;
          });
        } else {
          div.innerHTML = '<p>Nenhum cliente encontrado.</p>';
        }
      })
      .catch(error => {
        const div = document.getElementById('clientes');
        div.innerHTML = 'Erro ao carregar os dados.';
        console.error(error);
      });
  });
  