import React, { useState, useEffect } from 'react';
import { ShoppingCart, Mic, Target, Star, Image as ImageIcon, Moon, Sun, ChevronRight, Smartphone, Brain, Bot, Eye, Zap, Clock, DollarSign } from 'lucide-react';

// ... (rest of the imports and code remain the same)

const App: React.FC = () => {
  // ... (previous code remains the same)

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'dark' : ''} bg-gradient-to-br from-blue-100 via-white to-purple-100 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900 text-gray-900 dark:text-gray-100 transition-colors duration-300`}>
      {/* ... (header and other sections remain the same) */}

      <section id="features" className="mb-16 p-8 bg-gradient-to-br from-purple-100 to-blue-100 dark:from-gray-800 dark:to-blue-900 rounded-3xl shadow-lg">
        <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
          Funciones Revolucionarias
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { icon: Brain, title: "IA Generativa de Productos", description: "Crea descripciones persuasivas y SEO-friendly en segundos" },
            { icon: Bot, title: "Asistente Virtual de Ventas", description: "Optimiza tus campañas con un agente IA 24/7" },
            { icon: Eye, title: "Análisis Visual de Productos", description: "Genera etiquetas y categorías automáticamente con visión artificial" },
            { icon: Zap, title: "Optimización Instantánea", description: "Mejora tus listados y anuncios con un clic" },
            { icon: Clock, title: "Ahorro de Tiempo Masivo", description: "Automatiza tareas repetitivas y enfócate en crecer" },
            { icon: DollarSign, title: "Impulso de Conversiones", description: "Aumenta tus ventas con copy y estrategias optimizadas por IA" },
          ].map((feature, index) => (
            <div key={index} className="flex flex-col items-center p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl shadow-md transition-transform duration-300 hover:scale-105">
              <feature.icon className="h-12 w-12 mb-4 text-blue-600 dark:text-blue-400" />
              <h3 className="text-xl font-semibold mb-2 text-blue-600 dark:text-blue-400">{feature.title}</h3>
              <p className="text-center text-gray-600 dark:text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ... (rest of the component remains the same) */}
    </div>
  );
};

export default App;