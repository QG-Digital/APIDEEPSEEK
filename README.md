# 🤖 DeepSeek Unofficial API - Script & Web Downloader

Interface web minimalista para visualização e download de um script Python que consome a **API não oficial da DeepSeek** via biblioteca `opendeep`, permitindo interagir com o modelo via terminal utilizando seu token de sessão web.

---

## ⚠️ Aviso Legal (Disclaimer)

> **Importante:** Este projeto utiliza métodos de API não oficial (engenharia reversa / sessão web) e foi criado **estritamente para fins educacionais e testes**. O uso de tokens de sessão web pode violar os Termos de Serviço da plataforma. Use por sua própria conta e risco.

---

## 🚀 Funcionalidades

- **Web Downloader Nativo:** Página estática (HTML/CSS/JS) com download direto do script `.py` em 1 clique (gerado no próprio navegador via `Blob`).
- **Limpeza Automática de Raciocínio:** O script Python remove automaticamente as tags internas `<think>...</think>` geradas pelo modelo, exibindo apenas a resposta final limpa.
- **Chat Interativo no Terminal:** Loop contínuo de mensagens até o usuário digitar `sair`, `quit` ou `exit`.

---

## 📁 Estrutura do Repositório

```text
├── index.html       # Visualizador do código e botão de download
├── style.css        # Interface dark minimalista
├── script.js        # Lógica de download dinâmico (.py)
└── README.md        # Documentação
