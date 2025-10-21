<h1 align="center">🌤️ Projeto Previsão do Tempo</h1>

<p align="center">
  <img src="https://img.shields.io/badge/status-em%20desenvolvimento-yellow" alt="Status">
  <img src="https://img.shields.io/badge/AngularJS-1.x-red" alt="AngularJS">
  <img src="https://img.shields.io/badge/Bootstrap-3-blue" alt="Bootstrap">
</p>

---

## 📝 Descrição

O **Projeto Previsão** é uma aplicação web desenvolvida em **AngularJS** que exibe informações de **previsão do tempo**, incluindo:
- Temperaturas **máximas e mínimas** do dia;
- Condições de **praia e clima**;
- Visualização de **previsões semanais**.

O objetivo principal é oferecer uma interface simples e intuitiva para visualização das condições meteorológicas em diferentes períodos.

---

## 🚀 Tecnologias utilizadas

O projeto foi construído utilizando as seguintes tecnologias:

- **HTML5** e **CSS3**
- **JavaScript (ES5)**
- **AngularJS 1.x**
- **Bootstrap 3**
- **jQuery**

---

## 📁 Estrutura do projeto

```
projetoPrevisao-master/
│
├── index.html
│
├── app/
│   ├── app.module.js
│   ├── components/
│   │   ├── beachDay/
│   │   │   ├── beachDay-directive.js
│   │   │   └── beachDay.html
│   │   ├── maxMin/
│   │   │   ├── maxMin-directive.js
│   │   │   └── maxMin.html
│   │   ├── temperaturasSemana/
│   │   │   ├── temperaturasSemana-directive.js
│   │   │   └── temperaturasSemana.html
│   │   └── view/
│   │       ├── view-controller.js
│   │       ├── view-directive.js
│   │       ├── view-service.js
│   │       └── view.html
│   └── vendor/
│       ├── angular/
│       ├── bootstrap/
│       ├── jquery/
│       └── states/
│
└── README.md
```

---

## 🧩 Componentes principais

| Componente | Descrição |
|-------------|------------|
| **beachDay** | Exibe se o dia está adequado para praia, com base nas condições climáticas. |
| **maxMin** | Mostra as temperaturas máxima e mínima do dia. |
| **temperaturasSemana** | Apresenta a previsão de temperatura para os próximos dias. |
| **view** | Controla a exibição principal e integra os demais componentes. |

---

## ▶️ Como executar o projeto

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/projetoPrevisao.git
   ```

2. Acesse o diretório do projeto:
   ```bash
   cd projetoPrevisao-master
   ```

3. Abra o arquivo **index.html** diretamente no navegador, ou use um servidor local:
   ```bash
   npx http-server
   ```

4. A aplicação estará disponível em:
   ```
   http://localhost:8080
   ```

---

## 🎨 Layout

O layout utiliza o **Bootstrap 3**, garantindo responsividade e uma interface limpa.  
Cada componente AngularJS possui um **template HTML próprio**, facilitando manutenção e personalização.

---

## 📌 Próximos passos (opcional)

- Integração com API real de previsão do tempo (ex: OpenWeatherMap);
- Adicionar gráficos de variação de temperatura;
- Criar modo escuro (dark mode).

---

## 👨‍💻 Autor

**Daniel Galvan**  
📍 Desenvolvedor Full Stack  
🔗 [LinkedIn](https://www.linkedin.com/in/daniel-galvan1989/)  
🐙 [GitHub](https://github.com/danielgalvan)

---

## 🧾 Licença

Este projeto está sob a licença **MIT**.  
Sinta-se livre para utilizar, modificar e distribuir.

---
