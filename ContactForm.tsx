import { useState } from "react";
import emailjs from '@emailjs/browser';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, User, MessageSquare } from "lucide-react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.name.trim() || !formData.email.trim()) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha nome e e-mail.",
        variant: "destructive",
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "E-mail inválido",
        description: "Por favor, insira um e-mail válido.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // EmailJS configuration
      // Configure your EmailJS account at https://www.emailjs.com/
      // 1. Create an account
      // 2. Add an email service (Gmail recommended)
      // 3. Create an email template with variables: from_name, from_email, message
      // 4. Get your Service ID, Template ID, and Public Key
      // 5. Replace the values below
      
      const serviceId = "YOUR_SERVICE_ID"; // e.g., "service_xxxxxxx"
      const templateId = "YOUR_TEMPLATE_ID"; // e.g., "template_xxxxxxx"
      const publicKey = "YOUR_PUBLIC_KEY"; // e.g., "xxxxxxxxxxxxxxx"

      // Template params must match your EmailJS template variables
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: "joaogabrielfariassantos2@gmail.com, victor.marques@livess.com.br"
      };

      // Check if EmailJS is configured
      if (serviceId === "YOUR_SERVICE_ID" || templateId === "YOUR_TEMPLATE_ID" || publicKey === "YOUR_PUBLIC_KEY") {
        // Demo mode - simulate successful submission
        await new Promise(resolve => setTimeout(resolve, 1500));
        console.log("Demo mode: Form data:", formData);
        console.log("Configure EmailJS to enable real email sending.");
      } else {
        // Real EmailJS submission
        await emailjs.send(serviceId, templateId, templateParams, publicKey);
      }

      toast({
        title: "Mensagem enviada com sucesso!",
        description: "Em breve entraremos em contato.",
      });

      // Reset form
      setFormData({ name: "", email: "", message: "" });

    } catch (error) {
      console.error("Error sending email:", error);
      toast({
        title: "Ops! Algo deu errado.",
        description: "Tente novamente mais tarde.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-card relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 pointer-events-none" />
      
      <div className="container px-6 relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Fale com o Leandro
            </h2>
            <p className="text-xl text-muted-foreground">
              Envie sua mensagem e descubra como podemos transformar sua vida juntos.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 bg-background border border-border rounded-2xl p-8 shadow-xl">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-foreground flex items-center gap-2">
                <User className="w-4 h-4 text-primary" />
                Nome Completo *
              </label>
              <Input
                id="name"
                type="text"
                placeholder="Digite seu nome completo"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="h-12 text-base bg-input border-border focus:border-primary transition-colors"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-foreground flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                E-mail *
              </label>
              <Input
                id="email"
                type="email"
                placeholder="seu@email.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="h-12 text-base bg-input border-border focus:border-primary transition-colors"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-foreground flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-primary" />
                Mensagem
              </label>
              <Textarea
                id="message"
                placeholder="Conte-nos como podemos ajudá-lo..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={6}
                className="text-base bg-input border-border focus:border-primary transition-colors resize-none"
              />
            </div>

            <Button
              type="submit"
              size="lg"
              variant="hero"
              disabled={isSubmitting}
              className="w-full text-lg h-14"
            >
              {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
            </Button>

            <p className="text-sm text-muted-foreground text-center">
              * Campos obrigatórios
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
