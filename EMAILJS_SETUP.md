# Configuração do EmailJS para o Formulário de Contato

Este guia explica como configurar o EmailJS para que o formulário de contato funcione corretamente.

## Passo 1: Criar Conta no EmailJS

1. Acesse [https://www.emailjs.com/](https://www.emailjs.com/)
2. Clique em "Sign Up" para criar uma conta gratuita
3. Confirme seu email

## Passo 2: Adicionar Serviço de Email

1. No dashboard do EmailJS, clique em "Email Services"
2. Clique em "Add New Service"
3. Escolha **Gmail** (recomendado) ou outro provedor
4. Conecte sua conta Gmail
   - **Email de destino**: joaogabrielfariassantos2@gmail.com e victor.marques@livess.com.br
5. Anote o **Service ID** (exemplo: `service_xxxxxxx`)

## Passo 3: Criar Template de Email

1. Vá para "Email Templates"
2. Clique em "Create New Template"
3. Configure o template com as seguintes variáveis:

**Subject (Assunto):**
```
Nova mensagem de {{from_name}} - Site Leandro Boni
```

**Content (Conteúdo):**
```html
<p><strong>Nome:</strong> {{from_name}}</p>
<p><strong>Email:</strong> {{from_email}}</p>
<p><strong>Mensagem:</strong></p>
<p>{{message}}</p>

<hr>
<p><em>Mensagem enviada através do formulário de contato do site.</em></p>
```

**To Email (Para):**
```
joaogabrielfariassantos2@gmail.com, victor.marques@livess.com.br
```

4. Salve o template e anote o **Template ID** (exemplo: `template_xxxxxxx`)

## Passo 4: Obter Public Key

1. Vá para "Account" → "General"
2. Encontre e copie sua **Public Key** (exemplo: `xxxxxxxxxxxxxxx`)

## Passo 5: Configurar no Código

Abra o arquivo `src/components/ContactForm.tsx` e substitua os valores:

```typescript
const serviceId = "service_xxxxxxx"; // Seu Service ID
const templateId = "template_xxxxxxx"; // Seu Template ID
const publicKey = "xxxxxxxxxxxxxxx"; // Sua Public Key
```

## Passo 6: Testar

1. Acesse seu site
2. Preencha o formulário de contato
3. Clique em "Enviar Mensagem"
4. Verifique os emails: joaogabrielfariassantos2@gmail.com e victor.marques@livess.com.br

## Plano Gratuito

O EmailJS oferece um plano gratuito com:
- ✅ 200 emails/mês
- ✅ Templates ilimitados
- ✅ Múltiplos serviços de email

Perfeito para sites de contato!

## Solução de Problemas

### Email não chegou?
- Verifique a pasta de spam
- Confirme que o Service ID, Template ID e Public Key estão corretos
- Verifique se os emails de destino estão corretos no template

### Erro "Failed to send email"?
- Verifique sua conexão com a internet
- Confirme que sua conta EmailJS está ativa
- Verifique o console do navegador para mais detalhes

## Suporte

Para mais informações, consulte a documentação oficial: [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)
