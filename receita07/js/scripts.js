 const itensHtml = `
         <table border="1" class="tabela">
            <tr>
               <th class="chave">${nome}</th>
               <th class="chave">${alcool}</th>
               <th class="chave">${estilo}</th>
               <th class="chave">${amargor}</th>
            </tr>

            ${cs.map(item => `
               <tr>
                  <td>${item[propNome]}</td>
                  <td>${item[propAlcool]}</td>
                  <td>${item[propEstilo]}</td>
                  <td>${item[propAmargor]}</td>

               </tr>
            `).join('')}
         </table>
`;