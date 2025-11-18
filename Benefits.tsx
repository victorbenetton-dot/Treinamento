import { Target, TrendingUp, Users, Zap } from "lucide-react";

const benefits = [
  {
    icon: Target,
    title: "Foco em Resultados",
    description: "Metodologia comprovada para alcançar suas metas de forma consistente e sustentável."
  },
  {
    icon: TrendingUp,
    title: "Crescimento Acelerado",
    description: "Estratégias práticas que levam você ao próximo nível pessoal e profissional."
  },
  {
    icon: Users,
    title: "Mentoria Personalizada",
    description: "Acompanhamento individual focado nas suas necessidades e desafios específicos."
  },
  {
    icon: Zap,
    title: "Transformação Real",
    description: "Mudanças profundas que impactam todas as áreas da sua vida de forma duradoura."
  }
];

const Benefits = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Por Que Escolher o Método Leandro Boni?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Uma abordagem única que combina estratégia, execução e mindset para resultados extraordinários.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="group relative bg-card border border-border rounded-xl p-8 hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 animate-fadeIn"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-6">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-8 h-8 text-foreground" />
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-foreground mb-3">
                {benefit.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
