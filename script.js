const btnDownload = document.getElementById("btnDownload");
const codigoPython = document.getElementById("codigoPython");

btnDownload.addEventListener("click", () => {
  // Pega exatamente o texto do código exibido na tela
  const conteudoScript = codigoPython.innerText;

  // Cria um arquivo em memória (Blob) do tipo Python
  const blob = new Blob([conteudoScript], { type: "text/x-python;charset=utf-8;" });

  // Cria uma URL temporária para download
  const url = URL.createObjectURL(blob);

  // Cria um elemento <a> fantasma para disparar o download
  const link = document.createElement("a");
  link.href = url;
  link.download = "chat_deepseek.py"; // Nome do arquivo salvo

  document.body.appendChild(link);
  link.click();

  // Limpeza de memória
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
});