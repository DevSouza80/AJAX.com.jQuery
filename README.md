# 📚 Estudo Completo: AJAX com jQuery

Este repositório tem como objetivo estudar e praticar o uso de **AJAX com jQuery**, desde o básico até exemplos práticos.

---

## 🚀 O que é AJAX?

AJAX (Asynchronous JavaScript and XML) é uma técnica que permite **atualizar partes de uma página web sem recarregar tudo**.

👉 Ou seja:

* Você pode buscar dados do servidor
* Atualizar o HTML dinamicamente
* Melhorar a experiência do usuário

---

## 📦 O que é jQuery?

jQuery é uma biblioteca JavaScript que facilita:

* Manipulação do DOM
* Eventos
* Animações
* Requisições AJAX

---

## 🔧 Estrutura do Projeto

```
📁 projeto
 ├── index.html
 ├── conteudo.html
 └── js/
     ├── jquery.js
     └── functions.js
```

---

## 🧠 Exemplo Básico (Seu Código)

### 📄 index.html

```html
<!DOCTYPE html>
<html>
<head>
    <title>Iniciando com jQuery</title>
    <link href="css/style.css" rel="stylesheet" />
    <meta charset="utf-8" />
</head>
<body>

<div id="container"></div>

<script src="js/jquery.js"></script>
<script src="js/functions.js"></script>
</body>
</html>
```

---

### 📄 functions.js

```javascript
$(function(){

    $.ajax({
        url: 'conteudo.html'
    })
    .done(function(data){
        $('#container').append(data);
    });

});
```

---

## 🔍 Entendendo o Código

### 1. `$(function(){})`

Executa o código quando a página estiver carregada.

---

### 2. `$.ajax()`

Função principal para fazer requisições AJAX.

```javascript
$.ajax({
    url: 'conteudo.html'
});
```

👉 Aqui estamos buscando um arquivo HTML externo.

---

### 3. `.done()`

Executa quando a requisição dá certo.

```javascript
.done(function(data){
    $('#container').append(data);
});
```

👉 `data` = conteúdo retornado do servidor

👉 `.append()` adiciona o conteúdo dentro da div

---

## ⚙️ Métodos HTTP

Você pode usar diferentes métodos:

```javascript
$.ajax({
    url: 'api.php',
    method: 'GET'
});
```

```javascript
$.ajax({
    url: 'api.php',
    method: 'POST',
    data: {
        nome: 'Pedro',
        idade: 23
    }
});
```

---

## 📥 Atalhos do jQuery para AJAX

### 🔹 GET

```javascript
$.get('arquivo.html', function(data){
    console.log(data);
});
```

### 🔹 POST

```javascript
$.post('api.php', {nome: 'Pedro'}, function(resposta){
    console.log(resposta);
});
```

### 🔹 LOAD (mais simples)

```javascript
$('#container').load('conteudo.html');
```

---

## ⚠️ Tratamento de Erros

```javascript
$.ajax({
    url: 'conteudo.html'
})
.done(function(data){
    console.log('Sucesso');
})
.fail(function(){
    console.log('Erro ao carregar');
});
```


## 🎯 Conclusão

AJAX com jQuery é uma forma simples e poderosa de criar páginas dinâmicas.

Com esse estudo você já consegue:

✔ Fazer requisições
✔ Manipular respostas
✔ Atualizar o HTML sem reload



