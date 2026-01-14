# 🛒 Prime Store — Loja Virtual em React

Projeto de uma **loja virtual moderna** desenvolvida com **React + Vite**, utilizando **PrimeReact**, **PrimeFlex** e **Context API**, com foco em **boas práticas**, **componentização**, **UX moderna** e **consumo de API externa**.

Este projeto foi construído com o objetivo de **aprendizado prático**, simulando um cenário real de aplicação frontend.

---

## 🎯 Objetivo do Projeto

* Consumir dados de uma API externa
* Exibir produtos em cards estilizados
* Criar navegação entre páginas
* Implementar carrinho global com Context API
* Trabalhar layout responsivo
* Aplicar design moderno (2026)
* Utilizar boas práticas de organização de código

---

## 🧱 Tecnologias Utilizadas

### ⚛️ React

* Biblioteca principal para criação da interface
* Uso de **componentes funcionais**
* Hooks utilizados:

  * `useState`
  * `useEffect`
  * `useContext`
  * `useRef`

---

### ⚡ Vite

* Ferramenta de build moderna e rápida
* Substitui o Create React App
* Melhor performance no desenvolvimento

---

### 🧭 React Router DOM

* Navegação entre páginas
* Rotas utilizadas:

  * `/` → Home
  * `/products/:id` → Detalhes do produto
* Uso de:

  * `BrowserRouter`
  * `Routes`
  * `Route`
  * `useNavigate`
  * Parâmetros de rota (`useParams`)

---

### 🎨 PrimeReact

Biblioteca de componentes UI utilizada para garantir:

* Visual moderno
* Consistência de design
* Produtividade

Componentes utilizados:

* `Card`
* `Button`
* `Badge`
* `Toast`
* `Skeleton`
* `InputText`
* `InputNumber`

Tema utilizado:

* **Lara Light Teal** (moderno, clean e atual)

---

### 🧩 PrimeIcons

* Biblioteca de ícones integrada ao PrimeReact
* Utilizada para:

  * Botões
  * Navegação
  * Feedback visual

Exemplo:

```html
<i className="pi pi-shopping-cart"></i>
```

---

### 📐 PrimeFlex

Framework utilitário para layout e espaçamento.

Usado para:

* Grid responsivo
* Alinhamento de elementos
* Tamanhos de texto
* Opacidade
* Espaçamento

Exemplos:

```html
grid
col-12 md:col-4
text-lg
opacity-70
flex align-items-center
```

---

### 🌐 Axios

* Biblioteca para requisições HTTP
* Utilizada para consumir a API externa

---

### 🧪 Fake Store API

API pública usada para simular produtos reais.

Endpoint principal:

```
https://fakestoreapi.com/products
```

Utilizada para:

* Buscar produtos
* Simular dados de uma loja real

---

## 🗂️ Estrutura de Pastas

```
src/
 ├─ components/
 │   ├─ ProductCard.jsx
 │
 ├─ pages/
 │   ├─ Home.jsx
 │   ├─ ProductDetails.jsx
 │   ├─ Products.jsx
 │   ├─ Addproducts.jsx
 │   ├─ NotFound.jsx
 │
 ├─ services/
 │   └─ api.js
 │
 ├─ App.jsx
 ├─ main.jsx
 ├─ index.css
```


## ✨ Funcionalidades Implementadas

✔ Listagem de produtos
✔ Cards responsivos
✔ Feedback visual com Toast
✔ Layout moderno
✔ Animações suaves
✔ Carrinho global
✔ Toast de feedback
✔ Skeleton Loader
✔ Página de detalhes
✔ Navegação entre páginas

---

## 🎨 Design & UX

* Layout responsivo (mobile, tablet, desktop)
* Hierarquia visual bem definida
* Cards com mesma altura
* Animações suaves no hover
* Opacidade para textos secundários
* UX inspirada em e-commerces modernos

---

## 🚀 Melhorias Futuras (Roadmap)

* Persistência do carrinho com `localStorage`
* Página dedicada de carrinho
* Autenticação de usuário
* Filtro por categoria
* Busca de produtos
* Paginação
* Integração com backend real

---

## 🧑‍💻 Nível do Projeto

Este projeto foi desenvolvido com foco em:

* **Dev Júnior**
* Boas práticas reais
* Código limpo
* Estrutura escalável
* Base sólida para evolução

---

## 📄 Licença

Projeto criado apenas para fins educacionais.

---

## Autor

Desenvolvido por **Nicollas Alessandro**
🚀 Estudante de Frontend / React



